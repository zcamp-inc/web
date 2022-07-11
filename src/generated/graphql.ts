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

export type Group = {
  __typename?: 'Group';
  bannerImgUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Float'];
  isDisabled: Scalars['Boolean'];
  logoImgUrl: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createComment: CommentResponse;
  createPost: PostResponse;
  deleteComment: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  getGroupUsers: Array<User>;
  getUserGroups: Array<Group>;
  joinGroup: Scalars['Boolean'];
  loginUser: UserResponse;
  logoutUser: Scalars['Boolean'];
  registerUser: UserResponse;
  savePost: Scalars['Boolean'];
  seedUniversities: Scalars['String'];
  updateComment: CommentResponse;
  updatePost: PostResponse;
  voteComment: Scalars['Boolean'];
  votePost: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  body?: InputMaybe<Scalars['String']>;
  parentCommentId?: InputMaybe<Scalars['Int']>;
  postId: Scalars['Int'];
};


export type MutationCreatePostArgs = {
  body?: InputMaybe<Scalars['String']>;
  groupId: Scalars['Float'];
  title: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Float'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationGetGroupUsersArgs = {
  groupId: Scalars['Float'];
};


export type MutationJoinGroupArgs = {
  groupId: Scalars['Float'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  options: UsernamePasswordInput;
};


export type MutationSavePostArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCommentArgs = {
  body: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationUpdatePostArgs = {
  body?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationVoteCommentArgs = {
  id: Scalars['Int'];
  value: Scalars['Float'];
};


export type MutationVotePostArgs = {
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

export type PostResponse = {
  __typename?: 'PostResponse';
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
};

export type Query = {
  __typename?: 'Query';
  getComment?: Maybe<Comment>;
  getGroups: Array<Group>;
  getPost?: Maybe<Post>;
  getUniversities: Array<University>;
  homePosts: PaginatedPosts;
  me?: Maybe<UserResponse>;
  topGroups: Array<Group>;
  trendingPosts: PaginatedPosts;
};


export type QueryGetCommentArgs = {
  id: Scalars['Float'];
};


export type QueryGetPostArgs = {
  id?: InputMaybe<Scalars['Float']>;
};


export type QueryHomePostsArgs = {
  cursor?: InputMaybe<Scalars['Float']>;
  limit: Scalars['Float'];
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryTrendingPostsArgs = {
  cursor: Scalars['Int'];
  limit: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
};

export type University = {
  __typename?: 'University';
  bannerImgUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Float'];
  isDisabled: Scalars['Boolean'];
  logoImgUrl: Scalars['String'];
  name: Scalars['String'];
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

export type RegErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegPostFragment = { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, creator: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } };

export type RegUserFragment = { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean };

export type RegUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } | null };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } | null } };

export type CreatePostMutationVariables = Exact<{
  groupId: Scalars['Float'];
  title: Scalars['String'];
  body?: InputMaybe<Scalars['String']>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'PostResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, post?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, creator: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type GetGroupUsersMutationVariables = Exact<{
  groupId: Scalars['Float'];
}>;


export type GetGroupUsersMutation = { __typename?: 'Mutation', getGroupUsers: Array<{ __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean }> };

export type GetUserGroupsMutationVariables = Exact<{ [key: string]: never; }>;


export type GetUserGroupsMutation = { __typename?: 'Mutation', getUserGroups: Array<{ __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }> };

export type JoinGroupMutationVariables = Exact<{
  groupId: Scalars['Float'];
}>;


export type JoinGroupMutation = { __typename?: 'Mutation', joinGroup: boolean };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } | null } };

export type GetGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGroupsQuery = { __typename?: 'Query', getGroups: Array<{ __typename?: 'Group', id: number, name: string, createdAt: any, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }> };

export type GetPostQueryVariables = Exact<{
  getPostId: Scalars['Float'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, creator: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } } | null };

export type GetUniversitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUniversitiesQuery = { __typename?: 'Query', getUniversities: Array<{ __typename?: 'University', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }> };

export type HomePostsQueryVariables = Exact<{
  cursor: Scalars['Float'];
  sortBy?: InputMaybe<Scalars['String']>;
  limit: Scalars['Float'];
}>;


export type HomePostsQuery = { __typename?: 'Query', homePosts: { __typename?: 'PaginatedPosts', hasMore: boolean, cursor: number, posts?: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, creator: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type TopGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type TopGroupsQuery = { __typename?: 'Query', topGroups: Array<{ __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }> };

export type TrendingPostsQueryVariables = Exact<{
  cursor: Scalars['Int'];
  limit: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
}>;


export type TrendingPostsQuery = { __typename?: 'Query', trendingPosts: { __typename?: 'PaginatedPosts', hasMore: boolean, cursor: number, posts?: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, creator: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } }> | null } };

export const RegPostFragmentDoc = gql`
    fragment RegPost on Post {
  id
  createdAt
  updatedAt
  title
  body
  isDisabled
  voteCount
  wasEdited
  bodySnippet
  creator {
    id
    username
    email
    createdAt
    profileImgUrl
    isDisabled
  }
}
    `;
export const RegErrorFragmentDoc = gql`
    fragment RegError on FieldError {
  field
  message
}
    `;
