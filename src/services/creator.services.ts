import { getRequest } from "@/utils/request.utils";
import { GET_EXPLORE_URL, GET_PROFILE_URL } from "@/utils/url.utils";

export const getUserProfile = (
    username: string
): Promise<{ data: any; error: any }> => {
    return getRequest({
        url: GET_PROFILE_URL + "?username=" + username,
    });
};

export const getExplorePage = (): Promise<{ data: any; error: any }> => {
    return getRequest({
        url: GET_EXPLORE_URL,
    });
};
