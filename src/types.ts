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
  title?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  description?: Maybe<Scalars['String']>;
  lesson_id?: Maybe<Scalars['String']>;
  lesson_section?: Maybe<Scalars['String']>;
};

export type LessonQueryInput = {
  lesson_id_exists?: Maybe<Scalars['Boolean']>;
  description_gt?: Maybe<Scalars['String']>;
  lesson_section_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  words_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_lt?: Maybe<Scalars['String']>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_exists?: Maybe<Scalars['Boolean']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_id_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<LessonQueryInput>>;
  lesson_id_ne?: Maybe<Scalars['String']>;
  lesson_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_section_gt?: Maybe<Scalars['String']>;
  words_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_section_lte?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  lesson_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  description_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_lte?: Maybe<Scalars['String']>;
  lesson_section_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_lte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  AND?: Maybe<Array<LessonQueryInput>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  lesson_section_gte?: Maybe<Scalars['String']>;
  description_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  words_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  lesson_id_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  lesson_section?: Maybe<Scalars['String']>;
  description_ne?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_id_gt?: Maybe<Scalars['String']>;
  lesson_section_lt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  title_ne?: Maybe<Scalars['String']>;
  lesson_id_lte?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  lesson_section_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  lesson_id?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  lesson_section_ne?: Maybe<Scalars['String']>;
};

export enum LessonSortByInput {
  DescriptionDesc = 'DESCRIPTION_DESC',
  LessonIdAsc = 'LESSON_ID_ASC',
  LessonIdDesc = 'LESSON_ID_DESC',
  LessonSectionAsc = 'LESSON_SECTION_ASC',
  LessonSectionDesc = 'LESSON_SECTION_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type LessonUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  words_unset?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  lesson_id?: Maybe<Scalars['String']>;
  lesson_section_unset?: Maybe<Scalars['Boolean']>;
  title_unset?: Maybe<Scalars['Boolean']>;
  description_unset?: Maybe<Scalars['Boolean']>;
  lesson_id_unset?: Maybe<Scalars['Boolean']>;
  lesson_section?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
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
  data: WordInsertInput;
  query?: Maybe<WordQueryInput>;
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
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
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
  query?: Maybe<PhonemeQueryInput>;
  set: PhonemeUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneWordArgs = {
  set: WordUpdateInput;
  query?: Maybe<WordQueryInput>;
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
  _id_lte?: Maybe<Scalars['ObjectId']>;
  phoneme_gte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  phoneme?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  phoneme_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme_ne?: Maybe<Scalars['String']>;
  phoneme_gt?: Maybe<Scalars['String']>;
  phoneme_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<PhonemeQueryInput>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  files_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  phoneme_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<PhonemeQueryInput>>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme_lte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  files_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  files_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum PhonemeSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  PhonemeAsc = 'PHONEME_ASC',
  PhonemeDesc = 'PHONEME_DESC'
}

export type PhonemeUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  files_unset?: Maybe<Scalars['Boolean']>;
  phoneme?: Maybe<Scalars['String']>;
  phoneme_unset?: Maybe<Scalars['Boolean']>;
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
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
  query?: Maybe<UserQueryInput>;
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
};

export type UserInsertInput = {
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  progress?: Maybe<Array<Maybe<UserProgressInsertInput>>>;
};

