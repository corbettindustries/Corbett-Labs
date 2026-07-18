import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredGuides } from '../lib/content';

const GuidesPreviewSection = () => {
  return (
    <section id="guides" className="section-padding bg-base-grey" aria-labelledby="guides-heading">
      <div className="container-max">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Industry Insights
            </p>
            <h2 id="guides-heading" className="mb-6 text-4xl font-bold text-deep-navy md:text-5xl">
              Educational nicotine pouch guides built for buyers, founders, and category teams
            </h2>
            <p className="text-xl text-cool-grey">
              Our knowledge center explains nicotine pouch manufacturing, private label strategy,
              packaging, compliance, and product development in a format that stays useful to both
              search engines and decision-makers.
            </p>
          </div>

          <Link to="/guides" className="btn-secondary inline-flex items-center gap-2 self-start">
            Explore all guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <article key={guide.slug} className="glass-card flex h-full flex-col p-8">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-accent-blue">
                {guide.heroKicker}
              </p>
              <h3 className="mb-4 text-2xl font-bold text-deep-navy">{guide.title}</h3>
              <p className="mb-4 text-sm text-cool-grey">{guide.readingTime}</p>
              <p className="mb-6 text-cool-grey">{guide.quickAnswer}</p>

              <ul className="mb-8 space-y-3 text-sm text-cool-grey">
                {guide.keyTakeaways.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-blue" aria-hidden="true" />
                    <span>{item}</span>
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
  );
};

export default GuidesPreviewSection;