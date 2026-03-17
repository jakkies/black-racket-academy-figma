interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  iframeSrc?: string;
}

export function Modal({ isOpen, onClose, iframeSrc = "about:blank" }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl aspect-video bg-black border border-gray-800 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe 
          src={iframeSrc} 
          className="w-full h-full border-none bg-black"
          title="Join the Academy Form"
        />
      </div>
    </div>
  );
}