export type UserProgress = {
  __typename?: 'UserProgress';
  completed_words?: Maybe<Scalars['Int']>;
  lesson?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type UserProgressInsertInput = {
  completed_words?: Maybe<Scalars['Int']>;
  lesson?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type UserProgressQueryInput = {
  score_lt?: Maybe<Scalars['Int']>;
  score_ne?: Maybe<Scalars['Int']>;
  lesson_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_lt?: Maybe<Scalars['String']>;
  completed_words_exists?: Maybe<Scalars['Boolean']>;
  score_gte?: Maybe<Scalars['Int']>;
  completed_words_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  completed_words_lt?: Maybe<Scalars['Int']>;
  lesson_gte?: Maybe<Scalars['String']>;
  level_lt?: Maybe<Scalars['Int']>;
  score_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  score_exists?: Maybe<Scalars['Boolean']>;
  score_lte?: Maybe<Scalars['Int']>;
  lesson_lte?: Maybe<Scalars['String']>;
  level_ne?: Maybe<Scalars['Int']>;
  score_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level_gte?: Maybe<Scalars['Int']>;
  lesson_exists?: Maybe<Scalars['Boolean']>;
  lesson_ne?: Maybe<Scalars['String']>;
  score_gt?: Maybe<Scalars['Int']>;
  completed_words_gt?: Maybe<Scalars['Int']>;
  completed_words_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  completed_words_lte?: Maybe<Scalars['Int']>;
  lesson_gt?: Maybe<Scalars['String']>;
  completed_words?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  completed_words_ne?: Maybe<Scalars['Int']>;
  lesson_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<UserProgressQueryInput>>;
  level_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  completed_words_gte?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  lesson?: Maybe<Scalars['String']>;
  level_exists?: Maybe<Scalars['Boolean']>;
  level_gt?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<UserProgressQueryInput>>;
  level_lte?: Maybe<Scalars['Int']>;
};

export type UserProgressUpdateInput = {
  level_unset?: Maybe<Scalars['Boolean']>;
  completed_words_unset?: Maybe<Scalars['Boolean']>;
  lesson?: Maybe<Scalars['String']>;
  lesson_unset?: Maybe<Scalars['Boolean']>;
  score_inc?: Maybe<Scalars['Int']>;
  score_unset?: Maybe<Scalars['Boolean']>;
  completed_words?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  level_inc?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  completed_words_inc?: Maybe<Scalars['Int']>;
};

export type UserQueryInput = {
  name_gt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<UserQueryInput>>;
  _id_lt?: Maybe<Scalars['String']>;
  progress?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
  AND?: Maybe<Array<UserQueryInput>>;
  _id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_ne?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  progress_in?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
  name_lt?: Maybe<Scalars['String']>;
  progress_exists?: Maybe<Scalars['Boolean']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  progress_nin?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
  _id?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['String']>;
};

export enum UserSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type UserUpdateInput = {
  progress_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  progress?: Maybe<Array<Maybe<UserProgressUpdateInput>>>;
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
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  syllables_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_exists?: Maybe<Scalars['Boolean']>;
  syllables_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  word_ne?: Maybe<Scalars['String']>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes_exists?: Maybe<Scalars['Boolean']>;
  word_gte?: Maybe<Scalars['String']>;
  syllables_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  word_lt?: Maybe<Scalars['String']>;
  graphemes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<WordQueryInput>>;
  word_lte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  phonemes_exists?: Maybe<Scalars['Boolean']>;
  word_gt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  phonemes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<WordQueryInput>>;
  word_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  word?: Maybe<Scalars['String']>;
};

export enum WordSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  WordAsc = 'WORD_ASC',
  WordDesc = 'WORD_DESC'
}

export type WordUpdateInput = {
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  graphemes_unset?: Maybe<Scalars['Boolean']>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  syllables_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  word?: Maybe<Scalars['String']>;
  phonemes_unset?: Maybe<Scalars['Boolean']>;
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
    & Pick<User, '_id' | 'name'>
    & { progress?: Maybe<Array<Maybe<(
      { __typename?: 'UserProgress' }
      & Pick<UserProgress, 'level' | 'lesson' | 'completed_words' | 'score'>
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
    & Pick<User, '_id' | 'name'>
    & { progress?: Maybe<Array<Maybe<(
      { __typename?: 'UserProgress' }
      & Pick<UserProgress, 'level' | 'lesson' | 'completed_words' | 'score'>
    )>>> }
  )> }
);
