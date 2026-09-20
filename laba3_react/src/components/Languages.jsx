function Languages() {
  return (
    <section id="languages" className="col-span-1 md:col-span-2 bg-zinc-900 p-6 rounded-xl border-l-4 border-orange-500 shadow-md">
      <h2 className="text-2xl font-mono text-zinc-100 mb-4 border-b border-zinc-800 pb-2">Languages</h2>
      <ul className="flex flex-wrap gap-4">
        <li className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md text-zinc-300">
          Ukrainian <span className="text-orange-500 text-sm ml-1">Native</span>
        </li>
        <li className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md text-zinc-300">
          English <span className="text-orange-500 text-sm ml-1">Basic</span>
        </li>
      </ul>
    </section>
  );
}

export default Languages;