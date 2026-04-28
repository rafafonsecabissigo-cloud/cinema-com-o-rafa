import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getReviews, normalizeImagePath } from "../lib/data";

export const metadata = {
  title: "Cinema com o Rafa | Crítica Cinematográfica",
  description:
    "Críticas, listas e cobertura de festivais por Rafael Bissigo. Um olhar editorial sobre o cinema em português e inglês.",
};

function StarRating({ rating }) {
  const full = (rating.match(/★/g) || []).length;
  const total = 5;
  return (
    <div className="home-stars" aria-label={rating}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={i < full ? "home-star home-star--full" : "home-star home-star--empty"} />
      ))}
    </div>
  );
}

export default function HomePage() {
  const reviews = getReviews() || [];
  const featured = reviews.length > 0 ? reviews[0] : null;
  const recentes = reviews.slice(1, 4);

  return (
    <>
      <Navbar />

      <main className="home-main">

        {/* ── HERO ── */}
        <section className="home-hero">
          <div className="home-hero-left">
            <p className="home-kicker">
              <span className="home-kicker-line" />
              Crítica Cinematográfica
            </p>
            <h1 className="home-title">
              Cinema<br /><em>com o Rafa</em>
            </h1>
            <p className="home-desc">
              Um espaço editorial de crítica cinematográfica com voz autoral,
              foco em curadoria e cobertura para festivais. Publicações em
              português e inglês.
            </p>
            <div className="home-btns">
              <Link href="/criticas" className="btn-primary-cine">Ler Críticas</Link>
              <Link href="/listas" className="btn-ghost-cine">Explorar Listas →</Link>
            </div>
          </div>

          <div className="home-hero-right">
            {featured && (
              <Link href={`/criticas/${featured.slug}`} className="home-featured-frame">
                <div className="home-featured-poster-wrap">
                  <Image
                    src={normalizeImagePath(featured.posterImage)}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="home-featured-overlay" />
                  <div className="home-featured-info">
                    <p className="home-featured-label">Crítica em destaque</p>
                    <p className="home-featured-title">{featured.title}</p>
                    <p className="home-featured-meta">{featured.year} · {featured.director}</p>
                  </div>
                </div>
                <div className="home-featured-badge">
                  <span className="home-featured-badge-stars">{featured.rating}</span>
                  <span className="home-featured-badge-tag">obra-prima</span>
                </div>
              </Link>
            )}
          </div>
        </section>

        {/* ── FAIXA DE METADADOS ── */}
        <div className="home-meta-strip">
          <span className="home-meta-tag">João Pessoa · PB</span>
          <span className="home-meta-divider" />
          <span className="home-meta-tag">Crítico independente</span>
          <span className="home-meta-divider" />
          <span className="home-meta-tag">PT · EN</span>
        </div>

        {/* ── CITAÇÃO ── */}
        <div className="home-quote-band">
          <span className="home-quote-mark">"</span>
          <blockquote className="home-quote-text">
            A verdadeira viagem de descobrimento não consiste em procurar novas
            paisagens, mas em ter novos olhos.
            <cite>— Marcel Proust</cite>
          </blockquote>
        </div>

        {/* ── ÚLTIMAS CRÍTICAS ── */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Últimas críticas</h2>
            <Link href="/criticas" className="home-section-link">Ver todas →</Link>
          </div>

          <div className="home-reviews-grid">
            {recentes.length > 0 ? (
              recentes.map((review, i) => (
                <Link
                  key={review.slug}
                  href={`/criticas/${review.slug}`}
                  className={`home-review-card${i === 0 ? " home-review-card--featured" : ""}`}
                >
                  <div className="home-review-img">
                    <Image
                      src={normalizeImagePath(review.posterImage)}
                      alt={review.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="home-review-body">
                    <StarRating rating={review.rating} />
                    <p className="home-review-year">{review.year} · {review.director}</p>
                    <p className="home-review-title">{review.title}</p>
                    <p className="home-review-summary">{review.summary}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="no-results">Nenhuma crítica disponível ainda.</p>
            )}
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section className="home-about">
          <div className="home-about-left">
            <p className="home-about-kicker">Quem escreve</p>
            <h2 className="home-about-title">Rafael<br /><em>Bissigo</em></h2>
            <Link href="/sobre" className="home-about-more">Ler mais →</Link>
          </div>

          <div className="home-about-body">
            <p className="home-about-lead">
              O cinema entrou na minha vida como uma paixão — e ficou como uma forma de enxergar o mundo.
            </p>
            <p className="home-about-text">
              Cresci percebendo que cada filme carrega mensagens diretas e indiretas, e que essas mensagens têm o poder de mudar perspectivas. Quando um filme me toca, não consigo separar o que vejo na tela do que vivo fora dela. É dessa conexão que nascem as minhas críticas.
            </p>
            <p className="home-about-text">
              Como jovem crítico baseado em João Pessoa, acredito que o cinema não precisa ser distante ou inacessível. Ele pode ser refúgio numa semana pesada, companhia numa tarde quieta, ou o empurrão que faltava para ver a vida com novos olhos. É essa proximidade que quero trazer para as novas gerações.
            </p>
            <div className="home-about-values">
              <div className="home-about-value">
                <span className="home-about-value-label">Conexão</span>
                <span className="home-about-value-desc">Críticas que dialogam com a vida real</span>
              </div>
              <div className="home-about-value">
                <span className="home-about-value-label">Acessibilidade</span>
                <span className="home-about-value-desc">Cinema para todos, não só para iniciados</span>
              </div>
              <div className="home-about-value">
                <span className="home-about-value-label">Amadurecimento</span>
                <span className="home-about-value-desc">Cada filme como oportunidade de crescer</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── AUTHOR STRIP ── */}
        <div className="home-author-strip">
          <Image
            src="https://i.postimg.cc/8sQPwTcv/WhatsApp-Image-2026-03-30-at-11-03-36-(1).jpg"
            alt="Rafael Bissigo"
            width={64}
            height={64}
            className="home-author-avatar"
          />
          <div className="home-author-info">
            <p className="home-author-name">Rafael Bissigo</p>
            <p className="home-author-bio">
              Crítico independente apaixonado pelo cinema, baseado em João Pessoa (PB).
              Minha relação com a sétima arte nasce tanto do encantamento na poltrona
              quanto da curiosidade pelos bastidores da criação.
            </p>
          </div>
          <div className="home-author-links">
            <a href="https://letterboxd.com/bissigorafael/" target="_blank" rel="noopener noreferrer" className="home-author-link">Letterboxd ↗</a>
            <a href="https://instagram.com/cinemacomorafa" target="_blank" rel="noopener noreferrer" className="home-author-link">Instagram ↗</a>
            <a href="https://x.com/cinemacomorafa" target="_blank" rel="noopener noreferrer" className="home-author-link">X / Twitter ↗</a>
            <a href="mailto:cinemacomorafa@gmail.com" className="home-author-link">E-mail ↗</a>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
