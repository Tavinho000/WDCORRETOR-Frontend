
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";


interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2969&auto=format&fit=crop"
}: HeroSectionProps) {
  return (
    <div 
      className="relative bg-cover bg-center h-[500px] flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
            {title.split(' ').map((word, index) => (
              <span key={index} className={index % 2 === 0 ? "text-white" : "text-rural-orange"}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">{subtitle}</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/propriedades">
            <Button className="bg-rural-orange hover:bg-amber-500 text-white px-8 py-6 rounded-lg text-lg shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
              Ver Propriedades
            </Button>
          </Link>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-rural-green px-8 py-6 rounded-lg text-lg shadow-lg transition-all duration-300">
              <MapPin className="mr-2" />
              Contato
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
