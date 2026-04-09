// "use client";
// import React, { useState } from "react";
// import { Menu, X, ExternalLink, Mail, Github, Music, Sun, Linkedin } from "lucide-react";

// export default function PortfolioLayout() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const sections = [
//     { href: "", name: 'Introduction' },
//     { href: "tech-stack", name: 'Skills' },
//     { href: "Projects", name: 'Projects' },
//     { href: "stats", name: 'Git Stats' },
//   ];


//   const [name, setName] = useState('Ibad Amir')
//   return (
//     <div className="bg-black text-gray-300 flex flex-col">
//       {/* Top Bar - Desktop (Sticky) */}
//       <header className="hidden lg:flex sticky top-0 left-0 right-0 bg-black border-b border-gray-800 px-6 py-3 z-50 items-center gap-6">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-6 w-6"
//           >
//             <path d="M13 5H19V11" />
//             <path d="M19 5L5 19" />
//           </svg>

//           <span className="text-white font-semibold text-sm">taha.is-dev</span>
//         </div>

//         {/* Current Tab / Navigation Links */}
//         <div className="flex items-center gap-4 text-sm">
//           <a
//             href="#"
//             className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
//           >
//             Resume <ExternalLink size={12} />
//           </a>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 max-w-md mx-4 ml-auto">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search sections..."
//               className="w-full bg-gray-900 text-gray-300 text-sm px-4 py-2 rounded-md border border-gray-800 focus:outline-none focus:border-gray-700 placeholder-gray-500"
//             />
//             <span className="absolute right-2 top-2 text-xs text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded border border-gray-700">
//               ⌘ K
//             </span>
//           </div>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center gap-4 ">
//           <div className="group flex items-center gap-2 hover:bg-emerald-200 text-sm text-gray-400 border-1 border-gray-800 p-3 rounded-4xl cursor-pointer">
//             <Music
//               size={18}
//               className="text-gray-400 group-hover:text-emerald-900 cursor-pointer transition-colors"
//             />
//           </div>

//           <div className="group flex items-center gap-2 hover:bg-emerald-200 text-sm text-gray-400 border-1 border-gray-800 p-3 rounded-4xl cursor-pointer">
//             <Sun
//               size={18}
//               className="text-gray-400 group-hover:text-emerald-900 cursor-pointer transition-colors"
//             />
//           </div>

//           <div className="group flex items-center gap-2 hover:bg-emerald-200 text-sm text-gray-400 border-1 border-gray-800 p-3 rounded-4xl cursor-pointer">
//             <Github
//               size={18}
//               className="text-gray-400 group-hover:text-emerald-900 cursor-pointer transition-colors"
//             />
//           </div>

//           <div className="group flex items-center gap-2 hover:bg-emerald-200 text-sm text-gray-400 border-1 border-gray-800 p-3 rounded-4xl cursor-pointer">
//             <Linkedin
//               size={18}
//               className="text-gray-400 group-hover:text-emerald-900 cursor-pointer transition-colors"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Header - Mobile Only */}
//       <header className="lg:hidden fixed top-0 left-0 right-0 bg-black border-b border-gray-800 px-4 py-4 flex items-center justify-between z-50">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="text-gray-300 hover:text-white"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//         <div className="flex gap-4">
//           <Music
//             size={20}
//             className="text-gray-400 hover:text-white cursor-pointer"
//           />
//           <Sun
//             size={20}
//             className="text-gray-400 hover:text-white cursor-pointer"
//           />
//           <Github
//             size={20}
//             className="text-gray-400 hover:text-white cursor-pointer"
//           />
//         </div>
//       </header>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 bg-black z-40 pt-20 px-4">
//           <nav className="space-y-1">
//             {sections.map((section) => (
//               <a
//                 key={section.href}
//                 href={`/${section.href.toLowerCase().replace(/\s+/g, "-")}`}
//                 className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {section.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}

