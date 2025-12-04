export interface NewsItem {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  comments: number;
  excerpt: string;
  content?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Governo anuncia novo pacote de medidas econômicas para 2025",
    category: "Economia",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    date: "04/12/2024 • 14:36",
    comments: 12,
    excerpt: "Ministério da Fazenda divulga conjunto de ações para estimular crescimento econômico e controlar inflação no próximo ano.",
  },
  {
    id: "2",
    title: "Brasil avança em acordos comerciais com países asiáticos",
    category: "Política",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    date: "04/12/2024 • 13:22",
    comments: 8,
    excerpt: "Novas parcerias prometem ampliar exportações brasileiras e fortalecer relações diplomáticas com o continente asiático.",
  },
  {
    id: "3",
    title: "Startup brasileira de tecnologia recebe investimento recorde",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    date: "04/12/2024 • 12:15",
    comments: 23,
    excerpt: "Empresa de inteligência artificial fundada em São Paulo conquista aporte de US$ 150 milhões em rodada Series C.",
  },
  {
    id: "4",
    title: "Seleção brasileira convoca jogadores para eliminatórias",
    category: "Esportes",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop",
    date: "04/12/2024 • 11:45",
    comments: 45,
    excerpt: "Técnico da seleção divulga lista com 26 atletas para os próximos jogos das eliminatórias da Copa do Mundo.",
  },
  {
    id: "5",
    title: "Festival de música anuncia line-up internacional",
    category: "Cultura",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
    date: "04/12/2024 • 10:30",
    comments: 67,
    excerpt: "Evento que acontece em março reunirá artistas de diversos países e promete ser o maior da história do país.",
  },
  {
    id: "6",
    title: "Nova pesquisa revela tendências de consumo dos brasileiros",
    category: "Economia",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    date: "04/12/2024 • 09:20",
    comments: 5,
    excerpt: "Estudo aponta mudanças significativas nos hábitos de compra da população após período de instabilidade econômica.",
  },
  {
    id: "7",
    title: "Senado aprova projeto de lei sobre energia renovável",
    category: "Política",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    date: "04/12/2024 • 08:45",
    comments: 18,
    excerpt: "Nova legislação estabelece metas ambiciosas para a transição energética do país até 2030.",
  },
  {
    id: "8",
    title: "Cientistas brasileiros fazem descoberta importante na Amazônia",
    category: "Brasil",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
    date: "04/12/2024 • 07:30",
    comments: 34,
    excerpt: "Equipe de pesquisadores identifica nova espécie de planta com potencial medicinal na floresta amazônica.",
  },
];

export const getNewsByCategory = (category: string): NewsItem[] => {
  return newsData.filter(
    (news) => news.category.toLowerCase() === category.toLowerCase()
  );
};

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsData.find((news) => news.id === id);
};
