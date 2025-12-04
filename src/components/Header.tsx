import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-header text-header-foreground">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-nav-hover rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-xs font-body uppercase tracking-widest opacity-80">
                blog
              </span>
              <span className="text-2xl md:text-3xl font-heading font-black tracking-tight">
                Lupaleve
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="O que você procura?"
                className="w-full px-4 py-2 pr-10 rounded-md bg-primary-foreground text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Search Toggle */}
          <button
            className="md:hidden p-2 hover:bg-nav-hover rounded-md transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="O que você procura?"
                className="w-full px-4 py-2 pr-10 rounded-md bg-primary-foreground text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-nav animate-fade-in">
          <div className="container mx-auto py-2">
            {[
              "Página Principal",
              "Brasil",
              "Política",
              "Economia",
              "Tecnologia",
              "Esportes",
              "Cultura",
              "Opinião",
            ].map((item, index) => (
              <Link
                key={item}
                to={index === 0 ? "/" : `/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="block nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
