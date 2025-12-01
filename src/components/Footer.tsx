'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span>GameLink</span>
            </div>
            <p className="muted">Transformando estatísticas em gamificação.</p>
          </div>

          <div>
            <h4>Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/">Home</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/servicos">Serviços</Link>
              <Link href="/planos">Planos</Link>
            </div>
          </div>

          <div>
            <h4>Recursos</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/projetos">Projetos</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/login">Login</Link>
            </div>
          </div>
        </div>

        <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />

        <div className="footer-bottom">
          <p className="muted">© 2025 GameLink. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}