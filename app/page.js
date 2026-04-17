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
        {/* --- HERO SECTION: Layout moderno em duas colunas --- */}
        <section style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4rem",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "6rem"
        }}>
          
          {/* Lado Esquerdo: Textos e Botões */}
          <div style={{ flex: "1 1 450px" }}>
            <p style={{ 
              color: "var(--accent-color)", 
              textTransform: "uppercase", 
              letterSpacing: "3px", 
              fontSize: "0.8rem", 
              fontWeight: "700", 
              marginBottom: "1.5rem" 
            }}>
              Crítica Cinematográfica • João Pessoa, PB
            </p>
            <h1 style={{ 
              fontFamily: "var(--font-heading), serif", 
              fontSize: "clamp(3.5rem, 6vw, 5rem)", 
              color: "var(--heading-color)", 
              lineHeight: "1.05", 
              marginBottom: "1.5rem",
              letterSpacing: "-1px"
            }}>
              Cinema com o Rafa
            </h1>
            <p style={{ 
              color: "var(--text-color)", 
              fontSize: "1.15rem", 
              lineHeight: "1.8", 
              marginBottom: "2.5rem", 
              opacity: 0.9,
              maxWidth: "600px"
            }}>
              Um espaço editorial de crítica com voz autoral, foco em curadoria e cobertura para festivais. Publicações em português e inglês.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/criticas" className="btn-featured-primary">
                Ler Críticas
              </Link>
              <Link href="/listas" className="btn-featured-secondary">
                Explorar Listas
              </Link>
            </div>
            
            <blockquote style={{ 
              marginTop: "3rem", 
              fontStyle: "italic", 
              color: "#888", 
              borderLeft: "2px solid var(--accent-color)", 
              paddingLeft: "1.5rem",
              fontSize: "0.95rem"
            }}>
              <p>"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos."</p>
              <footer style={{ marginTop: "0.5rem", fontWeight: "600", color: "var(--accent-color)" }}>— Marcel Proust</footer>
            </blockquote>
          </div>

          {/* Lado Direito: Crítica em Destaque */}
          {featured && (
            <div style={{ flex: "1 1 400px", position: "relative" }}>
              <p style={{ 
                color: "#606070", 
                fontSize: "0.8rem", 
                textTransform: "uppercase", 
                letterSpacing: "2px", 
                marginBottom: "1rem",
                fontWeight: "bold"
              }}>
                ✦ Destaque da Semana
              </p>
              <Link href={`/criticas/${featured.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "24px",
                  padding: "24px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  transition: "var(--transition)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-color)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <Image
                    src={normalizeImagePath(featured.posterImage)}
                    alt={featured.title}
                    width={140}
                    height={210}
                    style={{ 
                      borderRadius: "12px", 
                      objectFit: "cover", 
                      boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
                      flexShrink: 0
                    }}
                    priority
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ color: "var(--heading-color)", fontFamily: "var(--font-heading)", fontSize: "1.6rem", margin: "0 0 10px 0", lineHeight: "1.2" }}>
                      {featured.title}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                       <span style={{ color: "var(--accent-color)", letterSpacing: "2px", fontSize: "1.1rem" }}>{featured.rating}</span>
                       <span style={{ color: "#606070", fontSize: "0.85rem", fontWeight: "bold" }}>{featured.year}</span>
                    </div>
                    <p style={{ 
                      color: "#a0a0ab", 
                      fontSize: "0.95rem", 
                      display: "-webkit-box", 
                      WebkitLineClamp: 3, 
                      WebkitBoxOrient: "vertical", 
                      overflow: "hidden", 
                      margin: 0,
                      lineHeight: "1.5"
                    }}>
                      {featured.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </section>

        {/* Divisor elegante do seu próprio CSS */}
        <div className="lingua-divider"></div>

        {/* --- ÚLTIMAS CRÍTICAS --- */}
        <section className="list-section">
          <h2 style={{ textAlign: "left", marginBottom: "40px" }}>Últimas críticas</h2>
          <div className="reviews-grid">
            {recentes.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "60px" }}>
             <Link href="/criticas" className="btn-ler-mais" style={{ fontSize: "1rem", padding: "12px 24px", border: "1px solid var(--glass-border)", borderRadius: "50px" }}>
                Ver todas as críticas →
             </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
