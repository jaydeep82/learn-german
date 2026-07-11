/**
 * A1 phrase bank (roadmap D1) — ready-made chunks for the exam and real life.
 * Organised by situation; the writing templates map to Schreiben Teil 2 and
 * the speaking sections to Sprechen. Shown at /phrases.
 */

export const PHRASEBOOK = [
  {
    section: 'Greetings & goodbyes', emoji: '👋',
    phrases: [
      { de: 'Guten Morgen! / Guten Tag! / Guten Abend!', en: 'Good morning! / Good day! / Good evening!' },
      { de: 'Hallo! Wie geht es dir?', en: 'Hi! How are you? (informal)' },
      { de: 'Wie geht es Ihnen? — Danke, gut. Und Ihnen?', en: 'How are you? (formal) — Fine, thanks. And you?' },
      { de: 'Auf Wiedersehen! / Tschüss! / Bis morgen!', en: 'Goodbye! / Bye! / See you tomorrow!' },
      { de: 'Auf Wiederhören!', en: 'Goodbye! (on the phone)' },
      { de: 'Schönes Wochenende!', en: 'Have a nice weekend!' },
    ],
  },
  {
    section: 'Introducing yourself', emoji: '🙋',
    phrases: [
      { de: 'Ich heiße Anna Müller.', en: 'My name is Anna Müller.' },
      { de: 'Ich komme aus Indien und wohne in Berlin.', en: 'I come from India and live in Berlin.' },
      { de: 'Ich bin 28 Jahre alt.', en: 'I am 28 years old.' },
      { de: 'Ich bin Ingenieurin von Beruf.', en: 'I am an engineer by profession. (m: Ingenieur)' },
      { de: 'Ich spreche Englisch, Hindi und ein bisschen Deutsch.', en: 'I speak English, Hindi and a little German.' },
      { de: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.', en: 'I am learning German because I want to work in Germany.' },
      { de: 'Freut mich!', en: 'Nice to meet you!' },
    ],
  },
  {
    section: 'When you don’t understand', emoji: '🆘',
    phrases: [
      { de: 'Wie bitte?', en: 'Pardon?' },
      { de: 'Können Sie das bitte wiederholen?', en: 'Can you please repeat that?' },
      { de: 'Können Sie bitte langsamer sprechen?', en: 'Can you please speak more slowly?' },
      { de: 'Was bedeutet das?', en: 'What does that mean?' },
      { de: 'Wie schreibt man das?', en: 'How do you spell that?' },
      { de: 'Ich verstehe das nicht.', en: 'I don’t understand that.' },
      { de: 'Sprechen Sie Englisch?', en: 'Do you speak English?' },
    ],
  },
  {
    section: 'Polite requests (Sprechen Teil 3)', emoji: '🙏',
    phrases: [
      { de: 'Können Sie mir bitte helfen?', en: 'Can you help me, please?' },
      { de: 'Könnten Sie bitte das Fenster öffnen?', en: 'Could you open the window, please?' },
      { de: 'Kannst du mir bitte einen Stift geben?', en: 'Can you give me a pen, please? (informal)' },
      { de: 'Machen Sie bitte die Tür zu.', en: 'Please close the door.' },
      { de: 'Einen Moment, bitte.', en: 'One moment, please.' },
      { de: 'Ja, gern! / Natürlich!', en: 'Yes, gladly! / Of course! (answering a request)' },
      { de: 'Entschuldigung, das geht leider nicht.', en: 'Sorry, that’s not possible. (declining politely)' },
      { de: 'Vielen Dank! — Bitte schön!', en: 'Thank you very much! — You’re welcome!' },
    ],
  },
  {
    section: 'Shopping & restaurant', emoji: '🛒',
    phrases: [
      { de: 'Ich möchte bitte einen Kaffee.', en: 'I would like a coffee, please.' },
      { de: 'Ich hätte gern ein Kilo Äpfel.', en: 'I would like a kilo of apples.' },
      { de: 'Was kostet das?', en: 'How much is that?' },
      { de: 'Haben Sie das auch in Größe 40?', en: 'Do you have this in size 40 as well?' },
      { de: 'Die Rechnung, bitte. / Zahlen, bitte.', en: 'The bill, please.' },
      { de: 'Kann ich mit Karte zahlen?', en: 'Can I pay by card?' },
      { de: 'Das schmeckt sehr gut!', en: 'This tastes very good!' },
    ],
  },
  {
    section: 'Directions & travel', emoji: '🧭',
    phrases: [
      { de: 'Entschuldigung, wie komme ich zum Bahnhof?', en: 'Excuse me, how do I get to the station?' },
      { de: 'Gehen Sie geradeaus und dann links.', en: 'Go straight ahead and then left.' },
      { de: 'Wann fährt der nächste Zug nach München?', en: 'When does the next train to Munich leave?' },
      { de: 'Einmal nach Frankfurt, hin und zurück, bitte.', en: 'One ticket to Frankfurt, return, please.' },
      { de: 'Von welchem Gleis fährt der Zug?', en: 'Which platform does the train leave from?' },
      { de: 'Ist der Platz noch frei?', en: 'Is this seat free?' },
    ],
  },
  {
    section: 'Time & appointments', emoji: '🕒',
    phrases: [
      { de: 'Wie spät ist es? — Es ist halb neun.', en: 'What time is it? — It’s half past eight.' },
      { de: 'Haben Sie am Montag Zeit?', en: 'Do you have time on Monday?' },
      { de: 'Ich möchte einen Termin machen.', en: 'I would like to make an appointment.' },
      { de: 'Der Termin fällt leider aus.', en: 'Unfortunately the appointment is cancelled.' },
      { de: 'Ich komme etwas später.', en: 'I’ll be a little late.' },
      { de: 'Passt es dir am Samstag um drei?', en: 'Does Saturday at three work for you? (informal)' },
    ],
  },
];

/**
 * Writing templates for Schreiben Teil 2 — a reusable skeleton per register.
 * `slots` shows learners what to swap; kept short (~30 words like the exam).
 */
export const WRITING_TEMPLATES = [
  {
    title: 'Informal message (to a friend)', emoji: '💌',
    lines: [
      { de: 'Liebe Marie, / Lieber Tom,', en: 'Dear Marie, / Dear Tom, (f/m)' },
      { de: 'vielen Dank für deine Einladung!', en: 'thanks a lot for your invitation!' },
      { de: 'Ich komme gern zu deiner Party am Samstag.', en: 'I’d love to come to your party on Saturday.' },
      { de: 'Soll ich etwas mitbringen?', en: 'Shall I bring something?' },
      { de: 'Bis bald! / Viele Grüße', en: 'See you soon! / Best wishes' },
      { de: 'deine Anna / dein Max', en: 'yours, Anna / Max (f/m)' },
    ],
  },
  {
    title: 'Formal email (Sie)', emoji: '📧',
    lines: [
      { de: 'Sehr geehrte Frau Weber, / Sehr geehrter Herr Weber,', en: 'Dear Ms Weber, / Dear Mr Weber,' },
      { de: 'leider kann ich am Montag nicht kommen, weil ich krank bin.', en: 'unfortunately I cannot come on Monday because I am ill.' },
      { de: 'Können wir einen neuen Termin machen?', en: 'Can we arrange a new appointment?' },
      { de: 'Vielen Dank für Ihr Verständnis.', en: 'Thank you for your understanding.' },
      { de: 'Mit freundlichen Grüßen', en: 'Kind regards' },
      { de: 'Anna Müller', en: 'Anna Müller' },
    ],
  },
  {
    title: 'Asking for information (formal)', emoji: '❓',
    lines: [
      { de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam,' },
      { de: 'ich habe Ihre Anzeige gelesen und habe noch Fragen.', en: 'I read your advertisement and still have questions.' },
      { de: 'Was kostet der Kurs und wann beginnt er?', en: 'How much does the course cost and when does it start?' },
      { de: 'Bitte schicken Sie mir mehr Informationen.', en: 'Please send me more information.' },
      { de: 'Mit freundlichen Grüßen', en: 'Kind regards' },
      { de: 'Anna Müller', en: 'Anna Müller (always sign with your name)' },
    ],
  },
];
