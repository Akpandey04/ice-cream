

export default function Navbar() {
  return (
    <header className="site-header" id="siteHeader">
      <a className="brand" href="#hero" aria-label="Sundae Atelier home">
        <span className="brand__scoop"></span>
        <span>Sundae Atelier</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#collection">Collection</a>
        <a href="#flavours">Flavours</a>
        <a href="#story">Story</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <a className="nav-cta magnetic" href="#newsletter">Reserve a Box</a>
    </header>
  );
}
