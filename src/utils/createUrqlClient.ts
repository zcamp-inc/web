import { dedupExchange, fetchExchange, gql } from "urql";
import { LogoutMutation, MeQuery, MeDocument, LoginMutation, RegisterMutation, VotePostMutation, VotePostMutationVariables, GetPostQuery, GetPostDocument, GetPostVoteValueQueryVariables } from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { cacheExchange } from "@urql/exchange-graphcache";

export const createUrqlClient = (ssrExchange: any) => ({
    url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include" as const,
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      keys: {
        PostResponse: () => null,
        UserResponse: () => null,
        PaginatedPosts: () => null,
        VotePost: () => null,
      },
      updates: {
        Mutation: {
          votePost: (_result, args, cache, info) => {
            const { votePostId, value } = args as VotePostMutationVariables;
            const data = cache.readFragment(
              gql`
                fragment _ on Post{
                  id
                  voteCount
                }              
              `, { id: votePostId } as any
            );
            const post_data = cache.readFragment(
              gql`
                fragment _ on PostVote{
                  value
                  postId
                }
              `, {postId: votePostId} as any
            );

            if(post_data & data){
              if(post_data.value === value){
                return;
              }
              const newPoints = (data.voteCount as number) + (!post_data.value ? 1 : 2) * value;
              cache.writeFragment(
                gql`
                  fragment __ on Post{
                    voteCount
                  }
                `, {id: votePostId, voteCount: newPoints} as any,               
              );
              cache.writeFragment(
                gql`
                  fragment __ on PostVote{
                    value
                  }
                `, { value: value} as any
              );
            }
            
          },


          logoutUser: (_result, args, cache, info) => {
            betterUpdateQuery<LogoutMutation, MeQuery>(
              cache, 
              { query: MeDocument },
            _result,
            () => ({ me: null })
            );
          },

          loginUser: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, MeQuery >(
              cache, 
              { query: MeDocument },
              _result,
              (result, query ) => {
                if (result.loginUser.errors) {
                  return query;
                } else {
                  return {
                    me: result.loginUser.user,
                    callme: result.loginUser.user
                  };
                }
              }
            )
          },

          registerUser: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterMutation, MeQuery>(
              cache, 
              { query: MeDocument },
              _result,
              (result, query ) => {
                if (result.registerUser.errors) {
                  return query;
                } else {
                  return {
                    me: result.registerUser.user,
                    callme: result.registerUser.user,
                  };
                }
              }
            )
          },

          
        }
      }
    }), fetchExchange, ssrExchange,
  ],
});