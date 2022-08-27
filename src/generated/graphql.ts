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
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  bodySnippet: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: UserResponse;
  id: Scalars['Float'];
  isDisabled: Scalars['Boolean'];
  post: User;
  updatedAt: Scalars['DateTime'];
  voteCount: Scalars['Float'];
  wasEdited: Scalars['Boolean'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  comment?: Maybe<Comment>;
  errors?: Maybe<Array<FieldError>>;
};

export type CommentsResponse = {
  __typename?: 'CommentsResponse';
  comments?: Maybe<Array<Comment>>;
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
  university: UniversityResponse;
};

export type GroupResponse = {
  __typename?: 'GroupResponse';
  errors?: Maybe<Array<FieldError>>;
  group?: Maybe<Group>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createComment: CommentResponse;
  createGroup: GroupResponse;
  createPost: PostResponse;
  deleteComment: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  joinGroup: Scalars['Boolean'];
  loginUser: UserResponse;
  logoutUser: Scalars['Boolean'];
  registerUser: UserResponse;
  savePost: Scalars['Boolean'];
  seedUniversities: Scalars['String'];
  unvoteComment: VoteResponse;
  unvotePost: VoteResponse;
  updateComment: CommentResponse;
  updateGroupDetails: Scalars['Boolean'];
  updatePost: PostResponse;
  voteComment: VoteResponse;
  votePost: VoteResponse;
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


export type MutationCreateGroupArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
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


export type MutationUnvoteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationUnvotePostArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCommentArgs = {
  body: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationUpdateGroupDetailsArgs = {
  bannerImgUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  groupId: Scalars['Float'];
  logoImgUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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
  creator: UserResponse;
  group: Group;
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
  getComment?: Maybe<CommentResponse>;
  getGroupByName: GroupResponse;
  getGroupUserCount: Scalars['Float'];
  getGroups: Array<Group>;
  getPost: PostResponse;
  getPostComments: CommentsResponse;
  getPostVoteValue: Scalars['Float'];
  getUniversities: Array<University>;
  getUniversityGroups: Array<Group>;
  getUserGroups: Array<Group>;
  getUsers: Array<User>;
  homePosts: PaginatedPosts;
  me?: Maybe<UserResponse>;
  topGroups: Array<Group>;
  trendingPosts: PaginatedPosts;
  user?: Maybe<UserResponse>;
  userPosts: PaginatedPosts;
};


export type QueryGetCommentArgs = {
  id: Scalars['Float'];
};


export type QueryGetGroupByNameArgs = {
  groupName: Scalars['String'];
  universityName: Scalars['String'];
};


export type QueryGetGroupUserCountArgs = {
  groupId: Scalars['Float'];
};


export type QueryGetPostArgs = {
  id: Scalars['Float'];
};


export type QueryGetPostCommentsArgs = {
  postId: Scalars['Int'];
};


export type QueryGetPostVoteValueArgs = {
  id: Scalars['Int'];
};


export type QueryGetUniversityGroupsArgs = {
  universityId: Scalars['Float'];
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


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryUserPostsArgs = {
  cursor?: InputMaybe<Scalars['Float']>;
  limit: Scalars['Float'];
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

export type UniversityResponse = {
  __typename?: 'UniversityResponse';
  errors?: Maybe<Array<FieldError>>;
  university?: Maybe<University>;
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

export type VoteResponse = {
  __typename?: 'VoteResponse';
  success: Scalars['Boolean'];
  voteCount?: Maybe<Scalars['Float']>;
};

export type RegErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegPostFragment = { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, group: { __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } };

export type RegUserFragment = { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean };

export type RegUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } | null };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } | null } };

