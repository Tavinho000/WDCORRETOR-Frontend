
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Icons for categories
import { Building, TractorIcon, Truck, Wheat, Gavel, Briefcase } from "lucide-react";

const categories = [
  {
    name: "Fazendas",
    icon: Building,
    link: "/propriedades",
    active: true
  },
  {
    name: "Arrendamentos",
    icon: TractorIcon, 
    link: "/arrendamentos"
  },
];

export default function CategoryNavbar() {
  return (
    <div className="border-b bg-white">
      <div className="container mx-auto px-4 relative flex items-center justify-between py-2">
        <div className="overflow-x-auto flex items-center space-x-1 md:space-x-3 pb-1">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={category.link}
              className={`flex flex-col items-center p-2 rounded-md whitespace-nowrap ${
                category.active 
                  ? "text-rural-green border-b-2 border-rural-green font-medium" 
                  : "text-gray-600 hover:text-rural-green"
              }`}
            >
              <category.icon className="h-5 w-5 mb-1" />
              <span className="text-xs sm:text-sm">{category.name}</span>
            </Link>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="flex items-center rounded-full border-green-100 shadow-sm ml-2 whitespace-nowrap bg-white"
        >
          <Filter size={16} className="mr-2 text-rural-green" />
          <span className="text-gray-700">Filter results</span>
          <span className="bg-rural-orange text-white rounded-full h-5 w-5 flex items-center justify-center text-xs ml-2">1</span>
        </Button>
      </div>
    </div>
  );
}
