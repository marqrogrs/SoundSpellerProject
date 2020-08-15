export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Lesson = {
  __typename?: 'Lesson';
  _id?: Maybe<Scalars['ObjectId']>;
  description?: Maybe<Scalars['String']>;
  lesson_id?: Maybe<Scalars['String']>;
  lesson_section?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LessonInsertInput = {
  description?: Maybe<Scalars['String']>;
  lesson_id?: Maybe<Scalars['String']>;
  lesson_section?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type LessonQueryInput = {
  lesson_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_id_lte?: Maybe<Scalars['String']>;
  lesson_id_gte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  lesson_section_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_section_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_lt?: Maybe<Scalars['String']>;
  lesson_section_gt?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<LessonQueryInput>>;
  lesson_id_ne?: Maybe<Scalars['String']>;
  words_exists?: Maybe<Scalars['Boolean']>;
  title_lte?: Maybe<Scalars['String']>;
  lesson_section?: Maybe<Scalars['String']>;
  words_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_ne?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  description_gte?: Maybe<Scalars['String']>;
  lesson_id_lt?: Maybe<Scalars['String']>;
  lesson_section_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  title?: Maybe<Scalars['String']>;
  lesson_id_exists?: Maybe<Scalars['Boolean']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_id_gt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  lesson_section_lt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  title_lt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  title_gt?: Maybe<Scalars['String']>;
  lesson_id?: Maybe<Scalars['String']>;
  lesson_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_ne?: Maybe<Scalars['String']>;
  lesson_section_lte?: Maybe<Scalars['String']>;
  lesson_section_gte?: Maybe<Scalars['String']>;
  words_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  description_gt?: Maybe<Scalars['String']>;
  lesson_section_exists?: Maybe<Scalars['Boolean']>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<LessonQueryInput>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
};

export enum LessonSortByInput {
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = '_ID_ASC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  IdDesc = '_ID_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  LessonIdAsc = 'LESSON_ID_ASC',
  LessonIdDesc = 'LESSON_ID_DESC',
  LessonSectionAsc = 'LESSON_SECTION_ASC',
  LessonSectionDesc = 'LESSON_SECTION_DESC'
}

export type LessonUpdateInput = {
  words_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  lesson_section?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_unset?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  lesson_id?: Maybe<Scalars['String']>;
  lesson_id_unset?: Maybe<Scalars['Boolean']>;
  title_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  lesson_section_unset?: Maybe<Scalars['Boolean']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyLessons?: Maybe<DeleteManyPayload>;
  deleteManyPhonemes?: Maybe<DeleteManyPayload>;
  deleteManyWords?: Maybe<DeleteManyPayload>;
  deleteOneLesson?: Maybe<Lesson>;
  deleteOnePhoneme?: Maybe<Phoneme>;
  deleteOneWord?: Maybe<Word>;
  insertManyLessons?: Maybe<InsertManyPayload>;
  insertManyPhonemes?: Maybe<InsertManyPayload>;
  insertManyWords?: Maybe<InsertManyPayload>;
  insertOneLesson?: Maybe<Lesson>;
  insertOnePhoneme?: Maybe<Phoneme>;
  insertOneWord?: Maybe<Word>;
  replaceOneLesson?: Maybe<Lesson>;
  replaceOnePhoneme?: Maybe<Phoneme>;
  replaceOneWord?: Maybe<Word>;
  updateManyLessons?: Maybe<UpdateManyPayload>;
  updateManyPhonemes?: Maybe<UpdateManyPayload>;
  updateManyWords?: Maybe<UpdateManyPayload>;
  updateOneLesson?: Maybe<Lesson>;
  updateOnePhoneme?: Maybe<Phoneme>;
  updateOneWord?: Maybe<Word>;
  upsertOneLesson?: Maybe<Lesson>;
  upsertOnePhoneme?: Maybe<Phoneme>;
  upsertOneWord?: Maybe<Word>;
};


export type MutationDeleteManyLessonsArgs = {
  query?: Maybe<LessonQueryInput>;
};


export type MutationDeleteManyPhonemesArgs = {
  query?: Maybe<PhonemeQueryInput>;
};


export type MutationDeleteManyWordsArgs = {
  query?: Maybe<WordQueryInput>;
};


export type MutationDeleteOneLessonArgs = {
  query: LessonQueryInput;
};


export type MutationDeleteOnePhonemeArgs = {
  query: PhonemeQueryInput;
};


export type MutationDeleteOneWordArgs = {
  query: WordQueryInput;
};


export type MutationInsertManyLessonsArgs = {
  data: Array<LessonInsertInput>;
};


export type MutationInsertManyPhonemesArgs = {
  data: Array<PhonemeInsertInput>;
};


export type MutationInsertManyWordsArgs = {
  data: Array<WordInsertInput>;
};


export type MutationInsertOneLessonArgs = {
  data: LessonInsertInput;
};


export type MutationInsertOnePhonemeArgs = {
  data: PhonemeInsertInput;
};


export type MutationInsertOneWordArgs = {
  data: WordInsertInput;
};


export type MutationReplaceOneLessonArgs = {
  data: LessonInsertInput;
  query?: Maybe<LessonQueryInput>;
};


export type MutationReplaceOnePhonemeArgs = {
  query?: Maybe<PhonemeQueryInput>;
  data: PhonemeInsertInput;
};


export type MutationReplaceOneWordArgs = {
  query?: Maybe<WordQueryInput>;
  data: WordInsertInput;
};


export type MutationUpdateManyLessonsArgs = {
  query?: Maybe<LessonQueryInput>;
  set: LessonUpdateInput;
};


export type MutationUpdateManyPhonemesArgs = {
  set: PhonemeUpdateInput;
  query?: Maybe<PhonemeQueryInput>;
};


export type MutationUpdateManyWordsArgs = {
  query?: Maybe<WordQueryInput>;
  set: WordUpdateInput;
};


export type MutationUpdateOneLessonArgs = {
  set: LessonUpdateInput;
  query?: Maybe<LessonQueryInput>;
};


export type MutationUpdateOnePhonemeArgs = {
  query?: Maybe<PhonemeQueryInput>;
  set: PhonemeUpdateInput;
};


export type MutationUpdateOneWordArgs = {
  query?: Maybe<WordQueryInput>;
  set: WordUpdateInput;
};


export type MutationUpsertOneLessonArgs = {
  query?: Maybe<LessonQueryInput>;
  data: LessonInsertInput;
};


export type MutationUpsertOnePhonemeArgs = {
  query?: Maybe<PhonemeQueryInput>;
  data: PhonemeInsertInput;
};


export type MutationUpsertOneWordArgs = {
  data: WordInsertInput;
  query?: Maybe<WordQueryInput>;
};


export type Phoneme = {
  __typename?: 'Phoneme';
  _id?: Maybe<Scalars['ObjectId']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme?: Maybe<Scalars['String']>;
};

export type PhonemeInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme?: Maybe<Scalars['String']>;
};

export type PhonemeQueryInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  phoneme_lt?: Maybe<Scalars['String']>;
  files_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  phoneme_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<PhonemeQueryInput>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  phoneme_lte?: Maybe<Scalars['String']>;
  phoneme_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme_ne?: Maybe<Scalars['String']>;
  phoneme?: Maybe<Scalars['String']>;
  phoneme_gte?: Maybe<Scalars['String']>;
  phoneme_exists?: Maybe<Scalars['Boolean']>;
  files_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<PhonemeQueryInput>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  files_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme_gt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
};

