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
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) => {
  const baseStyles =
    "px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2";
  const variants = {
    primary: "bg-white text-black hover:bg-accent hover:text-black",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border border-white/20 text-white hover:border-white hover:bg-white/5",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans overflow-x-hidden">

      {/* CONTACT SECTION */}
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

              const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  venueName: formData.get("venueName"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                }),
              });

              if (response.ok) {
                alert("Application sent successfully.");
                (e.target as HTMLFormElement).reset();
              } else {
                alert("Something went wrong. Please try again.");
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
                className="bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-zinc-600 text-white"
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
                className="bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-zinc-600 text-white"
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
                className="bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-zinc-600 text-white"
                placeholder="e.g. We host 500+ students every Friday and want to launch a custom hoodie drop..."
              />
            </div>

            <div className="md:col-span-2">
              <Button variant="primary" type="submit" className="w-full justify-center">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </Section>

    </div>
  );
}
