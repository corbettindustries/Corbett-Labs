import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { homepageFaqs } from '../lib/content';

const HomepageFaqSection = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-heading">
      <div className="container-max">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
            FAQ
          </p>
          <h2 id="faq-heading" className="mb-6 text-4xl font-bold text-deep-navy md:text-5xl">
            Nicotine pouch manufacturing questions answered clearly
          </h2>
          <p className="text-xl text-cool-grey">
            These answers are written to help procurement teams, founders, and distributors quickly
            understand how OEM nicotine pouch manufacturing, private label production, packaging,
            export support, and product development typically work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.9fr)] lg:items-start">
          <div className="glass-card p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {homepageFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-lg text-deep-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base leading-7 text-cool-grey">
                    <p className="font-medium text-deep-navy">{faq.answerIntro}</p>
                    {faq.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {faq.steps ? (
                      <ol className="list-decimal space-y-2 pl-6">
                        {faq.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    ) : null}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <aside className="glass-card p-8">
            <h3 className="mb-4 text-2xl font-bold text-deep-navy">
              Planning an OEM or private label nicotine pouch project?
            </h3>
            <p className="mb-6 text-cool-grey">
              Corbett Labs supports nicotine pouch manufacturing projects across formulation,
              packaging, quality planning, and export-oriented production.
            </p>

            <div className="mb-8 space-y-3 text-sm text-cool-grey">
              <p>
                Explore <Link to="/guides/how-nicotine-pouches-are-manufactured" className="font-semibold text-accent-blue hover:text-deep-navy">manufacturing fundamentals</Link>.
              </p>
              <p>
                Compare <Link to="/guides/oem-vs-private-label-vs-white-label-manufacturing" className="font-semibold text-accent-blue hover:text-deep-navy">OEM, private label, and white label models</Link>.
              </p>
              <p>
                Review <Link to="/guides/global-regulations-for-nicotine-pouches" className="font-semibold text-accent-blue hover:text-deep-navy">global regulatory considerations</Link>.
              </p>
            </div>

            <button type="button" onClick={onContactClick} className="btn-primary w-full">
              Request a consultation
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomepageFaqSection;