
import React, { useState, useEffect } from 'react';
import { Save, History, Check, X } from 'lucide-react';

const RestorePoint: React.FC = () => {
  const [savedHash, setSavedHash] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('muralti_restore_point');
    if (stored) setSavedHash(stored);
  }, []);

  const createRestorePoint = () => {
    const currentHash = window.location.hash;
    localStorage.setItem('muralti_restore_point', currentHash);
    setSavedHash(currentHash);
    setShowToast(true);
    setIsOpen(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  const loadRestorePoint = () => {
    if (savedHash) {
      window.location.hash = savedHash;
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <div className={`fixed bottom-24 right-6 z-[60] transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-estacio-navy text-white px-6 py-3 rounded-2xl shadow-2xl border border-estacio-cyan/30 flex items-center gap-3">
          <div className="w-6 h-6 bg-estacio-cyan rounded-full flex items-center justify-center">
            <Check size={14} className="text-estacio-navy" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest italic">Ponto de Restauração Criado!</span>
        </div>
      </div>

      {/* Floating Widget */}
      <div className="fixed bottom-6 right-6 z-[50] flex flex-col items-end gap-3">
        {isOpen && (
          <div className="flex flex-col gap-3 mb-2 fade-in">
            {savedHash && (
              <button
                onClick={loadRestorePoint}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-200 p-4 rounded-2xl shadow-xl hover:bg-white hover:border-estacio-navy transition-all group"
              >
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-estacio-navy group-hover:text-white transition-colors">
                  <History size={16} />
                </div>
                <div className="text-left pr-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Restaurar anterior</p>
                  <p className="text-[11px] font-bold text-estacio-navy truncate max-w-[120px]">
                    {savedHash.replace('#/', '').replace('-', ' ')}
                  </p>
                </div>
              </button>
            )}
            
            <button
              onClick={createRestorePoint}
              className="flex items-center gap-3 bg-estacio-navy text-white p-4 rounded-2xl shadow-xl hover:bg-estacio-cyan hover:text-estacio-navy transition-all group border border-white/10"
            >
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-estacio-navy/10 transition-colors">
                <Save size={16} />
              </div>
              <div className="text-left pr-4">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Criar Novo</p>
                <p className="text-[11px] font-bold italic uppercase tracking-tighter">Ponto de Estudo</p>
              </div>
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 ${
            isOpen ? 'bg-white text-estacio-navy rotate-90 border border-slate-200' : 'bg-estacio-navy text-white rotate-0'
          }`}
          aria-label="Menu de Ponto de Restauração"
        >
          {isOpen ? <X size={24} /> : <History size={24} />}
          {!isOpen && savedHash && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-estacio-cyan rounded-full border-2 border-gray-50 animate-pulse"></span>
          )}
        </button>
      </div>
    </>
  );
};

export default RestorePoint;
