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
  lesson_section_exists?: Maybe<Scalars['Boolean']>;
  lesson_section_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<LessonQueryInput>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  description_gte?: Maybe<Scalars['String']>;
  lesson_id_gte?: Maybe<Scalars['String']>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  description_lt?: Maybe<Scalars['String']>;
  lesson_section_gte?: Maybe<Scalars['String']>;
  lesson_section_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_ne?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_lte?: Maybe<Scalars['String']>;
  lesson_id_exists?: Maybe<Scalars['Boolean']>;
  words_exists?: Maybe<Scalars['Boolean']>;
  lesson_id_lte?: Maybe<Scalars['String']>;
  lesson_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_ne?: Maybe<Scalars['String']>;
  lesson_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lesson_section_lte?: Maybe<Scalars['String']>;
  lesson_id_gt?: Maybe<Scalars['String']>;
  lesson_section_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  description?: Maybe<Scalars['String']>;
  lesson_section_gt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  words_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_lte?: Maybe<Scalars['String']>;
  lesson_section_ne?: Maybe<Scalars['String']>;
  lesson_id_ne?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  lesson_id?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_lt?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  words_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  lesson_id_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<LessonQueryInput>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  lesson_section?: Maybe<Scalars['String']>;
};

export enum LessonSortByInput {
  DescriptionDesc = 'DESCRIPTION_DESC',
  LessonIdAsc = 'LESSON_ID_ASC',
  LessonIdDesc = 'LESSON_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  IdDesc = '_ID_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  LessonSectionAsc = 'LESSON_SECTION_ASC',
  LessonSectionDesc = 'LESSON_SECTION_DESC',
  IdAsc = '_ID_ASC'
}

export type LessonUpdateInput = {
  lesson_id_unset?: Maybe<Scalars['Boolean']>;
  lesson_section_unset?: Maybe<Scalars['Boolean']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  lesson_section?: Maybe<Scalars['String']>;
  title_unset?: Maybe<Scalars['Boolean']>;
  words_unset?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_unset?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  lesson_id?: Maybe<Scalars['String']>;
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
  _id?: Maybe<Scalars['ObjectId']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneme?: Maybe<Scalars['String']>;
};

export type PhonemeQueryInput = {
  AND?: Maybe<Array<PhonemeQueryInput>>;
  _id?: Maybe<Scalars['ObjectId']>;
  phoneme?: Maybe<Scalars['String']>;
  phoneme_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  files_exists?: Maybe<Scalars['Boolean']>;
  files_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<PhonemeQueryInput>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  phoneme_gt?: Maybe<Scalars['String']>;
  phoneme_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  files_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  phoneme_lte?: Maybe<Scalars['String']>;
  phoneme_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  phoneme_ne?: Maybe<Scalars['String']>;
  phoneme_exists?: Maybe<Scalars['Boolean']>;
  phoneme_gte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export enum PhonemeSortByInput {
  PhonemeAsc = 'PHONEME_ASC',
  PhonemeDesc = 'PHONEME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type PhonemeUpdateInput = {
  files?: Maybe<Array<Maybe<Scalars['String']>>>;
  files_unset?: Maybe<Scalars['Boolean']>;
  phoneme?: Maybe<Scalars['String']>;
  phoneme_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
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
  sortBy?: Maybe<PhonemeSortByInput>;
  query?: Maybe<PhonemeQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  sortBy?: Maybe<UserSortByInput>;
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
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
  progress?: Maybe<Array<Maybe<UserProgress>>>;
};

export type UserInsertInput = {
  progress?: Maybe<Array<Maybe<UserProgressInsertInput>>>;
  _id?: Maybe<Scalars['String']>;
};

export type UserProgress = {
  __typename?: 'UserProgress';
  completed_words?: Maybe<Scalars['Int']>;
  lesson?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
};

export type UserProgressInsertInput = {
  completed_words?: Maybe<Scalars['Int']>;
  lesson?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
};

export type UserProgressQueryInput = {
  lesson_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  completed_words?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<UserProgressQueryInput>>;
  completed_words_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  level_gt?: Maybe<Scalars['Int']>;
  lesson_exists?: Maybe<Scalars['Boolean']>;
  completed_words_gte?: Maybe<Scalars['Int']>;
  lesson_ne?: Maybe<Scalars['String']>;
  level_ne?: Maybe<Scalars['Int']>;
  lesson_lte?: Maybe<Scalars['String']>;
  completed_words_lt?: Maybe<Scalars['Int']>;
  level_exists?: Maybe<Scalars['Boolean']>;
  completed_words_lte?: Maybe<Scalars['Int']>;
  lesson_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  completed_words_exists?: Maybe<Scalars['Boolean']>;
  level_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lesson_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserProgressQueryInput>>;
  completed_words_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lesson_gte?: Maybe<Scalars['String']>;
  level_lt?: Maybe<Scalars['Int']>;
  level_gte?: Maybe<Scalars['Int']>;
  level_lte?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  completed_words_gt?: Maybe<Scalars['Int']>;
  lesson_gt?: Maybe<Scalars['String']>;
  level_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lesson?: Maybe<Scalars['String']>;
  completed_words_ne?: Maybe<Scalars['Int']>;
};

export type UserProgressUpdateInput = {
  lesson?: Maybe<Scalars['String']>;
  lesson_unset?: Maybe<Scalars['Boolean']>;
  level?: Maybe<Scalars['Int']>;
  level_unset?: Maybe<Scalars['Boolean']>;
  level_inc?: Maybe<Scalars['Int']>;
  completed_words?: Maybe<Scalars['Int']>;
  completed_words_inc?: Maybe<Scalars['Int']>;
  completed_words_unset?: Maybe<Scalars['Boolean']>;
};

export type UserQueryInput = {
  _id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<UserQueryInput>>;
  _id_ne?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  progress_in?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
  progress_nin?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
  progress_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserQueryInput>>;
  progress?: Maybe<Array<Maybe<UserProgressQueryInput>>>;
};

export enum UserSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UserUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  progress?: Maybe<Array<Maybe<UserProgressUpdateInput>>>;
  progress_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
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
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  syllables_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  syllables_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<WordQueryInput>>;
  word_gt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  word_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes_exists?: Maybe<Scalars['Boolean']>;
  word_lte?: Maybe<Scalars['String']>;
  graphemes_exists?: Maybe<Scalars['Boolean']>;
  word?: Maybe<Scalars['String']>;
  phonemes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_lt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<WordQueryInput>>;
  graphemes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  syllables_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_ne?: Maybe<Scalars['String']>;
  word_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  graphemes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum WordSortByInput {
  WordAsc = 'WORD_ASC',
  WordDesc = 'WORD_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type WordUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  graphemes_unset?: Maybe<Scalars['Boolean']>;
  word?: Maybe<Scalars['String']>;
  syllables_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  phonemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  word_unset?: Maybe<Scalars['Boolean']>;
  graphemes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phonemes_unset?: Maybe<Scalars['Boolean']>;
  syllables?: Maybe<Array<Maybe<Scalars['String']>>>;
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
    & Pick<User, '_id'>
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
    & Pick<User, '_id'>
    & { progress?: Maybe<Array<Maybe<(
      { __typename?: 'UserProgress' }
      & Pick<UserProgress, 'level' | 'lesson' | 'completed_words'>
    )>>> }
  )> }
);
