import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src="/photogenik.png" alt="Photogenik" />
      </div>
      <div className="meta-group">
        <div className="meta">
          <span className="meta-subtitle">
            THE FUTURE OF PHOTOGRAPHY IN YOUR POCKET
          </span>
          <span className="meta-issue">ISSUE 01</span>
        </div>
        <a
          className="instagram-link"
          href="https://www.instagram.com/photogenik/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Photogenik on Instagram"
        >
          <svg
            className="instagram-icon"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.25" cy="6.75" r="1.2" />
          </svg>
        </a>
      </div>
    </header>
  );
}
