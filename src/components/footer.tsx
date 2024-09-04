import { navLinks, socialLinks, teamData } from "./data";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full h-full min-h-[40vh] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <Link
        href="/"
        className="text-3xl flex items-center mt-4 z-20"
      >
        <p className="text-neutral-600 ">
          ANGEL <span className="text-white">TATTOO</span>
        </p>
      </Link>

          {/* Liens des sections */}
          <div>
            <h3 className="text-xl mb-4 text-white">Sections</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link href={link.href} className=" text-neutral-500 hover:text-gray-300 text-lg">
                    {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            
          {/* Liens des pages des artistes */}
          <div>
            <h3 className="text-xl text-white mb-4">Artistes</h3>
            <ul>
              {teamData.team.map((artist) => (
                <li key={artist.id} className="mb-2">
                  <Link href={`/artist/${artist.id}`} className="text-neutral-500 hover:text-gray-300 text-lg">
                    {artist.name}
                  </Link>
                </li>
                ))}
              </ul>
            </div>
            
          {/* Liens des réseaux sociaux */}
          <div>
            <h3 className="text-xl text-white mb-4">Suivez-nous</h3>
            <ul className="flex space-x-4">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-gray-300 text-lg">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-white text-lg">&copy; {new Date().getFullYear()} ANGEL TATTOO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
