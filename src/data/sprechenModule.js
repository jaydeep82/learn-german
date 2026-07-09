/**
 * Goethe A1 "Sprechen" (Speaking) practice module — roadmap A6.
 *
 * The real test is spoken in a group and can't be auto-graded, so each Teil is
 * a set of speaking cards (keyword → say it aloud → reveal a model answer with
 * audio → self-rate). One SpeakingCard exercise per Teil.
 *
 *   Teil 1 — Sich vorstellen (introduce yourself)
 *   Teil 2 — Fragen stellen (ask questions on a topic, from keyword cards)
 *   Teil 3 — Bitten formulieren (make polite requests)
 */

export const SPRECHEN_PARTS = [
  { teil: 1, name: 'Sich vorstellen', en: 'Introduce yourself', blurb: 'Say a sentence about yourself for each keyword.' },
  { teil: 2, name: 'Fragen stellen', en: 'Ask questions', blurb: 'Form a question with each keyword on the topic.' },
  { teil: 3, name: 'Bitten formulieren', en: 'Make requests', blurb: 'Make a polite request for each situation.' },
];

const T1 = 'Sprechen · Teil 1';
const T2 = 'Sprechen · Teil 2';
const T3 = 'Sprechen · Teil 3';

export const SPRECHEN_EXERCISES = [
  {
    type: 'speaking-card', label: T1,
    instruction: 'Stellen Sie sich vor. Sagen Sie zu jedem Stichwort einen Satz über sich.',
    cards: [
      { keyword: 'Name', prompt: 'Say your name.', model: 'Ich heiße Anna Müller.' },
      { keyword: 'Alter', prompt: 'Say how old you are.', model: 'Ich bin 28 Jahre alt.' },
      { keyword: 'Land', prompt: 'Say which country you come from.', model: 'Ich komme aus Spanien.' },
      { keyword: 'Wohnort', prompt: 'Say where you live.', model: 'Ich wohne in Berlin.' },
      { keyword: 'Sprachen', prompt: 'Say which languages you speak.', model: 'Ich spreche Spanisch, Englisch und ein bisschen Deutsch.' },
      { keyword: 'Beruf', prompt: 'Say what your job is.', model: 'Ich bin Krankenschwester von Beruf.' },
      { keyword: 'Hobby', prompt: 'Say what your hobby is.', model: 'Mein Hobby ist Schwimmen.' },
    ],
  },
  {
    type: 'speaking-card', label: T2,
    instruction: 'Thema: Einkaufen. Bilden Sie zu jedem Wort eine Frage.',
    cards: [
      { keyword: 'Supermarkt', prompt: 'Ask where the supermarket is.', model: 'Wo ist der Supermarkt, bitte?' },
      { keyword: 'Brot', prompt: 'Ask how much the bread costs.', model: 'Was kostet das Brot?' },
      { keyword: 'Öffnungszeiten', prompt: 'Ask when the shop is open.', model: 'Wann hat der Supermarkt geöffnet?' },
      { keyword: 'bezahlen', prompt: 'Ask where you can pay.', model: 'Wo kann ich bezahlen?' },
    ],
  },
  {
    type: 'speaking-card', label: T3,
    instruction: 'Formulieren Sie zu jeder Situation eine höfliche Bitte.',
    cards: [
      { keyword: 'Fenster', prompt: 'Politely ask someone to open the window.', model: 'Könnten Sie bitte das Fenster öffnen?' },
      { keyword: 'Licht', prompt: 'Politely ask a friend to turn on the light.', model: 'Kannst du bitte das Licht anmachen?' },
      { keyword: 'Stift', prompt: 'Politely ask to borrow a pen.', model: 'Könnten Sie mir bitte einen Stift geben?' },
      { keyword: 'Tür', prompt: 'Politely ask someone to close the door.', model: 'Machen Sie bitte die Tür zu.' },
    ],
  },
];

// Scorable turns = total number of cards across all Teile.
export const SPRECHEN_ITEM_COUNT = SPRECHEN_EXERCISES.reduce((n, ex) => n + ex.cards.length, 0);
