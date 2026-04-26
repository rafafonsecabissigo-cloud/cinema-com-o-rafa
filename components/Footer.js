"use client";
import Image from "next/image";
import { useState } from "react";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-form-id";

export default function Footer() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.target);
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("sent");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <footer id="contato" className="footer">

      {/* ── BLOCO PRINCIPAL ── */}
      <div className="footer-main">

        {/* Coluna esquerda — bio */}
        <div className="footer-bio">
          <div className="footer-bio-author">
            <Image
              src="https://i.postimg.cc/8sQPwTcv/WhatsApp-Image-2026-03-30-at-11-03-36-(1).jpg"
              alt="Rafael Bissigo"
              className="footer-avatar"
              width={56}
              height={56}
            />
            <div>
              <p className="footer-author-name">Rafael Bissigo</p>
              <p className="footer-author-role">Crítico independente · João Pessoa, PB</p>
            </div>
          </div>

          <p className="footer-bio-text">
            Crítico e apaixonado pelo cinema. Minha relação com a sétima arte nasce
            tanto do encantamento na poltrona quanto da curiosidade pelos bastidores
            da criação.
          </p>

          <div className="footer-email-block">
            <span className="footer-email-label">Contato e credenciais de imprensa</span>
            <a href="mailto:cinemacomorafa@gmail.com" className="footer-email-link">
              cinemacomorafa@gmail.com
            </a>
          </div>

          <div className="footer-socials">
            <a href="mailto:cinemacomorafa@gmail.com" className="footer-social-link">E-mail</a>
            <a href="https://letterboxd.com/bissigorafael/" target="_blank" rel="noreferrer" className="footer-social-link">Letterboxd ↗</a>
            <a href="https://instagram.com/cinemacomorafa" target="_blank" rel="noreferrer" className="footer-social-link">Instagram ↗</a>
            <a href="https://x.com/cinemacomorafa" target="_blank" rel="noreferrer" className="footer-social-link">X / Twitter ↗</a>
          </div>
        </div>

        {/* Divisor vertical */}
        <div className="footer-divider-v" aria-hidden="true" />

        {/* Coluna direita — formulário */}
        <div className="footer-contact">
          <p className="footer-contact-title">Fale comigo</p>
          <p className="footer-contact-helper">
            Sugestões, parcerias, cabines de imprensa ou recomendações de filmes?
          </p>

          <form
            onSubmit={handleSubmit}
            className="footer-form"
            aria-label="Formulário de contato"
          >
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              className="footer-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="footer-input"
              required
            />
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Escreva sua mensagem..."
              className="footer-input footer-textarea"
              required
            />

            {status === "idle" && (
              <button type="submit" className="footer-btn">Enviar mensagem</button>
            )}
            {status === "sending" && (
              <button type="button" disabled className="footer-btn footer-btn--disabled">Enviando...</button>
            )}
            {status === "sent" && (
              <p className="footer-status footer-status--ok">✓ Mensagem enviada! Responderei em breve.</p>
            )}
            {status === "error" && (
              <p className="footer-status footer-status--err">Erro ao enviar. Tente pelo e-mail diretamente.</p>
            )}
          </form>
        </div>
      </div>

      {/* ── RODAPÉ INFERIOR ── */}
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} Cinema com o Rafa</span>
        <span className="footer-copy">João Pessoa · PB · Brasil</span>
      </div>

    </footer>
  );
}
