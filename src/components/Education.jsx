import React from 'react';

const educationData = [
  {
    course: 'B.E. Mechanical Engineering',
    institution: 'DMI College of Engineering, Palanchoor, Chennai',
    board: 'Anna University',
    year: '2023',
    score: '80.86%',
  },
  {
    course: 'Diploma in Mechanical Engineering',
    institution: 'Don Bosco Polytechnic College, Kazhiappanallur, Nagapattinam',
    board: 'DOTE',
    year: '2019',
    score: '74.2%',
  },
  {
    course: 'Higher Secondary (HSC)',
    institution: 'Sangaranpanthal Govt. Hr. Sec. School, Nagapattinam',
    board: 'State Board',
    year: '2017',
    score: '69.2%',
  },
  {
    course: 'Secondary School (SSLC)',
    institution: 'Hameediya Hr. Sec. School, Thirukkalachery, Nagapattinam',
    board: 'State Board',
    year: '2015',
    score: '76.4%',
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#ff2a2a] py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16">
          <div className="inline-block border border-white/40 rounded-full px-5 py-1.5 text-sm text-white font-bold mb-8">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] tracking-tight">
            Academic Background
          </h2>
        </div>

        {/* Education Rows */}
        <div className="border-t-2 border-black">
          {educationData.map((item, idx) => (
            <div
              key={item.course}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_auto] gap-x-6 gap-y-1 py-6 md:py-8 border-b-2 border-black/80 items-center"
            >
              <span className="hidden md:block text-3xl font-black text-black">{item.year}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{item.course}</h3>
                <p className="text-sm md:text-base text-red-50 font-medium mt-1">
                  {item.institution} <span className="text-black/60">· {item.board}</span>
                </p>
                <p className="md:hidden text-sm font-bold text-black mt-1">{item.year}</p>
              </div>
              <span className="text-2xl md:text-4xl font-black text-black">{item.score}</span>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div data-aos="fade-up" className="mt-12 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">Languages</span>
          {['Tamil', 'English'].map((lang) => (
            <span key={lang} className="px-4 py-1.5 rounded-full bg-black text-white text-sm font-bold">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
