import { dedupExchange, fetchExchange } from "urql";
import { LogoutMutation, MeQuery, MeDocument, LoginMutation, RegisterMutation, VotePostMutation, VotePostMutationVariables, GetPostQuery, GetPostDocument } from "../generated/graphql";
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
          // votePost: (_result, args, cache, info) => {
          //   const { votePostId, value } = args as VotePostMutationVariables;
          //   const data = cache.readFragment()
            
          // }, To be continued...


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