"use client";

import Image from "next/image";
import { ArrowRight, Terminal, Code2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-dvh bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-black dark:bg-white rounded-full mix-blend-multiply dark:mix-blend-difference filter blur-[120px] opacity-[0.03] dark:opacity-[0.08] animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-black dark:bg-white rounded-full mix-blend-multiply dark:mix-blend-difference filter blur-[120px] opacity-[0.02] dark:opacity-[0.06] animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Hero - Centered and Bold */}
        <div className="min-h-screen flex flex-col items-center justify-center px-8">
          <div className="max-w-4xl w-full mx-auto space-y-16">
            {/* Main Title */}
            <div className="space-y-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.kadmo.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/30 transition-all duration-300">
                      <Image
                        src="/logo/Kadmo-logo-monke-no-bg.png"
                        alt="Kadmo"
                        fill
                        className="object-contain p-1.5"
                        priority
                      />
                    </div>
                    <span className="text-sm font-medium tracking-tight hover:opacity-50 transition-opacity duration-300">KADMO</span>
                  </a>

                  <div className="w-px h-6 bg-current opacity-20"></div>

                  <a
                    href="https://github.com/GabryelKadmo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium tracking-tight hover:opacity-50 transition-opacity duration-300"
                  >
                    GITHUB →
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-medium opacity-40">
                  <div className="w-8 h-px bg-current"></div>
                  <span>Next.js Template</span>
                </div>
              </div>

              <h1 className="text-[clamp(3rem,12vw,10rem)] font-black leading-[0.9] tracking-tighter">
                BUILD<br />
                FASTER
              </h1>

              <p className="text-xl md:text-2xl max-w-4xl opacity-60 leading-relaxed">
                Um template minimalista e poderoso. Pronto para produção com Next.js 16, TypeScript e Tailwind CSS 4.
              </p>
            </div>


            {/* Features List - Clean and Minimal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-1 h-1 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold tracking-tight">Next.js 16</h3>
                    <p className="text-sm opacity-60 leading-relaxed">
                      App Router, Server Components, e performance otimizada out-of-the-box
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-1 h-1 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold tracking-tight">shadcn/ui</h3>
                    <p className="text-sm opacity-60 leading-relaxed">
                      Componentes acessíveis e customizáveis construídos com Radix UI
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-1 h-1 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold tracking-tight">Tailwind CSS 4</h3>
                    <p className="text-sm opacity-60 leading-relaxed">
                      Framework utility-first com performance e DX aprimorados
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-1 h-1 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold tracking-tight">TypeScript</h3>
                    <p className="text-sm opacity-60 leading-relaxed">
                      Type-safe, IntelliSense completo e melhor experiência de desenvolvimento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA - Minimalist */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex-1 h-px bg-current opacity-10"></div>
              <a
                href="https://github.com/GabryelKadmo/Template-NextJs-shadcn-tailwind"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm font-medium tracking-tight hover:opacity-50 transition-all duration-300"
              >
                <Terminal className="w-4 h-4" />
                <span>COMEÇAR AGORA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <div className="flex-1 h-px bg-current opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Tech Stack */}
        <div className="px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between py-8 border-t border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-30">
                <Code2 className="w-3 h-3" />
                <span>Tech Stack</span>
              </div>

              <div className="flex items-center gap-8 text-xs font-medium tracking-wider">
                <span className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">NEXT.JS</span>
                <span className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">REACT</span>
                <span className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">TYPESCRIPT</span>
                <span className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">TAILWIND</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 pb-8">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-xs opacity-40">
            <p>© {new Date().getFullYear()} Gabryel Kadmo.</p>
            <p className="flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              <span>Pronto para produção</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
