import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">404 — Page Not Found</p>
        <h1 className="font-heading font-semibold text-6xl md:text-8xl uppercase mb-6">Lost at Sea</h1>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-accent/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
