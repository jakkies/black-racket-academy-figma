export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-2xl font-black mb-2">BLACK RACKET</h3>
            <p className="text-gray-500">The complete package to Padel success</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">CONTACT</h4>
            <p className="text-gray-500 mb-2">info@blackracketacademy.co.za</p>
            <p className="text-gray-500">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">HOURS</h4>
            <p className="text-gray-500 mb-2">Mon-Fri: 8am - 4pm</p>
            <p className="text-gray-500">Sat: 8am - 4pm</p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © 2025 Black Racket Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
