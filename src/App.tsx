import { useState } from "react";

/* ─── TYPES ──────────────────────────────────────────────── */

type Lang = "ES" | "EN";

interface Work {
  id: number;
  title: string;
  year: string;
  medium: string;
  medium_en: string;
  dims: string;
  col: string;
  img: string;
  alt: string;
  bg: string;
  available: boolean;
}


/* ─── CONSTANTS ──────────────────────────────────────────── */

const BORDER = "3px solid #0A0A0A";

const WORKS: Work[] = [
  {
    id: 1,
    title: "THE LOSERS",
    year: "2026",
    medium: "Acrílico sobre lienzo",
    medium_en: "Acrylic on canvas",
    dims: "45 × 61 cm",
    col: "col-span-2 row-span-2",
    img: "/works/work-1.jpg",
    alt: "The Losers — figura de Superman, pareja con vendas y tigre sobre fondo a cuadros rosa",
    bg: "#FFB6D9",
    available: true,
  },
  {
    id: 2,
    title: "GALERÍA DEL SIGLO XXI",
    year: "2026",
    medium: "Acrílico sobre lienzo",
    medium_en: "Acrylic on canvas",
    dims: "45 × 61 cm",
    col: "col-span-1 row-span-1",
    img: "/works/work-2.jpg",
    alt: "Galería del Siglo XXI — escena política y cultural con puppets y músicos en interior pop",
    bg: "#CC88FF",
    available: true,
  },
  {
    id: 3,
    title: "LUCHADORES DEL RENACIMIENTO",
    year: "2026",
    medium: "Acrílico y pastel sobre lienzo",
    medium_en: "Acrylic and pastel on canvas",
    dims: "17 × 24 cm",
    col: "col-span-1 row-span-1",
    img: "/works/work-3.jpg",
    alt: "El Renacimiento — máscaras de lucha libre, tortugas ninja y texto R U OK sobre fondo azul",
    bg: "#4DA6FF",
    available: true,
  },
  {
    id: 4,
    title: "psAIcho killART",
    year: "2026",
    medium: "Acrílico y pastel sobre lienzo",
    medium_en: "Acrylic and pastel on canvas",
    dims: "45 × 61cm",
    col: "col-span-1 row-span-2",
    img: "/works/work-4.jpg",
    alt: "psAIcho killART — calavera gigante, artista y esqueletos en escena POP ART",
    bg: "#FF6B9D",
    available: true,
  },
  {
    id: 5,
    title: "REALITY SHOW",
    year: "2026",
    medium: "Acrílico y pastel sobre lienzo",
    medium_en: "Acrylic and pastel on canvas",
    dims: "60 × 80 cm",
    col: "col-span-1 row-span-1",
    img: "/works/work-5.jpg",
    alt: "Reality Show — viñeta de cómic con personajes tipo joker en interior a cuadros con borde naranja",
    bg: "#FF8C00",
    available: true,
  },
  {
    id: 7,
    title: "THE LOVERS",
    year: "2026",
    medium: "Acrílico y pastel sobre lienzo",
    medium_en: "Acrylic and pastel on canvas",
    dims: "80 × 100 cm",
    col: "col-span-1 row-span-1",
    img: "/works/work-7.jpg",
    alt: "The Lovers — pareja flotando en cosmos azul, carta del tarot, enredo cuántico",
    bg: "#1A3AFF",
    available: true,
  },
  {
    id: 8,
    title: "ALL ARE WELCOME",
    year: "2026",
    medium: "Acrílico y pastel sobre lienzo",
    medium_en: "Acrylic and pastel on canvas",
    dims: "40 × 51 cm",
    col: "col-span-1 row-span-1",
    img: "/works/work-8.jpg",
    alt: "All Are Welcome — collage pop con pareja, cráneos Basquiat y texto All Are Welcome sobre fondo azul",
    bg: "#FF5500",
    available: true,
  },
];