export type CreateCommentMutationVariables = Exact<{
  postId: Scalars['Int'];
  body?: InputMaybe<Scalars['String']>;
  parentCommentId?: InputMaybe<Scalars['Int']>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'CommentResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, comment?: { __typename?: 'Comment', id: number, createdAt: any, updatedAt: any, body: string, isDisabled: boolean, wasEdited: boolean, voteCount: number, bodySnippet: string, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } } | null } };

export type CreateGroupMutationVariables = Exact<{
  description: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup: { __typename?: 'GroupResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, group?: { __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string } | null } };

export type CreatePostMutationVariables = Exact<{
  groupId: Scalars['Float'];
  title: Scalars['String'];
  body?: InputMaybe<Scalars['String']>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'PostResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, post?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } } | null } };

export type DeleteCommentMutationVariables = Exact<{
  deleteCommentId: Scalars['Float'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: boolean };

export type DeletePostMutationVariables = Exact<{
  deletePostId: Scalars['Float'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

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

export type UnvoteCommentMutationVariables = Exact<{
  unvoteCommentId: Scalars['Int'];
}>;


export type UnvoteCommentMutation = { __typename?: 'Mutation', unvoteComment: { __typename?: 'VoteResponse', success: boolean, voteCount?: number | null } };

export type UnvotePostMutationVariables = Exact<{
  unvotePostId: Scalars['Int'];
}>;


export type UnvotePostMutation = { __typename?: 'Mutation', unvotePost: { __typename?: 'VoteResponse', success: boolean, voteCount?: number | null } };

export type UpdateCommentMutationVariables = Exact<{
  body: Scalars['String'];
  updateCommentId: Scalars['Int'];
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'CommentResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, comment?: { __typename?: 'Comment', id: number, createdAt: any, updatedAt: any, body: string, isDisabled: boolean, wasEdited: boolean, voteCount: number, bodySnippet: string, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } } | null } };

export type UpdateGroupDetailsMutationVariables = Exact<{
  groupId: Scalars['Float'];
  bannerImgUrl?: InputMaybe<Scalars['String']>;
  logoImgUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type UpdateGroupDetailsMutation = { __typename?: 'Mutation', updateGroupDetails: boolean };

export type UpdatePostMutationVariables = Exact<{
  updatePostId: Scalars['Int'];
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'PostResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, post?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } } | null } };

export type VoteCommentMutationVariables = Exact<{
  value: Scalars['Float'];
  voteCommentId: Scalars['Int'];
}>;


export type VoteCommentMutation = { __typename?: 'Mutation', voteComment: { __typename?: 'VoteResponse', success: boolean, voteCount?: number | null } };

export type VotePostMutationVariables = Exact<{
  value: Scalars['Float'];
  votePostId: Scalars['Int'];
}>;


export type VotePostMutation = { __typename?: 'Mutation', votePost: { __typename?: 'VoteResponse', success: boolean, voteCount?: number | null } };

export type GetCommentQueryVariables = Exact<{
  getCommentId: Scalars['Float'];
}>;


export type GetCommentQuery = { __typename?: 'Query', getComment?: { __typename?: 'CommentResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, comment?: { __typename?: 'Comment', id: number, createdAt: any, updatedAt: any, body: string, isDisabled: boolean, wasEdited: boolean, voteCount: number, bodySnippet: string, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } } | null } | null };

export type GetGroupByNameQueryVariables = Exact<{
  universityName: Scalars['String'];
  groupName: Scalars['String'];
}>;


export type GetGroupByNameQuery = { __typename?: 'Query', getGroupByName: { __typename?: 'GroupResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, group?: { __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string } | null } };

export type GetGroupUserCountQueryVariables = Exact<{
  groupId: Scalars['Float'];
}>;


export type GetGroupUserCountQuery = { __typename?: 'Query', getGroupUserCount: number };

export type GetGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGroupsQuery = { __typename?: 'Query', getGroups: Array<{ __typename?: 'Group', id: number, name: string, createdAt: any, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }> };

export type GetPostQueryVariables = Exact<{
  getPostId: Scalars['Float'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost: { __typename?: 'PostResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, post?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, group: { __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } } | null } };

export type GetPostCommentsQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type GetPostCommentsQuery = { __typename?: 'Query', getPostComments: { __typename?: 'CommentsResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, comments?: Array<{ __typename?: 'Comment', id: number, createdAt: any, updatedAt: any, body: string, isDisabled: boolean, wasEdited: boolean, voteCount: number, bodySnippet: string, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } }> | null } };

export type GetPostVoteValueQueryVariables = Exact<{
  getPostVoteValueId: Scalars['Int'];
}>;


export type GetPostVoteValueQuery = { __typename?: 'Query', getPostVoteValue: number };

export type GetUniversitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUniversitiesQuery = { __typename?: 'Query', getUniversities: Array<{ __typename?: 'University', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }> };

export type GetUserGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserGroupsQuery = { __typename?: 'Query', getUserGroups: Array<{ __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string }> };

export type HomePostsQueryVariables = Exact<{
  limit: Scalars['Float'];
  sortBy?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['Float']>;
}>;


export type HomePostsQuery = { __typename?: 'Query', homePosts: { __typename?: 'PaginatedPosts', hasMore: boolean, cursor: number, posts?: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null }, group: { __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string } }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, username: string, email: string, createdAt: string, profileImgUrl: string, isDisabled: boolean } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type TopGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type TopGroupsQuery = { __typename?: 'Query', topGroups: Array<{ __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }> };

export type TrendingPostsQueryVariables = Exact<{
  cursor: Scalars['Int'];
  limit: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
}>;


export type TrendingPostsQuery = { __typename?: 'Query', trendingPosts: { __typename?: 'PaginatedPosts', hasMore: boolean, cursor: number, posts?: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, group: { __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } }> | null } };

export type UserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } | null };

export type UserPostsQueryVariables = Exact<{
  limit: Scalars['Float'];
  sortBy?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['Float']>;
}>;


export type UserPostsQuery = { __typename?: 'Query', userPosts: { __typename?: 'PaginatedPosts', hasMore: boolean, cursor: number, posts?: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body: string, isDisabled: boolean, voteCount: number, wasEdited: boolean, bodySnippet: string, group: { __typename?: 'Group', id: number, createdAt: any, name: string, description: string, isDisabled: boolean, logoImgUrl: string, bannerImgUrl: string }, creator: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, createdAt: string, username: string, isDisabled: boolean, profileImgUrl: string, email: string } | null } }> | null } };

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
  group {
    id
    createdAt
    name
    description
    isDisabled
    logoImgUrl
    bannerImgUrl
  }
  creator {
    errors {
      field
      message
    }
    user {
      id
      createdAt
      username
      isDisabled
      profileImgUrl
      email
    }
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
export const CreateCommentDocument = gql`
    mutation CreateComment($postId: Int!, $body: String, $parentCommentId: Int) {
  createComment(postId: $postId, body: $body, parentCommentId: $parentCommentId) {
    errors {
      field
      message
    }
    comment {
      id
      createdAt
      updatedAt
      body
      isDisabled
      wasEdited
      voteCount
      bodySnippet
      creator {
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
  }
}
    `;

export function useCreateCommentMutation() {
  return Urql.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument);
};
export const CreateGroupDocument = gql`
    mutation CreateGroup($description: String!, $name: String!) {
  createGroup(description: $description, name: $name) {
    errors {
      field
      message
    }
    group {
      id
      createdAt
      name
      description
      isDisabled
      logoImgUrl
      bannerImgUrl
    }
  }
}
    `;

export function useCreateGroupMutation() {
  return Urql.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument);
};
export const CreatePostDocument = gql`
    mutation CreatePost($groupId: Float!, $title: String!, $body: String) {
  createPost(groupId: $groupId, title: $title, body: $body) {
    errors {
      field
      message
    }
    post {
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
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const DeleteCommentDocument = gql`
    mutation DeleteComment($deleteCommentId: Float!) {
  deleteComment(id: $deleteCommentId)
}
    `;

export function useDeleteCommentMutation() {
  return Urql.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument);
};
export const DeletePostDocument = gql`
    mutation DeletePost($deletePostId: Float!) {
  deletePost(id: $deletePostId)
}
    `;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
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
export const UnvoteCommentDocument = gql`
    mutation UnvoteComment($unvoteCommentId: Int!) {
  unvoteComment(id: $unvoteCommentId) {
    success
    voteCount
  }
}
    `;

export function useUnvoteCommentMutation() {
  return Urql.useMutation<UnvoteCommentMutation, UnvoteCommentMutationVariables>(UnvoteCommentDocument);
};
export const UnvotePostDocument = gql`
    mutation UnvotePost($unvotePostId: Int!) {
  unvotePost(id: $unvotePostId) {
    success
    voteCount
  }
}
    `;

export function useUnvotePostMutation() {
  return Urql.useMutation<UnvotePostMutation, UnvotePostMutationVariables>(UnvotePostDocument);
};
export const UpdateCommentDocument = gql`
    mutation UpdateComment($body: String!, $updateCommentId: Int!) {
  updateComment(body: $body, id: $updateCommentId) {
    errors {
      field
      message
    }
    comment {
      id
      createdAt
      updatedAt
      body
      isDisabled
      wasEdited
      voteCount
      bodySnippet
      creator {
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
  }
}
    `;

export function useUpdateCommentMutation() {
  return Urql.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument);
};
export const UpdateGroupDetailsDocument = gql`
    mutation UpdateGroupDetails($groupId: Float!, $bannerImgUrl: String, $logoImgUrl: String, $description: String, $name: String) {
  updateGroupDetails(
    groupId: $groupId
    bannerImgUrl: $bannerImgUrl
    logoImgUrl: $logoImgUrl
    description: $description
    name: $name
  )
}
    `;

export function useUpdateGroupDetailsMutation() {
  return Urql.useMutation<UpdateGroupDetailsMutation, UpdateGroupDetailsMutationVariables>(UpdateGroupDetailsDocument);
};
export const UpdatePostDocument = gql`
    mutation UpdatePost($updatePostId: Int!, $body: String, $title: String) {
  updatePost(id: $updatePostId, body: $body, title: $title) {
    errors {
      field
      message
    }
    post {
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
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
  }
}
    `;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const VoteCommentDocument = gql`
    mutation VoteComment($value: Float!, $voteCommentId: Int!) {
  voteComment(value: $value, id: $voteCommentId) {
    success
    voteCount
  }
}
    `;

export function useVoteCommentMutation() {
  return Urql.useMutation<VoteCommentMutation, VoteCommentMutationVariables>(VoteCommentDocument);
};
export const VotePostDocument = gql`
    mutation VotePost($value: Float!, $votePostId: Int!) {
  votePost(value: $value, id: $votePostId) {
    success
    voteCount
  }
}
    `;

export function useVotePostMutation() {
  return Urql.useMutation<VotePostMutation, VotePostMutationVariables>(VotePostDocument);
};
export const GetCommentDocument = gql`
    query GetComment($getCommentId: Float!) {
  getComment(id: $getCommentId) {
    errors {
      field
      message
    }
    comment {
      id
      createdAt
      updatedAt
      body
      isDisabled
      wasEdited
      voteCount
      bodySnippet
      creator {
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
  }
}
    `;

export function useGetCommentQuery(options: Omit<Urql.UseQueryArgs<GetCommentQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentQuery>({ query: GetCommentDocument, ...options });
};
export const GetGroupByNameDocument = gql`
    query GetGroupByName($universityName: String!, $groupName: String!) {
  getGroupByName(universityName: $universityName, groupName: $groupName) {
    errors {
      field
      message
    }
    group {
      id
      createdAt
      name
      description
      isDisabled
      logoImgUrl
      bannerImgUrl
    }
  }
}
    `;

export function useGetGroupByNameQuery(options: Omit<Urql.UseQueryArgs<GetGroupByNameQueryVariables>, 'query'>) {
  return Urql.useQuery<GetGroupByNameQuery>({ query: GetGroupByNameDocument, ...options });
};
export const GetGroupUserCountDocument = gql`
    query GetGroupUserCount($groupId: Float!) {
  getGroupUserCount(groupId: $groupId)
}
    `;

export function useGetGroupUserCountQuery(options: Omit<Urql.UseQueryArgs<GetGroupUserCountQueryVariables>, 'query'>) {
  return Urql.useQuery<GetGroupUserCountQuery>({ query: GetGroupUserCountDocument, ...options });
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
    errors {
      field
      message
    }
    post {
      id
      createdAt
      updatedAt
      title
      body
      isDisabled
      voteCount
      wasEdited
      bodySnippet
      group {
        id
        createdAt
        name
        description
        isDisabled
        logoImgUrl
        bannerImgUrl
      }
      creator {
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
  }
}
    `;

export function useGetPostQuery(options: Omit<Urql.UseQueryArgs<GetPostQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostQuery>({ query: GetPostDocument, ...options });
};
export const GetPostCommentsDocument = gql`
    query GetPostComments($postId: Int!) {
  getPostComments(postId: $postId) {
    errors {
      field
      message
    }
    comments {
      id
      createdAt
      updatedAt
      body
      isDisabled
      wasEdited
      voteCount
      bodySnippet
      creator {
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
  }
}
    `;

export function useGetPostCommentsQuery(options: Omit<Urql.UseQueryArgs<GetPostCommentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostCommentsQuery>({ query: GetPostCommentsDocument, ...options });
};
export const GetPostVoteValueDocument = gql`
    query GetPostVoteValue($getPostVoteValueId: Int!) {
  getPostVoteValue(id: $getPostVoteValueId)
}
    `;

export function useGetPostVoteValueQuery(options: Omit<Urql.UseQueryArgs<GetPostVoteValueQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostVoteValueQuery>({ query: GetPostVoteValueDocument, ...options });
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
export const GetUserGroupsDocument = gql`
    query GetUserGroups {
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

export function useGetUserGroupsQuery(options?: Omit<Urql.UseQueryArgs<GetUserGroupsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserGroupsQuery>({ query: GetUserGroupsDocument, ...options });
};
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    id
    createdAt
    username
    isDisabled
    profileImgUrl
    email
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options });
};
export const HomePostsDocument = gql`
    query HomePosts($limit: Float!, $sortBy: String, $cursor: Float) {
  homePosts(limit: $limit, sortBy: $sortBy, cursor: $cursor) {
    posts {
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
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
      group {
        id
        createdAt
        name
        description
        isDisabled
        logoImgUrl
        bannerImgUrl
      }
    }
    hasMore
    cursor
  }
}
    `;

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
      id
      createdAt
      updatedAt
      title
      body
      isDisabled
      voteCount
      wasEdited
      bodySnippet
      group {
        id
        createdAt
        name
        description
        isDisabled
        logoImgUrl
        bannerImgUrl
      }
      creator {
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
    hasMore
    cursor
  }
}
    `;

export function useTrendingPostsQuery(options: Omit<Urql.UseQueryArgs<TrendingPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<TrendingPostsQuery>({ query: TrendingPostsDocument, ...options });
};
export const UserDocument = gql`
    query User($username: String!) {
  user(username: $username) {
    errors {
      field
      message
    }
    user {
      id
      createdAt
      username
      isDisabled
      profileImgUrl
      email
    }
  }
}
    `;

export function useUserQuery(options: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'>) {
  return Urql.useQuery<UserQuery>({ query: UserDocument, ...options });
};
export const UserPostsDocument = gql`
    query UserPosts($limit: Float!, $sortBy: String, $cursor: Float) {
  userPosts(limit: $limit, sortBy: $sortBy, cursor: $cursor) {
    posts {
      id
      createdAt
      updatedAt
      title
      body
      isDisabled
      voteCount
      wasEdited
      bodySnippet
      group {
        id
        createdAt
        name
        description
        isDisabled
        logoImgUrl
        bannerImgUrl
      }
      creator {
        errors {
          field
          message
        }
        user {
          id
          createdAt
          username
          isDisabled
          profileImgUrl
          email
        }
      }
    }
    hasMore
    cursor
  }
}
    `;

export function useUserPostsQuery(options: Omit<Urql.UseQueryArgs<UserPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<UserPostsQuery>({ query: UserPostsDocument, ...options });
};