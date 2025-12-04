import { Link, useLocation } from "react-router-dom";

const categories = [
  { name: "Página Principal", path: "/" },
  { name: "Brasil", path: "/brasil" },
  { name: "Política", path: "/politica" },
  { name: "Economia", path: "/economia" },
  { name: "Tecnologia", path: "/tecnologia" },
  { name: "Esportes", path: "/esportes" },
  { name: "Cultura", path: "/cultura" },
  { name: "Opinião", path: "/opiniao" },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-nav hidden lg:block">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center flex-wrap">
          {categories.map((category) => (
            <li key={category.path}>
              <Link
                to={category.path}
                className={`nav-link inline-block ${
                  location.pathname === category.path ? "active" : ""
                }`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
