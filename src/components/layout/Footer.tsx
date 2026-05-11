import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Partner with us', path: '/contact' },
    { name: 'Impact', path: '/about' },
  ],
  services: [
    { name: 'Web Development', path: '/services' },
    { name: 'App Development', path: '/services' },
    { name: 'Branding', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
    { name: 'Cookie Policy', path: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo1.png" alt="Axiora Labs" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <span className="text-lg font-black uppercase tracking-[0.25em] text-white">
    AXIORA LABS
  </span>
            <p className="text-zinc-500 leading-relaxed max-w-xs text-[11px] uppercase font-medium tracking-tight">
              Building brands through technology. We enable digital transformation for the next generation of startups and businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/axiora_labs?igsh=MWU5OTNqYjdxN2I1ag%3D%3D&utm_source=qr" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-[10px] mb-6 uppercase tracking-[0.2em] text-white">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-zinc-500 text-[10px] hover:text-primary transition-colors uppercase font-black tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-[10px] mb-6 uppercase tracking-[0.2em] text-white">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-zinc-500 text-[10px] hover:text-primary transition-colors uppercase font-black tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-[10px] mb-6 uppercase tracking-[0.2em] text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-zinc-500 text-[10px] uppercase font-black tracking-widest">
                <MapPin className="w-3 h-3 text-primary shrink-0" />
                <span>Shankar Nagar, Raipur, Chhattisgarh, India</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-500 text-[10px] uppercase font-black tracking-widest">
                <Phone className="w-3 h-3 text-primary shrink-0" />
                <span>+91 88274 59213</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-500 text-[10px] uppercase font-black tracking-widest">
                <Mail className="w-3 h-3 text-primary shrink-0" />
                <span>axiora.llabs@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Axiora Labs.
          </p>
          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.path} className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
