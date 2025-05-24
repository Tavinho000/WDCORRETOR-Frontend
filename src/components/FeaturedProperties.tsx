
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";

// Sample data for featured properties
const FEATURED_PROPERTIES = [
  {
    id: "1",
    title: "Fazenda em Nova Bandeirantes",
    location: "Nova Bandeirantes, Mato Grosso",
    price: "R$ 33.280.000,00",
    size: "710",
    openArea: "550",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2969&auto=format&fit=crop",
    isVerified: true,
    distance: "7km da cidade",
    soilType: "argila 30 a 35%"
  },
  {
    id: "2",
    title: "Fazenda em Novo Progresso",
    location: "Novo Progresso, Pará",
    price: "R$ 80.000.000,00",
    size: "2.000",
    openArea: "700",
    imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=2969&auto=format&fit=crop",
    isVerified: true,
    distance: "100km da cidade",
    soilType: "argila 30 a 45%"
  },
  {
    id: "3",
    title: "Fazenda em São José do Xingu",
    location: "São José do Xingu, Mato Grosso",
    price: "R$ 70.000.000,00",
    size: "8.200",
    openArea: "5.300",
    plantedArea: "2.570",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2969&auto=format&fit=crop",
    isVerified: true,
    distance: "60km da cidade",
    soilType: "argila 18 a 31%"
  },
  {
    id: "4",
    title: "Fazenda em Paranatinga",
    location: "Paranatinga, Mato Grosso",
    price: "R$ 200.000.000,00",
    size: "1.000",
    openArea: "570",
    imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=2969&auto=format&fit=crop",
    isVerified: true,
    distance: "90km da cidade",
    soilType: "argila 20 a 25%"
  }
];

export default function FeaturedProperties() {
  const [visibleProperties] = useState(FEATURED_PROPERTIES);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Propriedades em <span className="text-rural-green">Destaque</span></h2>
            <div className="w-20 h-1 bg-rural-orange"></div>
          </div>
          <Button variant="outline" className="border-rural-green text-rural-green hover:bg-rural-green hover:text-white mt-4 md:mt-0 rounded-full">
            Ver Todas <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
