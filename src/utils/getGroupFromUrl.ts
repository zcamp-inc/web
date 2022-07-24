import { useGetGroupByNameQuery } from "../generated/graphql";
import { useGetGString } from "./useGetString";

export const useGetGroupFromUrl = () => {
    const useGStr = useGetGString();
    return useGetGroupByNameQuery({
        variables: {
            groupName: useGStr,
            universityName: "Covenant University"
        }
    })
}