import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 overflow-hidden relative">
      <div className="relative z-10 text-center space-y-10">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-[15rem] md:text-[25rem] font-display font-bold leading-none tracking-tighter text-zinc-100 select-none"
        >
          404
        </motion.h1>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full space-y-6">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold uppercase"
          >
            Lost in <span className="text-zinc-400">Void?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-zinc-400 text-lg max-w-sm mx-auto font-medium uppercase tracking-widest text-[10px]"
          >
            The page you're looking for doesn't exist or has been relocated to the digital future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="pt-6"
          >
            <Link to="/" className="premium-button premium-button-primary w-fit mx-auto group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
