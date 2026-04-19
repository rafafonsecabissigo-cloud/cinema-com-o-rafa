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

export default function HomePage() {
  const reviews = getReviews() || [];
  const featured = reviews.length > 0 ? reviews[0] : null;
  const recentes = reviews.slice(1, 4);

  return (
    <>
      <Navbar />

      <main>

        {/* ── HERO ── */}
        <section className="home-hero">
          <div className="home-hero-left">
            <p className="home-kicker">Crítica de cinema · João Pessoa, PB</p>
            <h1 className="home-title">
              Cinema<br /><em>com o Rafa</em>
            </h1>
            <p className="home-desc">
              Um espaço editorial de crítica cinematográfica com voz autoral,
              foco em curadoria e cobertura para festivais. Publicações em
              português e inglês.
            </p>
            <blockquote className="home-quote">
              <p>
                "A verdadeira viagem de descobrimento não consiste em procurar
                novas paisagens, mas em ter novos olhos."
              </p>
              <footer>— Marcel Proust</footer>
            </blockquote>
            <div className="home-btns">
              <Link href="/criticas" className="btn-featured-primary">
                Ler Críticas
              </Link>
              <Link href="/listas" className="btn-featured-secondary">
                Explorar Listas
              </Link>
            </div>
          </div>

          <aside className="home-hero-right">
            {/* Editor */}
            <div className="home-editor-block">
              <p className="home-aside-label">Editor</p>
              <div className="home-editor-row">
                <Image
                  src="https://i.postimg.cc/8sQPwTcv/Whats-App-Image-2026-03-30-at-11-03-36-(1).jpg"
                  alt="Rafael Bissigo"
                  className="home-editor-avatar"
                  width={52}
                  height={52}
                  priority
                />
                <div>
                  <p className="home-editor-name">Rafael Bissigo</p>
                  <p className="home-editor-role">Crítico independente</p>
                </div>
              </div>
            </div>

            {/* Destaque */}
            {featured && (
              <div className="home-featured-block">
                <p className="home-aside-label">Crítica em destaque</p>
                <Link
                  href={`/criticas/${featured.slug}`}
                  className="home-featured-card"
                >
                  <div className="home-featured-poster">
                    <Image
                      src={normalizeImagePath(featured.posterImage)}
                      alt={featured.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="home-featured-title">{featured.title}</p>
                    <p className="home-featured-meta">
                      {featured.year} · {featured.director}
                    </p>
                    <p className="home-featured-rating">{featured.rating}</p>
                  </div>
                </Link>
              </div>
            )}
          </aside>
        </section>

        {/* ── DIVISOR ── */}
        <div className="home-divider" />

        {/* ── ÚLTIMAS CRÍTICAS ── */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Últimas críticas</h2>
            <Link href="/criticas" className="home-section-link">
              Ver todas →
            </Link>
          </div>

          <div className="home-reviews-grid">
            {recentes.length > 0 ? (
              recentes.map((review) => (
                <Link
                  key={review.slug}
                  href={`/criticas/${review.slug}`}
                  className="home-review-card"
                >
                  <div className="home-review-img">
                    <Image
                      src={normalizeImagePath(review.posterImage)}
                      alt={review.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="home-review-title">{review.title}</p>
                  <p className="home-review-meta">
                    {review.year} · {review.director}
                  </p>
                  <p className="home-review-rating">{review.rating}</p>
                  <p className="home-review-summary">{review.summary}</p>
                </Link>
              ))
            ) : (
              <p className="no-results">Nenhuma crítica disponível ainda.</p>
            )}
          </div>
        </section>

        {/* ── NAVEGAÇÃO ── */}
        <div className="home-nav-cards">
          {[
            {
              title: "Críticas",
              desc: "Análises autorais de clássicos e contemporâneos com voz editorial própria.",
              link: "/criticas",
            },
            {
              title: "Listas",
              desc: "Curadorias temáticas e rankings para descoberta e aprofundamento no cinema.",
              link: "/listas",
            },
            {
              title: "Sobre",
              desc: "Perfil editorial, cobertura para festivais e credenciais de imprensa.",
              link: "/sobre",
            },
          ].map((item) => (
            <Link key={item.link} href={item.link} className="home-nav-card">
              <h3 className="home-nav-card-title">{item.title}</h3>
              <p className="home-nav-card-desc">{item.desc}</p>
              <span className="home-nav-card-cta">Explorar →</span>
            </Link>
          ))}
        </div>

        {/* ── CTA CONTATO ── */}
        <section className="home-cta-strip">
          <p className="home-cta-text">
            Para credenciais e contato profissional, use o canal oficial de imprensa.
          </p>
          <a href="mailto:cinemacomorafa@gmail.com" className="home-cta-email">
            cinemacomorafa@gmail.com
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
