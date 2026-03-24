import { motion } from 'motion/react';
import { 
  Dumbbell, 
  Phone, 
  MapPin, 
  Instagram, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Clock,
  Trophy,
  Users
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Using public folder paths for the new gym photos
// Updated gallery configuration
const gymPhotos = [
  "/gym1.jpg.jpeg",
  "/gym2.jpg.jpeg",
  "/gym3.jpg.jpeg",
  "/gym4.jpg.jpeg",
  "/gym5.jpg.jpeg",
  "/gym6.jpg.jpeg"
];

const WHATSAPP_NUMBER = "918789205796";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-red-900/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <Dumbbell className="w-8 h-8 text-red-600" />
              <span className="font-display text-2xl tracking-wider uppercase">Aghori Vamachara</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Services', 'Plans', 'Gallery', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                Join Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 py-4"
          >
            <div className="flex flex-col items-center gap-4">
              {['Home', 'About', 'Services', 'Plans', 'Gallery', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-lg font-medium text-gray-300 hover:text-red-500 transition-colors uppercase tracking-wider w-full py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/gym1.jpg.jpeg" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tight mb-6">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Body</span><br />
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
              Join Aghori Vamachara Gym Today. Unleash your true potential with premium equipment and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                Join Now <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+918789205796"
                className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-zinc-900 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Dumbbell className="w-8 h-8 text-red-500" />, title: "Modern Equipment", desc: "State-of-the-art machines for optimal results." },
              { icon: <Trophy className="w-8 h-8 text-red-500" />, title: "Certified Trainers", desc: "Expert guidance to reach your fitness goals." },
              { icon: <Users className="w-8 h-8 text-red-500" />, title: "Affordable Plans", desc: "Premium fitness experience that fits your budget." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-black/50 border border-white/5 hover:border-red-500/30 transition-colors"
              >
                <div className="bg-red-500/10 p-4 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                <img 
                  src="/gym2.jpg.jpeg" 
                  alt="Aghori Vamachara Gym Training" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-red-600 p-8 rounded-3xl hidden md:block">
                <h3 className="font-display text-5xl mb-2">15+</h3>
                <p className="text-sm font-medium uppercase tracking-wider">Years of<br/>Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-red-500 font-bold tracking-widest uppercase mb-2">About Us</h4>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight mb-6">
                Forging Strength,<br/>Building Character
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Welcome to Aghori Vamachara Gym, where dedication meets results. We are more than just a fitness center; we are a community of individuals committed to pushing boundaries and achieving greatness.
              </p>
              <div className="bg-zinc-900 p-6 rounded-2xl border-l-4 border-red-600 mb-8">
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-400">To empower people to achieve ultimate strength, fitness, and mental resilience through expert guidance and a supportive environment.</p>
              </div>
              <ul className="space-y-4">
                {['Premium workout environment', 'Personalized training programs', 'Nutrition guidance', 'Supportive community'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-red-500 font-bold tracking-widest uppercase mb-2">Our Services</h4>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Weight Training", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", fallback: "" },
              { title: "Cardio Training", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop", fallback: "" },
              { title: "Personal Training", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070&auto=format&fit=crop", fallback: "" },
              { title: "Fat Loss Program", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", fallback: "" },
              { title: "Muscle Gain Program", img: "/muscle.jpg.jpeg", fallback: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" },
              { title: "Diet Plan", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop", fallback: "" },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    if (service.fallback) e.currentTarget.src = service.fallback;
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold uppercase tracking-wide mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">{service.title}</h3>
                  <div className="w-12 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-red-500 font-bold tracking-widest uppercase mb-2">Membership</h4>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight">
              Choose Your Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 1 Month */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-3xl p-8 border border-white/5 hover:border-red-500/30 transition-colors flex flex-col"
            >
              <h3 className="text-2xl font-bold uppercase mb-2">1 Month</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-display">₹1000</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Full gym access', 'Cardio & Weights', 'Locker room access'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in the 1 Month membership plan (₹1000).`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black font-bold uppercase tracking-wider transition-colors text-center"
              >
                Select Plan
              </a>
            </motion.div>

            {/* 2 Month - Popular */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-b from-red-900/40 to-zinc-900 rounded-3xl p-8 border border-red-500 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-red-900/20"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-1">
                Most Popular 🔥
              </div>
              <h3 className="text-2xl font-bold uppercase mb-2 text-red-100">2 Months</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-display text-white">₹1499</span>
                <span className="text-red-400 line-through text-lg">₹2000</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Full gym access', 'Cardio & Weights', 'Locker room access', 'Diet consultation', 'Best value for money'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-red-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in the 2 Month popular membership plan (₹1499).`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider transition-colors text-center"
              >
                Select Plan
              </a>
            </motion.div>

            {/* 6 Month */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900 rounded-3xl p-8 border border-white/5 hover:border-red-500/30 transition-colors flex flex-col"
            >
              <h3 className="text-2xl font-bold uppercase mb-2">6 Months</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-display">₹3999</span>
                <span className="text-gray-500 line-through text-lg">₹6000</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Full gym access', 'Cardio & Weights', 'Locker room access', 'Diet consultation', 'Long term commitment'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in the 6 Month membership plan (₹3999).`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black font-bold uppercase tracking-wider transition-colors text-center"
              >
                Select Plan
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-red-500 font-bold tracking-widest uppercase mb-2">Gallery</h4>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight">
              Inside The Gym
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gymPhotos.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="overflow-hidden rounded-2xl h-[500px]"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-${1534438327276 + idx}-14e5300c3a48?q=80&w=800&auto=format&fit=crop`;
                  }}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-red-500 font-bold tracking-widest uppercase mb-2">Contact Us</h4>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-4 rounded-full text-red-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Location</h4>
                    <p className="text-gray-400">Gandhi Maidanpath, Masaurhi,<br/>Rahmat Ganj, Patna-804452, Bihar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-4 rounded-full text-red-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Phone</h4>
                    <a href="tel:+918789205796" className="text-gray-400 hover:text-white transition-colors">+91 8789205796</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-4 rounded-full text-red-500">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Instagram</h4>
                    <a href="https://instagram.com/aghori_vamachara" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">@aghori_vamachara</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900 p-4 rounded-full text-red-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Hours</h4>
                    <p className="text-gray-400">Mon - Sat: 5:00 AM - 10:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://jsdl.in/DT-476F9DXTIC6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-full transition-colors flex items-center gap-2 font-medium"
                >
                  <MapPin className="w-5 h-5 text-red-500" /> Google Profile
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-8 rounded-3xl border border-white/5"
            >
              <h3 className="text-2xl font-bold uppercase mb-6">Send a Message</h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const phone = formData.get('phone');
                  const message = formData.get('message');
                  
                  const whatsappMessage = `New Enquiry from Website%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
                }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="+91 0000000000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    required
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                    placeholder="I'm interested in joining..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-8 h-8 text-red-600" />
                <span className="font-display text-2xl tracking-wider uppercase">Aghori Vamachara</span>
              </div>
              <p className="text-gray-400 text-sm max-w-sm">
                Gandhi Maidanpath, Masaurhi, Rahmat Ganj, Patna-804452, Bihar
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a href="https://jsdl.in/DT-476F9DXTIC6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" /> Google Profile
              </a>
              <a href="https://instagram.com/aghori_vamachara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" /> @aghori_vamachara
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Aghori Vamachara Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-900/20 hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
