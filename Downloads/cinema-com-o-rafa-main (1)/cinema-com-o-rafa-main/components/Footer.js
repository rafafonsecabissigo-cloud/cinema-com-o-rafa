import Image from "next/image";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-form-id";

export default function Footer() {
  return (
    <footer id="contato">
      <div className="sobre-mim-rodape">
        <Image
          src="https://i.postimg.cc/8sQPwTcv/Whats-App-Image-2026-03-30-at-11-03-36-(1).jpg"
          alt="Foto de Rafael Bissigo"
          className="foto-perfil"
          width={200}
          height={200}
        />

        <div className="texto-sobre">
          <div className="footer-columns">
            <section className="footer-bio">
              <h3>Sobre o Autor</h3>
              <p>
                Sou Rafael Bissigo, crítico e apaixonado pelo cinema, baseado em João Pessoa (PB).
                Minha relação com a sétima arte nasce tanto do encantamento na poltrona quanto da
                curiosidade pelos bastidores da criação.
              </p>

              <div className="contatos-grid">
                <a href="mailto:cinemacomorafa@gmail.com" className="link-contato">
                  E-mail ✉️
                </a>
                <a
                  href="https://letterboxd.com/bissigorafael/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-letterboxd"
                >
                  Meu Letterboxd ↗
                </a>
              </div>
            </section>

            <section className="footer-contact-panel">
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="contact-form"
                aria-label="Formulário de contato"
              >
                <h4>Fale comigo</h4>
                <p className="contact-helper">
                  Sugestões, parcerias ou recomendações de filmes? Me manda uma mensagem.
                </p>
                <input type="text" name="nome" placeholder="Seu nome" required />
                <input type="email" name="email" placeholder="Seu e-mail" required />
                <textarea name="mensagem" rows="4" placeholder="Escreva sua mensagem..." required />
                <button type="submit">Enviar mensagem</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
