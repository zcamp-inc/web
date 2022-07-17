import { useRouter } from "next/router";

export const useGetString = () => {
    const router = useRouter();
    const useStr = typeof router.query.username === "string" ? (router.query.username).toString() : "";
    return useStr
}

export const useGetGString = () => {
    const router = useRouter();
    const useGStr =  typeof router.query.name === "string" ? (router.query.name).toString() : "";
    return useGStr
}