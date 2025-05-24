
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  icon: React.ReactNode;
  name: string;
  link: string;
  isActive?: boolean;
}

export default function CategoryItem({ icon, name, link, isActive = false }: CategoryItemProps) {
  return (
    <Link to={link}>
      <div className={`flex flex-col items-center py-3 px-4 ${isActive ? 'border-b-2 border-rural-green text-rural-green' : 'text-gray-600 hover:text-rural-green'}`}>
        <div className="mb-1">{icon}</div>
        <span className="text-sm font-medium">{name}</span>
      </div>
    </Link>
  );
}
