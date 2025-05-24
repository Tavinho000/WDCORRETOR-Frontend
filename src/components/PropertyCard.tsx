import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface PropertyCardProps {
  id: string; // Id é obrigatório
  title: string;
  location: string;
  price: string;
  size: string;
  openArea: string;
  distance?: string;
  imageUrl: string;
  isVerified: boolean;
  onDelete: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  size,
  openArea,
  distance,
  imageUrl,
  isVerified,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {isVerified && (
          <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded">
            Verificado
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-sm text-gray-500">Área Total</span>
            <p className="font-medium">{size} hectares</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Área Aberta</span>
            <p className="font-medium">{openArea} hectares</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Distância</span>
            <p className="font-medium">{distance || "N/D"}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="text-xl font-bold text-green-600">{price}</div>
          <Button onClick={() => onDelete(id)} variant="destructive">
            Deletar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
