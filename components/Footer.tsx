// app/components/Footer.tsx

import Link from 'next/link';

const SimpleFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto border-t border-gray-700">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Copyright - Centrado en móviles, a la izquierda en pantallas grandes */}
        <div className="text-center sm:text-left mb-2 sm:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Be Satoshi. Todos los derechos reservados.</p>
        </div>

        {/* Enlaces simples - Centrados en móviles, a la derecha en pantallas grandes */}
        <div className="flex space-x-4 text-sm">
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
            Política de Privacidad
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">
            Términos de Servicio
          </Link>
        </div>
        
      </div>
    </footer>
  );
};

export default SimpleFooter;