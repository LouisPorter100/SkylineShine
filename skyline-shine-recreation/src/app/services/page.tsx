import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Skyline Shine',
  description: 'Learn about the window cleaning, gutter cleaning, and pressure washing services offered by Skyline Shine.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Window Cleaning',
      description: 'The interior of the window we use the traditional sponge to loosen up dirt and a squeegee to wipe every window clean. For the exterior we use water-fed poles attached to a water purifier tank which doesn’t require soap but leaves a spot-free finish on the exterior of every single window, Restoring to curb appeal.',
      imageUrl: '/images/services-window-cleaning.png',
      altText: 'Window cleaning service in action',
    },
    {
      title: 'Gutter Cleaning',
      description: 'Our gutter cleaning process is very simple we simply prop a ladder against a stable contact point and work our way down every gutter using our hands and a scooper clearing them of all debris so water can flow freely.',
      imageUrl: '/images/services-gutter-cleaning.png',
      altText: 'Gutter cleaning service in progress',
    },
    {
      title: 'Pressure Washing',
      description: 'We pressure wash using a high-pressure water spray to remove any dirt, grime, mold, and other debris from any outdoor surfaces. This process is quick, efficient, and ideal for tough stains, restoring the surface to its original cleanliness.',
      imageUrl: '/images/services-pressure-washing.png',
      altText: 'Pressure washing a surface',
    },
  ];

  return (
    <>
      {/* Hero Section for Services */}
      <section 
        className="relative bg-cover bg-center flex items-center justify-center text-white py-32 md:py-40 lg:py-48"
        style={{ backgroundImage: "url('/images/services-hero-background.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Skyline Services
          </h1>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-xl text-center flex flex-col items-center">
                <div className="w-full h-48 mb-6 relative overflow-hidden rounded-md">
                  <Image src={service.imageUrl} alt={service.altText} layout="fill" objectFit="cover" className="transform hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{service.description}</p>
                <Link href="/contact" className="mt-auto px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors duration-200">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section (Simplified from original, links to main contact page) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Have Questions?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Feel free to contact us by filling out our contact form and we will get back to you as soon as possible. Thank you!
          </p>
          <Link href="/contact" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 text-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