export const RegUserFragmentDoc = gql`
    fragment RegUser on User {
  id
  username
  email
  createdAt
  profileImgUrl
  isDisabled
}
    `;
export const RegUserResponseFragmentDoc = gql`
    fragment RegUserResponse on UserResponse {
  errors {
    ...RegError
  }
  user {
    ...RegUser
  }
}
    ${RegErrorFragmentDoc}
${RegUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $token: String!) {
  changePassword(newPassword: $newPassword, token: $token) {
    ...RegUserResponse
  }
}
    ${RegUserResponseFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreatePostDocument = gql`
    mutation CreatePost($groupId: Float!, $title: String!, $body: String) {
  createPost(groupId: $groupId, title: $title, body: $body) {
    errors {
      field
      message
    }
    post {
      ...RegPost
      creator {
        ...RegUser
      }
    }
  }
}
    ${RegPostFragmentDoc}
${RegUserFragmentDoc}`;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const GetGroupUsersDocument = gql`
    mutation GetGroupUsers($groupId: Float!) {
  getGroupUsers(groupId: $groupId) {
    ...RegUser
  }
}
    ${RegUserFragmentDoc}`;

export function useGetGroupUsersMutation() {
  return Urql.useMutation<GetGroupUsersMutation, GetGroupUsersMutationVariables>(GetGroupUsersDocument);
};
export const GetUserGroupsDocument = gql`
    mutation GetUserGroups {
  getUserGroups {
    id
    createdAt
    name
    description
    isDisabled
    logoImgUrl
    bannerImgUrl
  }
}
    `;

export function useGetUserGroupsMutation() {
  return Urql.useMutation<GetUserGroupsMutation, GetUserGroupsMutationVariables>(GetUserGroupsDocument);
};
export const JoinGroupDocument = gql`
    mutation JoinGroup($groupId: Float!) {
  joinGroup(groupId: $groupId)
}
    `;

export function useJoinGroupMutation() {
  return Urql.useMutation<JoinGroupMutation, JoinGroupMutationVariables>(JoinGroupDocument);
};
export const LoginDocument = gql`
    mutation Login($password: String!, $usernameOrEmail: String!) {
  loginUser(password: $password, usernameOrEmail: $usernameOrEmail) {
    ...RegUserResponse
  }
}
    ${RegUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logoutUser
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  registerUser(options: $options) {
    ...RegUserResponse
  }
}
    ${RegUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetGroupsDocument = gql`
    query GetGroups {
  getGroups {
    id
    name
    createdAt
    description
    isDisabled
    logoImgUrl
    bannerImgUrl
  }
}
    `;

export function useGetGroupsQuery(options?: Omit<Urql.UseQueryArgs<GetGroupsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetGroupsQuery>({ query: GetGroupsDocument, ...options });
};
export const GetPostDocument = gql`
    query GetPost($getPostId: Float!) {
  getPost(id: $getPostId) {
    ...RegPost
    creator {
      ...RegUser
    }
  }
}
    ${RegPostFragmentDoc}
${RegUserFragmentDoc}`;

export function useGetPostQuery(options: Omit<Urql.UseQueryArgs<GetPostQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostQuery>({ query: GetPostDocument, ...options });
};
export const GetUniversitiesDocument = gql`
    query GetUniversities {
  getUniversities {
    id
    createdAt
    name
    description
    isDisabled
    logoImgUrl
    bannerImgUrl
  }
}
    `;

export function useGetUniversitiesQuery(options?: Omit<Urql.UseQueryArgs<GetUniversitiesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUniversitiesQuery>({ query: GetUniversitiesDocument, ...options });
};
export const HomePostsDocument = gql`
    query HomePosts($cursor: Float!, $sortBy: String, $limit: Float!) {
  homePosts(limit: $limit, sortBy: $sortBy, cursor: $cursor) {
    posts {
      ...RegPost
    }
    hasMore
    cursor
  }
}
    ${RegPostFragmentDoc}`;

export function useHomePostsQuery(options: Omit<Urql.UseQueryArgs<HomePostsQueryVariables>, 'query'>) {
  return Urql.useQuery<HomePostsQuery>({ query: HomePostsDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    user {
      ...RegUser
    }
    errors {
      ...RegError
    }
  }
}
    ${RegUserFragmentDoc}
${RegErrorFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const TopGroupsDocument = gql`
    query TopGroups {
  topGroups {
    id
    createdAt
    name
    description
    isDisabled
    logoImgUrl
    bannerImgUrl
  }
}
    `;

export function useTopGroupsQuery(options?: Omit<Urql.UseQueryArgs<TopGroupsQueryVariables>, 'query'>) {
  return Urql.useQuery<TopGroupsQuery>({ query: TopGroupsDocument, ...options });
};
export const TrendingPostsDocument = gql`
    query TrendingPosts($cursor: Int!, $limit: Int!, $sortBy: String) {
  trendingPosts(cursor: $cursor, limit: $limit, sortBy: $sortBy) {
    posts {
      ...RegPost
    }
    hasMore
    cursor
  }
}
    ${RegPostFragmentDoc}`;

export function useTrendingPostsQuery(options: Omit<Urql.UseQueryArgs<TrendingPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<TrendingPostsQuery>({ query: TrendingPostsDocument, ...options });
};