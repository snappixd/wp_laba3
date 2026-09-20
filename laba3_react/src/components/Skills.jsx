function Skills() {
  return (
    <section id="skills" className="bg-zinc-900 p-6 rounded-xl border-l-4 border-orange-500 shadow-md">
      <h2 className="text-2xl font-mono text-zinc-100 mb-6 border-b border-zinc-800 pb-2">Technical Skills</h2>
      <ul className="space-y-4 text-zinc-400 text-sm sm:text-base">
        <li className="hover:translate-x-2 transition-transform duration-200 cursor-default">
          <strong className="text-orange-500 block sm:inline">Programming & Databases:</strong> Go, Python, MongoDB, MySQL
        </li>
        <li className="hover:translate-x-2 transition-transform duration-200 cursor-default">
          <strong className="text-orange-500 block sm:inline">Cloud & Tools:</strong> AWS (CloudTrail, GuardDuty, S3, KMS), Git, Docker
        </li>
        <li className="hover:translate-x-2 transition-transform duration-200 cursor-default">
          <strong className="text-orange-500 block sm:inline">Cybersecurity:</strong> Splunk, Suricata IDS/IPS, Burp Suite, Metasploit, Active Directory
        </li>
        <li className="hover:translate-x-2 transition-transform duration-200 cursor-default">
          <strong className="text-orange-500 block sm:inline">Networking:</strong> TCP/IP, DNS, TLS/HTTPS, Wireshark, tcpdump
        </li>
      </ul>
    </section>
  );
}

export default Skills;