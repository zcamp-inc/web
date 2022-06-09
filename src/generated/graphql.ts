import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  bodySnippet: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: User;
  id: Scalars['Float'];
  isDisabled: Scalars['Boolean'];
  post: User;
  updatedAt: Scalars['DateTime'];
  voteCount: Scalars['Int'];
  wasEdited: Scalars['Boolean'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  comment?: Maybe<Post>;
  errors?: Maybe<Array<FieldError>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create: CommentResponse;
  delete: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  save: Scalars['Boolean'];
  seed: Scalars['String'];
  update: CommentResponse;
  vote: Scalars['Boolean'];
};


export type MutationCreateArgs = {
  body?: InputMaybe<Scalars['String']>;
  parentCommentId?: InputMaybe<Scalars['Int']>;
  postId: Scalars['Int'];
};


export type MutationDeleteArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationSaveArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateArgs = {
  body: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationVoteArgs = {
  id: Scalars['Int'];
  value: Scalars['Float'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  cursor: Scalars['Float'];
  hasMore: Scalars['Boolean'];
  posts?: Maybe<Array<Post>>;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  bodySnippet: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: User;
  id: Scalars['Float'];
  isDisabled: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  voteCount: Scalars['Float'];
  wasEdited: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  get?: Maybe<Comment>;
  me?: Maybe<User>;
  trending: PaginatedPosts;
};


export type QueryGetArgs = {
  id: Scalars['Float'];
};


export type QueryTrendingArgs = {
  cursor: Scalars['Int'];
  limit: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  isDisabled: Scalars['Boolean'];
  profileImgUrl: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', createdAt: string, email: string, id: number, username: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'User', createdAt: string, email: string, username: string, id: number } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };


export const LoginDocument = gql`
    mutation Login($password: String!, $usernameOrEmail: String!) {
  login(password: $password, usernameOrEmail: $usernameOrEmail) {
    user {
      createdAt
      email
      id
      username
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    user {
      createdAt
      email
      username
      id
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};