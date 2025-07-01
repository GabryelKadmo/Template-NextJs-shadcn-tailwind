"use client";

import { Zap, Palette, Layers, FileCode } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-lg w-full text-center space-y-8 relative z-10">
        <div className="flex justify-center animate-fadeIn">
          <div className="relative group">
            <div className="relative backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 animate-slideUp">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
            Next.js Template
          </h1>
          <p className="text-gray-700 text-lg font-medium">Template moderno com shadcn/ui e Tailwind CSS</p>
          <div className="flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
              ⚡ Pronto para usar
            </span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 space-y-6 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-2xl">⚡</span>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Recursos Incluídos
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Zap className="text-white w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">Next.js 15</p>
                <p className="text-xs text-gray-600">Framework React mais recente com App Router</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-200 group">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Palette className="text-white w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">shadcn/ui</p>
                <p className="text-xs text-gray-600">Componentes elegantes e acessíveis</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-200 group">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Layers className="text-white w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">Tailwind CSS 4</p>
                <p className="text-xs text-gray-600">Styling moderno e responsivo</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-200 group">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FileCode className="text-white w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">TypeScript</p>
                <p className="text-xs text-gray-600">Tipagem estática para maior segurança</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
