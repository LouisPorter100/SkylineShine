import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/skyline-shine-logo.png" alt="Skyline Shine Logo" width={180} height={60} priority />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</Link>
            <Link href="/contact" className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200">
              Get My Free Quote
            </Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here if needed */}
          </div>
        </div>
      </div>
    </header>
  );
}

