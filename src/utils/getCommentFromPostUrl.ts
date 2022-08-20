import { useGetPostCommentsQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetString";

export const useGetCommentFromPostUrl = () => {
    const intId = useGetIntId();
    return useGetPostCommentsQuery({
        variables:{
            postId: intId
        }
    })
    
}