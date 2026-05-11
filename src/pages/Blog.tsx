import { motion } from 'motion/react';
import { fadeIn } from '../animations/variants';
import { blogs } from '../data/mockData';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tighter">
              LAB <span className="text-zinc-300">/</span> JOURNAL
            </h1>
            <p className="text-xl text-black/60 font-medium leading-relaxed uppercase tracking-widest text-xs">
              Insights on digital transformation, branding, and tech.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            className="w-full lg:w-max"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-black/40 w-4 h-4" />
              <input 
                type="text" 
                placeholder="SEARCH ARCHIVE..."
                className="w-full lg:w-96 bg-zinc-50 border border-black/5 rounded-none px-14 py-4 focus:outline-none focus:border-black transition-all font-bold uppercase tracking-widest text-[10px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Featured Post */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden aspect-[21/9] mb-20 group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
            alt="Featured Blog" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-12 w-full lg:w-2/3 space-y-6 text-white">
            <span className="px-4 py-2 bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px]">Featured</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold hover:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">THE FOUNDATION OF DIGITAL SUPREMACY</h2>
            <div className="flex items-center gap-6 text-white/40 text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> OCT 15, 2024</div>
              <div className="flex items-center gap-2"><User className="w-4 h-4" /> KARAN VERMA</div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogs.length > 0 ? blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              variants={fadeIn('up', 0.1 * (i + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden border border-black/5 hover:border-black transition-all duration-500 bg-zinc-50/50"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale"
                />
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-black text-[9px] font-bold uppercase tracking-widest text-white">{blog.category}</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest">{blog.date}</p>
                <h3 className="text-2xl font-display font-bold group-hover:text-black transition-colors leading-snug uppercase tracking-tight">{blog.title}</h3>
                <p className="text-black/50 line-clamp-2 uppercase font-medium text-[11px] tracking-tight">{blog.excerpt}</p>
                <button className="flex items-center gap-2 text-black text-[10px] uppercase tracking-widest font-bold pt-4 group/btn">
                  Read Article <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-full py-20 text-center border border-black/5 bg-zinc-50/50">
               <p className="text-zinc-300 font-display text-4xl uppercase tracking-tighter font-bold">Research in Progress — Articles Coming Soon</p>
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div className="p-20 bg-black text-white flex flex-col lg:flex-row justify-between items-center gap-12">
           <div className="max-w-md">
             <h2 className="text-5xl font-display font-bold mb-4 uppercase leading-none">Stay <br/><span className="text-zinc-600">Sync'd</span></h2>
             <p className="text-zinc-400 font-medium uppercase tracking-tight">Latest tech insights delivered to your inbox.</p>
           </div>
           <div className="w-full lg:w-max flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="bg-zinc-900 border-none px-8 py-5 w-full sm:w-80 focus:outline-none focus:ring-1 focus:ring-zinc-700 font-bold uppercase tracking-widest text-xs"
              />
              <button className="premium-button bg-white text-black hover:bg-zinc-200 uppercase px-12">Subscribe</button>
           </div>
        </div>
      </div>
    </div>
  );
}
