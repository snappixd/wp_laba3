function Education() {
  return (
    <section id="education" className="bg-zinc-900 p-6 rounded-xl border-l-4 border-orange-500 shadow-md">
      <h2 className="text-2xl font-mono text-zinc-100 mb-6 border-b border-zinc-800 pb-2">Education</h2>
      <ul className="space-y-5">
        <li className="border-l-2 border-zinc-800 pl-4 hover:border-orange-500 transition-colors">
          <h3 className="text-lg font-bold text-zinc-200">Bachelor in Cybersecurity</h3>
          <p className="text-sm text-zinc-400 mt-1"><strong className="text-zinc-300 font-normal">Lviv Polytechnic National University</strong> <br/> Sep 2025 - Present</p>
        </li>
        <li className="border-l-2 border-zinc-800 pl-4 hover:border-orange-500 transition-colors">
          <h3 className="text-lg font-bold text-zinc-200">Junior Bachelor in Computer Engineering</h3>
          <p className="text-sm text-zinc-400 mt-1"><strong className="text-zinc-300 font-normal">Khmelnytskyi Polytechnic Professional College</strong> <br/> Sep 2021 - Jul 2025</p>
        </li>
      </ul>
    </section>
  );
}

export default Education;