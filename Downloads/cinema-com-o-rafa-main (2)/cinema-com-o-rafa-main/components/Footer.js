"use client";
import Image from "next/image";
import { useState } from "react";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-form-id";

export default function Footer() {
  const [status, setStatus] = useState("idle");
  const isFormConfigured = !FORMSPREE_ENDPOINT.includes("your-form-id");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormConfigured) {
      setStatus("not-configured");
      return;
    }
    setStatus("sending");
    const data = new FormData(e.target);
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });
    if (res.ok) {
      setStatus("sent");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

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

              <div className="footer-email-destaque">
                <span className="footer-email-label">Contato de imprensa e credenciais:</span>
                <a href="mailto:cinemacomorafa@gmail.com" className="footer-email-link">
                  cinemacomorafa@gmail.com
                </a>
              </div>

              <div className="contatos-grid">
                <a href="mailto:cinemacomorafa@gmail.com" className="link-contato">
                  Enviar e-mail
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
            </section>

            <section className="footer-contact-panel">
              <p className="contact-panel-kicker">Canal de suporte</p>
              <form
                onSubmit={handleSubmit}
                className="contact-form"
                aria-label="Formulário de contato"
              >
                <h4>Mensagem rápida</h4>
                <p className="contact-helper">
                  Use o formulário para sugestões gerais. Para credenciais de festival, priorize o e-mail.
                </p>
                <input type="text" name="nome" placeholder="Seu nome" required />
                <input type="email" name="email" placeholder="Seu e-mail" required />
                <textarea name="mensagem" rows="4" placeholder="Escreva sua mensagem..." required />
                {status === "idle" && <button type="submit">Enviar mensagem</button>}
                {status === "sending" && <button disabled>Enviando...</button>}
                {status === "sent" && (
                  <p className="contact-status contact-status--success">
                    ✓ Mensagem enviada! Responderei em breve.
                  </p>
                )}
                {status === "not-configured" && (
                  <p className="contact-status contact-status--warning">
                    Formulário em configuração. Por enquanto, envie por e-mail.
                  </p>
                )}
                {status === "error" && (
                  <p className="contact-status contact-status--error">
                    Erro ao enviar. Tente pelo e-mail diretamente.
                  </p>
                )}
              </form>
            </section>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Cinema com o Rafa · João Pessoa, PB
      </p>
    </footer>
  );
}
