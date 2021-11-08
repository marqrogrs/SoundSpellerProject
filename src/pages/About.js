import React from 'react';
import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';
import SSBannerLong from '../img/SSBannerLong.png';


export default function About() {
  return (

  
    <Container maxWidth="lg">
      
<img src={SSBannerLong} />

      <h1 align="center">Welcome to Sound Speller</h1>
      <p>
        I am Dr. Mark Rogers Ed.D.  and I am an adult dyslexic, former
        linguistics major in college, retired Special Education
        teacher and Reading Therapist.  I created Sound Speller as
        part of my Reading Therapy practice because I couldn’t find
        Structured Literacy based software that could help teach
        spelling and typing together by directly associating
        individual speech sounds (phonemes) to their corresponding
        letter patterns (graphemes). typing. So, for use in my Reading
        Therapy practice, I wrote Sound Speller. Now, I working to
        make Sound Speller available on-line at no cost to students
        and teachers.
      </p>
      <h2>What is Sound Speller?</h2>
      <p>
        Sound Speller is
        <a href="https://www.readingrockets.org/article/structured-literacy-instruction-basics">
          <b>
            <space> </space>
            <u>Structured Literacy</u>
          </b>
        </a>
        -based software that offers explicit, systematic and
        cumulative instruction focused on the sound structure of words
        (phonology), sound-to-letter spelling patterns (sound-symbol
        association), and syllabication (syllable patterns), while
        also teaching typing.
      </p>
      <h2>Who is Sound Speller for?</h2>
      <p>
        Sound Speller was first developed for children with dyslexia.
        is based on instructional principles suitable for almost any
        child, or adult, wanting to improve their English spelling
        ability.
      </p>
      <h2>Why use Sound Speller?</h2>
      <p>
        Sound Speller is firmly based on the proven method of
        Structured Literacy Reading Instruction. * Structured Literacy
        prepares students to decode words in an explicit and
        systematic manner. * This approach not only helps students
        with dyslexia, but there is substantial evidence that it is
        effective for all readers. * Sound Speller is the only
        software program that systematically teaches spelling and
        typing by directly associating individual phonemes (speech
        sounds) with their corresponding graphemes (letter or letters)
        and their corresponding keyboard keys.
      </p>
      <space></space>
      <p>
        Sound Speller systematically teaches typing from the Home Row
        keys out, while teaching spelling, from the most common
        sound-to-letter spelling patterns, up to the necessary, but
        less common patterns. Donations to the Sound Speller Project
        will make Sound Speller available at no cost (free) to
        students.
      </p>

      <h2>Why focus on Spelling Instruction?</h2>
      <p>Spelling is still important.</p>
      <ul>
        <li>
          80 percent of the time an employment application is doomed
          if it is poorly written or poorly spelled.
        </li>
        <li>Spelling supports reading.</li>
        <li>Spelling instruction supports reading instruction.</li>
      </ul>

      <h2>Why add Typing Instruction?</h2>
      <ul>
        <li>
          Typing is now a necessary skill for communication and for
          access to information and knowledge.
        </li>
        <li>
          For children with Dyslexia typing is even more essential due
          to their often accompanying problem of dysgraphia (poor
          handwriting).
        </li>
      </ul>
      <h2>Why is Sound Speller needed?</h2>
      <ul>
        <li>
          Most teachers lack sufficient linguistic knowledge of the
          structures of spoken and written English needed to teach
          spelling to all students.
        </li>
        <li>
          Even teachers who have the linguistic and instructional
          knowledge necessary to provide individualized,
          research-based spelling and reading instruction for all
          their students; rarely have sufficient time to do so.
        </li>
      </ul>
    </Container>
  );
}