//       {/* Desktop Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar - Desktop Only (Sections Menu) */}
//         <aside className="hidden lg:flex fixed left-0 top-[57px] h-[calc(100vh-57px)] w-64 bg-black border-r border-gray-800 flex-col">
//           {/* Sections Navigation */}
//           <div className="flex-1 overflow-y-auto p-6">
//             <h3 className="text-white font-semibold text-sm mb-3">Sections</h3>
//             <nav className="space-y-1">
//               {sections.map((section, idx) => (
//                 <a
//                   key={section.href}
//                   href={`/${section.href.toLowerCase().replace(/\s+/g, "-")}`}
//                   className={`block px-3 py-2 rounded-lg text-sm transition-colors ${idx === 2
//                     ? "bg-gray-800 text-white"
//                     : "text-gray-400 hover:bg-gray-800 hover:text-white"
//                     }`}
//                 >
//                   {section.name}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content Area */}
//         <div className="lg:ml-64 flex flex-col flex-1 min-h-screen">
//           {/* Hero Content */}
//           <main className="flex-1 pt-16 lg:pt-0 px-6 lg:px-20">
//             <div className="max-w-5xl py-12 lg:py-20">
//               <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-2 leading-tight">
//                 {name}
//               </h1>
//               <h2 style={{ color: '#9f9fa9' }} className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight geist">
//                 Turning ideas into interfaces!
//               </h2>
//               <p className="text-base lg:text-lg text-gray-400 leading-relaxed mb-10 max-w-4xl">
//                 I am a dedicated Software Engineer specializing in full-stack
//                 application development. I enjoy crafting responsive web
//                 solutions using modern technologies like Next.js, React,
//                 Tailwind CSS, Node.js, Express, and MongoDB, while also applying
//                 DevOps practices, continuously aiming to deliver high-quality,
//                 comprehensive, user-centric software solutions.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 mb-16">
//                 <a
//                   href="#resume"
//                   className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded-lg font-medium transition-all text-sm"
//                 >
//                   Get Resume <ExternalLink size={16} />
//                 </a>
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-gray-900 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all text-sm"
//                 >
//                   <Mail size={16} /> Send Mail
//                 </a>
//               </div>


//             </div>
//           </main>

//           {/* Footer - Both Desktop and Mobile */}
//           <footer className="border-t border-gray-800 px-6 lg:px-20 py-6 text-center bg-black">
//             <div className="text-xs text-gray-500 space-y-2">
//               <p className="text-gray-500">
//                 ©2025 · Developed by{" "}
//                 <a
//                   href="#"
//                   className="text-purple-500 hover:text-purple-400 transition-colors"
//                 >
//                   Ibad Amir
//                 </a>{" "}
//                 · Source code available on{" "}
//                 <a
//                   href="#"
//                   className="text-purple-500 hover:text-purple-400 transition-colors"
//                 >
//                   Github
//                 </a>
//               </p>
//             </div>
//           </footer>
//         </div>
//       </div>

//       {/* <iframe style={{height:'100vh'}} src="https://zeitblast.com/"></iframe> */}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ExternalLink,
  Mail,
  Github,
  Music,
  Sun,
  Linkedin,
} from "lucide-react";

export default function PortfolioLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const name = "Ibad Amir";

  const sections = [
    { href: "", name: "Introduction" },
    { href: "tech-stack", name: "Skills" },
    { href: "projects", name: "Projects" },
    { href: "stats", name: "Git Stats" },
  ];

  return (
    <div className="bg-black text-gray-300 flex flex-col">
      Working
    </div>
  );
}

/* Reusable icon button */
function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="group flex items-center gap-2 hover:bg-emerald-200 text-sm text-gray-400 border border-gray-800 p-3 rounded-4xl cursor-pointer">
      <div className="text-gray-400 group-hover:text-emerald-900 transition-colors">
        {icon}
      </div>
    </div>
  );
}