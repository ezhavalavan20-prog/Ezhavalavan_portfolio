import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Static Equipment Design Engineer',
    company: 'Gulf Spic General Trading & Contracting Company W.L.L',
    location: 'Shuaiba, Kuwait',
    duration: 'Sep 2025 – Present',
    equipment: ['Pressure Vessels', 'Heat Exchangers', 'Storage Tanks', 'Skid Packages', 'Pig Launchers & Receivers', 'Rectangular Tanks', 'Columns'],
    points: [
      'Prepare TQs, MRs, Mechanical Data Sheets, specifications, Basis of Design, BOMs and MTOs.',
      'Review vendor proposals, drawings and calculations against design codes and project specifications.',
      'Design and detailed engineering of pressure vessels, heat exchangers and heavy equipment, including transportation design calculations.',
      'Review P&IDs, process data, piping specs and instrumentation requirements to prepare mechanical deliverables.',
      'Coordinate with clients, vendors, shop and site teams to resolve engineering technical queries.',
      'Prepare ASME U-Stamp drawings and manual design calculations to IBR, ASME and API codes in Excel.',
      'Prepare Technical Bid Evaluations (TBE).',
    ],
  },
  {
    role: 'Junior Design Engineer',
    company: 'KRR Engineering Private Limited',
    location: 'Chennai, India',
    duration: 'Jun 2023 – Aug 2025',
    equipment: ['Pressure Vessels', 'Heat Exchangers', 'Flat Roof Tanks', 'Air Receivers', 'Columns', 'Rectangular Tanks'],
    points: [
      'Mechanical design calculations and detailed engineering for pressure vessels, heat exchangers and heavy equipment.',
      'ASME U-Stamp drawings and calculations for certification and audit requirements.',
      'Manual design calculations for rectangular vessels, silos and IBR equipment.',
      'Prepared and reviewed Technical Delivery Conditions (TDC), cost estimations and transportation calculations.',
      'Prepared detailed fabrication drawings and checked engineering drawings and BOMs.',
    ],
  },
  {
    role: 'Junior Mechanical Designer',
    company: 'Venvel Thermal & Mechanical Designers',
    location: 'Namakkal, Tamil Nadu, India',
    duration: 'May 2019 – Jun 2020',
    equipment: ['AutoCAD', 'Inventor', 'PV Elite'],
    points: [
      'Prepared GA, detailed, fabrication and part drawings using AutoCAD and Inventor.',
      'Detailed dimensions, tolerances, welding details and material specifications.',
      'Prepared BOMs, Material of Construction details and material take-offs.',
      'Revised drawings based on engineering and fabrication comments and maintained design records.',
      'Prepared mechanical design calculations using PV Elite.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Professional Experience
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight max-w-3xl">
            5 Years Across <span className="text-[#ff2a2a]">Kuwait</span> & <span className="text-[#ff2a2a]">India</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-gray-200" />

          <div className="flex flex-col gap-14 md:gap-16">
            {experienceData.map((job, idx) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                className="relative pl-10 md:pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-2 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-white ${idx === 0 ? 'bg-[#ff2a2a] shadow-[0_0_0_4px_rgba(255,42,42,0.25)]' : 'bg-gray-300'}`} />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8 mb-5">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase">{job.role}</h3>
                    <p className="text-base md:text-lg font-bold text-[#ff2a2a] mt-1">{job.company}</p>
                    <p className="text-sm text-gray-500 font-medium mt-1">{job.location}</p>
                  </div>
                  <span className="text-xs md:text-sm font-mono font-bold tracking-widest uppercase text-gray-500 md:whitespace-nowrap md:pt-2">
                    {job.duration}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 mb-6 max-w-3xl">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm md:text-base text-gray-600 leading-relaxed">
                      <span className="text-[#ff2a2a] font-black shrink-0">—</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.equipment.map((item) => (
                    <span key={item} className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
