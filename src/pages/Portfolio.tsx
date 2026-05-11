import { motion } from 'motion/react';
import { fadeIn } from '../animations/variants';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <motion.div
           variants={fadeIn('down', 0.2)}
           initial="hidden"
           animate="show"
           className="text-center max-w-4xl mx-auto space-y-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-[10px] font-bold uppercase tracking-[0.3em] text-white">
            <span>PORTFOLIO — WORK IN PROGRESS</span>
          </div>
          <h1 className="text-7xl md:text-[12rem] font-display font-bold mb-6 leading-none tracking-tighter uppercase">
            WE ARE <br /> <span className="text-zinc-200">STARTING</span> <br /> NOW
          </h1>
          <p className="text-2xl text-black/40 font-medium leading-relaxed max-w-2xl mx-auto uppercase tracking-tighter">
            Axiora Labs is currently building the next generation of digital products for our early partners. 
          </p>
          <div className="pt-12 border-t border-black/5">
             <p className="text-sm font-bold uppercase tracking-widest text-black/20">Case studies dropping soon.</p>
          </div>
          <Link to="/contact" className="premium-button premium-button-primary mx-auto !px-12">
            Build Your Brand With Us
          </Link>
        </motion.div>

        {/* Stats Strip - Simplified B&W */}
        <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-black pt-20">
            <div>
              <p className="text-black/30 font-bold uppercase tracking-widest text-[10px] mb-4">Focus 01</p>
              <h4 className="text-2xl font-display font-bold uppercase mt-2">Extreme High Quality</h4>
            </div>
            <div>
              <p className="text-black/30 font-bold uppercase tracking-widest text-[10px] mb-4">Focus 02</p>
              <h4 className="text-2xl font-display font-bold uppercase mt-2">Modern Technology</h4>
            </div>
            <div>
              <p className="text-black/30 font-bold uppercase tracking-widest text-[10px] mb-4">Focus 03</p>
              <h4 className="text-2xl font-display font-bold uppercase mt-2">Scalable Architecture</h4>
            </div>
            <div>
              <p className="text-black/30 font-bold uppercase tracking-widest text-[10px] mb-4">Focus 04</p>
              <h4 className="text-2xl font-display font-bold uppercase mt-2">Direct Founder Access</h4>
            </div>
        </div>
      </div>
    </div>
  );
}
