
import { Card } from "@/components/ui/card";

export default function Stats() {
  const stats = [
    { value: "150+", label: "Propriedades Disponíveis" },
    { value: "10+", label: "Anos de Experiência" },
    { value: "500+", label: "Negócios Concluídos" },
    { value: "10M+", label: "Hectares Negociados" }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-rural-grey">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rural-darkGrey mb-4">Nossos Números</h2>
          <div className="h-1 w-20 bg-rural-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] rounded-xl">
              <div className="text-4xl md:text-5xl font-extrabold mb-3 text-rural-green">{stat.value}</div>
              <div className="text-sm md:text-base text-rural-darkGrey">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
