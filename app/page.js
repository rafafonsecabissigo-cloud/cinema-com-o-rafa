import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Cinema com o Rafa | Crítica Cinematográfica",
  description:
    "Críticas, listas e cobertura de festivais por Rafael Bissigo. Um olhar editorial sobre o cinema em português e inglês."
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <section className="home-hero">
          <div className="home-hero-main">
            <p className="home-kicker">Crítica de cinema · João Pessoa, PB</p>
            <h1>Cinema com o Rafa</h1>
            <p className="home-lead">
              Um espaço editorial de crítica cinematográfica com voz autoral, foco em
              curadoria e cobertura para festivais. Publicações em português e inglês.
            </p>
            <blockquote className="home-epigraph" cite="https://en.wikipedia.org/wiki/Marcel_Proust">
              <p>
                A verdadeira viagem de descobrimento não consiste em procurar novas
                paisagens, mas em ter novos olhos.
              </p>
              <footer>— Marcel Proust</footer>
            </blockquote>
            <div className="home-hero-actions">
              <Link href="/criticas" className="btn-featured-primary">
                Ler Críticas
              </Link>
              <Link href="/listas" className="btn-featured-secondary">
                Explorar Listas
              </Link>
            </div>
          </div>

          <aside className="home-hero-aside">
            <p className="home-aside-label">Editor</p>
            <div className="home-editor-card">
              <Image
                src="https://i.postimg.cc/8sQPwTcv/Whats-App-Image-2026-03-30-at-11-03-36-(1).jpg"
                alt="Rafael Bissigo"
                className="home-editor-photo"
                width={88}
                height={88}
                priority
              />
              <div>
                <h2>Rafael Bissigo</h2>
                <p>Crítico de cinema independente</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="home-sections-grid">
          <Link href="/criticas" className="home-section-card">
            <h2>Críticas</h2>
            <p>
              Análises autorais de clássicos e contemporâneos, com filtros por nota,
              diretor e período.
            </p>
          </Link>

          <Link href="/listas" className="home-section-card">
            <h2>Listas</h2>
            <p>
              Curadorias temáticas e rankings para descoberta de filmes, autores e
              recortes de temporada.
            </p>
          </Link>

          <Link href="/sobre" className="home-section-card">
            <h2>Sobre</h2>
            <p>
              Perfil editorial, posicionamento crítico e foco de cobertura para imprensa
              e festivais.
            </p>
          </Link>
        </section>

        <section className="home-cta-strip">
          <p>Para credenciais e contato profissional, use o canal oficial de imprensa.</p>
          <a href="mailto:cinemacomorafa@gmail.com" className="home-press-mail">
            cinemacomorafa@gmail.com
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
