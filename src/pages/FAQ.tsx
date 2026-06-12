import { Helmet } from 'react-helmet-async';
import { HelpCircle } from 'lucide-react';
import { config } from '../config';

const faqs = [
  {
    q: "Is it free?",
    a: "Yes, completely free and open source (GPLv3)."
  },
  {
    q: "Does it edit my originals?",
    a: "Never. All edits are non-destructive, stored in a SQLite catalog and XMP sidecars. Your original RAW files are never modified."
  },
  {
    q: "Does it work with other photo editors?",
    a: "Yes, it reads and writes XMP sidecars using standard crs: fields, so your edits are portable across editors that support them."
  },
  {
    q: "Which RAW formats are supported?",
    a: "DNG, ARW, CR2/CR3, NEF, RAF, RW2, ORF, and many others."
  },
  {
    q: "Does the AI upload my photos?",
    a: "No. The AI Select Subject feature uses local ONNX inference. The U²-Net model is downloaded once and runs entirely offline on your hardware."
  },
  {
    q: "System requirements?",
    a: "Linux x86-64 and WebKitGTK 4.1. A dedicated GPU is highly recommended for best performance."
  }
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - {config.app.name}</title>
      </Helmet>
      
      <div className="pt-20 pb-24 max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <HelpCircle className="w-12 h-12 text-text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-panel-dark border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-text-primary mb-3">{faq.q}</h3>
              <p className="text-text-secondary leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
