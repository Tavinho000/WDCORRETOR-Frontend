import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from 'axios';
import PropertyCard from "@/components/PropertyCard";

interface FarmData {
  id: string;
  title: string;
  description?: string;
  location: string;
  price: string;
  size: string;
  openArea: string;
  plantedArea?: string;
  area_lavoura?: string;
  imageUrl: string;
  imageUrls?: string;
  isVerified: boolean;
  distance?: string;
  soilType?: string;
  features?: string;
  cond_pag?: string;
  status?: string;
  camp_safra: boolean;
  camp_videos?: string;
}

const AdminPage: React.FC = () => {
  const [farmData, setFarmData] = useState<Omit<FarmData, 'id'>>({
    title: '',
    description: '',
    location: '',
    price: '',
    size: '',
    openArea: '',
    plantedArea: '',
    area_lavoura: '',
    imageUrl: '',
    imageUrls: '',
    isVerified: false,
    distance: '',
    soilType: '',
    features: '',
    cond_pag: '',
    status: '',
    camp_safra: false,
    camp_videos: '',
  });

  const [farms, setFarms] = useState<FarmData[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://3.17.157.100:3000/propriedades');
        setFarms(response.data);
      } catch (error) {
        console.error("Erro ao buscar propriedades:", error);
        toast.error("Erro ao carregar propriedades");
      }
    };

    fetchProperties();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, type, value, checked } = target;
    setFarmData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://3.17.157.100:3000/propriedades', farmData);
      const newFarm = response.data;
      setFarms(prev => [...prev, newFarm]);
      toast.success("Fazenda criada com sucesso!");
      setFarmData({
        title: '',
        description: '',
        location: '',
        price: '',
        size: '',
        openArea: '',
        plantedArea: '',
        area_lavoura: '',
        imageUrl: '',
        imageUrls: '',
        isVerified: false,
        distance: '',
        soilType: '',
        features: '',
        cond_pag: '',
        status: '',
        camp_safra: false,
        camp_videos: '',
      });
    } catch (error) {
      toast.error("Erro ao criar fazenda");
      console.error(error);
    }
  };

  const handleDelete = async (idToDelete: string) => {
    try {
      await axios.delete(`http://3.17.157.100:3000/propriedades/${idToDelete}`);
      setFarms(prev => prev.filter(farm => farm.id !== idToDelete));
      toast.success("Fazenda deletada com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar fazenda");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Administração de Fazendas</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="title"
            value={farmData.title}
            onChange={handleChange}
            placeholder="Título da Fazenda"
            required
          />
          <Input
            name="location"
            value={farmData.location}
            onChange={handleChange}
            placeholder="Localização"
            required
          />
          <Input
            name="price"
            value={farmData.price}
            onChange={handleChange}
            placeholder="Preço"
            required
          />
          <Input
            name="size"
            value={farmData.size}
            onChange={handleChange}
            placeholder="Tamanho (ha)"
            required
          />
          <Input
            name="openArea"
            value={farmData.openArea}
            onChange={handleChange}
            placeholder="Área Aberta (ha)"
            required
          />
          <Input
            name="plantedArea"
            value={farmData.plantedArea || ''}
            onChange={handleChange}
            placeholder="Área Plantada (ha)"
          />
          <Input
            name="area_lavoura"
            value={farmData.area_lavoura || ''}
            onChange={handleChange}
            placeholder="Área de Lavoura (ha)"
          />
          <Input
            name="imageUrl"
            value={farmData.imageUrl}
            onChange={handleChange}
            placeholder="URL da Imagem"
            required
          />
          <Input
            name="imageUrls"
            value={farmData.imageUrls || ''}
            onChange={handleChange}
            placeholder="URLs das Imagens"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isVerified"
              checked={farmData.isVerified}
              onChange={handleChange}
              className="mr-2"
              id="isVerified"
            />
            <label htmlFor="isVerified" className="text-sm cursor-pointer">Fazenda Verificada</label>
          </div>
          <Input
            name="distance"
            value={farmData.distance || ''}
            onChange={handleChange}
            placeholder="Distância da Cidade"
          />
          <Input
            name="soilType"
            value={farmData.soilType || ''}
            onChange={handleChange}
            placeholder="Tipo de Solo"
          />
          <Input
            name="features"
            value={farmData.features || ''}
            onChange={handleChange}
            placeholder="Características"
          />
          <Input
            name="cond_pag"
            value={farmData.cond_pag || ''}
            onChange={handleChange}
            placeholder="Condição de Pagamento"
          />
          <Input
            name="status"
            value={farmData.status || ''}
            onChange={handleChange}
            placeholder="Status"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              name="camp_safra"
              checked={farmData.camp_safra}
              onChange={handleChange}
              className="mr-2"
              id="camp_safra"
            />
            <label htmlFor="camp_safra" className="text-sm cursor-pointer">Campo Safra</label>
          </div>
          <Input
            name="camp_videos"
            value={farmData.camp_videos || ''}
            onChange={handleChange}
            placeholder="Vídeos do Campo"
          />
          <Input
            name="description"
            value={farmData.description || ''}
            onChange={handleChange}
            placeholder="Descrição"
          />
        </div>
        <Button type="submit" className="mt-4">Criar Fazenda</Button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Fazendas Cadastradas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {farms.map(farm => (
          <PropertyCard key={farm.id} {...farm} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
