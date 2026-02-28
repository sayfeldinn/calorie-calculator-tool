import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden bg-[#0a0a0a]">
      {/* Abstract Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

        {/* Global Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen -z-10 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center py-12">
        <Calculator />
      </div>

      {/* Footer / Credits */}
      <footer className="z-10 mt-auto pb-6 text-center text-sm text-slate-500">
        <p className="flex items-center justify-center gap-2">
          Designed & Built by <span className="text-white font-medium">Seif Eldeen Nasser</span>
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a href="mailto:sayfeldinn@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            Email
          </a>
          <span className="text-slate-700">•</span>
          <a href="https://www.linkedin.com/in/sayfeldinn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            LinkedIn
          </a>
          <span className="text-slate-700">•</span>
          <a href="https://github.com/sayfeldinn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            GitHub
          </a>
        </div>

        {/* --- TEMPORARY NOTE: Easily remove or comment out this block later --- */}
        <div className="mt-8 flex items-center justify-center">
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-50 text-xs px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            This App is requested by my friend <span className="text-emerald-400 font-semibold">'Ziad Tarek'</span>
          </div>
        </div>
        {/* -------------------------------------------------------------------- */}
      </footer>
    </main>
  );
}
