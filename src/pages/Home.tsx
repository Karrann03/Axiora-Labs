import { motion } from 'motion/react';
import { ArrowRight, Code2, Rocket, Shield, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { fadeIn, staggerContainer } from '../animations/variants';
import { services, portfolio, testimonials } from '../data/mockData';

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <Helmet>
        <title>Axiora Labs | Building Brands Through Technology</title>
        <meta name="description" content="Axiora Labs is a premium digital agency specializing in software solutions, web development, branding, and digital marketing." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 border-b border-black/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              <span>EST. 2026 — WE ARE STARTING NOW</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] tracking-tighter uppercase">
              WE BUILD <br /> <span className="text-primary italic">BRANDS</span> <br /> THROUGH <br /> TECH
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 max-w-lg leading-relaxed font-medium uppercase tracking-tight">
              Axiora Labs enables local businesses, creators, and brands to scale digitally with custom software and premium branding.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="premium-button premium-button-primary">
                Book Consultation
              </Link>
              <Link to="/services" className="premium-button premium-button-outline">
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            className="relative hidden lg:flex justify-end"
          >
            <div className="w-full max-w-md aspect-[3/4] bg-zinc-100 flex items-center justify-center relative overflow-hidden grayscale">
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[20px] border-white" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 text-zinc-950">
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 uppercase leading-none">
                OUR CORE <br /><span className="text-primary italic">CAPABILITIES</span>
              </h2>
              <p className="text-primary text-xl font-medium uppercase tracking-widest text-[10px]">
                Strategic digital weaponry for the modern marketplace.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeIn('up', 0.1 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-zinc-50 p-12 group hover:bg-zinc-950 hover:text-white transition-all duration-700 cursor-pointer"
              >
                <div className="mb-8">
                  <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 uppercase tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-zinc-500 group-hover:text-white/80 leading-relaxed font-medium text-xs uppercase tracking-widest transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Starting Now Section */}
      <section className="py-40 bg-zinc-950 text-white text-center overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-7xl md:text-[8rem] font-display font-bold leading-none tracking-tighter uppercase">
              WE ARE <br /> <span className="text-primary italic">STARTING</span> <br /> NOW
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium uppercase tracking-widest">
              The laboratory is open. We are currently accepting select partners for our launch phase.
            </p>
            <Link to="/contact" className="premium-button bg-white text-zinc-950 hover:bg-zinc-200 mx-auto !px-16 !py-6">
              Inquire Now
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grayscale">
           <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" alt="Tech" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Testimonials - Simplified Monochrome */}
      <section className="py-32 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                variants={fadeIn('up', index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-zinc-50 p-16 relative"
              >
                <div className="mb-10 text-primary opacity-20">
                  <Star className="w-10 h-10 fill-current" />
                </div>
                <p className="text-2xl text-zinc-950 font-medium mb-12 leading-relaxed tracking-tight uppercase">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-[0.2em]">{t.name}</h4>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
