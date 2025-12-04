import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const AuthorSidebar = () => {
  return (
    <aside className="space-y-6">
      {/* Author Card */}
      <div className="bg-card rounded-lg p-6 shadow-md text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
            alt="Editor"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-heading font-bold text-xl text-accent">
          Equipe Lupaleve
        </h3>
        <p className="text-muted-foreground text-sm mt-2">
          Jornalismo independente, notícias em tempo real e análises aprofundadas
          sobre os principais acontecimentos.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-border">
          <a
            href="#"
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-primary rounded-lg p-6 text-primary-foreground">
        <h4 className="font-heading font-bold text-lg mb-2">Newsletter</h4>
        <p className="text-sm opacity-90 mb-4">
          Receba as principais notícias direto no seu e-mail.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-2 rounded-md text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Inscrever-se
          </button>
        </form>
      </div>

      {/* Most Read */}
      <div className="bg-card rounded-lg p-6 shadow-md">
        <h4 className="font-heading font-bold text-lg mb-4 pb-2 border-b border-border">
          Mais Lidas
        </h4>
        <ul className="space-y-4">
          {[
            "Reforma tributária entra em nova fase de debates",
            "Tecnologia brasileira ganha destaque internacional",
            "Mercado financeiro reage a decisões do BC",
            "Nova política de saúde é anunciada pelo governo",
          ].map((title, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                {index + 1}
              </span>
              <a
                href="#"
                className="text-sm text-card-foreground hover:text-accent transition-colors line-clamp-2"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AuthorSidebar;
