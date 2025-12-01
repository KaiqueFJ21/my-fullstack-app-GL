export default function Home() {
  return (
    <div className="container">
      <section className="section hero">
        <div className="center">
          <p className="kicker">Bem-vindo ao Game Link</p>
          <h1>
            Transformando <span className="gradient-text">Estatísticas</span>
            <br />
            em gamificação
          </h1>
          <p className="muted" style={{ maxWidth: '680px', margin: '16px auto' }}>
            Crie um hub competitivo onde jogadores podem sincronizar contas de jogos, competir
            em rankings, ganhar recompensas e apostar créditos — tudo dentro de uma comunidade
            engajada.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '28px' }}>
            <a href="/planos" className="cta-btn">
              Conheça os planos
            </a>
            <a href="/servicos" className="cta-btn" style={{ background: 'rgba(255,255,255,.08)' }}>
              Ver recursos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}