const T = {
  nav: { works: { ES: "OBRAS", EN: "WORKS" }, about: { ES: "SOBRE", EN: "ABOUT" }, contact: { ES: "CONTACTO", EN: "CONTACT" } },
  hero: {
    tag: { ES: "Arte contemporáneo · Guadalajara · 2026", EN: "Contemporary Art · Guadalajara · 2026" },
    label: { ES: "[ MANIFIESTO ]", EN: "[ MANIFESTO ]" },
    manifesto: { ES: "Estética pop\npara capturar\nla mirada;\ncaos visual\npara incomodar\nla mente.", EN: "Pop aesthetics\nto capture\nthe gaze;\nvisual chaos\nto unsettle\nthe mind." },
    sub: { ES: "Intervengo iconos del pop, el cine y la política. No para venerarlos, sino para hackearlos.", EN: "I intervene icons of pop, cinema and politics. Not to venerate them, but to hack them." },
    cta: { ES: "VER OBRAS →", EN: "VIEW WORKS →" },
    badge: { ES: "OBRAS\nDESTACADAS\n2026", EN: "FEATURED\nWORKS\n2026" },
    stat: { ES: "+50 obras\ndisponibles", EN: "+50 works\navailable" },
  },
  gallery: {
    heading: { ES: "OBRAS", EN: "WORKS" },
    sub: { ES: "Colección 2022–2026", EN: "Collection 2022–2026" },
  },
  modal: {
    medium: { ES: "Técnica", EN: "Medium" },
    dims: { ES: "Dimensiones", EN: "Dimensions" },
    inquire: { ES: "Consultar disponibilidad", EN: "Inquire about availability" },
    close: { ES: "CERRAR ×", EN: "CLOSE ×" },
    sold: { ES: "NO DISPONIBLE", EN: "NOT AVAILABLE" },
    avail: { ES: "DISPONIBLE", EN: "AVAILABLE" },
  },
  inquire: {
    heading: { ES: "CONSULTAR OBRA", EN: "INQUIRE ABOUT WORK" },
    name: { ES: "Nombre completo", EN: "Full name" },
    email: { ES: "Correo electrónico", EN: "Email address" },
    message: { ES: "Mensaje", EN: "Message" },
    messagePlaceholder: { ES: "Cuéntame tu interés en esta obra...", EN: "Tell me about your interest in this work..." },
    send: { ES: "ENVIAR CONSULTA →", EN: "SEND INQUIRY →" },
    cancel: { ES: "CANCELAR", EN: "CANCEL" },
    sent: { ES: "¡Mensaje enviado! Te responderé pronto.", EN: "Message sent! I'll get back to you soon." },
  },
  about: {
    heading: { ES: "MANIFIESTO", EN: "MANIFESTO" },
    quote: { ES: '"USO LA ESTÉTICA POP COMO ANZUELO COMERCIAL\nPARA HACERTE PENSAR."', EN: '"I USE POP AESTHETICS AS A COMMERCIAL HOOK\nTO MAKE YOU THINK."' },
    p1: { ES: "Oscar González (Madrid, 1987) es pintor, collagista y agitador visual cuya obra atraviesa el neo-pop, el cómic underground y la crítica cultural. Su práctica parte de la iconografía del consumo—logotipos, envases, medios de comunicación—para subvertirla y devolverla al espectador como espejo incómodo.", EN: "Oscar González (Madrid, 1987) is a painter, collagist and visual agitator whose work spans neo-pop, underground comics and cultural critique. His practice starts from the iconography of consumption—logos, packaging, mass media—to subvert it and return it to the viewer as an uncomfortable mirror." },
    p2: { ES: "Formado en la Escuela de Arte y Diseño de Madrid y con residencias en Nueva York, Ciudad de México y Berlín, González ha expuesto en más de 40 instituciones y ferias internacionales. Su obra forma parte de colecciones privadas en Europa, Latinoamérica y Estados Unidos.", EN: "Trained at the Madrid School of Art and Design with residencies in New York, Mexico City and Berlin, González has exhibited in over 40 institutions and international art fairs. His work is held in private collections across Europe, Latin America and the United States." },
    stat1: { ES: ["40+", "EXPOSICIONES"] as [string, string], EN: ["40+", "EXHIBITIONS"] as [string, string] },
    stat2: { ES: ["2014", "INICIO"] as [string, string], EN: ["2014", "STARTED"] as [string, string] },
    stat3: { ES: ["3", "RESIDENCIAS"] as [string, string], EN: ["3", "RESIDENCIES"] as [string, string] },
    portrait: { ES: "Oscar González — artista visual", EN: "Oscar González — visual artist" },
    stamp: { ES: "MADRID · BERLÍN · CDMX\n© OSCAR GONZÁLEZ 2026", EN: "MADRID · BERLIN · CDMX\n© OSCAR GONZÁLEZ 2026" },
  },
  footer: {
    label: { ES: "[ CONTACTO ]", EN: "[ CONTACT ]" },
    heading: { ES: "¿HABLAMOS?\nNO MUERDO.", EN: "LET'S TALK.\nI WON'T BITE." },
    email_cta: { ES: "ENVIAR EMAIL →", EN: "SEND EMAIL →" },
    newsletter_label: { ES: "NEWSLETTER", EN: "NEWSLETTER" },
    newsletter_placeholder: { ES: "tu@correo.com", EN: "your@email.com" },
    newsletter_btn: { ES: "SUSCRIBIR →", EN: "SUBSCRIBE →" },
    newsletter_ok: { ES: "¡Suscrito!", EN: "Subscribed!" },
    copy: { ES: "© 2026 — TODOS LOS DERECHOS RESERVADOS", EN: "© 2026 — ALL RIGHTS RESERVED" },
    ig: "@osscar.gr",
    tw: "@oscar_gonzalez",
    be: "oscargonzalez.art",
  },
};

/* ─── COMPONENTS ─────────────────────────────────────────── */

function StarBurst({ color = "#FFE500", size = 60 }: { color?: string; size?: number }) {
  const pts = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8;
    const r = i % 2 === 0 ? size / 2 : size / 4;
    return `${size / 2 + r * Math.cos(a)},${size / 2 + r * Math.sin(a)}`;
  }).join(" ");
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <polygon points={pts} fill={color} stroke="#0A0A0A" strokeWidth="2" />
    </svg>
  );
}

