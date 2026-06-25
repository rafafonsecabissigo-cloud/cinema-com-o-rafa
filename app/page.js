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
            <h2 className="home-section-title">Últimas Críticas</h2>
            <Link href="/criticas" className="home-section-link">Ver todas →</Link>
          </div>

          <div className="home-recent-grid">
            {recentes.map((review) => (
              <Link
                key={review.slug}
                href={`/criticas/${review.slug}`}
                className="home-recent-card"
              >
                <div className="home-recent-poster-wrap">
                  <Image
                    src={normalizeImagePath(review.heroImage)}
                    alt={review.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="home-recent-body">
                  <p className="home-recent-category">{review.category}</p>
                  <h3 className="home-recent-title">{review.cardTitle || review.title}</h3>
                  <p className="home-recent-desc">{review.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
