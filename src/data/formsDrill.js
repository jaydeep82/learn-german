/**
 * Forms drill — 10 realistic Schreiben Teil 1 tests (section practice).
 *
 * Each test mirrors the real exam sheet: a short text about a FRIEND (you
 * transfer their details in the 3rd person), a form with pre-filled example
 * rows (shown as "(0)") and exactly FIVE scored gaps — a mix of copy fields
 * and inference fields (tick the right box: course time from "am Vormittag",
 * payment from "hat keine Kreditkarte", ja/nein …). All content strictly A1.
 */

export const FORMS_DRILL = [
  {
    id: '1',
    title: 'Anmeldung — Sprachschule Berlin',
    emoji: '🏫',
    intro: 'Ihr Freund Peter Miller aus England, geboren am 14.3.1995 in Manchester, möchte vom 2. bis zum 27. Juni einen Deutschkurs in Berlin besuchen. Er hat noch nie Deutsch gelernt. In der Schule hat er Spanisch gelernt. Am Vormittag arbeitet er — er hat nur am Abend Zeit.',
    fields: [
      { label: 'Nachname', name: 'last', prefilled: 'Miller' },
      { label: 'Vorname', name: 'first', prefilled: 'Peter' },
      { label: 'Geburtsdatum', name: 'dob', answer: ['14.3.1995', '14.03.1995'] },
      { label: 'Geburtsort', name: 'pob', answer: 'Manchester' },
      { label: 'Muttersprache', name: 'native', prefilled: 'Englisch' },
      { label: 'Andere Sprachen', name: 'langs', answer: ['Spanisch', 'Spanisch und Englisch', 'Englisch und Spanisch', 'Spanisch, Englisch', 'Englisch, Spanisch'] },
      { label: 'Schon Deutsch gelernt', name: 'prior', type: 'choice', options: ['ja', 'nein'], answer: 'nein' },
      { label: 'Kurszeit', name: 'slot', type: 'choice', options: ['von 9 – 12 Uhr', 'von 13 – 16 Uhr', 'von 18 – 21 Uhr'], answer: 'von 18 – 21 Uhr' },
    ],
  },
  {
    id: '2',
    title: 'Anmeldung — Reisebüro Sonnenschein',
    emoji: '🚌',
    intro: 'Ihre Freundin Ana Silva macht mit ihrem Mann und ihrer Tochter (5 Jahre alt) Urlaub in Dresden. Sie wohnen im Hotel Garten in der Parkstraße 12. Im Reisebüro bucht sie für nächsten Sonntag eine Busfahrt durch die Altstadt. Frau Silva hat keine Kreditkarte.',
    fields: [
      { label: 'Nachname, Vorname', name: 'name', prefilled: 'Silva, Ana' },
      { label: 'Anzahl der Personen', name: 'persons', answer: ['3', 'drei'] },
      { label: 'Davon Kinder', name: 'children', answer: ['1', 'ein', 'eins'] },
      { label: 'Urlaubsadresse', name: 'hotel', answer: ['Hotel Garten', 'Hotel Garten, Parkstraße 12', 'Parkstraße 12', 'in der Parkstraße 12', 'Parkstraße 12, Dresden', 'Hotel Garten, Parkstraße 12, Dresden'] },
      { label: 'Reisetermin', name: 'date', answer: ['Sonntag', 'nächsten Sonntag', 'am Sonntag'] },
      { label: 'Zahlungsweise', name: 'payment', type: 'choice', options: ['Bar', 'Kreditkarte'], answer: 'Bar' },
    ],
  },
  {
    id: '3',
    title: 'Patienteninformation — Zahnarztpraxis Dr. Roth',
    emoji: '🦷',
    intro: 'Ihr Freund Omar Farah, 34 Jahre alt, kommt aus Somalia und lebt jetzt in Kassel. Er arbeitet als Koch. Seit Montag hat er starke Zahnschmerzen. Heute geht er zum ersten Mal in diese Zahnarztpraxis. Seine Krankenkasse ist die AOK.',
    fields: [
      { label: 'Name, Vorname', name: 'name', prefilled: 'Farah, Omar' },
      { label: 'Krankenkasse', name: 'insurance', prefilled: 'AOK' },
      { label: 'Wohnort', name: 'city', prefilled: 'Kassel' },
      { label: 'Alter', name: 'age', answer: ['34', 'vierunddreißig'] },
      { label: 'Beruf', name: 'job', answer: 'Koch' },
      { label: 'Krank seit wann?', name: 'since', answer: ['seit Montag', 'Montag'] },
      { label: 'Was fehlt Ihnen?', name: 'problem', answer: ['Zahnschmerzen', 'starke Zahnschmerzen'] },
      { label: 'Schon einmal in dieser Praxis?', name: 'firstvisit', type: 'choice', options: ['ja', 'nein'], answer: 'nein' },
    ],
  },
  {
    id: '4',
    title: 'Anmeldung — Hotel Lindenhof',
    emoji: '🏨',
    intro: 'Ihr Freund Stefan Gruber aus Österreich (er wohnt in Wien) kommt am Freitag nach München und bleibt zwei Nächte im Hotel. Er möchte morgens im Hotel frühstücken.',
    fields: [
      { label: 'Nachname', name: 'last', prefilled: 'Gruber' },
      { label: 'Vorname', name: 'first', prefilled: 'Stefan' },
      { label: 'Land', name: 'country', answer: ['Österreich', 'Oesterreich', 'Austria'] },
      { label: 'Stadt', name: 'city', answer: ['Wien', 'Vienna'] },
      { label: 'Ankunft', name: 'arrival', answer: ['Freitag', 'am Freitag'] },
      { label: 'Nächte', name: 'nights', answer: ['2', 'zwei'] },
      { label: 'Frühstück', name: 'breakfast', type: 'choice', options: ['ja', 'nein'], answer: 'ja' },
    ],
  },
  {
    id: '5',
    title: 'Anmeldung — Stadtbibliothek Jena',
    emoji: '📚',
    intro: 'Ihre Freundin Olena Bondar aus der Ukraine ist Studentin und wohnt in Jena, Blumenweg 4. Sie ist 1999 geboren und möchte einen Bibliotheksausweis. Ihre E-Mail ist olena.bondar@mail.de. Sie möchte keine Werbung von der Bibliothek bekommen.',
    fields: [
      { label: 'Name, Vorname', name: 'name', prefilled: 'Bondar, Olena' },
      { label: 'Straße, Hausnummer', name: 'street', answer: ['Blumenweg 4'] },
      { label: 'Geburtsjahr', name: 'year', answer: '1999' },
      { label: 'Beruf', name: 'job', answer: ['Studentin', 'Student'] },
      { label: 'E-Mail', name: 'email', answer: 'olena.bondar@mail.de' },
      { label: 'Werbung per E-Mail', name: 'ads', type: 'choice', options: ['ja', 'nein'], answer: 'nein' },
    ],
  },
  {
    id: '6',
    title: 'Anmeldung — Schwimmverein Delfin',
    emoji: '🏊',
    intro: 'Ihr Freund Marco Rossi meldet seine Tochter Sofia im Schwimmverein an. Sofia ist 8 Jahre alt. Sie hat nur am Samstag Zeit — von Montag bis Freitag ist sie in der Schule. Die Telefonnummer der Familie ist 089 335577.',
    fields: [
      { label: 'Nachname', name: 'last', prefilled: 'Rossi' },
      { label: 'Vorname des Kindes', name: 'first', answer: 'Sofia' },
      { label: 'Alter', name: 'age', answer: ['8', 'acht'] },
      { label: 'Sportart', name: 'sport', answer: ['Schwimmen'] },
      { label: 'Telefon', name: 'phone', answer: '089 335577' },
      { label: 'Trainingstag', name: 'day', type: 'choice', options: ['Dienstag', 'Donnerstag', 'Samstag'], answer: 'Samstag' },
    ],
  },
  {
    id: '7',
    title: 'Paketschein — Post',
    emoji: '📦',
    intro: 'Ihre Freundin Marie Dubois schickt ein Paket an ihre Eltern nach Frankreich, in die Stadt Lyon. Im Paket sind Bücher, es wiegt fünf Kilo. Das Paket ist nicht eilig.',
    fields: [
      { label: 'Absenderin', name: 'sender', prefilled: 'Dubois, Marie' },
      { label: 'Empfänger', name: 'recipient', prefilled: 'Familie Dubois' },
      { label: 'Land', name: 'country', answer: ['Frankreich', 'France'] },
      { label: 'Stadt', name: 'city', answer: 'Lyon' },
      { label: 'Gewicht', name: 'weight', answer: ['5 Kilo', 'fünf Kilo', '5 kg'] },
      { label: 'Inhalt', name: 'contents', answer: ['Bücher', 'Buecher'] },
      { label: 'Versand', name: 'shipping', type: 'choice', options: ['Normal', 'Express'], answer: 'Normal' },
    ],
  },
  {
    id: '8',
    title: 'Anmeldung — Volkshochschule · Kochkurs',
    emoji: '🍳',
    intro: 'Ihre Freundin Julia Santos aus Brasilien wohnt in Köln. Sie möchte an der Volkshochschule einen Kochkurs machen. Sie arbeitet viel und hat nur am Mittwochabend Zeit. Ihre Handynummer ist 0176 889900.',
    fields: [
      { label: 'Nachname', name: 'last', prefilled: 'Santos' },
      { label: 'Vorname', name: 'first', answer: 'Julia' },
      { label: 'Land', name: 'country', answer: ['Brasilien', 'Brazil'] },
      { label: 'Wohnort', name: 'city', answer: ['Köln', 'Koeln', 'Cologne'] },
      { label: 'Kurs', name: 'course', answer: ['Kochkurs', 'Kochen'] },
      { label: 'Kurstag', name: 'day', type: 'choice', options: ['Montag', 'Mittwoch', 'Freitag'], answer: 'Mittwoch' },
      { label: 'Telefon', name: 'phone', prefilled: '0176 889900' },
    ],
  },
  {
    id: '9',
    title: 'Buchung — Flug nach Rom',
    emoji: '✈️',
    intro: 'Ihre Freundin Emma Weber fliegt am 3. Oktober von Frankfurt nach Rom. Sie reist allein und nimmt nur eine kleine Tasche mit — sie braucht keinen Koffer. Im Flugzeug möchte sie am Fenster sitzen.',
    fields: [
      { label: 'Name, Vorname', name: 'name', prefilled: 'Weber, Emma' },
      { label: 'Von', name: 'from', prefilled: 'Frankfurt' },
      { label: 'Nach', name: 'to', answer: ['Rom', 'Rome'] },
      { label: 'Datum', name: 'date', answer: ['3. Oktober', '3.10.', '03.10.', 'am 3. Oktober'] },
      { label: 'Anzahl der Personen', name: 'persons', answer: ['1', 'eins', 'ein', 'eine', 'eine Person'] },
      { label: 'Gepäck', name: 'luggage', type: 'choice', options: ['nur Handgepäck', 'mit Koffer'], answer: 'nur Handgepäck' },
      { label: 'Sitzplatz', name: 'seat', type: 'choice', options: ['Fenster', 'Gang'], answer: 'Fenster' },
    ],
  },
  {
    id: '10',
    title: 'Lieferschein — Elektro-Markt',
    emoji: '🚚',
    intro: 'Ihr Freund Ali Demir kauft eine Waschmaschine. Der Elektro-Markt liefert sie nach Hause: Hauptstraße 15 in Bremen. Herr Demir wohnt im dritten Stock. Er ist nur am Freitag zu Hause und möchte mit Karte zahlen.',
    fields: [
      { label: 'Name, Vorname', name: 'name', prefilled: 'Demir, Ali' },
      { label: 'Straße, Hausnummer', name: 'street', answer: ['Hauptstraße 15', 'Hauptstrasse 15'] },
      { label: 'Wohnort', name: 'city', answer: 'Bremen' },
      { label: 'Stock', name: 'floor', answer: ['3. Stock', 'dritter Stock', 'im dritten Stock', '3'] },
      { label: 'Liefertag', name: 'day', type: 'choice', options: ['Mittwoch', 'Freitag', 'Samstag'], answer: 'Freitag' },
      { label: 'Zahlungsweise', name: 'payment', type: 'choice', options: ['Bar', 'mit Karte'], answer: 'mit Karte' },
    ],
  },
];

export const formById = (id) => FORMS_DRILL.find((f) => f.id === String(id)) || null;

/** Convert a drill entry to a FormFill exercise spec. */
export const asExercise = (form) => ({
  type: 'form-fill',
  label: 'Schreiben · Teil 1',
  title: form.title,
  context: form.intro,
  fields: form.fields,
});
