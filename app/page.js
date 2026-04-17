import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getReviews } from "../lib/data";

export const metadata = {
  title: "Cinema com o Rafa | Crítica Cinematográfica",
  description:
    "Críticas, listas e cobertura de festivais por Rafael Bissigo. Um olhar editorial sobre o cinema em português e inglês.",
};

export default function HomePage() {
  const reviews = getReviews();
  const featured = reviews[0];
  const recentes = reviews.slice(1, 4);

  return (
    <>
      <Navbar />
      <main>
        <section className="home-hero">
          <div className="home-hero-main">
            <p className="home-kicker">Crítica de cinema · João Pessoa, PB</p>
            <h1 className="home-title">Cinema com o Rafa</h1>
            <p className="home-lead">
              Um espaço editorial de crítica cinematográfica com voz autoral,
              foco em curadoria e cobertura para festivais. Publicações em
              português e inglês.
            </p>
            <blockquote className="home-epigraph">
              <p>
                A verdadeira viagem de descobrimento não consiste em procurar
                novas paisagens, mas em ter novos olhos.
              </p>
              <footer>— Marcel Proust</footer>
            </blockquote>
            <div className="home-hero-actions">
              <Link href="/criticas" className="btn-featured-primary">Ler Críticas</Link>
              <Link href="/listas" className="btn-featured-secondary">Explorar Listas</Link>
            </div>
          </div>

          <aside className="home-hero-aside">
            <p className="home-aside-label">Editor</p>
            <div className="home-editor-card">
              <Image
                src="https://i.postimg.cc/8sQPwTcv/Whats-App-Image-2026-03-30-at-11-03-36-(1).jpg"
                alt="Rafael Bissigo"
                className="home-editor-photo"
                width={56}
                height={56}
                priority
              />
              <div>
                <p className="home-editor-name">Rafael Bissigo</p>
                <p className="home-editor-role">Crítico de cinema independente</p>
              </div>
            </div>
            {featured && (
              <>
                <p className="home-aside-label" style={{ marginTop: "20px" }}>Crítica em destaque</p>
                <Link href={`/criticas/${featured.slug}`} className="home-featured-card">
                  <Image
                    src={`/images/${featured.posterImage.replace("images/", "")}`}
                    alt={featured.title}
                    className="home-featured-poster"
                    width={52}
                    height={78}
                  />
                  <div>
                    <p className="home-featured-title">{featured.title}</p>
                    <p className="home-featured-meta">{featured.year} · {featured.director}</p>
                    <p className="home-featured-stars">{featured.rating}</p>
                  </div>
                </Link>
              </>
            )}
          </aside>
        </section>

        <section className="home-recentes">
          <div className="home-recentes-header">
            <h2 className="home-section-label">Últimas críticas</h2>
            <Link href="/criticas" className="home-ver-todas">Ver todas →</Link>
          </div>
          <div className="home-reviews-grid">
            {recentes.map((review) => (
              <Link key={review.slug} href={`/criticas/${review.slug}`} className="home-review-card">
                <Image
                  src={`/images/${review.posterImage.replace("images/", "")}`}
                  alt={review.title}
                  className="home-review-poster"
                  width={300}
                  height={120}
                />
                <p className="home-review-title">{review.title}</p>
                <p className="home-review-meta">{review.year} · {review.director}</p>
                <p className="home-review-stars">{review.rating}</p>
                <p className="home-review-summary">{review.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-nav-grid">
          <Link href="/criticas" className="home-nav-card">
            <h3>Críticas</h3>
            <p>Análises autorais de clássicos e contemporâneos, com filtros por nota, diretor e período.</p>
            <span className="home-nav-arrow">Explorar →</span>
          </Link>
          <Link href="/listas" className="home-nav-card">
            <h3>Listas</h3>
            <p>Curadorias temáticas e rankings para descoberta de filmes, autores e recortes de temporada.</p>
            <span className="home-nav-arrow">Explorar →</span>
          </Link>
          <Link href="/sobre" className="home-nav-card">
            <h3>Sobre</h3>
            <p>Perfil editorial, posicionamento crítico e cobertura para imprensa e festivais.</p>
            <span className="home-nav-arrow">Explorar →</span>
          </Link>
        </section>

        <section className="home-cta">
          <p>Para credenciais e contato profissional, use o canal oficial de imprensa.</p>
          <a href="mailto:cinemacomorafa@gmail.com" className="home-cta-email">cinemacomorafa@gmail.com</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
