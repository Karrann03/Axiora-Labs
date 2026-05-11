import { motion } from 'motion/react';
import { fadeIn } from '../animations/variants';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    serviceNeeded: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      'service_0hdh2le',
      'template_2r7mrjk',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        business_type: formData.businessType,
        service_needed: formData.serviceNeeded,
        message: formData.message,
      },
      'XQkIyEORpBb3QI9T0'
    );

    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      businessType: '',
      serviceNeeded: '',
      message: '',
    });

  } catch (error) {
    console.log('EMAIL ERROR:', error);
  }
};

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
           variants={fadeIn('down', 0.2)}
           initial="hidden"
           animate="show"
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
            LET'S <span className="text-zinc-300">COLLABORATE</span>
          </h1>
          <p className="text-xl text-black/60 font-medium uppercase tracking-tighter">
            Ready to jumpstart your digital journey?
          </p>
        </motion.div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-black/5 rounded-none flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6 text-black group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 uppercase tracking-tight">Email Us</h4>
                  <p className="text-black/40 mb-2 uppercase text-[10px] font-bold tracking-widest">For inquiries and support</p>
                  <a href="mailto:hello@axioralabs.com" className="text-xl font-display font-bold hover:text-zinc-400 transition-colors uppercase">axiora.llabs@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-black/5 rounded-none flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6 text-black group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 uppercase tracking-tight">Call Us</h4>
                  <p className="text-black/40 mb-2 uppercase text-[10px] font-bold tracking-widest">Speak to our experts directly</p>
                  <a href="tel:+919876543210" className="text-xl font-display font-bold hover:text-zinc-400 transition-colors uppercase">+91 88274 59213</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-black/5 rounded-none flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6 text-black group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 uppercase tracking-tight">India HQ</h4>
                  <p className="text-black/40 mb-1 uppercase text-[10px] font-bold tracking-widest">Visit our creative space</p>
                  <p className="text-xl font-display font-bold uppercase">Shankar Nagar, Raipur, CG</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-black text-white">
              <h3 className="text-2xl font-display font-bold mb-6 uppercase tracking-tight">Quick Connect</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="premium-button bg-zinc-800 text-white hover:bg-zinc-700 !py-3 !px-6 !text-xs flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href="#" className="premium-button bg-white text-black hover:bg-zinc-200 !py-3 !px-6 !text-xs flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Book a Demo
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             variants={fadeIn('left', 0.4)}
             initial="hidden"
             animate="show"
             className="glass-card p-10 lg:p-12 border-black/5 bg-zinc-50"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-display font-bold mb-4 uppercase">Message Received</h2>
                <p className="text-black/40 uppercase font-black tracking-widest text-[10px]">The laboratory has received your transmission.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-12 text-black underline font-bold uppercase text-[10px] tracking-widest hover:text-zinc-500 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Full Name</label>
                  <input 
  type="text" 
  name="name"
  value={formData.name}
  required
  onChange={handleChange}
                    className="w-full bg-white border border-black/10 px-4 py-4 focus:outline-none focus:border-black transition-colors text-black uppercase tracking-widest text-xs font-bold"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    onChange={handleChange}
                    className="w-full bg-white border border-black/10 px-4 py-4 focus:outline-none focus:border-black transition-colors text-black uppercase tracking-widest text-xs font-bold"
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    onChange={handleChange}
                    className="w-full bg-white border border-black/10 px-4 py-4 focus:outline-none focus:border-black transition-colors text-black uppercase tracking-widest text-xs font-bold"
                    placeholder="+91 XXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Business Type</label>
                  <select 
  name="businessType"
  value={formData.businessType}
  onChange={handleChange}
                    className="w-full bg-white border border-black/10 px-4 py-4 focus:outline-none focus:border-black transition-colors text-black uppercase tracking-widest text-xs font-bold appearance-none"
                  >
                    <option value="">Select Type</option>
                    <option value="startup">Startup</option>
                    <option value="corporate">Corporate</option>
                    <option value="creator">Creator</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Service Interested In</label>
                <select 
                   name="serviceNeeded"
                   onChange={handleChange}
                   className="w-full bg-white border border-black/10 px-4 py-4 focus:outline-none focus:border-black transition-colors text-black uppercase tracking-widest text-xs font-bold appearance-none"
                >
                  <option value="">Select Service</option>
                  <option value="software">Software Solutions</option>
                  <option value="web">Web Development</option>
                  <option value=" branding">Branding & Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Project Details</label>
                <textarea 
  name="message"
  value={formData.message}
  required
  rows={4}
  onChange={handleChange}
                  className="w-full bg-white border border-black/10 px-4 py-4 focus:outline-none focus:border-black transition-colors text-black uppercase tracking-widest text-xs font-bold"
                  placeholder="Goals..."
                />
              </div>

              <button type="submit" className="premium-button bg-black text-white hover:bg-zinc-800 w-full gap-3 text-sm py-6">
                Send Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
