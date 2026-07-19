import React from 'react';
import { Link } from 'react-router-dom';
import { useSimpleAnimations } from '../hooks/useSimpleAnimations';
const capabilities = [{
  title: 'Custom Formulation',
  description: 'Proprietary nicotine blends, flavor profiles, and strength variations tailored to your market requirements.',
  features: ['Nicotine & Nicotine salts', 'All flavor profiles', 'Customised strength', 'Sensory optimization'],
  icon: '🧪'
}, {
  title: 'Private Labeling',
  description: 'Complete branding solutions from package design to regulatory documentation.',
  features: ['Custom packaging design', 'Brand compliance', 'Regulatory filing support', 'Market-specific labeling'],
  icon: '🏷️'
}, {
  title: 'Quality Assurance',
  description: 'Rigorous testing protocols ensuring product safety, consistency, and regulatory compliance.',
  features: ['Batch testing', 'Microbial analysis', 'Heavy metals screening', 'Stability studies'],
  icon: '✅'
}, {
  title: 'Scalable Production',
  description: 'Flexible manufacturing capacity from prototype runs to high-volume commercial production.',
  features: ['Flexible low MOQ', '2M monthly capacity', '24/7 production', 'JIT delivery'],
  icon: '📈'
}, {
  title: 'Regulatory Support',
  description: 'Comprehensive regulatory assistance for global market entry and compliance maintenance.',
  features: ['TPD compliance', 'FDA registration', 'Health Canada', 'PMTA support'],
  icon: '📋'
}];
const EnhancedOEMCapabilities = () => {
  const {
    containerRef
  } = useSimpleAnimations();
  return <section ref={containerRef} id="capabilities" className="section-padding" data-scroll-section>
      <div className="container-max">
        <div className="text-center mb-16" data-animate="slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            OEM, Private Label, and Contract Manufacturing Capabilities
          </h2>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto">
            Corbett Industries supports nicotine pouch manufacturing from formulation planning and private
            label development through packaging coordination, quality systems, and export-ready
            production support.
          </p>
          <p className="mt-4 text-sm text-cool-grey max-w-3xl mx-auto">
            Explore <Link to="/guides/oem-vs-private-label-vs-white-label-manufacturing" className="font-semibold text-accent-blue hover:text-deep-navy">OEM vs private label vs white label manufacturing</Link>,
            <span> </span>
            <Link to="/guides/how-nicotine-pouches-are-manufactured" className="font-semibold text-accent-blue hover:text-deep-navy">how nicotine pouches are manufactured</Link>, and
            <span> </span>
            <Link to="/guides/how-to-launch-your-own-nicotine-pouch-brand" className="font-semibold text-accent-blue hover:text-deep-navy">how to launch a nicotine pouch brand</Link>.
          </p>
        </div>

        {/* Simplified Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-blue to-sky-glow hidden lg:block opacity-30" />
          
          <div className="flex flex-col gap-y-16">
            {capabilities.map((capability, index) => <div key={capability.title} className={`relative flex ${index === 0 || index === 1 ? 'lg:flex-row justify-between items-center' : ''} ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} flex-col gap-y-8 lg:gap-x-8`} data-animate={index % 2 === 0 ? 'slide-right' : 'slide-left'}>
                {/* Blue Circle Icon - perfectly centered vertically with card */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {capability.icon}
                  </div>
                </div>
                <div className="lg:hidden w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-2xl mb-6 z-10 shadow-lg mx-auto">
                  {capability.icon}
                </div>
                {/* Content Card and Media for Custom Formulation and Private Labeling */}
                {index === 0 ? <>
                    <div className="glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-deep-navy mb-4">{capability.title}</h3>
                      <p className="text-cool-grey mb-6">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.features.map(feature => <li key={feature} className="flex items-center text-sm text-cool-grey">
                            <div className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                            {feature}
                          </li>)}
                      </ul>
                    </div>
                    {/* Video: Only on large screens, same width as card */}
                    <div className="hidden lg:block w-full lg:w-5/12 lg:ml-auto">
                      <img 
                        src="/lovable-uploads/nicotine open pouch.webp" 
                        srcSet="/lovable-uploads/nicotine open pouch.webp 1x"
                        alt="Nicotine Pouch Industry" 
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                        style={{ minHeight: '90%', maxHeight: '300px', background: '#000' }}
                      />
                    </div>
                  </> : index === 1 ? <>
                    <div className="glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-deep-navy mb-4">{capability.title}</h3>
                      <p className="text-cool-grey mb-6">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.features.map(feature => <li key={feature} className="flex items-center text-sm text-cool-grey">
                            <div className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                            {feature}
                          </li>)}
                      </ul>
                    </div>
                    <div className="hidden lg:block w-full max-w-[520px]">
                      <img src="/lovable-uploads/nicotine new brand.webp" srcSet="/lovable-uploads/nicotine new brand.webp 1x" alt="Your Brand" className="rounded-xl shadow-lg w-full h-full object-cover" style={{ minHeight: '100%', maxHeight: '340px', background: '#fff' }} />
                    </div>
                  </> : index === 2 ? <div className="w-full flex-col lg:flex-row flex justify-between items-center">
                    <div className={`glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300`}>
                      <h3 className="text-2xl font-bold text-deep-navy mb-4">{capability.title}</h3>
                      <p className="text-cool-grey mb-6">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.features.map(feature => <li key={feature} className="flex items-center text-sm text-cool-grey">
                            <div className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                            {feature}
                          </li>)}
                      </ul>
                    </div>
                    {/* Video: Only on large screens, same width as card, right side */}
                    <div className="hidden lg:block w-full max-w-[520px]">
                      <video src="/lovable-uploads/nicotine quality.mp4" autoPlay loop muted className="rounded-xl shadow-lg w-full h-full object-cover" style={{
                  minHeight: '100%',
                  maxHeight: '340px',
                  background: '#000'
                }} />
                    </div>
                  </div> : index === 3 ? <div className="w-full flex-col lg:flex-row flex justify-between items-center">
                    {/* Video: Only on large screens, same width as card, left side */}
                    <div className="hidden lg:block w-full max-w-[520px] mr-8">
                      <video src="/lovable-uploads/nicotine production.mp4" autoPlay loop muted className="rounded-xl shadow-lg w-full h-full object-cover" style={{
                  minHeight: '100%',
                  maxHeight: '340px',
                  background: '#000'
                }} />
                    </div>
                    <div className={`glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300`}>
                      <h3 className="text-2xl font-bold text-deep-navy mb-4">{capability.title}</h3>
                      <p className="text-cool-grey mb-6">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.features.map(feature => <li key={feature} className="flex items-center text-sm text-cool-grey">
                            <div className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                            {feature}
                          </li>)}
                      </ul>
                    </div>
                  </div> : index === 4 ? <div className="w-full flex-col lg:flex-row flex justify-between items-center">
                    <div className={`glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300`}>
                      <h3 className="text-2xl font-bold text-deep-navy mb-4">{capability.title}</h3>
                      <p className="text-cool-grey mb-6">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.features.map(feature => <li key={feature} className="flex items-center text-sm text-cool-grey">
                            <div className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                            {feature}
                          </li>)}
                      </ul>
                    </div>
                    {/* Video: Only on large screens, same width as card, right side */}
                    <div className="hidden lg:block w-full max-w-[520px] ml-8">
                      <video src="/lovable-uploads/nicotine customer support.mp4" autoPlay loop muted className="rounded-xl shadow-lg w-full h-full object-cover" style={{
                  minHeight: '100%',
                  maxHeight: '340px',
                  background: '#000'
                }} />
                    </div>
                  </div> : <div className={`glass-card p-8 w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} hover:scale-105 transition-transform duration-300`}>
                    <h3 className="text-2xl font-bold text-deep-navy mb-4">{capability.title}</h3>
                    <p className="text-cool-grey mb-6">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map(feature => <li key={feature} className="flex items-center text-sm text-cool-grey">
                          <div className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                          {feature}
                        </li>)}
                    </ul>
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default EnhancedOEMCapabilities;