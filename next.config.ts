import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  allowedDevOrigins: ["*.replit.dev", "*.sisko.replit.dev"],
  webpack(config) {
    config.resolve.alias["@assets"] = path.resolve(__dirname, "../../attached_assets");
    return config;
  },

  async redirects() {
    const p = (src: string, dst: string) => [
      { source: src, destination: dst, permanent: true },
      { source: `${src}/`, destination: dst, permanent: true },
    ];
    return [
      // ── Old descriptive slugs → current short slugs ──────────────────────
      ...p("/director-general-of-foreign-trade", "/dgft"),
      ...p("/customs-consultancy-services", "/customs-consultancy"),
      ...p("/container-freight-station", "/cfs"),
      ...p("/software-technology-parks-india", "/stpi"),
      ...p("/special-economic-zone", "/sez"),
      ...p("/export-oriented-units", "/eou"),
      ...p("/about-us", "/about"),

      // ── Typo fix (original WordPress URL had "frieght") ───────────────────
      ...p("/air-frieght", "/air-freight"),

      // ── Legacy service aliases ─────────────────────────────────────────────
      ...p("/customs-house-agent", "/customs-broking"),
      ...p("/cargo-logistics", "/freight-forwarding"),
      ...p("/cargo-insurance", "/freight-forwarding"),
      ...p("/import-export-license-iec-code-online-application", "/dgft"),

      // ── Merchandise Exports scheme (404 on live site) → services ──────────
      ...p("/merchandise-exports-from-india-scheme", "/services"),

      // ── Simple quote / contact aliases → root ─────────────────────────────
      ...p("/request-a-quote", "/"),

      // ── Careers aliases ────────────────────────────────────────────────────
      ...p("/apply", "/careers"),
      ...p("/vacancies", "/careers"),
    ];
  },
};

export default nextConfig;
