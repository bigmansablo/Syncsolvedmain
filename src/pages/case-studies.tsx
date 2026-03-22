import { Sparkles, ArrowLeft, Construction } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-zinc-950" />
            </div>
            <span className="font-semibold text-lg">SyncSolved</span>
          </a>
          <a 
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Detailed case studies coming soon
          </h1>
          <p className="text-zinc-400 mb-8">
            We're documenting specific transformations across healthcare, logistics, and professional services. 
            Check back in a few weeks — or get in touch to hear about results in your industry directly.
          </p>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-xl transition"
          >
            Get the Velocity Audit
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 fixed bottom-0 left-0 right-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-md flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-zinc-950" />
            </div>
            <span className="font-semibold text-zinc-400">SyncSolved</span>
          </div>
          <p className="text-sm text-zinc-600">
            © 2026 SyncSolved. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
