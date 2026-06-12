import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Download, Shield, Keyboard, Cpu, Check, FileJson, Image as ImageIcon } from 'lucide-react';
import { config } from '../config';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C4.8 2 3.6 2 3.6 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 2 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const FeatureSection = ({ title, description, imagePosition = 'right', features, placeholder }: any) => {
  return (
    <section className="py-24 border-t border-border">
      <div className={`max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-medium tracking-tight text-text-primary">{title}</h2>
          <p className="text-lg text-text-secondary leading-relaxed">{description}</p>
          {features && (
            <ul className="space-y-3 mt-6">
              {features.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-1 w-full">
          <div className="bg-panel-light border border-border rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
            <img
              src={(placeholder || '').replace('/public', '')}
              alt={title}
              className="w-full h-auto block"
              loading="lazy"
              onError={(e: any) => {
                // File not added yet → show the expected path as a hint.
                e.currentTarget.outerHTML =
                  '<div class="aspect-[16/10] w-full flex items-center justify-center"><span class="text-text-secondary text-sm font-mono">' +
                  (placeholder || 'screenshot') + '</span></div>';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{config.app.name} - {config.app.tagline}</title>
        <meta name="description" content={config.app.description} />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-text-primary mb-6">
          {config.app.name}
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-10 font-medium">
          {config.app.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <Link 
            to="/download" 
            className="px-8 py-3 rounded-md bg-accent hover:bg-accent-hover text-white font-medium flex items-center gap-2 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download for Linux
          </Link>
          <a 
            href={config.links.github} 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-3 rounded-md bg-panel-light hover:bg-panel-dark border border-border text-text-primary font-medium flex items-center gap-2 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
        
        {/* Main app screenshot */}
        <div className="w-full max-w-5xl bg-panel-dark border border-border rounded-xl shadow-2xl mb-10 relative overflow-hidden">
           <img
             src="/screenshots/main-hero.webp"
             alt="LumenRoom Develop module: AI subject mask selected on a photo, with the masking panel open"
             className="w-full h-auto block"
             loading="eager"
           />
        </div>
      </section>

      {/* Privacy Strip */}
      <section className="py-16 bg-panel-dark border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-medium mb-4">Private by design.</h2>
          <p className="text-text-secondary text-lg">
            All AI runs locally on your machine. No cloud, no account, no telemetry. Your photos never leave your computer.
          </p>
        </div>
      </section>

      {/* Features */}
      <FeatureSection 
        title="Non-destructive editing"
        description="Originals are never touched. All your edits live in a portable SQLite catalog and XMP sidecars."
        imagePosition="right"
        placeholder="/public/screenshots/non-destructive.webp"
        features={[
          "Reads and writes XMP sidecars with crs: fields",
          "Portable catalog",
          "No risk of data loss"
        ]}
      />

      <FeatureSection 
        title="GPU-accelerated develop"
        description="Every adjustment renders live on the GPU for zero-latency feedback."
        imagePosition="left"
        placeholder="/public/screenshots/gpu-develop.webp"
        features={[
          "Exposure, contrast, clarity, texture",
          "White balance and tone regions",
          "Hue-preserving highlight recovery",
          "Dehaze and vibrance/saturation"
        ]}
      />

      <FeatureSection 
        title="Pro color tools"
        description="Total control over your colors and tones with precision instruments."
        imagePosition="right"
        placeholder="/public/screenshots/color-tools.webp"
        features={[
          "Parametric, point, and per-RGB-channel tone curves",
          "HSL color mixer and 3-way color grading",
          "B&W treatment, camera profiles, and calibration"
        ]}
      />

      <FeatureSection 
        title="Full masking suite & AI Select Subject"
        description="Local adjustments powered by standard masks and offline AI."
        imagePosition="left"
        placeholder="/public/screenshots/masking-suite.webp"
        features={[
          "Linear and radial gradients",
          "Unlimited-stroke brush with eraser and feather",
          "Luminance and color range masks",
          "Local U²-Net segmentation (AI Select Subject) - fully offline"
        ]}
      />

      <FeatureSection 
        title="Fast culling & Organization"
        description="A classic editing workflow, designed for speed."
        imagePosition="right"
        placeholder="/public/screenshots/culling-org.webp"
        features={[
          "Grid, Loupe, Compare, and Survey views",
          "Flags, stars, color labels, and text/metadata filters",
          "Caps-Lock auto-advance",
          "Folders, hierarchical keywords, stacks, and collections"
        ]}
      />

      {/* Keyboard Workflow Strip */}
      <section className="py-20 bg-panel-light border-y border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Keyboard className="w-10 h-10 text-text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-medium mb-8">Designed for keyboard warriors.</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
            <div className="px-4 py-2 bg-panel-dark border border-border rounded text-text-primary shadow-sm"><span className="text-accent">G</span> Grid</div>
            <div className="px-4 py-2 bg-panel-dark border border-border rounded text-text-primary shadow-sm"><span className="text-accent">E</span> Loupe</div>
            <div className="px-4 py-2 bg-panel-dark border border-border rounded text-text-primary shadow-sm"><span className="text-accent">D</span> Develop</div>
            <div className="w-px h-8 bg-border mx-2 self-center"></div>
            <div className="px-4 py-2 bg-panel-dark border border-border rounded text-text-primary shadow-sm"><span className="text-accent">P</span> Pick</div>
            <div className="px-4 py-2 bg-panel-dark border border-border rounded text-text-primary shadow-sm"><span className="text-accent">X</span> Reject</div>
            <div className="px-4 py-2 bg-panel-dark border border-border rounded text-text-primary shadow-sm"><span className="text-accent">U</span> Unflag</div>
            <div className="w-px h-8 bg-border mx-2 self-center"></div>
            <div className="px-4 py-2 bg-panel-dark border border-border rounded text-text-primary shadow-sm"><span className="text-accent">1-5</span> Stars</div>
          </div>
          <p className="mt-8 text-text-secondary max-w-2xl mx-auto">
            Full LR keyboard layout built-in, completely remappable to suit your muscle memory.
          </p>
        </div>
      </section>

      {/* Extra Features Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-bg-primary border border-border rounded-lg">
            <FileJson className="w-8 h-8 text-text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Export anything</h3>
            <p className="text-sm text-text-secondary">JPEG, PNG, TIFF, or original. sRGB/AdobeRGB with embedded ICC. Resize, sharpen, watermark, or auto-sync via publish-to-folder.</p>
          </div>
          <div className="p-6 bg-bg-primary border border-border rounded-lg">
            <ImageIcon className="w-8 h-8 text-text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Real RAW</h3>
            <p className="text-sm text-text-secondary">Embedded-preview fast path plus optional full demosaic at native sensor resolution. Lens corrections with per-lens saved defaults.</p>
          </div>
          <div className="p-6 bg-bg-primary border border-border rounded-lg">
            <Cpu className="w-8 h-8 text-text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Linux-first extras</h3>
            <p className="text-sm text-text-secondary">Headless CLI (`lumenroom import` / `export`) for scripts. Second-window support. Distributed via AppImage, deb, and rpm.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
