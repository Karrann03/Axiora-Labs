import { motion } from 'motion/react';
import { fadeIn } from '../animations/variants';
import { Briefcase, MapPin, Clock, ArrowRight, Star, Coffee, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const openRoles = [
  { id: 1, title: 'Full Stack Developer', type: 'Full Time', location: 'Noida (On-site)', salary: 'Competitive' },
  { id: 2, title: 'UI/UX Designer', type: 'Full Time', location: 'Remote', salary: 'Competitive' },
  { id: 3, title: 'Brand strategist', type: 'Contract', location: 'Remote', salary: 'Performance Based' },
  { id: 4, title: 'Social Media Intern', type: 'Internship', location: 'Hybrid', salary: 'Stipend' },
];

export default function Careers() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
           variants={fadeIn('down', 0.2)}
           initial="hidden"
           animate="show"
           className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
            BUILD THE <span className="text-zinc-300">FUTURE</span>
          </h1>
          <p className="text-xl text-black/60 font-medium leading-relaxed uppercase tracking-tighter">
            Axiora Labs is an incubator for talent. Join our mission to revolutionize how local brands scale.
          </p>
        </motion.div>

        {/* Culture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 grayscale"
          >
             <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e5381bb04?auto=format&fit=crop&q=80" className="h-80 w-full object-cover" alt="Culture 1" />
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" className="h-48 w-full object-cover" alt="Culture 2" />
             </div>
             <div className="space-y-4 pt-12">
               <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" className="h-48 w-full object-cover" alt="Culture 3" />
               <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" className="h-80 w-full object-cover" alt="Culture 4" />
             </div>
          </motion.div>
          <motion.div
             variants={fadeIn('left', 0.5)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="space-y-12"
          >
            <h2 className="text-4xl font-display font-bold uppercase tracking-tight">WHY WORK WITH <span className="text-zinc-400">US?</span></h2>
            <div className="space-y-8">
              {[
                { icon: Zap, title: 'Extreme Growth', desc: 'Working in a startup environment means you learn 1 year of skill in 3 months.' },
                { icon: Coffee, title: 'Freedom & Ownership', desc: 'No micro-management. You own your modules, your design, and your success.' },
                { icon: Star, title: 'Revolutionary Vision', desc: 'Help us transform local businesses that have been ignored by big tech.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-black/5 rounded-none flex items-center justify-center shrink-0 text-black border border-black/10 group-hover:bg-black group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold uppercase mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-black/50 leading-relaxed max-w-md font-medium uppercase text-[10px] tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Roles Grid */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4 uppercase">OPEN <span className="text-zinc-300">ROLES</span></h2>
              <p className="text-black/40 font-bold uppercase tracking-[0.2em] text-[10px]">Find your place in the future of digital transformation.</p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/20 hidden md:block">Scroll to view all</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.id}
                variants={fadeIn('up', i * 0.1)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: true }}
                className="p-8 flex flex-col md:flex-row justify-between items-center group gap-8 border border-black/5 hover:border-black transition-all duration-500 bg-zinc-50/50"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold group-hover:text-black transition-colors uppercase tracking-tight">{role.title}</h3>
                  <div className="flex flex-wrap gap-6 text-[10px] text-black/40 font-bold uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2"><Briefcase className="w-3 h-3" /> {role.type}</span>
                    <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {role.location}</span>
                    <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {role.salary}</span>
                  </div>
                </div>
                <Link to="/contact" className="premium-button bg-black text-white hover:bg-zinc-800 items-center gap-4 py-4 px-12">
                  APPLY NOW <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="p-20 bg-black text-white text-center relative overflow-hidden">
           <motion.div
             variants={fadeIn('up', 0.2)}
             whileInView="show"
             initial="hidden"
             viewport={{ once: true }}
             className="max-w-2xl mx-auto space-y-10"
           >
              <h2 className="text-5xl font-display font-bold uppercase tracking-tight leading-none">Kickstart Your <br/><span className="text-zinc-600 italic">Career</span></h2>
              <p className="text-zinc-400 text-lg uppercase tracking-tight font-medium">
                Looking for an internship? We offer 3-6 month intensive programs for students who want to build real-world products.
              </p>
              <Link to="/contact" className="premium-button bg-white text-black hover:bg-zinc-200 mx-auto !py-4 !px-12">
                Inquire Internship
              </Link>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
