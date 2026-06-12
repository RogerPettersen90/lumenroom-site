import { Helmet } from 'react-helmet-async';
import { Box, Terminal, Package } from 'lucide-react';
import { config } from '../config';

const DownloadCard = ({ title, format, icon: Icon, recommended = false, description }: any) => (
  <div className={`p-8 rounded-xl border flex flex-col h-full bg-panel-dark ${recommended ? 'border-accent shadow-[0_0_15px_rgba(74,158,255,0.05)]' : 'border-border'}`}>
    {recommended && <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-4 block">Recommended</span>}
    <Icon className="w-10 h-10 text-text-primary mb-4" />
    <h3 className="text-2xl font-medium text-text-primary mb-1">{title}</h3>
    <div className="text-sm font-mono text-text-secondary mb-4">{format}</div>
    <p className="text-text-secondary mb-8 flex-1">{description}</p>
    <a 
      href={config.links.releases}
      target="_blank"
      rel="noreferrer"
      className={`w-full py-3 rounded text-center font-medium transition-colors ${recommended ? 'bg-accent hover:bg-accent-hover text-white' : 'bg-panel-light hover:bg-border text-text-primary border border-border'}`}
    >
      Download {format}
    </a>
  </div>
);

const Download = () => {
  return (
    <>
      <Helmet>
        <title>Download - {config.app.name}</title>
      </Helmet>
      
      <div className="pt-20 pb-24 max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Download {config.app.name}</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The app is in active development (pre-1.0). These are early builds for Linux x86-64. Windows and macOS versions are planned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DownloadCard 
            title="AppImage"
            format=".AppImage"
            icon={Box}
            recommended={true}
            description="Portable package. Download, make executable, and run. Works on nearly all modern Linux distributions."
          />
          <DownloadCard 
            title="Debian / Ubuntu"
            format=".deb"
            icon={Package}
            description="Native package for Debian, Ubuntu, Linux Mint, Pop!_OS, and other derivatives."
          />
          <DownloadCard 
            title="Fedora / RHEL"
            format=".rpm"
            icon={Terminal}
            description="Native package for Fedora, openSUSE, RHEL, CentOS, and other RPM-based distributions."
          />
        </div>

        <div className="mt-16 p-6 border border-border rounded-lg bg-panel-light">
          <h3 className="font-medium mb-2">System Requirements</h3>
          <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
            <li>Linux x86-64 operating system</li>
            <li>WebKitGTK 4.1 or later</li>
            <li>A dedicated GPU is highly recommended for smooth live development</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Download;
