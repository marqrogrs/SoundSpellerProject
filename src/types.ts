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
  lesson_id?: Maybe<Scalars['String']>;
  lesson_section?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  description?: Maybe<Scalars['String']>;
};

export type LessonQueryInput = {
  lesson_section_gt?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_id_gt?: Maybe<Scalars['String']>;
  lesson_section_ne?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  words_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_ne?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  title?: Maybe<Scalars['String']>;
  title_lt?: Maybe<Scalars['String']>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<LessonQueryInput>>;
  lesson_section_exists?: Maybe<Scalars['Boolean']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  lesson_id?: Maybe<Scalars['String']>;
  lesson_id_ne?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  title_gt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  lesson_id_lt?: Maybe<Scalars['String']>;
  lesson_section?: Maybe<Scalars['String']>;
  lesson_id_lte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  description_lt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  lesson_id_gte?: Maybe<Scalars['String']>;
  lesson_section_gte?: Maybe<Scalars['String']>;
  lesson_id_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  words_exists?: Maybe<Scalars['Boolean']>;
  description_lte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<LessonQueryInput>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  lesson_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_section_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  words_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_section_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_ne?: Maybe<Scalars['String']>;
  lesson_section_lt?: Maybe<Scalars['String']>;
  lesson_section_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum LessonSortByInput {
  IdAsc = '_ID_ASC',
  LessonIdDesc = 'LESSON_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  IdDesc = '_ID_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  LessonIdAsc = 'LESSON_ID_ASC',
  LessonSectionAsc = 'LESSON_SECTION_ASC',
  LessonSectionDesc = 'LESSON_SECTION_DESC'
}

export type LessonUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  lesson_section?: Maybe<Scalars['String']>;
  lesson_section_unset?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  lesson_id?: Maybe<Scalars['String']>;
  lesson_id_unset?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_unset?: Maybe<Scalars['Boolean']>;
  description_unset?: Maybe<Scalars['Boolean']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  words_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyLessons?: Maybe<DeleteManyPayload>;
  deleteManyPhonemes?: Maybe<DeleteManyPayload>;
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteManyWords?: Maybe<DeleteManyPayload>;
  deleteOneLesson?: Maybe<Lesson>;
  deleteOnePhoneme?: Maybe<Phoneme>;
  deleteOneUser?: Maybe<User>;
  deleteOneWord?: Maybe<Word>;
  insertManyLessons?: Maybe<InsertManyPayload>;
  insertManyPhonemes?: Maybe<InsertManyPayload>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertManyWords?: Maybe<InsertManyPayload>;
  insertOneLesson?: Maybe<Lesson>;
  insertOnePhoneme?: Maybe<Phoneme>;
  insertOneUser?: Maybe<User>;
  insertOneWord?: Maybe<Word>;
  replaceOneLesson?: Maybe<Lesson>;
  replaceOnePhoneme?: Maybe<Phoneme>;
  replaceOneUser?: Maybe<User>;
  replaceOneWord?: Maybe<Word>;
  updateManyLessons?: Maybe<UpdateManyPayload>;
  updateManyPhonemes?: Maybe<UpdateManyPayload>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateManyWords?: Maybe<UpdateManyPayload>;
  updateOneLesson?: Maybe<Lesson>;
  updateOnePhoneme?: Maybe<Phoneme>;
  updateOneUser?: Maybe<User>;
  updateOneWord?: Maybe<Word>;
  upsertOneLesson?: Maybe<Lesson>;
  upsertOnePhoneme?: Maybe<Phoneme>;
  upsertOneUser?: Maybe<User>;
  upsertOneWord?: Maybe<Word>;
};


export type MutationDeleteManyLessonsArgs = {
  query?: Maybe<LessonQueryInput>;
};


