import { useUserQuery } from "../generated/graphql";
import { useGetString } from "./useGetString";

export const useGetUserFromUrl = () => {
    const useStr = useGetString();
    return useUserQuery({
        variables: {
            username: useStr
        }
    })
}