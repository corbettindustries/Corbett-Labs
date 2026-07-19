const HomepageIntroSection = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section className="section-padding" aria-labelledby="homepage-intro-heading">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.8fr)] lg:items-start">
          <article className="glass-card p-8 md:p-10">
            <h2 id="homepage-intro-heading" className="mb-6 text-3xl font-bold text-deep-navy md:text-4xl">
              Contract development and manufacturing support for modern oral pouch brands
            </h2>

            <div className="space-y-5 text-base leading-7 text-cool-grey">
              <p>
                Corbett Industries works as a CDMO partner for companies that want to build and scale oral pouch products with a structured manufacturing model. Our teams support OEM nicotine pouch manufacturing and private label programs that need practical execution from product brief to market-ready output. Instead of treating every project as a generic filling task, we align formulation planning, pouch architecture, packaging design inputs, and quality governance with the commercial goals of each client.
              </p>
              <p>
                For procurement managers and founders, the main value of a CDMO model is coordinated delivery. Product teams can focus on market entry, distribution, and brand strategy while manufacturing workflows are managed through documented controls, batch traceability, and clear release criteria. We support projects across nicotine, caffeine, and nootropic pouch categories, including custom formulation pathways, packaging development, and export-oriented manufacturing requirements where destination-market readiness matters.
              </p>
              <p>
                Our approach prioritizes repeatability and communication. That means transparent scope definition, realistic timeline planning, and production systems designed to hold consistency as projects move from sample evaluation to commercial output. If you are evaluating a manufacturing partner, the next step is a technical consultation where we review your target market, product requirements, and scaling goals, then map the right OEM or private label pathway for your launch.
              </p>
            </div>
          </article>

          <aside className="glass-card p-8" aria-label="Consultation call to action">
            <h3 className="mb-4 text-2xl font-bold text-deep-navy">Ready to discuss your product brief?</h3>
            <p className="mb-6 text-cool-grey">
              Share your category, target market, packaging priorities, and expected production model.
              Our team will outline the most suitable development and manufacturing path.
            </p>
            <button type="button" onClick={onContactClick} className="btn-primary w-full">
              Request a consultation
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomepageIntroSection;