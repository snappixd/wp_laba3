function Experience() {
  return (
    <section id="experience" className="col-span-1 md:col-span-2 bg-zinc-900 p-6 rounded-xl border-l-4 border-orange-500 shadow-md">
      <h2 className="text-2xl font-mono text-zinc-100 mb-6 border-b border-zinc-800 pb-2">Work Experience</h2>
      <ul className="space-y-6">
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-orange-500 before:rounded-sm">
          <h3 className="text-xl font-bold text-zinc-200">SOC Analyst</h3>
          <p className="text-sm text-zinc-400 mb-2"><span className="text-orange-500 font-mono">NDA</span> | September 2026 - Present</p>
          <p className="text-zinc-400 text-sm">Monitoring, alert triage, and security operations.</p>
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-orange-500 before:rounded-sm">
          <h3 className="text-xl font-bold text-zinc-200">Cybersecurity Intern</h3>
          <p className="text-sm text-zinc-400 mb-2"><span className="text-orange-500 font-mono">UnderDefense (Lviv)</span> | February 2026 - September 2026</p>
          <p className="text-zinc-400 text-sm">Detection Engineering & Cloud Security, SOC Operations, and Penetration Testing.</p>
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-orange-500 before:rounded-sm">
          <h3 className="text-xl font-bold text-zinc-200">SOC / Security Operations Intern</h3>
          <p className="text-sm text-zinc-400 mb-2"><span className="text-orange-500 font-mono">Raiffeisen Bank (Remote)</span> | July 2026 - November 2026</p>
          <p className="text-zinc-400 text-sm">Security Operations Fundamentals, Bank Infrastructure & PKI.</p>
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-orange-500 before:rounded-sm">
          <h3 className="text-xl font-bold text-zinc-200">Cybersecurity Trainee</h3>
          <p className="text-sm text-zinc-400 mb-2"><span className="text-orange-500 font-mono">SoftServe (Remote)</span> | July 2026 - September 2026</p>
          <p className="text-zinc-400 text-sm">Defensive Security & SIEM, Cloud Security, and Offensive Security Foundation.</p>
        </li>
      </ul>
    </section>
  );
}

export default Experience;