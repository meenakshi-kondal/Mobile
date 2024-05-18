import { englishMessages } from './eng_messages';
import { hindiMessages } from './hindi_messages';

// Retrieve a value from Local Storage
const value = localStorage.getItem('response');

export const RESPONSE =
  (value === 'HI' ? hindiMessages : englishMessages) ?? englishMessages;
