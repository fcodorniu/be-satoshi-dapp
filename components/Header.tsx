// app/components/Header.tsx

import Link from 'next/link';

// Este es un componente placeholder. Aquí iría la lógica
// para conectar la wallet usando wagmi/ethers.js.
const ConnectWalletButton = () => {
  return (
    <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300">
      Connect Wallet
    </button>
  );
};

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo y Nombre del Proyecto */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Aquí podrías poner tu logo SVG o una imagen */}
          <span className="text-2xl font-bold tracking-wider">Be Satoshi</span>
        </Link>

        {/* Menú de Navegación */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-purple-400 transition-colors duration-300">
            Search
          </Link>
          <Link href="/explore" className="hover:text-purple-400 transition-colors duration-300">
            Explore Causes
          </Link>
        </nav>

        {/* Botón de Conectar Wallet */}
        <div>
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
};

export default Header;