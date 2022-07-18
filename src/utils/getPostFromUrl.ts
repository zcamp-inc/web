import { useGetPostQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetString";

export const useGetPostFromUrl = () => {
    const intId = useGetIntId();
    return useGetPostQuery({
        variables: {
            getPostId: intId
        }
    })
}