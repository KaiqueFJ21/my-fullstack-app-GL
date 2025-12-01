'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? 'active' : '');

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="brand" onClick={handleLinkClick}>
          <span>GameLink</span>
        </Link>

        <div className="navlinks">
          <Link className={isActive('/')} href="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link className={isActive('/sobre')} href="/sobre" onClick={handleLinkClick}>
            Sobre
          </Link>
          <Link className={isActive('/servicos')} href="/servicos" onClick={handleLinkClick}>
            Serviços
          </Link>
          <Link className={isActive('/planos')} href="/planos" onClick={handleLinkClick}>
            Planos
          </Link>
          <Link className={isActive('/projetos')} href="/projetos" onClick={handleLinkClick}>
            Projetos
          </Link>
          <Link className={isActive('/contato')} href="/contato" onClick={handleLinkClick}>
            Contato
          </Link>
        </div>

        <Link href="/login" className="cta-btn" onClick={handleLinkClick}>
          Login
        </Link>
      </div>
    </nav>
  );
}