import { useGroupQuery } from "../generated/graphql";
import { useGetGString } from "./useGetString";

export const useGetGroupFromUrl = () => {
    const useGStr = useGetGString();
    return useGroupQuery({
        variables: {
            name: useGStr
        }
    })
}