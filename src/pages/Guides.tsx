import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Seo from '../components/Seo';
import { guides } from '../lib/content';
import { breadcrumbSchema, organizationSchema, webpageSchema, websiteSchema } from '../lib/schema';

const Guides = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const schema = useMemo(() => {
    const origin = window.location.origin;
    return [
      organizationSchema(origin),
      websiteSchema(origin),
      webpageSchema({
        origin,
        path: '/guides',
        title: 'Nicotine Pouch Guides and Industry Insights | Corbett Labs',
        description: 'Educational guides covering nicotine pouch manufacturing, private label strategy, formulation, packaging, and quality planning.',
        imagePath: '/lovable-uploads/nicotine open pouch.webp'
      }),
      breadcrumbSchema(origin, [
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' }
      ])
    ];
  }, []);

  return (
    <>
      <Seo
        title="Nicotine Pouch Guides and Industry Insights | Corbett Labs"
        description="Educational nicotine pouch guides covering manufacturing, formulation, packaging, private label strategy, and regulatory fundamentals."
        canonicalPath="/guides"
        schema={schema}
      />
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />
      <main className="min-h-screen">
        <header className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-20">
          <div className="absolute inset-0 blue-glow opacity-70" aria-hidden="true" />
          <div className="container-max relative z-10">
            <nav className="mb-8 text-sm text-cool-grey" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-deep-navy">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-deep-navy">Guides</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Industry Insights
              </p>
              <h1 className="mb-6 text-4xl font-bold text-deep-navy md:text-6xl">
                Nicotine pouch guides for manufacturing, private label, quality, and market planning
              </h1>
              <p className="mb-6 text-xl text-cool-grey">
                This resource center explains nicotine pouch manufacturing, OEM development,
                packaging, export planning, and category fundamentals in a format designed for both
                technical buyers and commercial teams.
              </p>
              <p className="max-w-3xl text-base leading-7 text-cool-grey">
                Each guide opens with a direct answer, then expands into practical detail on product
                development, contract manufacturing, quality systems, regulatory context, and launch
                planning. The goal is to make Corbett Labs a useful reference point before a project
                ever reaches a quotation stage.
              </p>
            </div>
          </div>
        </header>

        <section className="px-6 pb-24 md:px-12 lg:px-20" aria-labelledby="all-guides-heading">
          <div className="container-max">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 id="all-guides-heading" className="text-3xl font-bold text-deep-navy md:text-4xl">
                  Knowledge center
                </h2>
                <p className="mt-3 max-w-3xl text-cool-grey">
                  Explore comprehensive guides on nicotine pouch manufacturing, private label nicotine
                  pouches, white label strategy, custom formulations, packaging, and global market
                  considerations.
                </p>
              </div>
              <button type="button" onClick={() => setIsContactModalOpen(true)} className="btn-secondary self-start">
                Request a quote
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {guides.map((guide) => (
                <article key={guide.slug} className="glass-card flex h-full flex-col p-8">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent-blue">
                    {guide.heroKicker}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-deep-navy">{guide.title}</h3>
                  <p className="mb-4 text-sm text-cool-grey">{guide.readingTime}</p>
                  <p className="mb-6 text-cool-grey">{guide.quickAnswer}</p>
                  <ul className="mb-8 space-y-3 text-sm text-cool-grey">
                    {guide.keyTakeaways.slice(0, 3).map((takeaway) => (
                      <li key={takeaway} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-blue" aria-hidden="true" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/guides/${guide.slug}`} className="mt-auto inline-flex items-center gap-2 font-semibold text-accent-blue transition-colors hover:text-deep-navy">
                    Read guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default Guides;