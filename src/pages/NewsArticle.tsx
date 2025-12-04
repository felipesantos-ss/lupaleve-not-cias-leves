import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, MessageCircle, Share2, Facebook, Twitter } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import AuthorSidebar from "@/components/AuthorSidebar";
import Footer from "@/components/Footer";
import { getNewsById, newsData } from "@/data/newsData";

const NewsArticle = () => {
  const { id } = useParams<{ id: string }>();
  const article = getNewsById(id || "");

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        <main className="flex-1 container mx-auto py-16 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">
            Notícia não encontrada
          </h1>
          <Link to="/" className="text-accent hover:underline">
            Voltar para a página inicial
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedNews = newsData
    .filter((n) => n.id !== article.id && n.category === article.category)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} - Lupaleve</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />

        <main className="flex-1 container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:text-accent transition-colors"
                >
                  <ArrowLeft size={16} />
                  Voltar
                </Link>
                <span>/</span>
                <span className="text-accent">{article.category}</span>
              </div>

              {/* Article Header */}
              <header className="mb-6">
                <span className="category-badge mb-4 inline-block">
                  {article.category}
                </span>
                <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={16} />
                    {article.comments} comentários
                  </span>
                </div>
              </header>

              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg font-medium leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <h2 className="font-heading text-xl font-bold mt-8 mb-4">
                  Principais pontos
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Primeiro ponto importante da notícia</li>
                  <li>Segundo aspecto relevante a ser destacado</li>
                  <li>Terceiro elemento fundamental para compreensão</li>
                  <li>Quarto item de destaque na cobertura</li>
                </ul>
                <p className="mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Share2 size={18} />
                  Compartilhar:
                </span>
                <button className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Twitter size={18} />
                </button>
              </div>

              {/* Related News */}
              {relatedNews.length > 0 && (
                <section className="mt-12">
                  <h3 className="font-heading text-xl font-bold mb-6 pb-2 border-b border-border">
                    Notícias Relacionadas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedNews.map((news) => (
                      <Link
                        key={news.id}
                        to={`/noticia/${news.id}`}
                        className="group"
                      >
                        <div className="rounded-lg overflow-hidden mb-2">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-sm font-medium text-card-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {news.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AuthorSidebar />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NewsArticle;
