import { motion } from 'motion/react';
import { fadeIn } from '../animations/variants';
import { team } from '../data/mockData';
import { Target, Eye, Users2, Rocket, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight uppercase">
              WE ARE <span className="text-primary italic">AXIORA</span> LABS
            </h1>
            <p className="text-xl text-black/60 font-medium leading-relaxed uppercase tracking-tighter">
              Founded in the tech hub of Raipur, <strong>Axiora Labs</strong> is a powerhouse of digital innovation. We bridge the gap between complex technology and everyday business needs.
            </p>
            <div className="space-y-6 text-black/50 leading-relaxed font-medium italic">
              <p>
                "Our journey started with a simple observation: Local businesses have incredible potential but limited digital reach. We decided to change that by bringing startup-level tech to the streets."
              </p>
              <div className="flex flex-col gap-4 not-italic font-bold text-black font-display uppercase tracking-widest text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-primary" />
                  <span>Karan Verma, Founder</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-primary" />
                  <span>Prashant Rao, Co-Founder</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="Our Team Workspace" 
              className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700 border border-zinc-100"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-zinc-50 rounded-full" />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            variants={fadeIn('up', 0.2)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true }}
            className="glass-card p-12 hover:border-primary transition-colors duration-500"
          >
            <Target className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-display font-bold mb-6 uppercase">Our Mission</h2>
            <p className="text-black/60 text-lg leading-relaxed font-medium">
              To empower local businesses and startups by providing high-fidelity tech solutions, branding, and marketing strategies that drive measurable growth and long-term sustainability.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true }}
            className="glass-card p-12 hover:border-primary transition-colors duration-500"
          >
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-display font-bold mb-6 uppercase">Our Vision</h2>
            <p className="text-black/60 text-lg leading-relaxed font-medium">
              To become the global standard for digital transformation, where every brand, no matter how small, has access to the cutting-edge technology needed to compete in the modern economy.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 uppercase">THE <span className="text-primary italic">VALUES</span> WE LIVE BY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Heart, title: 'Empathy First', desc: 'We treat every client project as our own, understanding the sweat and blood behind every business.' },
              { icon: Rocket, title: 'Extreme Innovation', desc: 'If there is a better way to do it, we will find it. We never settle for "standard."' },
              { icon: Award, title: 'Quality Obsessed', desc: 'From the first line of code to the final brand guidelines, perfection is our benchmark.' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeIn('up', i * 0.2)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: true }}
                className="space-y-6 group"
              >
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold uppercase group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-black/50 font-medium leading-relaxed uppercase tracking-widest text-[10px]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 uppercase">MEET THE <br/><span className="text-primary italic">BRAINS</span></h2>
            <p className="text-black/40 text-lg max-w-2xl mx-auto uppercase font-bold tracking-widest">The founders driving the digital revolution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeIn('up', i * 0.2)}
                whileInView="show"
                initial="hidden"
                viewport={{ once: true }}
                className="group relative overflow-hidden aspect-[4/5] bg-zinc-100 border border-zinc-200"
              >
                {/* <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                /> */}
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-primary/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 p-10 text-white z-10">
                   <h3 className="text-3xl font-display font-bold mb-2 uppercase group-hover:text-white transition-colors">{member.name}</h3>
                   <p className="text-white/60 font-bold tracking-widest text-sm uppercase">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
