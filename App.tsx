import React, { useState } from 'react';
import { Calendar, MapPin, Gift, Clock, Camera, Heart, CheckCircle, Shirt, Music } from 'lucide-react';
import { EVENT_DETAILS, GALLERY_IMAGES } from './constants';
import Countdown from './components/Countdown';
import MusicSuggestion from './components/MusicSuggestion';
import { submitRsvp } from './services/rsvpService';
import { GuestRsvp } from './types';

function App() {
  // RSVP State
  const [rsvpData, setRsvpData] = useState<GuestRsvp>({
    name: '',
    guestsCount: 1,
    isAttending: true,
    dietaryRestrictions: '',
    songSuggestion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleRsvpChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Explicit type guard for checkbox since HTMLSelectElement doesn't have 'checked'
    const checked = (e.target as HTMLInputElement).checked;

    setRsvpData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitRsvp(rsvpData);
      setSubmitMessage(result.message);
    } catch (error) {
      setSubmitMessage("Ocurrió un error. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen floral-pattern pb-20">

      {/* --- FLORAL DECORATION (left side, like reference image) --- */}
      <div className="fixed top-0 left-0 w-[140px] md:w-[220px] h-full pointer-events-none z-10 overflow-hidden opacity-80">
        <svg viewBox="0 0 220 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" preserveAspectRatio="xMinYMin slice">
          {/* Main stem */}
          <path d="M60 900 C60 750, 50 600, 70 450 C90 300, 40 200, 55 50" stroke="#6b7f5e" strokeWidth="2.5" fill="none" opacity="0.7"/>
          <path d="M80 900 C75 780, 85 650, 65 500 C45 350, 75 250, 60 80" stroke="#7a8e6d" strokeWidth="2" fill="none" opacity="0.5"/>

          {/* Branch stems */}
          <path d="M70 450 C90 430, 110 420, 130 410" stroke="#6b7f5e" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M55 350 C75 340, 95 325, 115 315" stroke="#6b7f5e" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M65 550 C85 535, 100 525, 120 520" stroke="#6b7f5e" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M60 250 C80 240, 95 230, 110 225" stroke="#6b7f5e" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M65 150 C85 140, 100 130, 115 125" stroke="#6b7f5e" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M70 650 C90 640, 105 630, 120 625" stroke="#6b7f5e" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M60 750 C80 740, 95 730, 110 725" stroke="#6b7f5e" strokeWidth="1.5" fill="none" opacity="0.6"/>

          {/* Leaves */}
          <ellipse cx="45" cy="380" rx="12" ry="5" transform="rotate(-30 45 380)" fill="#7a8e6d" opacity="0.5"/>
          <ellipse cx="85" cy="480" rx="12" ry="5" transform="rotate(20 85 480)" fill="#7a8e6d" opacity="0.5"/>
          <ellipse cx="50" cy="280" rx="11" ry="4.5" transform="rotate(-25 50 280)" fill="#7a8e6d" opacity="0.5"/>
          <ellipse cx="75" cy="580" rx="11" ry="4.5" transform="rotate(15 75 580)" fill="#7a8e6d" opacity="0.5"/>
          <ellipse cx="55" cy="680" rx="12" ry="5" transform="rotate(-20 55 680)" fill="#7a8e6d" opacity="0.5"/>
          <ellipse cx="45" cy="180" rx="10" ry="4" transform="rotate(-35 45 180)" fill="#7a8e6d" opacity="0.5"/>
          <ellipse cx="80" cy="820" rx="11" ry="4.5" transform="rotate(10 80 820)" fill="#7a8e6d" opacity="0.4"/>

          {/* Pink flowers - 5 petals each, scattered along stems */}
          {/* Flower 1 - top area */}
          <g transform="translate(55, 100)">
            <circle cx="0" cy="-8" r="5" fill="#f4a7c4"/>
            <circle cx="7.5" cy="-2.5" r="5" fill="#f9bdd4"/>
            <circle cx="4.7" cy="6.5" r="5" fill="#f4a7c4"/>
            <circle cx="-4.7" cy="6.5" r="5" fill="#f9bdd4"/>
            <circle cx="-7.5" cy="-2.5" r="5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="3" fill="#e8d595"/>
          </g>
          {/* Flower 2 */}
          <g transform="translate(115, 130)">
            <circle cx="0" cy="-7" r="4.5" fill="#f9bdd4"/>
            <circle cx="6.7" cy="-2.2" r="4.5" fill="#f4a7c4"/>
            <circle cx="4.1" cy="5.7" r="4.5" fill="#f9bdd4"/>
            <circle cx="-4.1" cy="5.7" r="4.5" fill="#f4a7c4"/>
            <circle cx="-6.7" cy="-2.2" r="4.5" fill="#f9bdd4"/>
            <circle cx="0" cy="0" r="2.5" fill="#e8d595"/>
          </g>
          {/* Flower 3 */}
          <g transform="translate(40, 200)">
            <circle cx="0" cy="-8" r="5.5" fill="#f4a7c4"/>
            <circle cx="8" cy="-2.5" r="5.5" fill="#f9bdd4"/>
            <circle cx="5" cy="7" r="5.5" fill="#f4a7c4"/>
            <circle cx="-5" cy="7" r="5.5" fill="#f9bdd4"/>
            <circle cx="-8" cy="-2.5" r="5.5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="3" fill="#e8d595"/>
          </g>
          {/* Flower 4 */}
          <g transform="translate(110, 225)">
            <circle cx="0" cy="-7" r="4" fill="#f9bdd4"/>
            <circle cx="6.5" cy="-2" r="4" fill="#f4a7c4"/>
            <circle cx="4" cy="5.5" r="4" fill="#f9bdd4"/>
            <circle cx="-4" cy="5.5" r="4" fill="#f4a7c4"/>
            <circle cx="-6.5" cy="-2" r="4" fill="#f9bdd4"/>
            <circle cx="0" cy="0" r="2.5" fill="#e8d595"/>
          </g>
          {/* Flower 5 */}
          <g transform="translate(70, 300)">
            <circle cx="0" cy="-8" r="5" fill="#f4a7c4"/>
            <circle cx="7.5" cy="-2.5" r="5" fill="#f9bdd4"/>
            <circle cx="4.7" cy="6.5" r="5" fill="#f4a7c4"/>
            <circle cx="-4.7" cy="6.5" r="5" fill="#f9bdd4"/>
            <circle cx="-7.5" cy="-2.5" r="5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="3" fill="#e8d595"/>
          </g>
          {/* Flower 6 */}
          <g transform="translate(115, 320)">
            <circle cx="0" cy="-6" r="3.5" fill="#f9bdd4"/>
            <circle cx="5.5" cy="-2" r="3.5" fill="#f4a7c4"/>
            <circle cx="3.5" cy="5" r="3.5" fill="#f9bdd4"/>
            <circle cx="-3.5" cy="5" r="3.5" fill="#f4a7c4"/>
            <circle cx="-5.5" cy="-2" r="3.5" fill="#f9bdd4"/>
            <circle cx="0" cy="0" r="2" fill="#e8d595"/>
          </g>
          {/* Flower 7 */}
          <g transform="translate(50, 400)">
            <circle cx="0" cy="-8" r="5.5" fill="#f9bdd4"/>
            <circle cx="8" cy="-2.5" r="5.5" fill="#f4a7c4"/>
            <circle cx="5" cy="7" r="5.5" fill="#f9bdd4"/>
            <circle cx="-5" cy="7" r="5.5" fill="#f4a7c4"/>
            <circle cx="-8" cy="-2.5" r="5.5" fill="#f9bdd4"/>
            <circle cx="0" cy="0" r="3" fill="#e8d595"/>
          </g>
          {/* Flower 8 */}
          <g transform="translate(130, 415)">
            <circle cx="0" cy="-7" r="4.5" fill="#f4a7c4"/>
            <circle cx="6.7" cy="-2.2" r="4.5" fill="#f9bdd4"/>
            <circle cx="4.1" cy="5.7" r="4.5" fill="#f4a7c4"/>
            <circle cx="-4.1" cy="5.7" r="4.5" fill="#f9bdd4"/>
            <circle cx="-6.7" cy="-2.2" r="4.5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="2.5" fill="#e8d595"/>
          </g>
          {/* Flower 9 */}
          <g transform="translate(65, 500)">
            <circle cx="0" cy="-8" r="5" fill="#f4a7c4"/>
            <circle cx="7.5" cy="-2.5" r="5" fill="#f9bdd4"/>
            <circle cx="4.7" cy="6.5" r="5" fill="#f4a7c4"/>
            <circle cx="-4.7" cy="6.5" r="5" fill="#f9bdd4"/>
            <circle cx="-7.5" cy="-2.5" r="5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="3" fill="#e8d595"/>
          </g>
          {/* Flower 10 */}
          <g transform="translate(120, 525)">
            <circle cx="0" cy="-6" r="4" fill="#f9bdd4"/>
            <circle cx="6" cy="-2" r="4" fill="#f4a7c4"/>
            <circle cx="3.7" cy="5" r="4" fill="#f9bdd4"/>
            <circle cx="-3.7" cy="5" r="4" fill="#f4a7c4"/>
            <circle cx="-6" cy="-2" r="4" fill="#f9bdd4"/>
            <circle cx="0" cy="0" r="2.5" fill="#e8d595"/>
          </g>
          {/* Flower 11 */}
          <g transform="translate(55, 600)">
            <circle cx="0" cy="-8" r="5.5" fill="#f4a7c4"/>
            <circle cx="8" cy="-2.5" r="5.5" fill="#f9bdd4"/>
            <circle cx="5" cy="7" r="5.5" fill="#f4a7c4"/>
            <circle cx="-5" cy="7" r="5.5" fill="#f9bdd4"/>
            <circle cx="-8" cy="-2.5" r="5.5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="3" fill="#e8d595"/>
          </g>
          {/* Flower 12 */}
          <g transform="translate(120, 630)">
            <circle cx="0" cy="-7" r="4.5" fill="#f9bdd4"/>
            <circle cx="6.7" cy="-2.2" r="4.5" fill="#f4a7c4"/>
            <circle cx="4.1" cy="5.7" r="4.5" fill="#f4a7c4"/>
            <circle cx="-4.1" cy="5.7" r="4.5" fill="#f9bdd4"/>
            <circle cx="-6.7" cy="-2.2" r="4.5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="2.5" fill="#e8d595"/>
          </g>
          {/* Flower 13 */}
          <g transform="translate(70, 700)">
            <circle cx="0" cy="-8" r="5" fill="#f4a7c4"/>
            <circle cx="7.5" cy="-2.5" r="5" fill="#f9bdd4"/>
            <circle cx="4.7" cy="6.5" r="5" fill="#f4a7c4"/>
            <circle cx="-4.7" cy="6.5" r="5" fill="#f9bdd4"/>
            <circle cx="-7.5" cy="-2.5" r="5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="3" fill="#e8d595"/>
          </g>
          {/* Flower 14 */}
          <g transform="translate(110, 730)">
            <circle cx="0" cy="-6" r="3.5" fill="#f9bdd4"/>
            <circle cx="5.5" cy="-2" r="3.5" fill="#f4a7c4"/>
            <circle cx="3.5" cy="5" r="3.5" fill="#f9bdd4"/>
            <circle cx="-3.5" cy="5" r="3.5" fill="#f4a7c4"/>
            <circle cx="-5.5" cy="-2" r="3.5" fill="#f9bdd4"/>
            <circle cx="0" cy="0" r="2" fill="#e8d595"/>
          </g>
          {/* Flower 15 */}
          <g transform="translate(50, 800)">
            <circle cx="0" cy="-8" r="5.5" fill="#f4a7c4"/>
            <circle cx="8" cy="-2.5" r="5.5" fill="#f9bdd4"/>
            <circle cx="5" cy="7" r="5.5" fill="#f9bdd4"/>
            <circle cx="-5" cy="7" r="5.5" fill="#f4a7c4"/>
            <circle cx="-8" cy="-2.5" r="5.5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="3" fill="#e8d595"/>
          </g>
          {/* Flower 16 */}
          <g transform="translate(120, 850)">
            <circle cx="0" cy="-7" r="4.5" fill="#f9bdd4"/>
            <circle cx="6.7" cy="-2.2" r="4.5" fill="#f4a7c4"/>
            <circle cx="4.1" cy="5.7" r="4.5" fill="#f4a7c4"/>
            <circle cx="-4.1" cy="5.7" r="4.5" fill="#f9bdd4"/>
            <circle cx="-6.7" cy="-2.2" r="4.5" fill="#f4a7c4"/>
            <circle cx="0" cy="0" r="2.5" fill="#e8d595"/>
          </g>

          {/* Small buds scattered */}
          <circle cx="90" cy="170" r="3" fill="#f9bdd4" opacity="0.7"/>
          <circle cx="35" cy="260" r="2.5" fill="#f4a7c4" opacity="0.6"/>
          <circle cx="95" cy="360" r="3" fill="#f9bdd4" opacity="0.7"/>
          <circle cx="40" cy="460" r="2.5" fill="#f4a7c4" opacity="0.6"/>
          <circle cx="95" cy="570" r="3" fill="#f9bdd4" opacity="0.7"/>
          <circle cx="40" cy="660" r="2.5" fill="#f4a7c4" opacity="0.6"/>
          <circle cx="95" cy="770" r="3" fill="#f9bdd4" opacity="0.7"/>
          <circle cx="35" cy="870" r="2.5" fill="#f4a7c4" opacity="0.6"/>
        </svg>
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden hero-floral-bg">
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-pink-200 rounded-br-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-pink-300 rounded-tl-full opacity-20 blur-3xl"></div>

        <div className="relative z-20 bg-white/60 backdrop-blur-sm p-8 md:p-16 rounded-[3rem] shadow-xl border border-white/80 max-w-3xl mx-auto animate-fade-in-up">
          <span className="uppercase tracking-[0.3em] text-pink-800 text-sm md:text-lg font-bold drop-shadow-sm mb-4 block">
            Estás invitado a
          </span>
          <h1 className="text-6xl md:text-8xl text-pink-600 script-font mb-2 drop-shadow-sm">
            Mis 15 Años
          </h1>
          <h2 className="text-4xl md:text-6xl text-pink-900 serif-font mb-8 drop-shadow-sm">
            {EVENT_DETAILS.name}
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full mb-8"></div>
          <Countdown />
          
          <div className="mt-8 animate-bounce">
             <span className="text-pink-800 text-sm font-semibold">Desliza para ver más</span>
          </div>
        </div>
      </header>

      {/* --- INTRO QUOTE --- */}
      <section className="py-20 px-4 text-center max-w-2xl mx-auto">
        <Heart className="w-8 h-8 text-pink-400 mx-auto mb-6" />
        <p className="text-xl md:text-2xl text-gray-600 serif-font leading-relaxed italic">
          "Hay momentos inolvidables que se atesoran en el corazón para siempre, 
          por eso quiero que compartas conmigo esta noche tan especial."
        </p>
      </section>

      {/* --- DETAILS CARDS --- */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-4xl text-center text-pink-600 script-font mb-12">Cuándo & Dónde</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* DATE CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-pink-300 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-pink-600 w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 text-center serif-font mb-2">
              Sábado, 28 de Febrero
            </h4>
            <p className="text-center text-gray-500 mb-6">21:00 - 05:00 hs</p>
            <div className="text-center">
              <span className="inline-block bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                ¡Agendalo!
              </span>
            </div>
          </div>

          {/* LOCATION CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-pink-300 transform hover:-translate-y-1 transition-transform duration-300">
             <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-pink-600 w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 text-center serif-font mb-2">
              {EVENT_DETAILS.location}
            </h4>
            <p className="text-center text-gray-500 mb-6">{EVENT_DETAILS.address}</p>
            <div className="text-center">
              <a 
                href={EVENT_DETAILS.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-700 transition-colors"
              >
                Ver Mapa <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- DRESS CODE --- */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-full shadow-lg border border-pink-100 text-center">
           <Shirt className="w-10 h-10 text-pink-500 mx-auto mb-4" />
           <h4 className="text-2xl font-bold text-gray-800 serif-font mb-2">Código de Vestimenta</h4>
           <p className="text-pink-600 font-bold mb-2 uppercase tracking-wide">{EVENT_DETAILS.dressCode}</p>
           <p className="text-gray-500 text-sm">{EVENT_DETAILS.dressCodeDescription}</p>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-4xl text-center text-pink-600 script-font mb-4">Galería de Fotos</h3>
        <p className="text-center text-gray-500 mb-12">Un pequeño resumen de mis 15 años</p>
        
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={src} alt={`Gallery ${idx}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* --- GIFTS --- */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto bg-pink-100 p-8 md:p-12 rounded-[2rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-50"></div>
          
          <Gift className="w-12 h-12 text-pink-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-800 serif-font mb-4">Regalos</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Mi mayor regalo es tu presencia. Pero si deseas hacerme un presente, 
            habrá un buzón para sobres en la recepción o puedes hacerlo a la siguiente cuenta.
          </p>
          <div className="bg-white/80 p-4 rounded-xl inline-block text-left text-sm text-gray-700">
            <p><strong>CBU:</strong> 000000321321321</p>
            <p><strong>Alias:</strong> valentina.mis15.fiesta</p>
          </div>
        </div>
      </section>

      {/* --- RSVP --- */}
      <section className="py-20 px-4 max-w-lg mx-auto" id="rsvp">
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-pink-400">
          <h3 className="text-4xl text-center text-pink-600 script-font mb-2">Confirmación</h3>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Por favor confirma tu asistencia antes del 1 de Febrero
          </p>

          {!submitMessage ? (
            <form onSubmit={handleRsvpSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={rsvpData.name}
                  onChange={handleRsvpChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="flex gap-4">
                 <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Asistencia</label>
                    <select
                      name="isAttending"
                      value={rsvpData.isAttending ? 'yes' : 'no'}
                      onChange={(e) => setRsvpData({...rsvpData, isAttending: e.target.value === 'yes'})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50"
                    >
                      <option value="yes">¡Sí, voy!</option>
                      <option value="no">No podré ir</option>
                    </select>
                 </div>
                 <div className="w-24">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Personas</label>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      name="guestsCount"
                      value={rsvpData.guestsCount}
                      onChange={handleRsvpChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50"
                    />
                 </div>
              </div>

              {rsvpData.isAttending && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Restricciones Alimentarias</label>
                    <input
                      type="text"
                      name="dietaryRestrictions"
                      value={rsvpData.dietaryRestrictions}
                      onChange={handleRsvpChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50"
                      placeholder="Vegetariano, Celíaco, etc. (Opcional)"
                    />
                  </div>
                  
                  {/* Bonus Feature: Music Suggestion */}
                  <MusicSuggestion 
                    value={rsvpData.songSuggestion || ''} 
                    onChange={handleRsvpChange} 
                  />
                </>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-pink-700 transition-colors disabled:opacity-70 mt-6"
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar'}
              </button>
            </form>
          ) : (
            <div className="text-center py-10 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje Enviado!</h4>
              <p className="text-gray-600">{submitMessage}</p>
            </div>
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="text-center py-10 text-pink-300 text-sm">
        <p className="script-font text-2xl mb-2">Valentina</p>
        <p>¡Te espero para celebrar juntos!</p>
      </footer>
    </div>
  );
}

export default App;