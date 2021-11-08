import React from 'react';
import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';
import SSBannerLong from '../img/SSBannerLong.png';


export default function Method() {
  return (
    <Container maxWidth="lg">
      
      <img src={SSBannerLong} />
      <h1 align="center">The Sound Speller Method</h1>
      
      <p align="center">
        <iframe width="496" height="360" src="https://www.youtube.com/embed/xsTSavbtqFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </p>    




      <h2>Multi-sensory</h2>
      <p>
        Sound Speller uses real words to teach these spelling patterns
        through mutually reinforcing multi-sensory instruction. Each
        lesson that combines components that are:
      </p>
      <ul>
        <li>Auditory (hearing the sounds of the phonemes),</li>
        <li>
          Visual (seeing the letter patterns and their corresponding
          keyboard keys on the screen, and
        </li>
        <li>
          Tactile & Spacial (the student presses the keys at their
          location on the keyboard).
        </li>
      </ul>
      <h2>Systematic</h2>
      <p>
        Sound Speller systematically follows a Structured Literacy
        base framework; starting with the most common speech sound to
        letter patterns (“spelling rules”) working up through less
        common patterns.
      </p>
      <ul>
        <li>
          For each word the student is first presented with the word
          and then types the word onto the computer keyboard and it is
          seen on the screen.
        </li>
        <li>
          The student earns points for typing each word correctly.
        </li>
        <li>
          A progress bar indicates how much of the lesson is left.
        </li>
        <li>
          The spelling pattern(s) of the lesson can be reviewed at any
          time during the lesson.
        </li>
        <li>
          The student can Save Progress before completing the entire
          lesson.
        </li>
        <li>
          After mastery of each level the student automatically
          progressed to the next level.
        </li>
      </ul>
      <h2>Levels of Mastery</h2>
      <h3>Level 1. – For each word the student simultaneously:</h3>
      <ul>
        <li>Hears each phoneme (speech sound) spoken out loud.</li>
        <li>
          Sees each corresponding grapheme (letter or letters) spelled
          out on the screen .
        </li>
        <li>
          Sees each corresponding keys appear to be pressed on a
          screen image of a keyword.
        </li>
      </ul>
      <h3>Level 2. – For each word the student simultaneously:</h3>
      <ul>
        <li>Hears each phoneme (speech sound) spoken out loud.</li>
        <li>
          Sees each corresponding grapheme (letter or letters) spelled
          out on the screen .
        </li>
      </ul>
      <h3>Level 3. – For each word the student simultaneously:</h3>
      <ul>
        <li>Hears each phoneme (speech sound) spoken out loud.</li>
      </ul>
      <h3>Level 4. – For each word the student simultaneously:</h3>
      <ul>
        <li>
          The student is presented only with the whole word spoken.
        </li>
      </ul>
    </Container>
  );
}
