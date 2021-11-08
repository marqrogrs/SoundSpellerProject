import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import SSBannerLong from '../img/SSBannerLong.png';
//var SSLogo = require('../img/SSLogo.png');
import Banner from '../components/Banner';
import { useStyles } from '../styles/material';
import CardForm from '../components/CardForm';
export default function Content() {
  return (
     <React.Fragment> 
    
      {/* <div> */}
      <Container>
        {/* <React.Fragment> */}
<img src={SSBannerLong} />
        <Grid
          container
          spacing={1}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={3}>
            <Paper align="center">
              {/* <h2>Section 1 </h2> */}
              <h4>Short Vowels and Consonants </h4>
            </Paper>
            <Paper>
              <botton>
                <h3> Part 1 . The Keys</h3>
              </botton>
              <Typography>
              
                The Keys is a systematic introduction to the keyboard,
                starting with the Home Row, and including all letter
                keys. In this section, the keys are matched
                individually with their most common sounds. The vowels
                are short. The C Key makes the /k/ sound, etc.
              </Typography>
              <h4 align='justify'>Lessons</h4>
              <body2 align='justify'>
              <ol>
                <li>A S D F G</li>
                <li>H J K L P O</li>
                <li>I M U N Y</li>
                <li>Q Z W X E C</li>
                <li>R V T B</li>
             </ol> </body2>
              <h4>Spelling Patterns</h4>
              <dl>
                <dt>
                  The short vowel sound is the most common sound of a
                  single vowel.
                </dt>
                <dd>Examples: A, O, U, I, E.</dd>
                <dt>
                  Single consonant letters at the beginning of a word
                  mostly represent only one consonant sound.
                </dt>
                <dd>Notable exceptions: C & G</dd>
              </dl>
            </Paper>
            <Paper>
              <h3> Part 2. Short Vowels</h3>
              <p>
                {' '}
                Short Vowels introduces the same sounds in part 1, but
                within words; phoneme by phoneme. The first digraph
                (CK) is introduced, as well as, two syllable words
                with the suffixes S, ES, ED, EN and IC.
              </p>
              <p>Lessons</p>

              <ol>
                <li>A – S D F G</li>
                <li>O – H J K C CK</li>
                <li>U – L M N</li>
                <li>I – P R T</li>
                <li>E – B V Y Z</li>
                <li>Two Syllable Words with Suffixes</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  A single written vowel has a short sound in a closed
                  syllable. A syllable is closed when it ends with a
                  closing consonant or consonant team.
                </dt>
                <dd>
                  - Examples: at, cat, etch, fetch, in, pin, on, Don,
                  up, pup.
                </dd>
                <dt>
                  Suffix S, -ES as Plural To make a word plural add
                  the ending S, unless the word ends with the /s/,
                  /z/, /ch/ or /sh/ sound, or if it changes the
                  meaning of the word; then add ES.
                </dt>
                <dd>- Examples: Hits, Boxes, Wishes.</dd>
              </dl>

              <h3> Part 3 Consonant Blends</h3>
              <p>
                {' '}
                Consonant Blends introduces words with consonant
                blends such as ST, TR, SM, DR, ND and short vowels are
                reinforced.
              </p>
              <p>Lessons</p>

              <ol>
                <li>SK ST SW SL SP</li>
                <li>BL CL FL GL PL</li>
                <li>BR CR DR PR TR TW</li>
                <li>SK SP ST ND NT LP MP</li>
                <li>ND NT LP MP</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  When two or three consonants sounds are spoken
                  together their sounds overlap and partly blend.
                </dt>
                <dd>- Examples: Sp in Spit , Spl in Split.</dd>
              </dl>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            {/* <Paper align="center">
              <h2>Section 2. </h2>
            </Paper> */}
            <Paper align="center">
              <h2>Letter Teams </h2>
            </Paper>
            <Card>
              {' '}
              <h3> Part 4. Consonant Teams </h3>
              <p>
                {' '}
                Consonant Teams introduces digraphs such as SH, TH,
                WH, CH, TCH, DGE, QU, and NG (as well as X which is
                one letter representing two sounds and introduces
                prefixes MIS, IN, UN and double consonants before
                suffixes ED, ING (top/topped/topping).
              </p>
              <p>Lessons</p>
              <ol>
                <li>SH TH WH</li>
                <li>CH TCH</li>
                <li>J DGE</li>
                <li>QU X</li>
                <li>NG NK</li>
                <li>FF LL SS ZZ</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  SH, TH & WH are not blends. They each represent one
                  sound.
                </dt>
                <dd>
                  - Examples: SH in Shot and Dish, TH in Thing and
                  With, WH in What and Why.
                </dd>
                <dt>
                  An ending /ch/ sound, after a single short vowel, is
                  written TCH.
                </dt>
                <dd>
                  - Examples: Catch . Pitch But after a long vowel
                  sound, or a consonant, it is written CH. Examples:
                  Peach . Torch
                </dd>
                <dt>
                  English words do not end J.Instead, use DGE after a
                  short vowel. The letter D is used as a second
                  consonant, along with the letter G, so that the
                  vowel will remain short.{' '}
                </dt>
                <dd>- Example: Fudge (not fuge).</dd>
                <dt>
                  At the end of a base word the letter X becomes one
                  letter with two sounds. The /k/ Sound is quickly
                  followed by the /s/ sound.
                </dt>
                <dd>- Examples: Fox, Box</dd>
                <dt>
                  In English words, the letter Q always has the letter
                  U after it. Together they make the /k/ and /w/
                  consonant sounds. Words in English that start with a
                  /kw/ blend sound are always spelled QU.{' '}
                </dt>
                <dd>Examples: Quit, Queen.</dd>
                <dt>
                  The long /u/ sound can be written U, the letters E-W
                  and the letters OO.
                </dt>
                <dt>
                  The long /u/ sound can be written U, the letters E-W
                  and the letters OO.
                </dt>
                <dt>
                  The /ng/ sound is one sound, and written NG, at the
                  ends of words.
                </dt>
                <dd>Examples: Sing, Bang, Running.</dd>
                <dt>
                  The letters F, L, S and Z are doubled after a single
                  short vowel in a closed syllable. They are doubled
                  but have only one sound each.
                </dt>
                <dd>Examples: Stuff . Mill . Boss . Buzz.</dd>
                <dt>
                  Double the last consonant when adding a vowel suffix
                  to multi-syllable words ending in one vowel followed
                  by one consonant when the syllable before the suffix
                  is accented.
                </dt>
                <dt>
                  The suffix ED, which makes a verb past tense, has
                  three ways to say it:
                </dt>
                <dd>
                  {' '}
                  /d/ when after a voiced sound. Example: Played
                </dd>
                <dd>
                  {' '}
                  /t/ when after an unvoiced sound. Example: Walked
                </dd>
                <dd> /ed/ after a T or D. Example: Wanted.</dd>
              </dl>
            </Card>
            <Paper>
              <h3> Part 5. Vowel Teams </h3>
              <p>
                Vowel Teams introduces short vowel teams such as AU,
                AW. OI, OY, OU, OW, OO, as well as introducing the
                prefixes: CON, DIS, EX, AD, AN, EN, EM, and the
                suffixes: FUL, LESS, NESS, ESS, ET, IVE.
              </p>
              <p>Lessons</p>

              <ol>
                <li>AW (saw) AU (sauce)</li>
                <li>OY (boy) OI (boil)</li>
                <li>OW (pow) OU (pound)</li>
                <li>OO (book)</li>
                <li>OO (food)</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  The /ah/ sound is usually written AW at the end of a
                  base word and AU in the middle or the beginning of
                  the word.{' '}
                </dt>
                <dd>Examples: Paw . Sauce.</dd>
                <dt>
                  At the end of a one syllable word the /ah/ sound can
                  sometimes be written with the letter A only.
                </dt>
                <dd>Examples: Ma . Pa</dd>
                <dt>
                  A before LL, or after W, will have the /ah/ sound.
                </dt>
                <dd>Examples: Ball . Want . Water</dd>
                <dt>
                  The /oy/ sound is usually written OY at the end of a
                  word and OI in the middle or beginning of a word.
                </dt>
                <dd>Examples: Toy . Toil . Boy . Boil</dd>
                <dt>
                  The /ow/ sound is usually written OW at the end of a
                  base word.
                </dt>
                <dd>Examples: Now, How.</dd>
                <dt>
                  It is usually written OU in the middle, or
                  beginning, of a word.
                </dt>
                <dd>Examples: Noun . Hound</dd>
              </dl>

              <h3> Part 6. Mixed Teams </h3>
              <p>
                Mixed Teams introduces vowel/consonant teams such as
                R-Controlled vowels (ER, IR, UR AR, OR), W-Controlled
                (WA, WOR WAR), and Sort C and G, as well as
                introducing the prefix: NON and the suffixes: ER, EST,
                INE.
              </p>
              <p>Lessons</p>

              <ol>
                <li>ER IR UR</li>
                <li>AR OR</li>
                <li>WA WOR WAR</li>
                <li> I or O before ND, LD, ST</li>
                <li>C before e, i, y</li>
                <li>G before e, i, y</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  The letter R, after a short vowel, blends with the
                  vowel to make a new “R-Controlled” sound. (ER, AR,
                  OR)
                </dt>
                <dt>
                  The letter W before A, AR & OR changes the vowel
                  sound
                </dt>
                <dt>
                  The short /a/ sound changes to the /ah/ sound.
                </dt>
                <dt>The /ar/ sound changes to an /or/ sound.</dt>
                <dt>The /or/ sound changes to an /er/ sound.</dt>
                <dd>Examples: Want . Warm . Word</dd>
                <dt>
                  The letters I and O, before the consonant blends ND,
                  LD, ST & LT, often have the long /i/ and long /o/
                  sounds.
                </dt>
                <dd>Examples: Mild . Cold . Mind . Bolt</dd>
                <dt>
                  The letter C before E, I, or Y makes the /s/ sound.
                </dt>
                <dd>Examples: Cent, City, Cyber.</dd>
                <dt>
                  The letter G before E, I, or Y usually makes the J
                  sound
                </dt>
                <dd>Examples: Gem, Gin, Gym</dd>
              </dl>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              {' '}
              <h2>Section 3. Long Sounds </h2>
            </Paper>
            <Paper>
              {' '}
              <h3> Part 7. E Power </h3>
              <p>
                E Power introduces the powers of the letter E to
                influence the sounds of other letters. Silent E to
                make a short vowel long (mat -mate), make C and G soft
                (dance, change), make L and V “legal” (able and love).
              </p>
              <p>Lessons</p>
              <ol>
                <li>Vowel_E</li>
                <li>CE Ending Sound</li>
                <li>GE Ending Sound</li>
                <li>LE Ending</li>
                <li>VE Ending</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  Silent E, after a closed syllable, changes a short
                  vowel into a long vowel. The letter E is like a
                  “key” that can “open” a closed syllable.
                </dt>
                <dt>
                  Silent E can change the Hard G /g/ sound to the soft
                  G /j/ sound.
                </dt>
                <dd>Examples: Gem . Gym . Range . Large</dd>
                <dt>
                  Words don’t end with the letter L in English. E
                  Makes Ending Consonant-L Blend “Legal”.
                </dt>
                <dd>Examples: Able (not abl), circle (not circl).</dd>
                <dt>
                  Words don’t end with V in English. E Makes Ending V
                  “Legal”.
                </dt>
                <dd>Examples: Have (not hav), Glove (not glov).</dd>
                <dt>
                  Ending E can be used after an S to make the word not
                  look like a plural word. Examples: Tense (not tens)
                  Tease (not teas). The letter C before E, I, or Y
                  makes the /s/ sound. Examples: Cent, City, Cyber.
                  The letter G before E, I, or Y usually makes the J
                  sound.
                </dt>
                <dd>Examples: Gem, Gin, Gym</dd>
              </dl>
            </Paper>
            <Paper>
              <h3> Part 8. Long Vowels </h3>
              <p>
                Long Vowels focuses on long vowel sounds mostly in
                multi-syllabic words and includes long A,E,I,O,U and Y
                (with long /I/ or long /E/ sounds).
              </p>
              <p>Lessons</p>
              <ol>
                <li>A</li>
                <li>E</li>
                <li>I</li>
                <li>O</li>
                <li>U</li>
                <li>Y (I & E Sounds)</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  A single vowel, in an open syllable, usually has a
                  long sound.
                </dt>
                <dd>Examples: O in No, U in Unit, A in Able</dd>
                <dd>Notable Exceptions: the second A in Data.</dd>
                <dt>
                  Y has a long I sound in a one syllable word ending
                  with a single vowel Y.
                </dt>
                <dd>Examples: By, Try.</dd>
                <dt>
                  Y has a long E sound in a multi-syllable base word
                  ending with a single vowel Y.
                </dt>
                <dd>
                  Examples: Baby, Happy (but not Retry because the
                  base word in Try and it is a two syllable word due
                  to the prefix Re.
                </dd>
                <dt>
                  Change the letter Y to I when adding a suffix other
                  than Y to a word ending with a single vowel Y.
                </dt>
                <dd>Examples: Happiness, Happier.</dd>
              </dl>
            </Paper>
            <Paper>
              <h3> Part 9. Long Vowel Teams </h3>
              <p>
                {' '}
                Long Vowel Teams introduces AI, AY, EE, EA, IGH, IE,
                OE, OW, OA, EW, UE as long vowel sounds.
              </p>
              <p>Lessons</p>
              <ol>
                <li>A – AI (aim) AY (may)</li>
                <li>E – EE (eel) EA (eat)</li>
                <li>I – IGH (high) IE (pie)</li>
                <li>O – OE (toe) OW (crow) OA (toad)</li>
                <li>U – EW (few) UE (due)</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  The long /A/ sound is usually written as AY at the
                  end of a base word and as AI in the middle or the
                  beginning.
                </dt>
                <dd>Examples: Pay . Pain . May . Main . Delay</dd>
                <dt>
                  he long /E/ sound can be written as EE and EI.
                </dt>
                <dd>Examples: Eel . Eat</dd>
                <dt>
                  The long /I/ sound can be written as IE and IGH.
                </dt>
                <dd>Examples: Pie . High</dd>
                <dt>
                  The long /O/ sound can be written as OA, OW and OE.
                </dt>
                <dd>Examples: Toad, Grow, Toe</dd>
                <dt>
                  The long /U/ sound can be written as U, UE, EW and
                  OO.
                </dt>
                <dd>Examples: Rule, Due, New, Boot.</dd>
              </dl>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              {' '}
              <h2>
                Section 4. “Expert” Level (Less Common Patterns){' '}
              </h2>
            </Paper>
            <Paper>
              {' '}
              <h3> Part 10. Expert Vowels </h3>
              <p>
                Expert Vowels focuses on the less common vowel sound
                to letter patterns such as A in Mama, I in Radio, Y in
                Happy, INE in Examine and AIN in Certain.
              </p>
              <p>Lessons</p>
              <ol>
                <li>A with AH Sound</li>
                <li>I with Long E Sound</li>
                <li>Y with Long E Sound</li>
                <li>INE with Short I Sound</li>
                <li>AIN with Short I Sound</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  The /ah/ sound is usually written as A at the end of
                  a base word.
                </dt>
                <dd>Examples: Data, Insignia, Opera</dd>
                <dt>
                  The letter I usually has the long /E/ sound and open
                  syllable that is the second to last syllable of a
                  multi-syllable word when the last syllable starts
                  with a vowel.
                </dt>
                <dd>Examples: Period, Easier, Material</dd>
                <dt>
                  The single vowel Y usually has the long /E/ sound at
                  the end of a multi-syllable word.
                </dt>
                <dd>Examples: Army, Twenty, History</dd>
                <dt>
                  The letter I before NE often has a short /i/ sound
                  at the end of multi-syllable words.
                </dt>
                <dd>Examples: Determine, Discipline, Examine</dd>
                <dt>
                  The letters AI before N often have a short /i/ sound
                  at the end of multi-syllable words.
                </dt>
                <dd>Examples: Bargain, Certain, Villain</dd>
              </dl>
              <h3> Part 11. Expert Teams 1 </h3>
              <p>
                Expert Teams 1 focuses on both consonant and
                consonant-vowel teams found mostly in multi-syllabic
                words such as TI, SI, with the /sh/ sound, TU with the
                /ch/ sound, PH with the /f/ sound and CH with the /sh/
                and /k/ sounds.
              </p>
              <p>Lessons</p>
              <ol>
                <li>TI (TION) as SH Sound</li>
                <li>SI (SION) as SH Sound</li>
                <li>TU (TURE) as CH Sound</li>
                <li>PH as F Sound</li>
                <li>CH as SH Sound</li>
                <li>CH as K Sound</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  TI often has the /sh/ sound in TION in
                  multi-syllabic words.
                </dt>
                <dd>Examples: Action . Nation . Administration</dd>
                <dt>
                  SI often has the /sh/ sound in SION in
                  multi-syllabic words.
                </dt>
                <dd>Examples: Passion . Mission . Recession</dd>
                <dt>
                  T before UR in a multi-syllable word has the /CH/
                  sound.
                </dt>
                <dd>Examples: nature . mutual . Legislature</dd>
                <dt>
                  PH has the /F/ sound in words that come from Greek.
                </dt>
                <dd>Examples: phone . alphabet . triumph</dd>
                <dt>
                  CH has the /SH/ sound in words that come from
                  French.
                </dt>
                <dd>Examples: chef . machine . brochure</dd>
                <dt>
                  CH has the /K/ sound in words that come from Greek.
                </dt>
                <dd>examples: chaos . archive . stomach</dd>
              </dl>
            </Paper>
            <Paper>
              <h3> Part 12. Expert Teams 2 </h3>
              <p>
                Expert Teams 2 focuses on both consonant and
                consonant-vowel teams found mostly in multi-syllabic
                words such as -ti-, -si-,ci with the sh sound, tu- and
                -ti- with the ch sound, ph with the f sound and ch
                with the sh and k sounds.
              </p>
              <p>Lessons</p>
              <ol>
                <li>CI (CIOUS) TI (TIOUS) as SH Sound</li>
                <li>CI (CIAN) TI (TIAN) as SH Sound</li>
                <li>CI (CIAL) TI (TIAL) as SH Sound</li>
                <li>TI (nTIAL) as SH or CH Sound</li>
                <li>GE & SI as Voiced ZH Sound</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  CI and TI have the /sh/ or /ch/ sound before OUS,
                  AN, and AL in multi-syllabic words.
                </dt>
                <dd>
                  Examples: Spacious, Cautious, Magician, Martian,
                  Judicial, Partial
                </dd>
                <dt>GE and SI can sometimes of a /ZH/ sound.</dt>
                <dd>Examples: Camouflage, Amnesia</dd>
              </dl>
              <h3> Part 13. – Silent Letter Teams </h3>
              <p>
                Silent Letter Teams focuses “silent” letter teams such
                as GH in ghost, GU in guard, BT in debt, and PS in
                psychology.
              </p>
              <p>Lessons</p>
              <ol>
                <li>gN Gh Gu hO kN pS</li>
                <li>Sc Sw wH wR</li>
                <li>Mb bT Mn gN</li>
                <li>Ft St tLe Que</li>
                <li>OUGH</li>
              </ol>
              <p>Spelling Patterns</p>
              <dl>
                <dt>
                  G is silent before N in the beginning of a word.
                </dt>
                <dd>Example: gnarl.</dd>
                <dt>
                  H is silent after the letter G in the beginning of a
                  word.
                </dt>
                <dd>Example: ghost.</dd>
                <dt>
                  U is silent after G in the beginning of a word. The
                  silent U makes the G have the hard /g/ sound.{' '}
                </dt>
                <dd>Example: guest.</dd>
                <dt>
                  H is silent before O in the beginning of a word.{' '}
                </dt>
                <dd>Example: honest.</dd>
                <dt>
                  K is silent before N in the beginning of a word.
                </dt>
                <dd> Example: knee.</dd>
                <dt>
                  P is silent before S in the beginning of a word.
                </dt>
                <dd>Example: psychology.</dd>
                <dt>
                  C is silent after the letter S in the beginning of
                  many words that come from Latin.{' '}
                </dt>
                <dd>Examples: science . obscene.</dd>
                <dt>
                  W is occasionally silent after S in the beginning of
                  some words.
                </dt>
                <dd>Examples: sword . answer.</dd>
                <dt>
                  W is silent before H in the beginning of a word.{' '}
                </dt>
                <dd>Examples: whose . whole.</dd>
                <dt>
                  W is silent before R in the beginning of a word.
                </dt>
                <dd>Examples: write . wrist.</dd>
                <dt>B is silent after M at the end of words.</dt>
                <dd>Examples: climb . thumb.</dd>
                <dt>
                  B is also silent before T at the end of words.
                </dt>
                <dd>Examples: debt . doubt.</dd>
                <dt>G is silent before N at the end of words.</dt>
                <dd>Examples: sign . campaign.</dd>
                <dt>M is silent before N at the end of words.</dt>
                <dd>Examples: column . hymn.</dd>
                <dt>
                  T is silent after S in the middle of two syllable
                  words.
                </dt>
                <dd>Examples: often.</dd>
                <dt>
                  T is also silent after S in the middle of two
                  syllable words.
                </dt>

                <dd>Examples: fasten . moisten.</dd>
                <dt>T is silent before LE at the end of words. </dt>
                <dd>Examples: castle . wrestle.</dd>
                <dt>
                  UE is often silent after Q at the end of words;
                  words that typically come from French.
                </dt>
                <dd>Examples: antique . grotesque.</dd>
                <dt>GH after OU can often be silent.</dt>
                <dd>Examples: dough though although</dd>
                <dt>
                  GH after OU can also have the /F/ sound. Not really
                  silent.
                </dt>
                <dd>Examples: enough cough</dd>
              </dl>
            </Paper>
          </Grid>
        </Grid>

        {/* </React.Fragment> */}
      </Container>

      {/* </div> */}
    </React.Fragment>
  );
}
