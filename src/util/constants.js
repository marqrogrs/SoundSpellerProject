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
]

export const LEVELS = Array.apply(null, Array(4))
export const LESSON_SECTIONS = Array.apply(null, Array(13)) //TODO: this can be more programatic
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
}
export const INIT_PROGRESS_OBJ = {
  current_level: 0,
  completed_words: 0,
  scores: { 0: 0, 1: 0, 2: 0, 3: 0 },
}
