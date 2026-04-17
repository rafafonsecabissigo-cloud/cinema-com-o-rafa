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
  const reviews = getReviews() || [];
  const featured = reviews.length > 0 ? reviews[0] : null;
  const recentes = reviews.slice(1, 4);

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-200 font-sans">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-24">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-between">
          
          {/* Coluna Esquerda: Texto Principal */}
          <div className="w-full md:w-3/5 flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold text-yellow-500 uppercase tracking-widest mb-3">
                Crítica de cinema · João Pessoa, PB
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                Cinema com o Rafa
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
                Um espaço editorial de crítica cinematográfica com voz autoral,
                foco em curadoria e cobertura para festivais. Publicações em
                português e inglês.
              </p>
            </div>

            <blockquote className="border-l-4 border-yellow-500 pl-5 py-2 my-4 bg-zinc-900/50 rounded-r-lg">
              <p className="text-lg italic text-zinc-300 mb-2">
                "A verdadeira viagem de descobrimento não consiste em procurar
                novas paisagens, mas em ter novos olhos."
              </p>
              <footer className="text-sm font-semibold text-zinc-500">— Marcel Proust</footer>
            </blockquote>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link 
                href="/criticas" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition-colors duration-200"
              >
                Ler Críticas
              </Link>
              <Link 
                href="/listas" 
                className="border border-zinc-600 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
              >
                Explorar Listas
              </Link>
            </div>
          </div>

          {/* Coluna Direita: Painel do Editor */}
          <aside className="w-full md:w-2/5 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-8 shadow-2xl">
            
            {/* Perfil do Editor */}
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-4 border-b border-zinc-800 pb-2">
                Editor
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://i.postimg.cc/8sQPwTcv/Whats-App-Image-2026-03-30-at-11-03-36-(1).jpg"
                  alt="Rafael Bissigo"
                  className="rounded-full object-cover border-2 border-zinc-700"
                  width={64}
                  height={64}
                  priority
                />
                <div>
                  <p className="text-xl font-bold text-white">Rafael Bissigo</p>
                  <p className="text-sm text-yellow-500">Crítico independente</p>
                </div>
              </div>
            </div>

            {/* Crítica em Destaque (Renderiza apenas se existir) */}
            {featured && (
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-4 border-b border-zinc-800 pb-2">
                  Crítica em destaque
                </p>
                <Link 
                  href={`/criticas/${featured.slug}`} 
                  className="group flex gap-4 items-center bg-zinc-950 p-3 rounded-xl border border-zinc-800 hover:border-yellow-500 transition-colors"
                >
                  <div className="relative w-16 h-24 flex-shrink-0 overflow-hidden rounded-md bg-zinc-800">
                    <Image
                      src={`/images/${featured.posterImage.replace("images/", "")}`}
                      alt={featured.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      fill
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-white group-hover:text-yellow-500 transition-colors line-clamp-2">{featured.title}</p>
                    <p className="text-xs text-zinc-400 mt-1">{featured.year} · {featured.director}</p>
                    <p className="text-sm font-bold text-yellow-500 mt-2">{featured.rating}</p>
                  </div>
                </Link>
              </div>
            )}
          </aside>
        </section>

        {/* --- ÚLTIMAS CRÍTICAS --- */}
        <section>
          <div className="flex justify-between items-end mb-8 border-b border-zinc-800 pb-4">
            <h2 className="text-3xl font-bold text-white">Últimas críticas</h2>
            <Link href="/criticas" className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold group">
              Ver todas <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentes.map((review) => (
              <Link 
                key={review.slug} 
                href={`/criticas/${review.slug}`} 
                className="group flex flex-col gap-4"
              >
                <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-800 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                  <Image
                    src={`/images/${review.posterImage.replace("images/", "")}`}
                    alt={review.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors mb-1">{review.title}</h3>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-zinc-400">{review.year} · {review.director}</span>
                    <span className="font-bold text-yellow-500">{review.rating}</span>
                  </div>
                  <p className="text-zinc-500 text-sm line-clamp-3">{review.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* --- NAVEGAÇÃO / SOBRE --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Críticas", desc: "Análises autorais de clássicos e contemporâneos.", link: "/criticas" },
            { title: "Listas", desc: "Curadorias temáticas e rankings para descoberta.", link: "/listas" },
            { title: "Sobre", desc: "Perfil editorial e cobertura para imprensa.", link: "/sobre" }
          ].map((item, i) => (
            <Link 
              key={i}
              href={item.link} 
              className="bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-2xl p-8 flex flex-col gap-4 transition-colors group"
            >
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-zinc-400 flex-grow">{item.desc}</p>
              <span className="text-yellow-500 font-semibold group-hover:translate-x-2 transition-transform w-fit">
                Explorar →
              </span>
            </Link>
          ))}
        </section>

        {/* --- CTA CONTATO --- */}
        <section className="bg-zinc-900 rounded-3xl p-12 text-center flex flex-col items-center gap-6 border border-zinc-800">
          <p className="text-xl text-zinc-300 max-w-lg">
            Para credenciais e contato profissional, use o canal oficial de imprensa.
          </p>
          <a 
            href="mailto:cinemacomorafa@gmail.com" 
            className="text-2xl md:text-3xl font-bold text-white hover:text-yellow-500 transition-colors underline decoration-yellow-500 decoration-4 underline-offset-8"
          >
            cinemacomorafa@gmail.com
          </a>
        </section>

      </main>
      <Footer />
    </div>
  );
}
