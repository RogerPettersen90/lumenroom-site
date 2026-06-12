import { Outlet, Link, useLocation } from 'react-router-dom';
import { config } from '../config';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C4.8 2 3.6 2 3.6 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 2 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Layout = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Download', path: '/download' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg text-text-primary hover:text-white transition-colors tracking-tight">
            {config.app.name}
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`transition-colors ${location.pathname === link.path ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={config.links.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-panel-dark py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span>&copy; {new Date().getFullYear()} {config.app.name}</span>
            <span>&bull;</span>
            <span className="text-text-primary font-medium tracking-wide text-xs uppercase">Made for Linux</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href={config.links.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
              GitHub
            </a>
            <span className="text-text-secondary">Open Source (GPLv3)</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
