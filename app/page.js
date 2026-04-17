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
      <main className="sobre-page">
        <blockquote className="sobre-epigraph" cite="https://en.wikipedia.org/wiki/Marcel_Proust">
          <p>
            A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter
            novos olhos.
          </p>
          <footer>— Marcel Proust</footer>
        </blockquote>

        <div className="sobre-hero">
          <Image
            src="https://i.postimg.cc/8sQPwTcv/Whats-App-Image-2026-03-30-at-11-03-36-(1).jpg"
            alt="Rafael Bissigo"
            className="sobre-foto"
            width={180}
            height={180}
            priority
          />
          <div className="sobre-intro">
            <h1>Rafael Bissigo</h1>
            <p className="sobre-cargo">Crítico de Cinema · João Pessoa, PB</p>
            <p>
              Escrevo sobre cinema porque acredito que filmes são uma das formas mais honestas de
              entender o mundo e as pessoas. No Cinema com o Rafa, você encontra críticas, listas e
              reflexões sobre a sétima arte — em português e inglês.
            </p>
          </div>
        </div>

        <div className="sobre-secao">
          <h2>Sobre o projeto</h2>
          <p>
            O Cinema com o Rafa nasceu da vontade de criar um espaço de crítica cinematográfica
            séria, acessível e com voz própria. Aqui não há algoritmo ditando o que assistir —
            apenas olhares atentos sobre filmes que merecem ser discutidos.
          </p>
          <p>
            As críticas são publicadas em português e inglês, com o objetivo de alcançar públicos e
            festivais além das fronteiras do Brasil.
          </p>
        </div>

        <div className="sobre-secao">
          <h2>Cobertura e credenciais</h2>
          <p>
            Tenho interesse em cobrir festivais, cabines de imprensa e lançamentos. Para solicitações
            de credencial ou envio de material de imprensa, entre em contato pelo e-mail abaixo.
          </p>
        </div>

        <div className="sobre-secao">
          <h2>Contato</h2>
          <p>
            Para parcerias, credenciais de imprensa, sugestões ou apenas para falar sobre cinema:
          </p>
          <div className="sobre-contatos">
            <a href="mailto:cinemacomorafa@gmail.com" className="link-contato">
              cinemacomorafa@gmail.com
            </a>
            <a
              href="https://letterboxd.com/bissigorafael/"
              target="_blank"
              rel="noreferrer"
              className="link-letterboxd"
            >
              Letterboxd ↗
            </a>
            <a
              href="https://instagram.com/cinemacomorafa"
              target="_blank"
              rel="noreferrer"
              className="link-contato"
            >
              Instagram ↗
            </a>
            <a
              href="https://x.com/cinemacomorafa"
              target="_blank"
              rel="noreferrer"
              className="link-contato"
            >
              X / Twitter ↗
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