export type MutationDeleteManyPhonemesArgs = {
  query?: Maybe<PhonemeQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
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


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
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


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
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


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationInsertOneWordArgs = {
  data: WordInsertInput;
};


export type MutationReplaceOneLessonArgs = {
  query?: Maybe<LessonQueryInput>;
  data: LessonInsertInput;
};


export type MutationReplaceOnePhonemeArgs = {
  query?: Maybe<PhonemeQueryInput>;
  data: PhonemeInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
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
  query?: Maybe<PhonemeQueryInput>;
  set: PhonemeUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  set: UserUpdateInput;
  query?: Maybe<UserQueryInput>;
};


export type MutationUpdateManyWordsArgs = {
  query?: Maybe<WordQueryInput>;
  set: WordUpdateInput;
};


export type MutationUpdateOneLessonArgs = {
  query?: Maybe<LessonQueryInput>;
  set: LessonUpdateInput;
};


export type MutationUpdateOnePhonemeArgs = {
  set: PhonemeUpdateInput;
  query?: Maybe<PhonemeQueryInput>;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
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


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationUpsertOneWordArgs = {
  query?: Maybe<WordQueryInput>;
  data: WordInsertInput;
};


export type Phoneme = {
  __typename?: 'Phoneme';
  _id?: Maybe<Scalars['ObjectId']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme?: Maybe<Scalars['String']>;
};

export type PhonemeInsertInput = {
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type PhonemeQueryInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<PhonemeQueryInput>>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  files_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  files_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme_lt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  phoneme_lte?: Maybe<Scalars['String']>;
  phoneme_exists?: Maybe<Scalars['Boolean']>;
  phoneme_ne?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  phoneme?: Maybe<Scalars['String']>;
  phoneme_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<PhonemeQueryInput>>;
  phoneme_gte?: Maybe<Scalars['String']>;
  phoneme_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  files_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  word?: Maybe<Word>;
  words: Array<Maybe<Word>>;
};


export type QueryLessonArgs = {
  query?: Maybe<LessonQueryInput>;
};


export type QueryLessonsArgs = {
  query?: Maybe<LessonQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<LessonSortByInput>;
};


export type QueryPhonemeArgs = {
  query?: Maybe<PhonemeQueryInput>;
};


export type QueryPhonemesArgs = {
  query?: Maybe<PhonemeQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<PhonemeSortByInput>;
};


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};


export type QueryWordArgs = {
  query?: Maybe<WordQueryInput>;
};


export type QueryWordsArgs = {
  query?: Maybe<WordQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<WordSortByInput>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  progress?: Maybe<Array<Maybe<UserProgress>>>;
  score?: Maybe<Scalars['Int']>;
};

export type UserInsertInput = {
  score?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  progress?: Maybe<Array<Maybe<UserProgressInsertInput>>>;
};

export type UserProgress = {
  __typename?: 'UserProgress';
  completed_words?: Maybe<Scalars['Int']>;
  lesson?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
};

export type UserProgressInsertInput = {
  level?: Maybe<Scalars['Int']>;
  completed_words?: Maybe<Scalars['Int']>;
  lesson?: Maybe<Scalars['String']>;
};

export type UserProgressQueryInput = {
  completed_words_lt?: Maybe<Scalars['Int']>;
  lesson_ne?: Maybe<Scalars['String']>;
  level_ne?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<UserProgressQueryInput>>;
  completed_words_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  completed_words_exists?: Maybe<Scalars['Boolean']>;
  lesson_lte?: Maybe<Scalars['String']>;
  level_exists?: Maybe<Scalars['Boolean']>;
  completed_words_ne?: Maybe<Scalars['Int']>;
  lesson_gte?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  level_lt?: Maybe<Scalars['Int']>;
  level_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  completed_words_gte?: Maybe<Scalars['Int']>;
  completed_words_gt?: Maybe<Scalars['Int']>;
  level_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AND?: Maybe<Array<UserProgressQueryInput>>;
  lesson_gt?: Maybe<Scalars['String']>;
  lesson_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_exists?: Maybe<Scalars['Boolean']>;
  level_lte?: Maybe<Scalars['Int']>;
  completed_words_lte?: Maybe<Scalars['Int']>;
  completed_words_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level_gt?: Maybe<Scalars['Int']>;
  level_gte?: Maybe<Scalars['Int']>;
  lesson_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_lt?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['String']>;
  completed_words?: Maybe<Scalars['Int']>;
};

export type UserProgressUpdateInput = {
  level_inc?: Maybe<Scalars['Int']>;
  level_unset?: Maybe<Scalars['Boolean']>;
  completed_words?: Maybe<Scalars['Int']>;
  completed_words_inc?: Maybe<Scalars['Int']>;
  completed_words_unset?: Maybe<Scalars['Boolean']>;
  lesson?: Maybe<Scalars['String']>;
  lesson_unset?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
};

export type UserQueryInput = {
  _id_ne?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserQueryInput>>;
  score_gt?: Maybe<Scalars['Int']>;
  _id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<UserQueryInput>>;
  name_ne?: Maybe<Scalars['String']>;
  score_gte?: Maybe<Scalars['Int']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  score_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['String']>;
  progress_in?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
  score_lte?: Maybe<Scalars['Int']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  score_lt?: Maybe<Scalars['Int']>;
  score_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  progress_exists?: Maybe<Scalars['Boolean']>;
  progress?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
  _id_gte?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  score_ne?: Maybe<Scalars['Int']>;
  score_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  progress_nin?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
};

export enum UserSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ScoreAsc = 'SCORE_ASC',
  ScoreDesc = 'SCORE_DESC'
}

export type UserUpdateInput = {
  score_inc?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  progress?: Maybe<Array<Maybe<UserProgressUpdateInput>>>;
  name_unset?: Maybe<Scalars['Boolean']>;
  progress_unset?: Maybe<Scalars['Boolean']>;
  score?: Maybe<Scalars['Int']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  score_unset?: Maybe<Scalars['Boolean']>;
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
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  word?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WordQueryInput = {
  syllables_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  word_lte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  phonemes_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  graphemes_exists?: Maybe<Scalars['Boolean']>;
  graphemes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  phonemes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  word?: Maybe<Scalars['String']>;
  word_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_gte?: Maybe<Scalars['String']>;
  word_ne?: Maybe<Scalars['String']>;
  word_gt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<WordQueryInput>>;
  syllables_exists?: Maybe<Scalars['Boolean']>;
  syllables_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_lt?: Maybe<Scalars['String']>;
  word_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<WordQueryInput>>;
};

export enum WordSortByInput {
  WordAsc = 'WORD_ASC',
  WordDesc = 'WORD_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type WordUpdateInput = {
  word?: Maybe<Scalars['String']>;
  syllables_unset?: Maybe<Scalars['Boolean']>;
  word_unset?: Maybe<Scalars['Boolean']>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  graphemes_unset?: Maybe<Scalars['Boolean']>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type UpdateUserMutationVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  updates: UserUpdateInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'score'>
    & { progress?: Maybe<Array<Maybe<(
      { __typename?: 'UserProgress' }
      & Pick<UserProgress, 'level' | 'lesson' | 'completed_words'>
    )>>> }
  )> }
);

export type GetUserQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'score'>
    & { progress?: Maybe<Array<Maybe<(
      { __typename?: 'UserProgress' }
      & Pick<UserProgress, 'level' | 'lesson' | 'completed_words'>
    )>>> }
  )> }
);
