import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    name: 'CGUP – Gas Compression Project',
    client: 'Saudi Arabian Chevron Inc. & Kuwait Oil Company',
    contractor: 'Al Ghanim Al Saudia (WJO)',
    company: 'Gulf Spic',
  },
  {
    name: 'Replacement of Instrument Air & Plant Air System',
    client: 'Kuwait Oil Company',
    company: 'Gulf Spic',
  },
  {
    name: 'Engineering Services for New ASU Plant',
    client: 'GOPCO Industrial Gas Production Co W.L.L',
    company: 'Gulf Spic',
  },
  {
    name: 'Design & Integrity for Effluent Tank Modification',
    client: 'Kuwait Oil Company',
    contractor: 'ACME International General Trading & Contracting Co.',
    company: 'Gulf Spic',
  },
  {
    name: 'Jurassic Production Facility-5 (JPF-5), North Kuwait',
    client: 'Kuwait Oil Company',
    contractor: 'Jereh Oil & Gas Engineering Corporation',
    company: 'Gulf Spic',
  },
  {
    name: 'Lean Amine Surge Drum Project',
    client: 'Numaligarh Refinery Limited',
    company: 'KRR Engineering',
  },
  {
    name: 'Technical Ammonium Nitrate Project',
    client: 'Larsen & Toubro Ltd',
    company: 'KRR Engineering',
  },
  {
    name: 'EPCC Package – Grass Root Poly Butadiene Rubber (PBR)',
    client: 'thyssenkrupp Uhde India Pvt. Ltd',
    company: 'KRR Engineering',
  },
  {
    name: '5th Stream Alumina Plant, Damanjodi, Odisha',
    client: 'Bridge and Roof Co. (I) Ltd',
    company: 'KRR Engineering',
  },
  {
    name: 'Precipitation Reactor Project',
    client: 'Tata Chemicals Limited',
    company: 'KRR Engineering',
  },
];

const filters = ['All', 'Gulf Spic', 'KRR Engineering'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = projectsData
    .map((project, idx) => ({ ...project, number: String(idx + 1).padStart(2, '0') }))
    .filter((project) => activeFilter === 'All' || project.company === activeFilter);

  return (
    <section id="projects" className="bg-[#f4f4f4] py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
              Major Projects
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight max-w-2xl">
              Projects Delivered for Industry Leaders
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#ff2a2a] text-white shadow-[0_10px_25px_rgba(255,42,42,0.25)]'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group bg-white rounded-3xl p-6 md:p-8 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-[box-shadow,transform] duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-xl font-bold font-serif italic text-gray-300 group-hover:text-[#ff2a2a] transition-colors duration-500">
                    {project.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                    {project.company}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-snug mb-4">
                  {project.name}
                </h3>
                <dl className="mt-auto flex flex-col gap-1.5 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-bold text-gray-900 shrink-0">Client:</dt>
                    <dd className="text-gray-500 font-medium">{project.client}</dd>
                  </div>
                  {project.contractor && (
                    <div className="flex gap-2">
                      <dt className="font-bold text-gray-900 shrink-0">Main Contractor:</dt>
                      <dd className="text-gray-500 font-medium">{project.contractor}</dd>
                    </div>
                  )}
                </dl>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
