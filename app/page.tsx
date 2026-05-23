import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-slate-50">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center max-w-lg transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-tight mb-4">
          Halo, Saya Nadia!
        </h1>
        <p className="text-lg text-slate-500 mb-8">
          Saya telah berhasil men-deploy website menggunakan vercel secara otomatis melalui integrasi Git.
        </p>
        
        {/* Tambahan elemen visual (Pills/Badges) */}
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-100">
            Next.js
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold border border-slate-200">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold border border-slate-200">
            Vercel
          </span>
        </div>
      </div>
    </main>
  );
}