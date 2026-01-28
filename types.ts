export interface GuestRsvp {
  name: string;
  guestsCount: number;
  dietaryRestrictions?: string;
  songSuggestion?: string;
  isAttending: boolean;
}

export enum SectionId {
  HOME = 'home',
  DETAILS = 'details',
  GALLERY = 'gallery',
  TIMELINE = 'timeline',
  GIFTS = 'gifts',
  RSVP = 'rsvp',
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}