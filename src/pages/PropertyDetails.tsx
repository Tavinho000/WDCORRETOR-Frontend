import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Check, MapPin, Phone } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { Building2, CloudRain } from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [property, setProperty] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://wdcorretor-backend.onrender.com/propriedades/${id}`)
      .then((res) => setProperty(res.data))
      .catch(() => setProperty(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-10 text-center">Carregando detalhes...</div>;

  if (!property) {
    return (
      <>
        <Header />
        <main className="p-10 text-center">
          <h1 className="text-2xl font-bold">Propriedade não encontrada</h1>
          <p className="text-gray-600 mt-2">Verifique se o link está correto.</p>
        </main>
        <Footer />
      </>
    );
  }

  const featureList = property.features ? property.features.split(",") : [];
  const additionalImages = property.imageUrls ? property.imageUrls.split(",") : [];
  const allImages = [property.imageUrl, ...additionalImages];
  const videoUrls = property.videoUrls ? property.videoUrls.split(",") : [];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % allImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

  return (
    <>
      <Header />
      <main className="pb-16">
        {/* Header */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-3xl font-bold text-rural-green mb-2">
                  {property.price || "R$ 0,00"} <span className="text-sm text-gray-600">/ reais</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                   <strong>{property.cond_pag}</strong>
                </div>
                <Badge className="bg-rural-orange text-white">À venda</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna esquerda */}
            <div className="md:col-span-2">
              {/* Galeria de imagens */}
              {allImages.length > 0 && (
                <div className="relative mt-6">
                  <div className="w-full overflow-hidden rounded-lg">
                    <img
                      src={allImages[currentImage]?.trim()}
                      alt={`Imagem ${currentImage + 1}`}
                      className="w-full max-h-[80vh] object-cover transition duration-300 mx-auto"
                    />
                  </div>
                  <button onClick={prevImage} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">←</button>
                  <button onClick={nextImage} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">→</button>
                  <div className="flex justify-center mt-4 gap-2">
                    {allImages.map((_, idx) => (
                      <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentImage ? "bg-rural-green" : "bg-gray-300"}`}></div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detalhes */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <h2 className="text-2xl font-semibold mb-4">Detalhes da Propriedade</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div><p className="text-sm text-gray-500">Área Total</p><p className="font-semibold">{property.size} hectares</p></div>
                  <div><p className="text-sm text-gray-500">Área Aberta</p><p className="font-semibold">{property.openArea} hectares</p></div>
                  {property.plantedArea && <div><p className="text-sm text-gray-500">Área Plantada</p><p className="font-semibold">{property.plantedArea} hectares</p></div>}
                  {property.distance && <div><p className="text-sm text-gray-500">Distância</p><p className="font-semibold">{property.distance}</p></div>}
                  {property.soilType && <div><p className="text-sm text-gray-500">Tipo de Solo</p><p className="font-semibold">{property.soilType}</p></div>}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Descrição</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {(property.description || "Sem descrição").replace(/\/n/g, '\n')}
                  </p>
                </div>
              </div>

              {property.camp_safra && (
                // Safrinha e vantagem
                <div className="bg-white rounded-lg shadow-md p-6 mt-8 space-y-6">
                  <div className="flex items-start">
                    <CloudRain className="text-rural-green mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Região de safra e safrinha.</h3>
                      <p className="text-gray-600">
                        Regiões com ciclo de safra e safrinha são fundamentais para maximizar a produção agrícola e obter um retorno financeiro consistente ao longo do ano.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Benfeitorias */}
              {featureList.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Benfeitorias</h2>
                  <div className="flex flex-wrap gap-3">
                    {featureList.map((feature, i) => (
                      <span key={i} className="border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-700">
                        {feature.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
            {/* Galeria de vídeos */}
            {property.camp_videos && property.camp_videos.trim().length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <h2 className="text-2xl font-semibold mb-4">Galeria de Vídeos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.camp_videos
                    .split(',')
                    .map((url: string) => url.trim())
                    .filter((url) => url.length > 0)
                    .map((url: string, idx: number) => (
                      <video
                        key={idx}
                        controls
                        muted={true}
                        className="w-full rounded-lg shadow"
                      >
                        <source src={url} type="video/mp4" />
                        Seu navegador não suporta vídeo.
                      </video>
                    ))}
                </div>
              </div>
            )}
          </div>

            {/* Coluna 3: contato */}
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="text-2xl font-semibold mb-2 text-rural-green">{property.price}</div>
                <p className="text-sm text-gray-600 mb-4"><strong>{property.cond_pag}</strong></p>

                <a
                  href={`https://wa.me/5566999886551?text=Olá! Tenho interesse na fazenda: ${property.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full mb-4 bg-green-500 hover:bg-green-600">
                    <Phone className="mr-2 h-5 w-5" /> Converse no WhatsApp
                  </Button>
                </a>

                <p className="text-xs text-gray-500 mt-4">
                  Para se proteger, nunca transfira dinheiro. A plataforma serve apenas como divulgação e não assume responsabilidade pelas transações realizadas.
                </p>
                <div className="pt-6 border-t mt-6">
                  <h3 className="text-lg font-semibold mb-4">Enviar mensagem</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetails;
