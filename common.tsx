import { motion } from 'motion/react';
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  key?: React.Key;
}

export function Card({ children, className = '', delay = 0, id }: CardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card p-5 h-full transition-all duration-300 hover:border-brand group ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-brand/50 rounded-full text-brand shadow-[0_0_10px_rgba(168,85,247,0.2)] bg-brand/5 ${className}`}>
      {children}
    </span>
  );
}
