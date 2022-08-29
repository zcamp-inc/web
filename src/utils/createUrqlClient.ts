import { dedupExchange, fetchExchange, gql } from "urql";
import { LogoutMutation, MeQuery, MeDocument, LoginMutation,
   RegisterMutation, VotePostMutation, VotePostMutationVariables,
    GetPostQuery, GetPostDocument, GetPostVoteValueQueryVariables,
     UpdatePostMutation, DeletePostMutationVariables } from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { cacheExchange, Cache } from "@urql/exchange-graphcache";

function invalidateAllPosts(cache: Cache){
  const allFields = cache.inspectFields("Query");
  const fieldInfos = allFields.filter((info) => info.fieldName === "post");
  fieldInfos.forEach((fi) => {
    cache.invalidate("Query", "post", fi.arguments || {});
  });
}

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
          deletePost: (_result, args, cache, info) => {
            cache.invalidate({
              __typename: "Post",
              id: (args as DeletePostMutationVariables).deletePostId,
            });
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