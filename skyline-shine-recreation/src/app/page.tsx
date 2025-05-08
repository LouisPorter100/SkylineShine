import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center flex items-center justify-start text-white py-32 md:py-48 lg:py-64"
        style={{ backgroundImage: "url('/images/homepage-hero-background.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for better text readability */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Elevate Your View With Skyline Shine
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Step into a world where excellence meets precision and every approach is tailored to perfection. Discover how our unmatched expertise in window cleaning can enhance the clarity and shine of your space, taking your property to new heights of cleanliness and appeal.
            </p>
            <Link href="/contact" className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors duration-200 text-lg">
              Get My Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Serving Your Area</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 text-center">
            {['Milford', 'White Lake', 'Brighton', 'Novi', 'West Bloomfield', 'Commerce', 'Clarkston', 'Holly'].map((area) => (
              <div key={area} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-600">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section (from homepage content) */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Window Cleaning</h3>
              <p className="text-gray-700 leading-relaxed">
                The interior of the window we use the traditional sponge to loosen up dirt and a squeegee to wipe every window clean. For the exterior we use water-fed poles attached to a water purifier tank which doesn’t require soap but leaves a spot-free finish on the exterior of every single window, Restoring to curb appeal.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Gutter Cleaning</h3>
              <p className="text-gray-700 leading-relaxed">
                Our gutter cleaning process is very simple we simply prop a ladder against a stable contact point and work our way down every gutter using our hands and a scooper clearing them of all debris so water can flow freely.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Pressure Washing</h3>
              <p className="text-gray-700 leading-relaxed">
                We pressure wash using a high-pressure water spray to remove any dirt, grime, mold, and other debris from any outdoor surfaces. This process is quick, efficient, and ideal for tough stains, restoring the surface to its original cleanliness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