/* ── Language Toggle ── */
function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid #FFE500",
        overflow: "hidden",
        height: "32px",
      }}
    >
      {(["ES", "EN"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.6rem",
            padding: "0 12px",
            background: lang === l ? "#FFE500" : "transparent",
            color: lang === l ? "#0A0A0A" : "#FFE500",
            border: "none",
            cursor: "pointer",
            transition: "background 0.15s, color 0.15s",
            borderRight: l === "ES" ? "2px solid #FFE500" : "none",
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

/* ── Inquire Modal ── */
function InquireModal({ work, lang, onClose }: { work: Work; lang: Lang; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta sobre obra: ${work.title}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);
    window.open(`mailto:ossgonzalez85@hotmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(10,10,10,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#FFF8E7",
          border: BORDER,
          boxShadow: "8px 8px 0 #FFE500",
          maxWidth: "520px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ background: "#FF0090", borderBottom: BORDER, padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", color: "#0A0A0A" }}>
            {T.inquire.heading[lang]}
          </p>
          <button
            onClick={onClose}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", background: "#0A0A0A", color: "#FF0090", border: "none", padding: "4px 10px", cursor: "pointer" }}
          >
            ×
          </button>
        </div>

        {/* Work info */}
        <div style={{ padding: "1rem 1.5rem", borderBottom: BORDER, background: "#FFE500" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", lineHeight: 1 }}>{work.title}</p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", marginTop: "6px" }}>
            {lang === "ES" ? work.medium : work.medium_en} · {work.dims} · {work.year}
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "1.5rem" }}>
          {sent ? (
            <div style={{ padding: "2rem", border: BORDER, background: "#0047FF", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#FFF8E7", lineHeight: 1.3 }}>
                {T.inquire.sent[lang]}
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { key: "name", label: T.inquire.name[lang], val: name, set: setName, type: "text" },
                { key: "email", label: T.inquire.email[lang], val: email, set: setEmail, type: "email" },
              ].map(({ key, label, val, set, type }) => (
                <div key={key}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    value={val}
                    onChange={(e) => set(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      border: BORDER,
                      padding: "10px 12px",
                      background: "#FFF8E7",
                      outline: "none",
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                  {T.inquire.message[lang]}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={T.inquire.messagePlaceholder[lang]}
                  rows={4}
                  required
                  style={{
                    width: "100%",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    border: BORDER,
                    padding: "10px 12px",
                    background: "#FFF8E7",
                    resize: "vertical",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  type="submit"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.7rem",
                    background: "#0A0A0A",
                    color: "#FFE500",
                    border: BORDER,
                    padding: "12px 24px",
                    cursor: "pointer",
                    boxShadow: "4px 4px 0 #FF0090",
                    transition: "transform 0.1s, box-shadow 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 #FF0090";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 #FF0090";
                  }}
                >
                  {T.inquire.send[lang]}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    background: "transparent",
                    color: "#0A0A0A",
                    border: "2px solid #0A0A0A",
                    padding: "12px 20px",
                    cursor: "pointer",
                  }}
                >
                  {T.inquire.cancel[lang]}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Artwork Modal ── */
function WorkModal({ work, lang, onClose, onInquire }: { work: Work; lang: Lang; onClose: () => void; onInquire: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(10,10,10,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#0A0A0A",
          border: BORDER,
          borderColor: "#FFE500",
          boxShadow: "10px 10px 0 #FF0090",
          maxWidth: "900px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          display: "grid",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div
          style={{
            borderBottom: "3px solid #FFE500",
            padding: "12px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#0A0A0A",
          }}
        >
          <div className="checker-yellow" style={{ width: 28, height: 28, border: "2px solid #FFE500" }} />
          <button
            onClick={onClose}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              background: "#FFE500",
              color: "#0A0A0A",
              border: "2px solid #FFE500",
              padding: "6px 14px",
              cursor: "pointer",
            }}
          >
            {T.modal.close[lang]}
          </button>
        </div>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div style={{ background: work.bg, borderRight: "3px solid #FFE500", minHeight: "360px", overflow: "hidden" }}>
            <img
              src={work.img}
              alt={work.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Museum card */}
          <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                  color: "#FFE500",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: "8px",
                }}
              >
                {work.title}
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#888", letterSpacing: "0.08em" }}>
                Oscar González, {work.year}
              </p>
            </div>

            <div style={{ border: "2px solid #333", padding: "1rem" }}>
              {[
                { label: T.modal.medium[lang], val: lang === "ES" ? work.medium : work.medium_en },
                { label: T.modal.dims[lang], val: work.dims },
                { label: "Año / Year", val: work.year },
              ].map(({ label, val }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #333", padding: "8px 0", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", flexShrink: 0 }}>{label}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#FFF8E7", textAlign: "right" }}>{val}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", gap: "1rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}>Status</span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    background: work.available ? "#FFE500" : "#444",
                    color: work.available ? "#0A0A0A" : "#888",
                    padding: "2px 10px",
                    border: work.available ? "2px solid #FFE500" : "2px solid #444",
                  }}
                >
                  {work.available ? T.modal.avail[lang] : T.modal.sold[lang]}
                </span>
              </div>
            </div>

            {work.available && (
              <button
                onClick={onInquire}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.72rem",
                  background: "#FF0090",
                  color: "#0A0A0A",
                  border: "3px solid #FF0090",
                  padding: "14px 24px",
                  cursor: "pointer",
                  boxShadow: "5px 5px 0 #FFE500",
                  textAlign: "left",
                  transition: "transform 0.1s, box-shadow 0.1s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translate(-3px,-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "8px 8px 0 #FFE500";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "5px 5px 0 #FFE500";
                }}
              >
                {T.modal.inquire[lang]} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── NavBar ── */
function NavBar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: T.nav.works[lang], href: "#obras", color: "#FFE500" },
    { label: T.nav.about[lang], href: "#manifiesto", color: "#FF0090" },
    { label: T.nav.contact[lang], href: "#contacto", color: "#0047FF" },
  ];

  return (
    <header style={{ borderBottom: BORDER, background: "#0A0A0A", position: "sticky", top: 0, zIndex: 50 }}>
      <nav className="flex items-center justify-between px-5 md:px-10" style={{ height: "64px" }}>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
            color: "#FFF8E7",
            letterSpacing: "-0.02em",
            textDecoration: "none",
            lineHeight: 1.1,
          }}
        >
          OSCAR<br />
          <span style={{ color: "#FFE500" }}>GONZÁLEZ</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {links.map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                background: color,
                color: "#0A0A0A",
                border: "2px solid " + color,
                padding: "6px 14px",
                textDecoration: "none",
                display: "block",
                transition: "transform 0.1s, box-shadow 0.1s",
                boxShadow: "3px 3px 0 rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "5px 5px 0 rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0 rgba(255,255,255,0.2)";
              }}
            >
              {label}
            </a>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.6rem",
              background: "#FFE500",
              color: "#0A0A0A",
              border: "2px solid #FFE500",
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ background: "#0A0A0A", borderTop: BORDER, padding: "20px 20px 24px" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: 0 }}>
            {links.map(({ label, href, color }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: color,
                    textDecoration: "none",
                    display: "block",
                    borderBottom: `2px solid ${color}`,
                    paddingBottom: "8px",
                  }}
                >
                  → {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ── Hero ── */
function Hero({ lang }: { lang: Lang }) {
  const lines = T.hero.manifesto[lang].split("\n");

  return (
    <section id="hero" style={{ borderBottom: BORDER, overflow: "hidden" }}>
      <div className="grid md:grid-cols-2" style={{ minHeight: "92vh" }}>
        {/* Left panel */}
        <div
          style={{
            background: "#FFE500",
            borderRight: BORDER,
            padding: "clamp(2rem, 5vw, 5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="checker-yellow" style={{ width: 40, height: 40, border: "2px solid #0A0A0A", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>
              {T.hero.tag[lang]}
            </span>
          </div>

          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 6.5vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
              }}
            >
              {lines.map((line, i) => {
                const isHighlighted = i === 0 || i === 3;
                return (
                  <span key={i} style={{ display: "block" }}>
                    {isHighlighted ? (
                      <span style={{ background: "#0A0A0A", color: "#FFE500", padding: "0 6px" }}>{line}</span>
                    ) : i === 4 ? (
                      <span style={{ color: "#FF0090" }}>{line}</span>
                    ) : line}
                  </span>
                );
              })}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.72rem, 1.3vw, 0.85rem)",
                lineHeight: 1.7,
                maxWidth: "400px",
              }}
            >
              {T.hero.sub[lang]}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#obras"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.72rem",
                background: "#0A0A0A",
                color: "#FFE500",
                border: BORDER,
                padding: "12px 24px",
                textDecoration: "none",
                boxShadow: "4px 4px 0 #FF0090",
                transition: "transform 0.1s, box-shadow 0.1s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-3px,-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "7px 7px 0 #FF0090";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 #FF0090";
              }}
            >
              {T.hero.cta[lang]}
            </a>
            <StarBurst color="#FF0090" size={52} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 700, lineHeight: 1.5 }}>
              {T.hero.stat[lang]}
            </span>
          </div>
        </div>

        {/* Right: video panel */}
        <div style={{ position: "relative", background: "#0A0A0A", minHeight: "60vw", overflow: "hidden" }}>
          <video
            src="/about-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              /* scale up to crop black letterbox borders */
              transform: "scale(1.18)",
              transformOrigin: "center center",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              background: "#FF0090",
              border: BORDER,
              padding: "12px 18px",
              transform: "rotate(-3deg)",
              boxShadow: "4px 4px 0 #0A0A0A",
            }}
          >
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", color: "#FFF8E7", lineHeight: 1.4, whiteSpace: "pre-line" }}>
              {T.hero.badge[lang]}
            </p>
          </div>
          <div
            className="checker-yellow"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 60,
              height: 60,
              borderRight: BORDER,
              borderBottom: BORDER,
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Gallery / Works ── */
function Gallery({ lang, onOpen }: { lang: Lang; onOpen: (w: Work) => void }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="obras" style={{ borderBottom: BORDER }}>
      <div
        style={{
          borderBottom: BORDER,
          background: "#0047FF",
          padding: "1rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#FFF8E7",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {T.gallery.heading[lang]}
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="checker-blue" style={{ width: 32, height: 32, border: "2px solid #FFF8E7" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "#FFF8E7", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            {T.gallery.sub[lang]} · {WORKS.length} {lang === "ES" ? "piezas" : "pieces"}
          </span>
        </div>
      </div>

      <div className="gallery-grid">
        {WORKS.map((work) => (
          <div
            key={work.id}
            className={work.col}
            style={{
              position: "relative",
              overflow: "hidden",
              border: BORDER,
              cursor: "crosshair",
              background: work.bg,
            }}
            onMouseEnter={() => setHovered(work.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onOpen(work)}
          >
            <img
              src={work.img}
              alt={work.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s",
                transform: hovered === work.id ? "scale(1.06)" : "scale(1)",
                filter: hovered === work.id ? "saturate(1.3) contrast(1.1)" : "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                transition: "opacity 0.3s",
                opacity: hovered === work.id ? 1 : 0,
              }}
            >
              <div className="checker-yellow" style={{ height: "8px", width: "100%", borderTop: BORDER }} />
              <div style={{ background: "#0A0A0A", borderTop: BORDER, padding: "14px 18px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.85rem, 2vw, 1.05rem)", color: "#FFE500", marginBottom: "4px", lineHeight: 1 }}>
                  {work.title}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#FFF8E7", lineHeight: 1.5 }}>
                  {lang === "ES" ? work.medium : work.medium_en}<br />
                  {work.dims} · {work.year}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#FF0090", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {lang === "ES" ? "→ Ver obra" : "→ View work"}
                </p>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: work.bg,
                border: "2px solid #0A0A0A",
                padding: "3px 8px",
                fontFamily: "var(--font-display)",
                fontSize: "0.58rem",
                lineHeight: 1,
                transition: "opacity 0.3s",
                opacity: hovered === work.id ? 0 : 1,
              }}
            >
              {work.year}
            </div>

            {!work.available && (
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "#0A0A0A",
                  border: "2px solid #444",
                  padding: "3px 8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.5rem",
                  color: "#888",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {T.modal.sold[lang]}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Neo-Pop Collage (right panel of About) ── */
function NeoPopCollage() {
  return (
    <svg
      viewBox="0 0 600 520"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-label="Neo-pop collage illustration with lightbulbs, skulls and POPART stamps"
    >
      <defs>
        <pattern id="cb-sm" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#FFE500" />
          <rect x="6" y="6" width="6" height="6" fill="#FFE500" />
          <rect x="6" y="0" width="6" height="6" fill="#0A0A0A" />
          <rect x="0" y="6" width="6" height="6" fill="#0A0A0A" />
        </pattern>
        <pattern id="cb-pink" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="7" height="7" fill="#FF0090" />
          <rect x="7" y="7" width="7" height="7" fill="#FF0090" />
          <rect x="7" y="0" width="7" height="7" fill="#FFF8E7" />
          <rect x="0" y="7" width="7" height="7" fill="#FFF8E7" />
        </pattern>
        <pattern id="dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <rect width="18" height="18" fill="#FFE500" />
          <circle cx="9" cy="9" r="4" fill="#0A0A0A" />
        </pattern>
        <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Background panels */}
      <rect width="600" height="520" fill="#CC44CC" />
      <rect x="0" y="0" width="260" height="300" fill="#5599FF" />
      <rect x="260" y="0" width="340" height="200" fill="#FF6699" />
      <rect x="0" y="300" width="200" height="220" fill="#FF0090" />
      <rect x="200" y="350" width="400" height="170" fill="#3333BB" />
      <rect x="260" y="200" width="340" height="150" fill="#9933CC" />

      {/* Checkerboard blocks scattered */}
      <rect x="480" y="0" width="120" height="80" fill="url(#cb-sm)" />
      <rect x="0" y="420" width="100" height="100" fill="url(#cb-pink)" />
      <rect x="350" y="340" width="90" height="60" fill="url(#cb-sm)" />
      <rect x="120" y="0" width="60" height="40" fill="url(#cb-sm)" />

      {/* LARGE lightbulb — left center */}
      <g transform="translate(42, 110)">
        <ellipse cx="60" cy="55" rx="42" ry="48" fill="url(#dots)" stroke="#0A0A0A" strokeWidth="3" />
        <rect x="42" y="100" width="36" height="14" fill="#C8A000" stroke="#0A0A0A" strokeWidth="2" />
        <rect x="46" y="112" width="28" height="10" fill="#AA8800" stroke="#0A0A0A" strokeWidth="2" />
        <rect x="50" y="120" width="20" height="8" fill="#886600" stroke="#0A0A0A" strokeWidth="2" />
        {/* shine */}
        <ellipse cx="42" cy="32" rx="8" ry="12" fill="rgba(255,255,255,0.3)" />
      </g>

      {/* SMALL lightbulb — bottom left */}
      <g transform="translate(18, 350) scale(0.65)">
        <ellipse cx="60" cy="55" rx="42" ry="48" fill="url(#dots)" stroke="#0A0A0A" strokeWidth="3" />
        <rect x="42" y="100" width="36" height="14" fill="#C8A000" stroke="#0A0A0A" strokeWidth="2" />
        <rect x="46" y="112" width="28" height="10" fill="#AA8800" stroke="#0A0A0A" strokeWidth="2" />
        <rect x="50" y="120" width="20" height="8" fill="#886600" stroke="#0A0A0A" strokeWidth="2" />
      </g>

      {/* MEDIUM lightbulb — top right area */}
      <g transform="translate(490, 60) scale(0.55)">
        <ellipse cx="60" cy="55" rx="42" ry="48" fill="url(#dots)" stroke="#0A0A0A" strokeWidth="3" />
        <rect x="42" y="100" width="36" height="14" fill="#C8A000" stroke="#0A0A0A" strokeWidth="2" />
        <rect x="46" y="112" width="28" height="10" fill="#AA8800" stroke="#0A0A0A" strokeWidth="2" />
      </g>

      {/* SKULL — right side */}
      <g transform="translate(488, 220)">
        <ellipse cx="50" cy="42" rx="46" ry="44" fill="#E8E0C8" stroke="#0A0A0A" strokeWidth="3" />
        {/* eye sockets */}
        <ellipse cx="32" cy="38" rx="12" ry="14" fill="#0A0A0A" />
        <ellipse cx="68" cy="38" rx="12" ry="14" fill="#0A0A0A" />
        {/* nose */}
        <path d="M44 58 L50 70 L56 58 Z" fill="#0A0A0A" />
        {/* teeth */}
        <rect x="22" y="72" width="56" height="16" rx="3" fill="#0A0A0A" />
        <line x1="36" y1="72" x2="36" y2="88" stroke="#E8E0C8" strokeWidth="3" />
        <line x1="50" y1="72" x2="50" y2="88" stroke="#E8E0C8" strokeWidth="3" />
        <line x1="64" y1="72" x2="64" y2="88" stroke="#E8E0C8" strokeWidth="3" />
        {/* jaw */}
        <rect x="18" y="78" width="64" height="22" rx="6" fill="#E8E0C8" stroke="#0A0A0A" strokeWidth="3" />
        <line x1="36" y1="78" x2="36" y2="100" stroke="#0A0A0A" strokeWidth="2.5" />
        <line x1="50" y1="78" x2="50" y2="100" stroke="#0A0A0A" strokeWidth="2.5" />
        <line x1="64" y1="78" x2="64" y2="100" stroke="#0A0A0A" strokeWidth="2.5" />
        {/* crown */}
        <path d="M10 28 L20 8 L32 22 L50 2 L68 22 L80 8 L90 28 Z" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2.5" />
      </g>

      {/* Small skull — scattered */}
      <g transform="translate(155, 30) scale(0.45)">
        <ellipse cx="50" cy="42" rx="46" ry="44" fill="#E8E0C8" stroke="#0A0A0A" strokeWidth="3" />
        <ellipse cx="32" cy="38" rx="12" ry="14" fill="#0A0A0A" />
        <ellipse cx="68" cy="38" rx="12" ry="14" fill="#0A0A0A" />
        <path d="M44 58 L50 70 L56 58 Z" fill="#0A0A0A" />
        <rect x="18" y="78" width="64" height="22" rx="6" fill="#E8E0C8" stroke="#0A0A0A" strokeWidth="3" />
        <line x1="36" y1="78" x2="36" y2="100" stroke="#0A0A0A" strokeWidth="2.5" />
        <line x1="50" y1="78" x2="50" y2="100" stroke="#0A0A0A" strokeWidth="2.5" />
      </g>

      {/* LAUGHING FIGURE — main subject, center-right */}
      <g transform="translate(220, 55)">
        {/* Hair — messy, dark */}
        <ellipse cx="110" cy="68" rx="82" ry="80" fill="#2A1A0A" />
        <path d="M40 50 Q30 10 60 5 Q80 -5 90 20" fill="#2A1A0A" />
        <path d="M155 30 Q175 0 185 20 Q195 40 175 55" fill="#2A1A0A" />
        <path d="M60 10 Q100 -15 145 8" stroke="#2A1A0A" strokeWidth="14" fill="none" />

        {/* Face skin */}
        <ellipse cx="110" cy="90" rx="72" ry="75" fill="#D4956A" />

        {/* Beard */}
        <ellipse cx="110" cy="148" rx="58" ry="30" fill="#3A2010" />

        {/* Eyes — wide, laughing */}
        <ellipse cx="82" cy="72" rx="14" ry="10" fill="#FFF8E7" />
        <ellipse cx="138" cy="72" rx="14" ry="10" fill="#FFF8E7" />
        <circle cx="86" cy="73" r="7" fill="#2A1A0A" />
        <circle cx="142" cy="73" r="7" fill="#2A1A0A" />
        <circle cx="88" cy="70" r="2.5" fill="#fff" />
        <circle cx="144" cy="70" r="2.5" fill="#fff" />
        {/* laugh lines */}
        <path d="M62 66 Q52 72 58 82" stroke="#B07040" strokeWidth="2" fill="none" />
        <path d="M158 66 Q168 72 162 82" stroke="#B07040" strokeWidth="2" fill="none" />

        {/* Mustache */}
        <path d="M78 112 Q110 100 142 112" stroke="#2A1A0A" strokeWidth="7" fill="none" strokeLinecap="round" />

        {/* BIG laughing mouth */}
        <path d="M68 125 Q110 175 152 125" fill="#0A0A0A" />
        <path d="M68 125 Q110 165 152 125 Q140 140 110 144 Q80 140 68 125Z" fill="#CC2200" />
        {/* teeth */}
        <rect x="80" y="125" width="60" height="22" rx="4" fill="#FFF8E7" />
        <line x1="100" y1="125" x2="100" y2="147" stroke="#D0C8B0" strokeWidth="1.5" />
        <line x1="120" y1="125" x2="120" y2="147" stroke="#D0C8B0" strokeWidth="1.5" />
        <line x1="140" y1="125" x2="140" y2="147" stroke="#D0C8B0" strokeWidth="1.5" />

        {/* Neck + shirt */}
        <rect x="90" y="158" width="40" height="30" fill="#D4956A" />
        {/* Tank top */}
        <path d="M30 188 Q60 165 90 170 L90 230 Q110 240 130 230 L130 170 Q160 165 190 188 L200 290 L20 290 Z" fill="#FF4466" />
        {/* shirt text "ARTIST" */}
        <text x="85" y="235" fontFamily="Arial Black, sans-serif" fontSize="14" fill="#FFF8E7" fontWeight="900" textAnchor="middle">ARTIST</text>

        {/* Arm holding painting */}
        <path d="M190 200 Q230 190 250 210 Q265 225 255 250 L220 260 Q200 240 190 220Z" fill="#D4956A" />

        {/* Mini painting being held */}
        <rect x="215" y="200" width="90" height="110" fill="#4466CC" stroke="#0A0A0A" strokeWidth="3" rx="2" />
        <rect x="218" y="203" width="84" height="50" fill="#CC3366" />
        <rect x="218" y="253" width="84" height="55" fill="#2244AA" />
        {/* mini figures in painting */}
        <circle cx="245" cy="218" r="8" fill="#FFD700" stroke="#0A0A0A" strokeWidth="1.5" />
        <circle cx="270" cy="218" r="8" fill="#FFD700" stroke="#0A0A0A" strokeWidth="1.5" />
        <rect x="235" y="226" width="22" height="26" rx="3" fill="#AA2244" />
        <rect x="260" y="226" width="22" height="26" rx="3" fill="#2244AA" />
        <text x="260" y="300" fontFamily="Arial Black, sans-serif" fontSize="7" fill="#FFE500" fontWeight="900" textAnchor="middle">XXI CENTURY</text>

        {/* Left arm gesture */}
        <path d="M30 200 Q0 180 -15 160 Q-20 145 -5 140 Q15 138 25 160 L40 200Z" fill="#D4956A" />
        {/* pointing finger */}
        <ellipse cx="-10" cy="138" rx="8" ry="14" fill="#D4956A" stroke="#B07040" strokeWidth="1.5" />
      </g>

      {/* POPART stamp — large center */}
      <g transform="translate(165, 295)" filter="url(#rough)">
        <rect x="0" y="0" width="190" height="52" fill="none" stroke="#FF0090" strokeWidth="5" rx="4" />
        <text x="95" y="40" fontFamily="Arial Black, Impact, sans-serif" fontSize="38" fill="#FF0090" fontWeight="900" textAnchor="middle" letterSpacing="2">POPART</text>
      </g>

      {/* POPART stamp — bottom, rotated */}
      <g transform="translate(355, 420) rotate(-8)" filter="url(#rough)">
        <rect x="0" y="0" width="150" height="42" fill="none" stroke="#FFE500" strokeWidth="4" rx="3" />
        <text x="75" y="31" fontFamily="Arial Black, Impact, sans-serif" fontSize="30" fill="#FFE500" fontWeight="900" textAnchor="middle" letterSpacing="1">POPART</text>
      </g>

      {/* Scattered text elements */}
      <text x="310" y="28" fontFamily="Space Mono, monospace" fontSize="11" fill="#FFF8E7" opacity="0.7" transform="rotate(-5, 310, 28)">El Guetro</text>
      <text x="180" y="400" fontFamily="Arial Black, sans-serif" fontSize="9" fill="#FFE500" opacity="0.9">¡GO NINJA!</text>
      <text x="420" y="390" fontFamily="Space Mono, monospace" fontSize="8" fill="#FFF8E7" opacity="0.6" transform="rotate(3, 420, 390)">IN ART WE TRUST</text>

      {/* Confetti dots scattered */}
      {[
        [290, 80, "#FFE500"], [330, 150, "#FF0090"], [400, 110, "#FFE500"],
        [170, 320, "#FFF8E7"], [440, 290, "#FFE500"], [300, 430, "#FF0090"],
        [140, 200, "#FFE500"], [480, 170, "#FFF8E7"], [370, 60, "#FF0090"],
      ].map(([cx, cy, fill], i) => (
        <circle key={i} cx={cx as number} cy={cy as number} r="5" fill={fill as string} opacity="0.85" />
      ))}

      {/* Black outline border on figure area */}
      <rect x="210" y="50" width="310" height="300" fill="none" stroke="#0A0A0A" strokeWidth="0" />

      {/* Small decorative squares */}
      <rect x="440" y="420" width="22" height="22" fill="#FFE500" stroke="#0A0A0A" strokeWidth="2" transform="rotate(12, 451, 431)" />
      <rect x="130" y="455" width="18" height="18" fill="#FF0090" stroke="#0A0A0A" strokeWidth="2" transform="rotate(-8, 139, 464)" />
      <rect x="300" y="470" width="16" height="16" fill="#0047FF" stroke="#0A0A0A" strokeWidth="2" transform="rotate(15, 308, 478)" />
    </svg>
  );
}

/* ── Artist Manifesto ── */
function About({ lang }: { lang: Lang }) {
  const bioText = lang === "ES"
    ? "Me apropio de los iconos del pop, el cine y la política no para venerarlos, sino para intervenirlos. Mi obra es un glitch en la sobrecarga visual de la era digital. Creo que el arte debe perturbar a los cómodos y reconfortar a los perturbados."
    : "Oscar González (Madrid, 1987) is a visual agitator and neo-pop collagist. His work subverts the iconography of consumption — logos, packaging, media — returning it as an uncomfortable mirror. He has exhibited internationally and his work is held in private collections.";

  const stats: [string, string][] = lang === "ES"
    ? [["20+", "EXPOSICIONES"], ["2025", "INICIO"], ["3", "RESIDENCIAS"]]
    : [["20+", "EXHIBITIONS"], ["2025", "STARTED"], ["3", "RESIDENCIES"]];

  return (
    <section id="manifiesto" style={{ borderBottom: BORDER, position: "relative", overflow: "hidden" }}>
      {/* fondo.jpg — grayscale bg at 0.6 opacity */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/fondo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1)",
        opacity: 0.6,
        zIndex: 0,
      }} />

      {/* Header strip */}
      <div style={{ borderBottom: BORDER, background: "#FF0090", padding: "1rem 2.5rem", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0A0A0A", lineHeight: 1, letterSpacing: "-0.02em" }}>
          {lang === "ES" ? "MANIFIESTO" : "MANIFESTO"}
        </h2>
      </div>

      {/* Two-column grid */}
      <div className="grid md:grid-cols-2" style={{ minHeight: "560px", position: "relative", zIndex: 1 }}>

        {/* LEFT: torn paper */}
        <div style={{ padding: "clamp(2rem, 5vw, 4rem)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            background: "#f5f2eb",
            clipPath: "polygon(1% 2%, 98% 0%, 100% 4%, 99% 96%, 96% 100%, 3% 99%, 0% 95%, 1% 10%)",
            transform: "rotate(-1deg)",
            boxShadow: "8px 14px 45px rgba(0,0,0,0.6), 2px 2px 0 rgba(0,0,0,0.15)",
            padding: "clamp(1.8rem, 4vw, 3rem)",
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            width: "100%",
          }}>
            <blockquote style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              borderLeft: "4px solid #FF0090",
              paddingLeft: "1.2rem",
              margin: 0,
              color: "#0A0A0A",
              textTransform: "uppercase",
              fontWeight: 900,
            }}>
              {lang === "ES"
                ? '"EL ARTE ES EL GLITCH EN LA MATRIZ DEL CONSUMO POP"'
                : '"ART IS THE GLITCH IN THE MATRIX OF POP CONSUMPTION"'}
            </blockquote>

            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.72rem, 1.4vw, 0.85rem)",
              lineHeight: 1.8,
              color: "#1a1410",
            }}>
              {bioText}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "2px solid rgba(0,0,0,0.12)", paddingTop: "1.2rem" }}>
              {stats.map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1, color: "#0A0A0A", fontWeight: 900 }}>{num}</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.18em", marginTop: "4px", textTransform: "uppercase", color: "#3a3028" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: artist collage */}
        <div style={{ position: "relative", minHeight: "560px", overflow: "hidden" }}>
          {/* Pop-art collage bg blocks */}
          <div style={{ position: "absolute", inset: 0, background: "#0047FF" }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "42%", height: "48%", background: "#FF0090" }} />
          <div style={{ position: "absolute", top: "28%", right: 0, width: "38%", height: "42%", background: "#FFE500" }} />
          <div style={{ position: "absolute", bottom: 0, left: "15%", width: "55%", height: "28%", background: "#00B857" }} />
          <div style={{ position: "absolute", top: "8%", left: "48%", width: "28%", height: "22%", background: "#FF5500" }} />
          <div style={{ position: "absolute", top: "55%", left: "5%", width: "20%", height: "18%", background: "#FFE500" }} />
          {/* checker accent */}
          <div className="checker-yellow" style={{ position: "absolute", top: "4%", right: "4%", width: 56, height: 56, opacity: 0.8 }} />
          <div className="checker-magenta" style={{ position: "absolute", bottom: "8%", left: "3%", width: 40, height: 40, opacity: 0.7 }} />
          {/* POPART stamp */}
          <div style={{ position: "absolute", bottom: "18%", left: "4%", fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem,2.5vw,1.8rem)", fontWeight: 900, color: "#FFF8E7", border: "3px solid #FFF8E7", padding: "4px 10px", transform: "rotate(-8deg)", opacity: 0.9, letterSpacing: "0.05em" }}>POPART</div>
          <div style={{ position: "absolute", top: "6%", left: "6%", fontFamily: "var(--font-display)", fontSize: "clamp(0.6rem,1.2vw,0.85rem)", fontWeight: 900, color: "#0A0A0A", border: "2px solid #0A0A0A", padding: "3px 8px", transform: "rotate(5deg)", background: "#FFE500" }}>NEO-POP</div>
          <div style={{ position: "absolute", top: "15%", right: "6%", fontFamily: "var(--font-display)", fontSize: "clamp(0.55rem,1vw,0.75rem)", fontWeight: 900, color: "#FFF8E7", border: "2px solid #FFF8E7", padding: "2px 6px", transform: "rotate(-4deg)", background: "#0047FF" }}>COLLAGE</div>

          {/* boceto1 — right side, near the artist */}
          <img src="/boceto1.png" alt="" aria-hidden="true" style={{
            position: "absolute", top: "18%", right: "2%",
            width: "clamp(175px, 36%, 260px)",
            filter: "drop-shadow(3px 4px 10px rgba(0,0,0,0.6))",
            animation: "float 2.5s ease-in-out infinite alternate",
            zIndex: 5,
            pointerEvents: "none",
          }} />

          {/* boceto2 — left side, near the artist */}
          <img src="/boceto2.png" alt="" aria-hidden="true" style={{
            position: "absolute", top: "12%", left: "2%",
            width: "clamp(120px, 26%, 185px)",
            filter: "drop-shadow(3px 4px 10px rgba(0,0,0,0.6))",
            animation: "float 2.5s ease-in-out 0.9s infinite alternate",
            zIndex: 5,
            pointerEvents: "none",
          }} />

          {/* boceto3 — left side, above POPART stamp (stamp is bottom 18% left 4%) */}
          <img src="/boceto3.png" alt="" aria-hidden="true" style={{
            position: "absolute", bottom: "30%", left: "5%",
            width: "clamp(70px, 14%, 105px)",
            filter: "drop-shadow(2px 3px 6px rgba(0,0,0,0.5))",
            animation: "float 2.5s ease-in-out 1.6s infinite alternate",
            zIndex: 5,
            pointerEvents: "none",
          }} />

          {/* pintor.png + hand-drawn silhouette — grouped so SVG coords match the image */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 4 }}>
            <div style={{ position: "relative", height: "93%", display: "inline-flex", alignItems: "flex-end" }}>
              {/* hand-drawn wobble silhouette — behind the photo */}
              <svg
                viewBox="0 0 433 576"
                preserveAspectRatio="xMidYMid meet"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, overflow: "visible" }}
                aria-hidden="true"
              >
                <path
                  d="
                    M 222,8
                    C 248,4 278,14 298,34
                    C 316,52 326,76 331,103
                    C 335,122 332,142 322,158
                    C 313,172 300,180 284,185
                    C 303,183 328,184 356,196
                    C 378,208 396,230 404,258
                    C 412,287 406,320 394,350
                    C 382,378 365,400 352,424
                    C 340,446 332,470 329,500
                    L 326,576

                    L 107,576
                    L 104,500
                    C 101,470 93,446 81,424
                    C 68,400 51,378 39,350
                    C 27,320 21,287 29,258
                    C 37,230 55,208 77,196
                    C 105,184 130,183 149,185
                    C 133,180 120,172 111,158
                    C 101,142 98,122 102,103
                    C 107,76 117,52 135,34
                    C 155,14 184,4 222,8
                    Z
                  "
                  fill="none"
                  stroke="#FFEB00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="9 4 6 3 8 5 4 7 3 6"
                  style={{ animation: "silhouetteWobble 2.8s ease-in-out infinite" } as React.CSSProperties}
                />
              </svg>
              {/* photo — in front */}
              <img
                src="/pintor.png"
                alt="Oscar González — artista"
                style={{
                  height: "100%",
                  width: "auto",
                  display: "block",
                  position: "relative",
                  zIndex: 2,
                  filter: "drop-shadow(0 0 28px rgba(0,0,0,0.65))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer({ lang }: { lang: Lang }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const socials = [
    { label: "IG", handle: T.footer.ig, color: "#FF0090", href: "https://www.instagram.com/osscar.gr/" },
    { label: "TW", handle: T.footer.tw, color: "#0047FF", href: "#" },
    { label: "WEB", handle: T.footer.be, color: "#FFE500", href: "#" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer id="contacto" style={{ background: "#0A0A0A" }}>
      <div
        style={{
          borderBottom: "3px solid #222",
          padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "#FF0090",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {T.footer.label[lang]}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                color: "#FFF8E7",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                whiteSpace: "pre-line",
              }}
            >
              {T.footer.heading[lang].split("\n").map((line, i) => (
                <span key={i} style={{ display: "block", color: i === 0 ? "#FFF8E7" : "#FFE500" }}>{line}</span>
              ))}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "1rem" }}>
            <a
              href="mailto:ossgonzalez85@hotmail.com" target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                color: "#0A0A0A",
                background: "#FFE500",
                border: "2px solid #FFE500",
                padding: "14px 28px",
                textDecoration: "none",
                boxShadow: "5px 5px 0 #FF0090",
                display: "block",
                transition: "transform 0.1s, box-shadow 0.1s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-3px,-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "8px 8px 0 #FF0090";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "5px 5px 0 #FF0090";
              }}
            >
              {T.footer.email_cta[lang]}
            </a>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#555", textAlign: "center" }}>
              ossgonzalez85@hotmail.com
            </span>
          </div>
        </div>

        {/* Newsletter */}
        <div
          style={{
            border: "2px solid #222",
            padding: "1.5rem",
            maxWidth: "460px",
          }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.7rem", color: "#FFE500", marginBottom: "12px", letterSpacing: "0.05em" }}>
            {T.footer.newsletter_label[lang]}
          </p>
          {subscribed ? (
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#0047FF" }}>
              {T.footer.newsletter_ok[lang]}
            </p>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 0 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={T.footer.newsletter_placeholder[lang]}
                required
                style={{
                  flex: 1,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  background: "#111",
                  color: "#FFF8E7",
                  border: "2px solid #333",
                  borderRight: "none",
                  padding: "10px 14px",
                  outline: "none",
                  minWidth: 0,
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.62rem",
                  background: "#0047FF",
                  color: "#FFF8E7",
                  border: "2px solid #0047FF",
                  padding: "10px 16px",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0035cc")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0047FF")}
              >
                {T.footer.newsletter_btn[lang]}
              </button>
            </form>
          )}
        </div>

        {/* Socials */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {socials.map(({ label, handle, color, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "#0A0A0A",
                background: color,
                border: "2px solid " + color,
                padding: "8px 16px",
                textDecoration: "none",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                fontWeight: 700,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem" }}>{label}</span>
              {handle}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          padding: "1rem clamp(1.5rem, 5vw, 4rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#FFE500", letterSpacing: "-0.02em" }}>
          OSCAR <span style={{ color: "#FF0090" }}>GONZÁLEZ</span>
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#444", letterSpacing: "0.1em" }}>
          {T.footer.copy[lang]}
        </span>
        <div className="checker-yellow" style={{ width: 24, height: 24, border: "2px solid #333" }} />
      </div>
    </footer>
  );
}

/* ─── APP ────────────────────────────────────────────────── */

export default function App() {
  const [lang, setLang] = useState<Lang>("ES");
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const [inquireTarget, setInquireTarget] = useState<Work | null>(null);

  const openWorkModal = (w: Work) => setActiveWork(w);
  const openInquireFromModal = () => {
    if (activeWork) {
      setInquireTarget(activeWork);
      setActiveWork(null);
    }
  };
  const closeAll = () => { setActiveWork(null); setInquireTarget(null); };

  return (
    <div style={{ fontFamily: "var(--font-mono)" }}>
      <NavBar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Gallery lang={lang} onOpen={openWorkModal} />
      <About lang={lang} />
      <Footer lang={lang} />

      {activeWork && (
        <WorkModal
          work={activeWork}
          lang={lang}
          onClose={closeAll}
          onInquire={openInquireFromModal}
        />
      )}

      {inquireTarget && (
        <InquireModal
          work={inquireTarget}
          lang={lang}
          onClose={closeAll}
        />
      )}
    </div>
  );
}
