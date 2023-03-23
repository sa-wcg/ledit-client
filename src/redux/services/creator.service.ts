import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_CREATOR_URL } from "@/utils/url.utils";

import type {
    CreatorEntity,
    MatchesEntity,
    PostEntity,
    ResponseEntity,
} from "@/types";

interface GetProfileByUsernameResponse extends ResponseEntity {
    data: {
        creator: CreatorEntity;
        images: PostEntity[];
    };
}

interface GetExplorePageDataResponse extends ResponseEntity {
    data: PostEntity[];
}

interface GetMatchesByIdResponse extends ResponseEntity {
    data: {
        results: {
            brand_look?: MatchesEntity[];
            sorted_look?: MatchesEntity[];
            gender_look?: MatchesEntity[];
        };
        data: PostEntity;
    };
}

export const creatorApi = createApi({
    reducerPath: "creatorApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_CREATOR_URL }),
    endpoints: (builder) => ({
        getProfileByUsername: builder.query<
            GetProfileByUsernameResponse,
            string
        >({
            query: (username) => `profile?username=${username}`,
        }),
        getExplorePageData: builder.query<GetExplorePageDataResponse, number>({
            query: (pageNumber) => `explore?pageNumber=${pageNumber}`,
        }),
        getMatchesById: builder.query<GetMatchesByIdResponse, string>({
            query: (id) => `dress/match?id=${id}`,
        }),
    }),
});

export const {
    useGetProfileByUsernameQuery,
    useGetMatchesByIdQuery,
    useGetExplorePageDataQuery,
} = creatorApi;
