export const DEFAULT_BUTTONS_THEME = [
  {
    class: 'green dark',
    buttons: 'A ; a',
  },
  {
    class: 'green light',
    buttons: 'Q P Z q p z',
  },
  {
    class: 'blue light',
    buttons: 'W O X w o x',
  },
  {
    class: 'blue dark',
    buttons: 'S L s l',
  },
  {
    class: 'navy light',
    buttons: 'E I C e i c ,',
  },
  {
    class: 'navy dark',
    buttons: 'D K d k',
  },
  {
    class: 'gold light',
    buttons: 'R U V M r u v m',
  },
  {
    class: 'gold dark',
    buttons: 'F J f j',
  },
  {
    class: 'grey light',
    buttons: 'N B H G Y T n b h y g t',
  },
];

export const LEVELS = Array.apply(null, Array(4));
export const LESSON_SECTIONS = Array.apply(null, Array(13)); //TODO: this can be more programatic
export const PHONEMES = {
  AE: 'a.mp3',
  AIR: 'air.mp3',
  EY: 'aa.mp3',
  B: 'b.mp3',
  CH: 'ch.mp3',
  D: 'd.mp3',
  EH: 'e.mp3',
  IY: 'ee.mp3',
  F: 'f.mp3',
  G: 'g.mp3',
  HH: 'h.mp3',
  IH: 'i.mp3',
  AY: 'ii.mp3',
  JH: 'j.mp3',
  K: 'k.mp3',
  L: 'l-onset.mp3',
  LL: 'l-coda.mp3',
  M: 'm.mp3',
  N: 'n.mp3',
  NG: 'ng.mp3',
  AA: 'o.mp3',
  OW: 'oo.mp3',
  AO: 'au.mp3',
  UH: 'oo-foot.mp3',
  AW: 'ou.mp3',
  OY: 'oy.mp3',
  P: 'p.mp3',
  R: 'r.mp3',
  AR: 'ar.mp3',
  ER: 'er.mp3',
  OR: 'or.mp3',
  S: 's.mp3',
  SH: 'sh.mp3',
  T: 't.mp3',
  TH: 'th.mp3',
  DH: 'thv.mp3',
  AH: 'u.mp3',
  UW: 'ew.mp3',
  V: 'v.mp3',
  W: 'w.mp3',
  Y: 'y.mp3',
  Z: 'z.mp3',
  ZH: 'zh.mp3',
};

//Don't use this unless you want to create a custom clone or json parse/stringify - it WILL get mutated
//https://stackoverflow.com/questions/43074256/changes-to-object-made-with-object-assign-mutates-source-object
export const INIT_PROGRESS_OBJ = {
  0: {
    score: 0,
    completed_words: 0,
    high_score: 0,
    completed: false,
  },
  1: {
    score: 0,
    completed_words: 0,
    high_score: 0,
    completed: false,
  },
  2: {
    score: 0,
    completed_words: 0,
    high_score: 0,
    completed: false,
  },
  3: {
    score: 0,
    completed_words: 0,
    high_score: 0,
    completed: false,
  },
};

export const COMMON_PHONEMES = {
  a: 'a.mp3',
  b: 'b.mp3',
  c: 'k.mp3',
  d: 'd.mp3',
  e: 'e.mp3',
  f: 'f.mp3',
  g: 'g.mp3',
  h: 'h.mp3',
  i: 'i.mp3',
  j: 'j.mp3',
  k: 'k.mp3',
  l: 'l-onset.mp3',
  m: 'm.mp3',
  n: 'n.mp3',
  o: 'o.mp3',
  p: 'p.mp3',
  q: 'k.mp3',
  r: 'r.mp3',
  s: 's.mp3',
  t: 't.mp3',
  u: 'u.mp3',
  v: 'v.mp3',
  w: 'w.mp3',
  x: ['k.mp3', 's.mp3'],
  y: 'y.mp3',
  z: 'z.mp3',
};

export const SUCCESS_MESSAGES = [
  'Yippee!',
  'Woohoo!',
  'Nice!',
  'Way to go!',
  'Good job!',
  'Hip hip hooray!',
  'Awesome work!',
  'Nice one!',
  'Sweet!',
  'Keep it up!',
  'Wow!',
  "You're doing great!",
];

export const FAILURE_MESSAGES = [
  'Uh oh!',
  'Not quite...',
  'Almost',
  'Oops!',
  'Maybe next time.',
  'Hmm... not quite.',
  'Maybe next time...',
  'Almost got it.',
  'Oh no!',
];

export const FUN_FACTS = [
  'There are over 7,000 languages worldwide -- Wow!',
  "At least half of the world's population is bilingual. Cool!",
  'In the country of Papua New Guinea, 840 different languages are spoken.',
  'The English language contains the most words - over 250,000!',
  'The Cambodian language has the longest alphabet with 74 characters! What do you think their keyboards look like?',
  'The Bible is the most translated book in the world. Can you guess the second most translated? Pinocchio!',
  'The first printed book was written in German.',
  'January 8th is Typing Day!',
  'The average person only uses a few hundred words a day in conversation.',
  "The United States has no official language - most people just assume it's English!",
  'About 30% of English words come from French. For example, ballet and RSVP. Can you think of some?',
  'Hawaiians have over 200 different words for rain. Interesting!',
  'The first language spoken in outer space was Russian.',
  'The longest word that can be made using the letter on one row of the keyboard is Typewriter.',
  'The shortest spacebar can be found on a Japanese keyboard. Neat!',
  "The keyboard layout was designed to increase the amount of time it takes to type a word so that the typewriter wouldn't jam!",
  'Most keyboards have a tiny bump on the F and J keys so your fingers can find them easily without looking. Do you have the F and J bumps?',
  'There is a monument to the keyboard in Yekaterinbug, Russia whenere people make wishes by jumping from letter to letter. What would you wish for?',
  'Before the invention of the mouse, keyboards were the only way to interact with the computer. Sounds tough!',
  'The longest English word you can type using only your left hand is stewardess. Try it!',
  'The three most used keys on the keyboard are the spacebar, E and backspace. Neat!',
  'These days, most people call the # symbol a hashtag or pound. The real word for it is octothorpe. Cool!',
  'The world record for typing the English alphabet from A to Z is 1.36 seconds. Wow!',
  "Typing on a manual typewriter was such a big workout that when typists switched from manual to electric, they'd gain about ten pounds a year!",
  'Every time you hit the space bar, another 6 million space bars get hit at the same time. Woah!',
  'The first email ever set contained qwertyuiop - all the letters from the top row of the keyboard. Cool!',
  "One of the most commonly used passwords on Earth is qwerty. So don't use it!",
  'Every 1/10th of a second, 600,000 people will hit the space bar. Wow!',
  'The QWERTY keyboard layout was invented in 1872 for the typewriter.',
  '18 percent of all keyboard strokes are the Spacebar.',
  'The only country whose name can be typed on one row of a keyboard is Peru. The only US state is Alaska.',
];

//export const PAYPAL_URL =
//  'https://www.paypal.com/donate/?cmd=_donations&business=donate%40soundspeller.com&currency_code=USD';

//export const SOUNDSPELLER_URL = 'https://www.soundspeller.com/about';
/* export const SOUNDSPELLER_URL = 'https://www.soundspeller.com/about' */
//i//