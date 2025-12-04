import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";
import AuthorSidebar from "@/components/AuthorSidebar";
import Footer from "@/components/Footer";
import { newsData } from "@/data/newsData";

const categoryNames: Record<string, string> = {
  brasil: "Brasil",
  politica: "Política",
  economia: "Economia",
  tecnologia: "Tecnologia",
  esportes: "Esportes",
  cultura: "Cultura",
  opiniao: "Opinião",
};

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = categoryNames[category || ""] || category;
  
  const filteredNews = newsData.filter(
    (news) => news.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <>
      <Helmet>
        <title>{categoryName} - Lupaleve</title>
        <meta
          name="description"
          content={`Notícias de ${categoryName} no Lupaleve. Cobertura completa e atualizada.`}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />

        {/* Category Header */}
        <div className="bg-primary py-8">
          <div className="container mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              {categoryName}
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              {filteredNews.length} notícias encontradas
            </p>
          </div>
        </div>

        <main className="flex-1 container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News Grid */}
            <div className="lg:col-span-2">
              {filteredNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredNews.map((news, index) => (
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
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Nenhuma notícia encontrada nesta categoria.
                  </p>
                </div>
              )}
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

export default Category;
