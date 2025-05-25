import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import CategoryNavbar from "@/components/CategoryNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Grid2X2, List, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PropertiesPage = () => {
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [properties, setProperties] = useState<any[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // 🔁 Carregar propriedades da API
  useEffect(() => {
    axios.get("http://3.17.157.100:3000/propriedades")
      .then(res => setProperties(res.data))
      .catch(err => console.error("Erro ao carregar propriedades:", err));
  }, []);

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen pb-16">
        <div className="bg-rural-green text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Propriedades Rurais</h1>
            <div className="flex items-center text-gray-200">
              <MapPin size={18} className="mr-1" />
              <span>Encontre a propriedade ideal para o seu investimento</span>
            </div>
          </div>
        </div>

        <CategoryNavbar />

        <div className="container mx-auto px-4 py-8">
          
          {/* Cards */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {properties.map(property => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {properties.map(property => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3">
                      <img
                        src={property.imageUrl}
                        alt={property.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      {property.isVerified && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-rural-green text-white">Verificado</Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-5 md:w-2/3">
                      <h3 className="text-lg font-semibold mb-2">{property.title}</h3>

                      <div className="flex items-center text-gray-500 mb-3">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-500">Área Total</span>
                          <p className="font-medium">{property.size} hectares</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Área Aberta</span>
                          <p className="font-medium">{property.openArea} hectares</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Distância</span>
                          <p className="font-medium">{property.distance || "N/D"}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-rural-green">
                          {property.price}
                        </div>
                        <Button asChild className="bg-rural-orange hover:bg-orange-600">
                          <a href={`/propriedade/${property.id}`}>Ver Detalhes</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Button className="bg-rural-green hover:bg-green-700">
              Carregar Mais Propriedades
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PropertiesPage;
