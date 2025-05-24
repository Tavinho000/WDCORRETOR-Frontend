
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PropertySearch from "@/components/PropertySearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import { Building, Home, Tractor, Truck } from "lucide-react";
import CategoryItem from "@/components/CategoryItem";

const Index = () => {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection 
          title="Encontre a Fazenda Perfeita para o Seu Investimento" 
          subtitle="Propriedades rurais selecionadas com potencial de valorização e alta produtividade"
        />
        
        <FeaturedProperties />
        
        <Stats />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                <p className="text-gray-600 mb-8">
                  Estamos à disposição para ajudar você a encontrar a propriedade rural ideal para o seu investimento ou para avaliar sua propriedade para venda.
                </p>
                <ContactForm />
              </div>
              
              <div className="flex items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Por que nos escolher?</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-rural-green mb-2">Experiência no Mercado Rural</h4>
                      <p className="text-gray-600">
                        Mais de 10 anos de experiência no mercado de propriedades rurais, com conhecimento profundo do setor agrícola.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-rural-green mb-2">Propriedades Verificadas</h4>
                      <p className="text-gray-600">
                        Todas as propriedades são cuidadosamente verificadas para garantir informações precisas e segurança nas negociações.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-rural-green mb-2">Atendimento Personalizado</h4>
                      <p className="text-gray-600">
                        Oferecemos atendimento personalizado para entender suas necessidades e encontrar as melhores oportunidades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
