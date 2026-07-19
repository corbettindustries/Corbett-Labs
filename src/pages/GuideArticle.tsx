import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Seo from '../components/Seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { canonicalSiteUrl, getGuideBySlug, getRelatedGuides } from '../lib/content';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, webpageSchema, websiteSchema } from '../lib/schema';
import NotFound from './NotFound';

const GuideArticle = () => {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const schema = useMemo(() => {
    if (!guide) {
      return [];
    }

    const origin = canonicalSiteUrl;
    return [
      organizationSchema(origin),
      websiteSchema(origin),
      webpageSchema({
        origin,
        path: `/guides/${guide.slug}`,
        title: guide.seoTitle,
        description: guide.metaDescription,
        imagePath: '/lovable-uploads/nicotine open pouch.webp'
      }),
      breadcrumbSchema(origin, [
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: guide.title, path: `/guides/${guide.slug}` }
      ]),
      articleSchema(origin, guide),
      faqSchema(origin, `/guides/${guide.slug}`, guide.faq)
    ];
  }, [guide]);

  if (!guide) {
    return <NotFound />;
  }

  const relatedGuides = getRelatedGuides(guide);

  return (
    <>
      <Seo
        title={guide.seoTitle}
        description={guide.metaDescription}
        canonicalPath={`/guides/${guide.slug}`}
        type="article"
        schema={schema}
      />
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />
      <main className="min-h-screen px-6 pb-24 pt-32 md:px-12 lg:px-20">
        <div className="container-max">
          <nav className="mb-10 text-sm text-cool-grey" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-deep-navy">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/guides" className="hover:text-deep-navy">Guides</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-deep-navy">{guide.title}</li>
            </ol>
          </nav>

          <header className="mb-16 max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
              {guide.heroKicker}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-deep-navy md:text-6xl">{guide.title}</h1>
            <div className="mb-6 flex flex-wrap gap-4 text-sm text-cool-grey">
              <span>{guide.readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>Industry insights by Corbett Industries</span>
            </div>
            <p className="mb-6 text-xl leading-8 text-deep-navy">{guide.quickAnswer}</p>
            <p className="max-w-4xl text-base leading-7 text-cool-grey">{guide.introduction}</p>
          </header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(240px,0.75fr)_minmax(0,1.65fr)] lg:items-start">
            <aside className="glass-card top-28 h-fit p-6 lg:sticky">
              <h2 className="mb-5 text-lg font-bold text-deep-navy">Table of Contents</h2>
              <nav aria-label="Table of contents">
                <ol className="space-y-3 text-sm text-cool-grey">
                  {guide.sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="transition-colors hover:text-deep-navy">
                        {index + 1}. {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#guide-faq" className="transition-colors hover:text-deep-navy">FAQ</a>
                  </li>
                </ol>
              </nav>
            </aside>

            <article className="space-y-12" aria-labelledby="guide-content-heading">
              <h2 id="guide-content-heading" className="sr-only">Guide content</h2>

              <section className="glass-card p-8">
                <h2 className="mb-5 text-2xl font-bold text-deep-navy">Key points</h2>
                <ul className="space-y-4 text-cool-grey">
                  {guide.keyTakeaways.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-blue" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="glass-card scroll-mt-28 p-8">
                  <h2 className="mb-4 text-3xl font-bold text-deep-navy">{section.title}</h2>
                  <p className="mb-5 text-lg leading-8 text-deep-navy">{section.summary}</p>
                  <div className="space-y-5 text-base leading-7 text-cool-grey">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-6 space-y-3 text-cool-grey">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-blue" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.steps ? (
                    <ol className="mt-6 list-decimal space-y-3 pl-6 text-cool-grey">
                      {section.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  ) : null}
                </section>
              ))}

              <section id="guide-faq" className="glass-card scroll-mt-28 p-8" aria-labelledby="guide-faq-heading">
                <h2 id="guide-faq-heading" className="mb-6 text-3xl font-bold text-deep-navy">FAQ</h2>
                <Accordion type="single" collapsible>
                  {guide.faq.map((item, index) => (
                    <AccordionItem key={item.question} value={`guide-faq-${index}`}>
                      <AccordionTrigger className="text-left text-lg text-deep-navy hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 text-base leading-7 text-cool-grey">
                        <p className="font-medium text-deep-navy">{item.answerIntro}</p>
                        {item.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              <section className="glass-card p-8" aria-labelledby="guide-cta-heading">
                <h2 id="guide-cta-heading" className="mb-4 text-3xl font-bold text-deep-navy">
                  Looking for an experienced CDMO modern oral pouch manufacturer?
                </h2>
                <p className="mb-6 max-w-3xl text-cool-grey">
                  Corbett Industries helps brands develop premium nicotine pouch products through custom
                  formulation, private label manufacturing, premium packaging, and international
                  production support.
                </p>
                <button type="button" onClick={() => setIsContactModalOpen(true)} className="btn-primary">
                  Request a consultation
                </button>
              </section>
            </article>
          </div>

          <section className="mt-20" aria-labelledby="related-guides-heading">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 id="related-guides-heading" className="text-3xl font-bold text-deep-navy">Related guides</h2>
                <p className="mt-3 text-cool-grey">
                  Continue exploring manufacturing, packaging, regulatory, and launch-planning topics.
                </p>
              </div>
              <Link to="/guides" className="hidden font-semibold text-accent-blue transition-colors hover:text-deep-navy lg:inline-flex lg:items-center lg:gap-2">
                View all guides
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {relatedGuides.map((relatedGuide) => (
                <article key={relatedGuide.slug} className="glass-card flex h-full flex-col p-8">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent-blue">
                    {relatedGuide.heroKicker}
                  </p>
                  <h3 className="mb-4 text-2xl font-bold text-deep-navy">{relatedGuide.title}</h3>
                  <p className="mb-6 text-cool-grey">{relatedGuide.quickAnswer}</p>
                  <Link to={`/guides/${relatedGuide.slug}`} className="mt-auto inline-flex items-center gap-2 font-semibold text-accent-blue transition-colors hover:text-deep-navy">
                    Read guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default GuideArticle;