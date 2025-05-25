
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-extrabold">
              <span className="text-rural-orange">AGRO</span>
              <span className="text-rural-green">SINOP RURAL</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rural-green font-medium relative group">
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rural-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/propriedades" className="text-gray-700 hover:text-rural-green font-medium relative group">
              Propriedades
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rural-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-rural-green font-medium relative group">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rural-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <Input 
              type="text" 
              placeholder="Buscar fazenda..." 
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:ring-rural-green focus:border-rural-green"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="relative mb-4">
              <Input 
                type="text" 
                placeholder="Buscar fazenda..." 
                className="pl-10 pr-4 py-2 w-full rounded-full"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-rural-green font-medium p-2 hover:bg-gray-50 rounded-md">
                Início
              </Link>
              <Link to="/propriedades" className="text-gray-700 hover:text-rural-green font-medium p-2 hover:bg-gray-50 rounded-md">
                Propriedades
              </Link>
              <Link to="/sobre" className="text-gray-700 hover:text-rural-green font-medium p-2 hover:bg-gray-50 rounded-md">
                Sobre
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
