import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-header text-header-foreground mt-12">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-body uppercase tracking-widest opacity-80">
                blog
              </span>
              <h3 className="text-2xl font-heading font-black">Lupaleve</h3>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Seu portal de notícias com cobertura completa dos principais
              acontecimentos do Brasil e do mundo. Informação de qualidade,
              24 horas por dia.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {["Brasil", "Política", "Economia", "Tecnologia", "Esportes", "Cultura"].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      to={`/${cat.toLowerCase()}`}
                      className="hover:text-accent transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/sobre" className="hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-accent transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 rounded-full bg-nav hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-nav hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-nav hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-nav hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-nav text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Lupaleve. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
