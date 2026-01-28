import { GuestRsvp } from '../types';
import { GOOGLE_SCRIPT_URL } from '../constants';

export const submitRsvp = async (data: GuestRsvp): Promise<{ success: boolean; message: string }> => {
  
  // If no Google Script URL is provided, we simulate a success for the UI demo.
  // To make this work, deploy a Google Apps Script Web App and paste the URL in constants.ts
  if (!GOOGLE_SCRIPT_URL) {
    console.warn("GOOGLE_SCRIPT_URL is not set in constants.ts. Simulating submission.");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      message: data.isAttending 
        ? "¡Qué alegría! Gracias por confirmar tu asistencia (Simulación)." 
        : "Gracias por avisarnos. Te extrañaremos (Simulación)."
    };
  }

  try {
    // Send data to Google Apps Script
    // We use no-cors because Google Scripts Web Apps don't support CORS preflight requests easily for random domains.
    // This means we won't get a readable response JSON, but the data will arrive if the URL is correct.
    const params = new URLSearchParams({
      name: data.name,
      isAttending: data.isAttending ? 'Sí' : 'No',
      guestsCount: String(data.guestsCount),
      dietaryRestrictions: data.dietaryRestrictions || '',
      songSuggestion: data.songSuggestion || '',
    });

    await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
      method: 'GET',
      mode: 'no-cors',
    });

    return {
      success: true,
      message: data.isAttending 
        ? "¡Qué alegría! Gracias por confirmar tu asistencia." 
        : "Gracias por avisarnos. Te extrañaremos."
    };
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    return {
      success: false,
      message: "Hubo un problema al enviar la confirmación. Por favor intenta de nuevo."
    };
  }
};