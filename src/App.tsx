/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, ShoppingBag, Ticket, Zap, CheckCircle2, Mail, Instagram, Twitter } from "lucide-react";

const Section = ({ children, className = "", id = "" }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = "",
  onClick
}: { 
  children: ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyles = "px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2";
  const variants = {
    primary: "bg-white text-black hover:bg-accent hover:text-black",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border border-white/20 text-white hover:border-white hover:bg-white/5"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-8 mix-blend-difference">
        <div className="text-xl font-black tracking-tighter uppercase italic">
          CLUBKIT<span className="text-accent">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-60">
          <a href="#statement" className="hover:opacity-100 transition-opacity">Concept</a>
          <a href="#owners" className="hover:opacity-100 transition-opacity">For Clubs</a>
          <a href="#students" className="hover:opacity-100 transition-opacity">For Students</a>
          <a href="#process" className="hover:opacity-100 transition-opacity">Process</a>
        </div>
        <Button 
          variant="outline" 
          className="py-2 px-4 text-[10px]"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Partner
        </Button>
      </nav>

      {/* Hero Section */}
      <Section className="relative min-h-screen flex flex-col justify-center items-start pt-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-accent/10 rounded-full blur-[120px] glow-bg pointer-events-none z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter uppercase italic skew-title mb-8">
            Your Club Is <br />
            <span className="text-stroke">More Than</span> <br />
            A Night.
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-tight text-zinc-400 max-w-xl mb-12">
            Turn moments into identity. Launch limited-edition streetwear drops bundled with tickets and perks.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner With Us
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('students')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Drop Access
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-px h-12 bg-white" />
        </div>
      </Section>

      {/* Big Statement Section */}
      <Section id="statement" className="bg-zinc-950 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-12"
          >
            Stop selling tickets. <br />
            <span className="text-accent">Start building a brand.</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
            Clubs shouldn’t live for one night. They should live on campus all week. We bridge the gap between the dancefloor and the street.
          </p>
        </div>
      </Section>

      {/* What We Do Grid */}
      <Section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            {
              title: "Limited Drops",
              desc: "Premium hoodies + tees designed to be worn beyond the dancefloor.",
              icon: <ShoppingBag className="w-8 h-8 text-accent" />
            },
            {
              title: "Built-In Perks",
              desc: "Queue skip. Drink tokens. Priority access. All woven into the drop.",
              icon: <Ticket className="w-8 h-8 text-accent" />
            },
            {
              title: "Done-For-You",
              desc: "Design, production, payments, fulfillment. You focus on the party.",
              icon: <Zap className="w-8 h-8 text-accent" />
            }
          ].map((item, i) => (
            <div key={i} className="bg-black p-12 flex flex-col gap-6 hover:bg-zinc-900 transition-colors duration-500">
              {item.icon}
              <h3 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* For Club Owners */}
      <Section id="owners" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">For Venue Owners</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-8">
              New Revenue. <br />
              Zero Risk.
            </h2>
            <div className="space-y-6 mb-12">
              {[
                "No upfront stock costs",
                "Potential revenue share model",
                "Built-in marketing through wearability",
                "Pull future ticket demand forward"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 className="w-5 h-5 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-lg text-zinc-300">{text}</span>
                </div>
              ))}
            </div>
            <Button 
              variant="primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply to Launch a Drop
            </Button>
          </div>
          <div className="relative aspect-square bg-zinc-900 overflow-hidden group">
            <img 
              src="images/1000099686.jpg" 
              alt="Nightclub atmosphere" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="text-4xl font-black italic uppercase tracking-tighter opacity-20">CLUBKIT</div>
            </div>
          </div>
        </div>
      </Section>

      {/* For Students */}
      <Section id="students" className="bg-zinc-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/5] bg-zinc-900 overflow-hidden group">
            <img 
              src="images/1000099687.jpg"  
              alt="Streetwear model" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">For The Crowd</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-8">
              Wear Where <br />
              You Belong.
            </h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
              Limited quantity releases. Clean designs, not tacky merch. Perks included. Status + identity.
            </p>
            <div className="flex flex-col gap-4 max-w-md">
              <label className="text-[10px] uppercase font-bold tracking-widest opacity-50">Join the Drop List</label>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="e.g. name@campus.edu" 
                  className="flex-1 bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-zinc-600 text-white"
                />
                <button className="bg-white text-black px-6 py-4 hover:bg-accent transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="bg-black border-t border-white/5">
        <div className="mb-24">
          <h2 className="text-4xl font-display font-bold uppercase tracking-tight">The Method</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { step: "01", title: "Design", desc: "We craft the aesthetic with your brand." },
            { step: "02", title: "Launch", desc: "Drop to your crowd with built-in hype." },
            { step: "03", title: "Sell Out", desc: "Limited quantities ensure demand." },
            { step: "04", title: "Repeat", desc: "Build a seasonal culture." }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-display font-black text-white/5 group-hover:text-accent/20 transition-colors duration-500 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-8 -right-6 w-12 h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Closing Section */}
      <Section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 blur-[150px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-6xl md:text-[10vw] font-display font-black uppercase italic tracking-tighter leading-none mb-12">
            The Nights Fade. <br />
            <span className="text-stroke">The Brand Stays.</span>
          </h2>
          <Button 
            variant="primary" 
            className="text-xl px-12 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Drop
          </Button>
        </motion.div>
      </Section>

            {/* Contact Section */}
      <Section id="contact" className="bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">
              Partner With Us
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase">
              Let's Launch.
            </h2>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.currentTarget);

              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  venueName: formData.get('venueName'),
                  email: formData.get('email'),
                  message: formData.get('message'),
                }),
              });

              if (response.ok) {
                alert("Application sent successfully.");
                e.currentTarget.reset();
              } else {
                alert("Something went wrong. Try again.");
              }
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-widest opacity-50">
                Venue Name
              </label>
              <input
                name="venueName"
                type="text"
                required
                className="bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors text-white"
                placeholder="e.g. The Basement"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-widest opacity-50">
                Contact Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors text-white"
                placeholder="e.g. owner@venue.com"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase font-bold tracking-widest opacity-50">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors text-white"
                placeholder="e.g. We host 500+ students every Friday..."
              />
            </div>

            <div className="md:col-span-2">
              <Button type="submit" variant="primary" className="w-full justify-center">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm font-black italic uppercase tracking-tighter">
          CLUBKIT<span className="text-accent">.</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Mail className="w-5 h-5" /></a>
        </div>
        <div className="text-[10px] uppercase font-bold tracking-widest opacity-30">
          &copy; 2026 CLUBKIT Collective. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
