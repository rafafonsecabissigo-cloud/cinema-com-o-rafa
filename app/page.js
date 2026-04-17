import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
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
        {/* --- HERO SECTION LIMPO E ELEGANTE --- */}
        <section style={{ textAlign: "center", padding: "8rem 1rem 5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ 
            color: "var(--accent-color)", 
            textTransform: "uppercase", 
            letterSpacing: "4px", 
            fontSize: "0.85rem", 
            fontWeight: "600", 
            marginBottom: "1.5rem" 
          }}>
            Crítica Cinematográfica · João Pessoa, PB
          </p>
          <h1 style={{ 
            fontFamily: "var(--font-heading), serif", 
            fontSize: "clamp(3.5rem, 8vw, 5.5rem)", 
            color: "var(--heading-color)", 
            lineHeight: "1.1", 
            marginBottom: "1.5rem",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}>
            Cinema com o Rafa
          </h1>
          <p style={{ 
            color: "#a0a0ab", 
            fontSize: "1.2rem", 
            lineHeight: "1.8", 
            maxWidth: "700px",
            marginBottom: "3rem" 
          }}>
            Um espaço editorial de crítica cinematográfica com voz autoral, foco em curadoria e cobertura para festivais. Publicações em português e inglês.
          </p>
          <blockquote style={{ 
            fontStyle: "italic", 
            color: "#888", 
            borderLeft: "2px solid var(--accent-color)", 
            paddingLeft: "1.5rem", 
            textAlign: "left",
            maxWidth: "600px",
            background: "rgba(255,255,255,0.02)",
            padding: "1.5rem",
            borderRadius: "0 12px 12px 0"
          }}>
            <p style={{ marginBottom: "0.5rem" }}>"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos."</p>
            <footer style={{ fontWeight: "600", color: "var(--accent-color)", fontSize: "0.9rem" }}>— Marcel Proust</footer>
          </blockquote>
        </section>
          />
          <div className="critica-hero-content">
            <p className="critica-meta">CRÍTICA CINEMATOGRÁFICA · JOÃO PESSOA, PB</p>
            <h1>Cinema com o Rafa</h1>
            <p className="hero-quote">
              "A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos."
            </p>
            <p className="hero-quote" style={{ fontSize: "0.85rem", marginTop: "5px" }}>— Marcel Proust</p>
          </div>
        </section>

        {/* Container para centralizar o conteúdo abaixo do Hero */}
        <div className="critica-container">
          
          {/* --- CRÍTICA EM DESTAQUE (Usando sua classe .featured-review) --- */}
          {featured && (
            <section className="featured-review">
              <div className="featured-media">
                <Image
                  src={normalizeImagePath(featured.posterImage)}
                  alt={featured.title}
                  width={340}
                  height={500}
                  className="featured-poster"
                  priority
                />
              </div>
              <div className="featured-content">
                <p className="featured-kicker">Crítica em destaque</p>
                <h2>{featured.title}</h2>
                <p className="featured-meta">{featured.year} · {featured.director}</p>
                <p className="featured-rating">{featured.rating}</p>
                <p className="featured-summary">{featured.summary}</p>
                <div className="featured-actions">
                  <Link href={`/criticas/${featured.slug}`} className="btn-featured-primary">
                    Ler Crítica
                  </Link>
                  <Link href="/listas" className="btn-featured-secondary">
                    Explorar Listas
                  </Link>
                </div>
              </div>
            </section>
          )}

          <div className="lingua-divider"></div>

          {/* --- ÚLTIMAS CRÍTICAS --- */}
          <section className="list-section">
            <h2>Últimas críticas</h2>
            <div className="reviews-grid">
              {recentes.map((review) => (
                <ReviewCard key={review.slug} review={review} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
               <Link href="/criticas" className="btn-ler-mais">
                  Ver todas as críticas →
               </Link>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </>
  );
}
