import React, { useState, useEffect } from 'react';
import { GYM_INFO, MODALIDADES, PLANOS } from '../data/gymData';
import { X, Send, MessageCircle, CheckCircle2, Dumbbell } from 'lucide-react';

interface FirstLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const FirstLessonModal: React.FC<FirstLessonModalProps> = ({
  isOpen,
  onClose,
  initialSubject
}) => {
  const [nome, setNome] = useState('');
  const [modalidade, setModalidade] = useState(initialSubject || 'Musculação');
  const [plano, setPlano] = useState('Plano Anual Recorrente (R$ 110/mês)');

  useEffect(() => {
    if (initialSubject) {
      setModalidade(initialSubject);
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Olá, Studio You Fit! Meu nome é ${nome || 'Aluno(a)'}.
Tenho interesse em: ${modalidade}.
Plano pretendido: ${plano}.
Gostaria de agendar minha visita/matrícula na academia!`;

    const url = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl overflow-hidden">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white bg-zinc-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="relative rounded-2xl overflow-hidden p-0.5 bg-[#CCFF00] logo-green-glow">
            <img 
              src={GYM_INFO.logoUrl} 
              alt="Studio You Fit Logo" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 object-cover rounded-xl border border-black/50"
            />
          </div>
          <div>
            <h3 className="text-xl font-black uppercase text-white font-heading">
              Agendar / Matrícula
            </h3>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
              Studio You Fit • Barra Nova - AL
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              placeholder="Ex: João da Silva"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-3.5 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Modalidade ou Dúvida
            </label>
            <select
              value={modalidade}
              onChange={(e) => setModalidade(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-3.5 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
            >
              <option value="Musculação Climatizada">Musculação Climatizada</option>
              <option value="Jiu-Jitsu (Prof. Wesley Rosa)">Jiu-Jitsu (Prof. Wesley Rosa - 1ª Aula Grátis)</option>
              <option value="Muay Thai (Prof. Alan França)">Muay Thai (Prof. Alan França)</option>
              <option value="FitDance (Prof. Dan Sollys)">FitDance (Prof. Dan Sollys)</option>
              <option value="Ritbox (Prof. Julian)">Ritbox (Prof. Julian)</option>
              <option value="Treino Funcional">Treino Funcional (Profs. Rogério, Moisés e Thallya)</option>
              <option value="Informações Gerais">Informações Gerais / Outros</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">
              Opção de Plano / Convênio
            </label>
            <select
              value={plano}
              onChange={(e) => setPlano(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-3.5 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
            >
              <option value="Plano Anual Recorrente (R$ 110/mês)">Plano Anual Recorrente (R$ 110/mês)</option>
              <option value="Plano Premium Completo">Plano Premium Completo</option>
              <option value="Plano Casal / Dupla">Plano Casal / Dupla (Com Desconto)</option>
              <option value="Wellhub (antigo Gympass)">Wellhub (antigo Gympass)</option>
              <option value="TotalPass">TotalPass</option>
              <option value="Aula Experimental Grátis">Quero apenas 1ª Aula Experimental Grátis</option>
            </select>
          </div>

          <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
            <span>Ao clicar abaixo, você será redirecionado para o WhatsApp oficial com a mensagem pré-formatada.</span>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Enviar no WhatsApp da Academia</span>
          </button>
        </form>

      </div>
    </div>
  );
};
