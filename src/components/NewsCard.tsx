import { Link } from "react-router-dom";
import { Clock, MessageCircle } from "lucide-react";

interface NewsCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  comments: number;
  excerpt?: string;
  featured?: boolean;
}

const NewsCard = ({
  id,
  title,
  category,
  image,
  date,
  comments,
  excerpt,
  featured = false,
}: NewsCardProps) => {
  return (
    <article
      className={`news-card ${featured ? "md:col-span-2 lg:col-span-1" : ""}`}
      style={{ animationDelay: `${parseInt(id) * 100}ms` }}
    >
      <Link to={`/noticia/${id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
          />
          <span className="category-badge absolute top-4 left-4">{category}</span>
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/noticia/${id}`}>
          <h3 className="font-heading font-bold text-lg md:text-xl text-card-foreground leading-tight hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        {excerpt && (
          <p className="mt-2 text-muted-foreground text-sm line-clamp-3">
            {excerpt}
          </p>
        )}

        <Link to={`/noticia/${id}`} className="read-more inline-block mt-4">
          Leia mais »
        </Link>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={14} />
            {comments === 0 ? "Nenhum comentário" : `${comments} comentários`}
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
