import { motion } from 'motion/react';
import { fadeIn } from '../animations/variants';
import { services } from '../data/mockData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
            Services <span className="text-zinc-300">/</span> Solutions
          </h1>
          <p className="text-xl text-black/60 font-medium leading-relaxed uppercase tracking-tighter">
            Strategic digital arsenal for the future-ready brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn('up', (index % 3) * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card p-10 group hover:border-black transition-all duration-500"
            >
              <div className="w-16 h-16 bg-black/5 rounded-none flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500">
                <service.icon className="w-8 h-8 text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-black/50 mb-8 leading-relaxed font-medium text-sm">
                {service.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span className="text-xs font-bold uppercase tracking-widest text-black/40">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact" 
                className="flex items-center gap-2 font-bold text-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all"
              >
                Inquire Service <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Section for "How we work" */}
        <div className="mt-32 p-12 bg-black text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-display font-bold uppercase tracking-tight leading-none">Need a <br/><span className="text-zinc-500">Custom</span> <br/>Project?</h2>
              <p className="text-zinc-400 text-lg uppercase tracking-tight font-medium">
                Every business has unique challenges. We build bespoke digital products that fit your specific needs perfectly.
              </p>
              <Link to="/contact" className="premium-button bg-white text-black hover:bg-zinc-200 w-fit">
                Start a Conversation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="p-10 bg-black">
                <p className="text-4xl font-display font-bold text-white mb-2 uppercase">100%</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Custom Craft</p>
              </div>
              <div className="p-10 bg-black">
                <p className="text-4xl font-display font-bold text-white mb-2 uppercase">Core</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Direct Access</p>
              </div>
              <div className="p-10 bg-black">
                <p className="text-4xl font-display font-bold text-white mb-2 uppercase">Scale</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Ready Architecture</p>
              </div>
              <div className="p-10 bg-black">
                <p className="text-4xl font-display font-bold text-white mb-2 uppercase">Pro</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Design Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
