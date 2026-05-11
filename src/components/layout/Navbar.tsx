import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { cn } from '../../utils/cn';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { isMenuOpen, toggleMenu } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "nav-blur py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
  <img 
  src="/logo1.png" 
  alt="Axiora Labs" 
  className="h-10 w-auto object-contain bg-transparent" 
/>

  <span className="text-lg font-black uppercase tracking-[0.25em] text-black">
    AXIORA LABS
  </span>
</Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                cn(
                  "font-bold uppercase tracking-widest text-[10px] hover:text-primary transition-colors relative py-2",
                  isActive ? "text-primary" : "text-zinc-500"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contact" className="premium-button premium-button-primary !py-2 !px-6 text-[10px]">
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-black"
          onClick={() => toggleMenu()}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black absolute top-full left-0 w-full border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    cn(
                      "text-xl font-display font-medium transition-colors uppercase tracking-widest",
                      isActive ? "text-white" : "text-white/50 hover:text-white"
                    )
                  }
                  onClick={() => toggleMenu(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/contact" 
                className="premium-button bg-white text-black hover:bg-zinc-200 w-full"
                onClick={() => toggleMenu(false)}
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
