import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import NewsCard from "@/components/NewsCard";
import AuthorSidebar from "@/components/AuthorSidebar";
import Footer from "@/components/Footer";
import { newsData } from "@/data/newsData";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lupaleve - Notícias em Tempo Real</title>
        <meta
          name="description"
          content="Lupaleve - Seu portal de notícias com cobertura completa dos principais acontecimentos do Brasil e do mundo. Informação de qualidade, 24 horas por dia."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        <HeroBanner />

        <main className="flex-1 container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsData.map((news, index) => (
                  <div
                    key={news.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <NewsCard
                      id={news.id}
                      title={news.title}
                      category={news.category}
                      image={news.image}
                      date={news.date}
                      comments={news.comments}
                      excerpt={news.excerpt}
                    />
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-10">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity">
                  Carregar mais notícias
                </button>
              </div>
            </div>

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

export default Index;
