import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Scale, BookOpen, Shield, Gavel, Menu, X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

// --- NAVBAR ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-legal-dark/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`font-serif text-2xl font-bold tracking-wider transition-colors duration-300 ${scrolled ? 'text-legal-paper' : 'text-legal-paper'}`}>
           T.G.R.U.
        </div>

        <div className="hidden md:flex space-x-8 text-xs tracking-[0.2em] uppercase font-sans font-medium">
          {['Chi Sono', 'Aree di Pratica', 'Metodo', 'Contatti'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-legal-paper/80 hover:text-legal-accent transition-colors duration-300 relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-legal-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden text-legal-paper cursor-pointer hover:text-legal-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-legal-dark border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-6 items-center">
            {['Chi Sono', 'Aree di Pratica', 'Metodo', 'Contatti'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                className="text-legal-paper text-2xl font-serif hover:text-legal-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- HERO SECTION ---
const Hero = () => {
  const nameParts = ["Tullio", "Gesuè", "Rizzi", "Ulmo"];

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-legal-dark overflow-hidden px-4">
      {/* Sfondo animato sottile */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#1a4038] rounded-full blur-[150px] opacity-20"
      />
      
      <div className="z-10 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-legal-accent/50 -mt-32"></div>
        
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-legal-accent text-xs md:text-sm uppercase font-sans font-medium mb-8"
        >
          Eccellenza Legale & Strategica
        </motion.p>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-legal-paper font-bold leading-[1.1]">
          {nameParts.map((part, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2 + (i * 0.15), duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-3 md:mr-8 last:mr-0 hover:text-legal-accent transition-colors duration-700 cursor-default"
            >
              {part}
            </motion.span>
          ))}
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <a href="#aree-di-pratica" className="group flex items-center gap-3 text-legal-paper px-8 py-4 border border-legal-paper/20 rounded-sm hover:bg-legal-accent hover:border-legal-accent transition-all duration-500">
            <span className="text-xs uppercase tracking-[0.2em]">Esplora lo Studio</span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-legal-paper/0 via-legal-paper/50 to-legal-paper/0"></div>
      </motion.div>
    </section>
  );
};

// --- SERVICE CARD ---
const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className="group relative bg-white border-r border-b border-legal-dark/10 p-10 md:p-14 hover:bg-legal-dark transition-colors duration-500 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl group-hover:opacity-5 transition-opacity">
       <Icon size={80} />
    </div>
    
    <div className="relative z-10">
      <div className="mb-8 text-legal-accent group-hover:text-legal-accent/80 transition-colors">
        <Icon size={32} strokeWidth={1} />
      </div>
      <h3 className="text-2xl font-serif mb-6 text-legal-dark group-hover:text-legal-paper transition-colors duration-500">{title}</h3>
      <p className="text-legal-text/70 leading-relaxed font-sans text-sm md:text-base group-hover:text-legal-paper/70 transition-colors duration-500">
        {desc}
      </p>
      
      <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="text-legal-accent text-xs uppercase tracking-widest">Dettagli</span>
        <ArrowRight size={12} className="text-legal-accent" />
      </div>
    </div>
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-legal-paper min-h-screen selection:bg-legal-accent selection:text-white overflow-x-hidden">
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-legal-accent origin-left z-[60]" />
      
      <Navbar />
      <Hero />

      {/* CHI SONO */}
      <section id="chi-sono" className="py-32 container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-5/12 relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full border border-legal-accent/30 z-0"></div>
            <div className="aspect-[3/4] bg-neutral-200 relative z-10 overflow-hidden grayscale contrast-125">
               {/* FOTO AVVOCATO */}
               <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="Avvocato" className="object-cover w-full h-full" />
               
               {/* Overlay Firma */}
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-legal-dark/80 to-transparent p-8">
                 <p className="text-white font-serif italic text-xl">Tullio Gesuè Rizzi Ulmo</p>
               </div>
            </div>
          </motion.div>
          
          <div className="lg:w-7/12">
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="text-legal-accent font-sans uppercase tracking-[0.2em] text-xs mb-6 font-bold">La Visione</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-legal-dark mb-10 leading-tight">
                Il diritto come <br/><span className="italic text-legal-accent">architettura</span> sociale.
              </h3>
              <div className="space-y-6 text-legal-text/80 text-lg leading-loose font-light border-l-2 border-legal-accent/20 pl-8">
                <p>
                  In un mondo dove la complessità è la norma, la chiarezza è l'unica vera forma di potere. Lo Studio Rizzi Ulmo non si limita ad applicare la legge; la interpreta per costruire strutture difensive e strategiche inattaccabili.
                </p>
                <p>
                  Ogni cliente è un partner, ogni caso è un'opera unica. Dall'alta finanza alla tutela dei patrimoni familiari, il nostro approccio unisce la solennità della tradizione giuridica con il dinamismo necessario per operare nei mercati moderni.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AREE DI PRATICA */}
      <section id="aree-di-pratica" className="bg-[#EAE8E0] border-t border-legal-dark/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-10 md:p-14 flex flex-col justify-center">
               <h2 className="text-4xl font-serif text-legal-dark mb-4">Aree di<br/>Eccellenza</h2>
               <div className="w-12 h-1 bg-legal-accent mb-6"></div>
               <p className="text-legal-text/60 text-sm leading-relaxed">
                 Un approccio multidisciplinare per gestire la complessità a 360 gradi. Clicca sulle schede per approfondire.
               </p>
            </div>

            <ServiceCard 
              icon={Scale}
              title="Civil Law"
              desc="Gestione di contenziosi civili complessi, arbitrati e risoluzione alternativa delle controversie."
              delay={0.1}
            />
            <ServiceCard 
              icon={Shield}
              title="Corporate"
              desc="Consulenza strategica per governance societaria, operazioni straordinarie e M&A."
              delay={0.2}
            />
            <ServiceCard 
              icon={Gavel}
              title="White Collar"
              desc="Difesa in ambito penale societario, reati finanziari e compliance aziendale (231)."
              delay={0.3}
            />
            <ServiceCard 
              icon={BookOpen}
              title="IP & Tech"
              desc="Tutela della proprietà intellettuale, brevetti e diritto delle nuove tecnologie."
              delay={0.4}
            />
             <div className="bg-legal-dark p-10 md:p-14 flex flex-col justify-center items-start text-legal-paper">
              <h3 className="text-3xl font-serif mb-6">Consulenza Dedicata</h3>
              <p className="mb-8 opacity-70 font-light leading-relaxed">Per esigenze specifiche che richiedono un approccio su misura.</p>
              <a href="#contatti" className="px-6 py-3 border border-legal-paper/30 hover:bg-legal-accent hover:border-legal-accent transition-all uppercase text-xs tracking-widest">Contattaci</a>
            </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-32 bg-legal-dark text-legal-paper relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-12">Il Dialogo.</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <span className="text-legal-accent text-sm font-bold uppercase tracking-widest mt-1">01</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Sede Principale</h4>
                    <p className="opacity-60 font-light">Via Monte Napoleone, 8<br/>20121 Milano (MI)</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="text-legal-accent text-sm font-bold uppercase tracking-widest mt-1">02</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Contatti Diretti</h4>
                    <p className="opacity-60 font-light">info@rizziulmo.it<br/>+39 02 77889900</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 backdrop-blur-sm border border-white/5">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-3 text-legal-accent">Nome</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-legal-accent outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-3 text-legal-accent">Cognome</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-legal-accent outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-legal-accent">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-legal-accent outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3 text-legal-accent">Oggetto</label>
                  <textarea rows="3" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-legal-accent outline-none transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-legal-accent hover:bg-white hover:text-legal-dark text-white py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300">
                  Invia Messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#05120F] border-t border-white/5 py-12 text-center text-white/20 text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Studio Legale Rizzi Ulmo — P.IVA 00000000000</p>
      </footer>
    </div>
  );
}

export default App;