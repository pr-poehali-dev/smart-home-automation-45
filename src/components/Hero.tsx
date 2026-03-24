import Icon from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 text-sage mb-8">
          <span className="w-2 h-2 rounded-full bg-sage" />
          <span className="text-sm">Профилактическая игра для подростков 13–18 лет</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.1] text-balance mb-8">
          Выбор правильного
          <br />
          <span className="italic">пути</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
          Интерактивная игра в формате «Своей игры», которая помогает подросткам осознанно формировать здоровые привычки и принимать правильные решения.
        </p>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Users" size={18} className="text-sage" />
            <span className="text-sm">Охват: более 150 человек</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="User" size={18} className="text-sage" />
            <span className="text-sm">Автор: Михайлова Ксения Николаевна</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Award" size={18} className="text-sage" />
            <span className="text-sm">Специалист по работе с молодёжью</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base hover:opacity-90 transition-all duration-300"
          >
            Узнать подробнее
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 px-8 py-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            О проекте
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-border" />
      </div>
    </section>
  );
}
