import React, { useState } from 'react';
import { Phone, Star, Battery, Cpu, MemoryStick as Memory, Camera, Shield, Clock, Zap, Heart, Facebook, Twitter, Instagram, Youtube, Mail, MapPin } from 'lucide-react';

interface PhoneCard {
  id: number;
  name: string;
  price: string;
  image: string;
  specs: {
    battery: string;
    processor: string;
    ram: string;
    camera: string;
  };
}

const phones: PhoneCard[] = [
  {
    id: 1,
    name: "Galaxy Ultra Pro",
    price: "$999",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80",
    specs: {
      battery: "5000mAh",
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      camera: "108MP"
    }
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: "$1099",
    image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?auto=format&fit=crop&w=500&q=80",
    specs: {
      battery: "4500mAh",
      processor: "A17 Pro",
      ram: "8GB",
      camera: "48MP"
    }
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    price: "$899",
    image: "https://images.unsplash.com/photo-1698675145561-7e征d0b2c2?auto=format&fit=crop&w=500&q=80",
    specs: {
      battery: "4800mAh",
      processor: "Tensor G3",
      ram: "12GB",
      camera: "50MP"
    }
  }
];

const features = [
  { icon: Shield, title: "Secure Payments", description: "Your transactions are protected with industry-leading security measures" },
  { icon: Clock, title: "24/7 Support", description: "Our dedicated team is here to help you around the clock" },
  { icon: Zap, title: "Fast Delivery", description: "Get your device delivered within 24 hours in select cities" },
  { icon: Heart, title: "Satisfaction Guaranteed", description: "Love your device or get your money back within 30 days" }
];

function App() {
  const [selectedPhone, setSelectedPhone] = useState<PhoneCard | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">MobileHub</span>
            </div>
            <div className="flex space-x-4">
              <button className="text-white hover:text-cyan-200 transition-colors">Latest</button>
              <button className="text-white hover:text-cyan-200 transition-colors">Compare</button>
              <button className="text-white hover:text-cyan-200 transition-colors">Reviews</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Discover Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
              Perfect Phone
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our curated selection of premium smartphones with cutting-edge technology and exceptional performance.
          </p>
          <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all">
                <feature.icon className="h-12 w-12 text-cyan-300 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Phones Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Latest Smartphones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phones.map((phone) => (
              <div
                key={phone.id}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20"
                onClick={() => setSelectedPhone(phone)}
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{phone.name}</h2>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-3xl font-bold text-white mb-4">{phone.price}</p>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade-in Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Trade In Your Old Phone</h2>
              <p className="text-white/80 mb-8">
                Get the best value for your current device and upgrade to the latest technology. Our trade-in program makes it easy and convenient.
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all">
                Get Trade-in Value
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
                alt="Trade-in"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest smartphone news, exclusive deals, and special offers.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-l-lg focus:outline-none"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-r-lg hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Phone className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold text-white">MobileHub</span>
              </div>
              <p className="text-white/70">Your trusted destination for premium smartphones and accessories.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Support</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-white/70">
                  <Mail className="h-5 w-5" />
                  <span>support@mobilehub.com</span>
                </li>
                <li className="flex items-center space-x-2 text-white/70">
                  <MapPin className="h-5 w-5" />
                  <span>123 Tech Street, Digital City</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-white/70 hover:text-white"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-white/70 hover:text-white"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-white/70 hover:text-white"><Youtube className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2025 MobileHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedPhone && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full animate-fade-in">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{selectedPhone.name}</h2>
              <button
                onClick={() => setSelectedPhone(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={selectedPhone.image}
                alt={selectedPhone.name}
                className="rounded-lg w-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Battery className="h-5 w-5 text-blue-600" />
                    <span>{selectedPhone.specs.battery}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-5 w-5 text-blue-600" />
                    <span>{selectedPhone.specs.processor}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Memory className="h-5 w-5 text-blue-600" />
                    <span>{selectedPhone.specs.ram}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-blue-600" />
                    <span>{selectedPhone.specs.camera}</span>
                  </div>
                </div>
                <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                  Buy Now at {selectedPhone.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;