import React from 'react';
import { Music } from 'lucide-react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MusicSuggestion: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="mt-4 p-4 bg-pink-50 rounded-xl border border-pink-100">
      <div className="flex items-center gap-2 mb-2 text-pink-700">
        <Music size={18} />
        <span className="font-semibold text-sm">¡Ayudanos con la música!</span>
      </div>
      <p className="text-xs text-gray-500 mb-2">¿Qué canción no puede faltar en la fiesta?</p>
      <input
        type="text"
        name="songSuggestion"
        value={value}
        onChange={onChange}
        placeholder="Ej: Dua Lipa - Levitating"
        className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/80 text-sm placeholder-pink-300"
      />
    </div>
  );
};

export default MusicSuggestion;