export enum PhonemeSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  PhonemeAsc = 'PHONEME_ASC',
  PhonemeDesc = 'PHONEME_DESC'
}

export type PhonemeUpdateInput = {
  files_unset?: Maybe<Scalars['Boolean']>;
  phoneme?: Maybe<Scalars['String']>;
  phoneme_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  lesson?: Maybe<Lesson>;
  lessons: Array<Maybe<Lesson>>;
  phoneme?: Maybe<Phoneme>;
  phonemes: Array<Maybe<Phoneme>>;
  word?: Maybe<Word>;
  words: Array<Maybe<Word>>;
};


export type QueryLessonArgs = {
  query?: Maybe<LessonQueryInput>;
};


export type QueryLessonsArgs = {
  sortBy?: Maybe<LessonSortByInput>;
  query?: Maybe<LessonQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPhonemeArgs = {
  query?: Maybe<PhonemeQueryInput>;
};


export type QueryPhonemesArgs = {
  sortBy?: Maybe<PhonemeSortByInput>;
  query?: Maybe<PhonemeQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordArgs = {
  query?: Maybe<WordQueryInput>;
};


export type QueryWordsArgs = {
  sortBy?: Maybe<WordSortByInput>;
  query?: Maybe<WordQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type Word = {
  __typename?: 'Word';
  _id?: Maybe<Scalars['ObjectId']>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  word?: Maybe<Scalars['String']>;
};

export type WordInsertInput = {
  word?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WordQueryInput = {
  _id_lte?: Maybe<Scalars['ObjectId']>;
  phonemes_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  word?: Maybe<Scalars['String']>;
  word_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_gt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  graphemes_exists?: Maybe<Scalars['Boolean']>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  syllables_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_gte?: Maybe<Scalars['String']>;
  word_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  phonemes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  phonemes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  word_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<WordQueryInput>>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_exists?: Maybe<Scalars['Boolean']>;
  syllables_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  syllables_exists?: Maybe<Scalars['Boolean']>;
  word_lt?: Maybe<Scalars['String']>;
  word_lte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<WordQueryInput>>;
};

export enum WordSortByInput {
  IdDesc = '_ID_DESC',
  WordAsc = 'WORD_ASC',
  WordDesc = 'WORD_DESC',
  IdAsc = '_ID_ASC'
}

export type WordUpdateInput = {
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  word?: Maybe<Scalars['String']>;
  word_unset?: Maybe<Scalars['Boolean']>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  phonemes_unset?: Maybe<Scalars['Boolean']>;
  syllables_unset?: Maybe<Scalars['Boolean']>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type GetAllLessonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLessonsQuery = (
  { __typename?: 'Query' }
  & { lessons: Array<Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, '_id' | 'description' | 'lesson_id' | 'lesson_section' | 'title' | 'words'>
  )>> }
);

export type GetLessonQueryVariables = Exact<{
  lesson_id?: Maybe<Scalars['String']>;
}>;


export type GetLessonQuery = (
  { __typename?: 'Query' }
  & { lesson?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, '_id' | 'description' | 'lesson_id' | 'lesson_section' | 'title' | 'words'>
  )> }
);

export type GetWordQueryVariables = Exact<{
  word?: Maybe<Scalars['String']>;
}>;


export type GetWordQuery = (
  { __typename?: 'Query' }
  & { word?: Maybe<(
    { __typename?: 'Word' }
    & Pick<Word, '_id' | 'word' | 'phonemes' | 'graphemes' | 'syllables'>
  )> }
);
