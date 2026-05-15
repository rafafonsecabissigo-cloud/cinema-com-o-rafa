import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Sobre | Cinema com o Rafa",
  description:
    "Rafael Bissigo é crítico de cinema baseado em João Pessoa (PB). Conheça o autor do Cinema com o Rafa."
};

export default function SobrePage() {
  return (
    <>
      <Navbar />
      {/* Container principal com fundo escuro e texto claro */}
      <main className="bg-[#0a0a0a] text-gray-300 min-h-screen py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Coluna da Esquerda: Perfil e Contatos (ocupa 4 colunas no desktop) */}
          <aside className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Image
              src="https://i.postimg.cc/8sQPwTcv/Whats-App-Image-2026-03-30-at-11-03-36-(1).jpg"
              alt="Rafael Bissigo"
              className="object-cover w-48 h-48 md:w-56 md:h-56 grayscale hover:grayscale-0 transition duration-500"
              width={224}
              height={224}
              priority
            />
            
            <div>
              <h1 className="text-3xl font-serif text-white mb-1">Rafael Bissigo</h1>
              <p className="text-[#eab308] text-sm font-semibold tracking-wider uppercase">Crítico de Cinema Independente</p>
              <p className="text-gray-500 text-sm mt-2">João Pessoa, PB</p>
            </div>

            <div className="w-full h-[1px] bg-gray-800 my-4"></div> {/* Linha divisória sutil */}

            <div className="flex flex-col w-full space-y-3">
              <h3 className="text-white font-serif text-lg mb-2">Contato</h3>
              <a href="mailto:cinemacomorafa@gmail.com" className="hover:text-[#a855f7] transition-colors text-sm flex items-center gap-2">
                ✉️ cinemacomorafa@gmail.com
              </a>
              <a href="https://letterboxd.com/bissigorafael/" target="_blank" rel="noreferrer" className="hover:text-[#a855f7] transition-colors text-sm flex items-center gap-2">
                🎬 Letterboxd ↗
              </a>
              <a href="https://instagram.com/cinemacomorafa" target="_blank" rel="noreferrer" className="hover:text-[#a855f7] transition-colors text-sm flex items-center gap-2">
                📸 Instagram ↗
              </a>
              <a href="https://x.com/cinemacomorafa" target="_blank" rel="noreferrer" className="hover:text-[#a855f7] transition-colors text-sm flex items-center gap-2">
                🐦 X / Twitter ↗
              </a>
            </div>
          </aside>

          {/* Coluna da Direita: Textos e Citação (ocupa 8 colunas no desktop) */}
          <section className="md:col-span-8 space-y-10">
            
            {/* Epígrafe estilizada com borda lateral na cor do seu tema */}
            <blockquote className="border-l-4 border-[#eab308] pl-6 py-2">
              <p className="text-xl font-serif italic text-gray-200 leading-relaxed">
                "A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos."
              </p>
              <footer className="text-sm text-[#eab308] font-semibold mt-4">— Marcel Proust</footer>
            </blockquote>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif text-white border-b border-gray-800 pb-2">Sobre o projeto</h2>
              <p className="leading-relaxed text-lg">
                Escrevo sobre cinema porque acredito que filmes são uma das formas mais honestas de
                entender o mundo e as pessoas. O <strong className="text-white">Cinema com o Rafa</strong> nasceu da vontade de criar um espaço de crítica cinematográfica
                séria, acessível e com voz própria. Aqui não há algoritmo ditando o que assistir —
                apenas olhares atentos sobre filmes que merecem ser discutidos.
              </p>
              <p className="leading-relaxed text-lg">
                As críticas são publicadas em português e inglês, com o objetivo de alcançar públicos e
                festivais além das fronteiras do Brasil.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif text-white border-b border-gray-800 pb-2">Cobertura e credenciais</h2>
              <p className="leading-relaxed text-lg">
                Tenho interesse em cobrir festivais, cabines de imprensa e lançamentos. Para solicitações
                de credencial ou envio de material de imprensa, fique à vontade para entrar em contato através do e-mail ao lado.
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
