export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Skyline Shine. All rights reserved.</p>
        <p className="text-sm mt-2">Website recreated by Manus AI</p>
        {/* Add any other footer links or information from the original site if available */}
      </div>
    </footer>
  );
}

