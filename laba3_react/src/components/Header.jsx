function Header() {
  return (
    <header className="flex flex-col items-center bg-zinc-900 border-b-2 border-orange-500 text-zinc-300 p-8 shadow-[0_0_15px_rgba(249,115,22,0.1)] mb-8 rounded-b-2xl">
      <h1 className="text-4xl md:text-5xl font-mono font-bold text-zinc-100 mb-2 uppercase tracking-widest">
        Andrii <span className="text-orange-500">Levin</span>
      </h1>
      <p className="text-xl text-zinc-400 font-mono mb-4">Cybersecurity Student | SOC Analyst</p>
      
      <address className="not-italic flex flex-col md:flex-row items-center gap-2 md:gap-6 mb-6 text-sm sm:text-base">
        <p>Email: <a href="mailto:levinandrey33@gmail.com" className="text-orange-500 hover:text-orange-400 hover:underline transition-all">levinandrey33@gmail.com</a></p>
        <p>Phone: <a href="tel:+380682439345" className="text-orange-500 hover:text-orange-400 hover:underline transition-all">+380682439345</a></p>
        <p>Location: Lviv, Ukraine</p>
      </address>

      <nav className="w-full max-w-lg">
        <h2 className="text-center text-zinc-500 uppercase tracking-widest text-sm mb-4 font-semibold">Links</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          <li><a href="https://www.linkedin.com/in/andrii-levin-746b03359/" className="px-4 py-2 border border-zinc-700 rounded-md text-zinc-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300">Linkedin</a></li>
          <li><a href="https://github.com/snappixd" className="px-4 py-2 border border-zinc-700 rounded-md text-zinc-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300">Github</a></li>
          <li><a href="https://t.me/rxmblw" className="px-4 py-2 border border-zinc-700 rounded-md text-zinc-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300">Telegram</a></li>
          <li><a href="https://tryhackme.com/p/rxmbl" className="px-4 py-2 border border-zinc-700 rounded-md text-zinc-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300">TryHackMe</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;