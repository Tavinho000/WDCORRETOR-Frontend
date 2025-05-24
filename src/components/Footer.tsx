
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-rural-darkGrey text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-rural-orange">WD</span>
              <span className="text-white">CORRETOR</span>
            </div>
            <p className="mb-4 text-gray-300">
              Seu parceiro confiável para encontrar as melhores propriedades rurais em todo o Brasil.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-rural-orange">Início</Link>
              </li>
              <li>
                <Link to="/propriedades" className="text-gray-300 hover:text-rural-orange">Propriedades</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-rural-orange">Sobre nós</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="mb-2 text-gray-300">Email: davidwesleiadv@gmail.com</p>
            <p className="mb-2 text-gray-300">Telefone: (66) 99988-6551</p>
            <p className="mb-2 text-gray-300">Creci: 107029</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 WD CORRETOR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
