const HeroBanner = () => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-nav">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      
      <div className="container mx-auto h-full flex items-center justify-center relative z-10">
        <div className="text-center text-primary-foreground">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-2 tracking-tight">
            Notícias em Tempo Real
          </h1>
          <p className="text-sm md:text-base opacity-90 max-w-xl mx-auto">
            Informação de qualidade, análises aprofundadas e cobertura completa dos principais acontecimentos
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1200 40" className="w-full h-8 fill-background">
          <path d="M0,40 L0,20 Q300,0 600,20 T1200,20 L1200,40 Z" />
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
