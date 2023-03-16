import axios from "axios";
import { getAccessTokenFromStorage } from "./storage.utils";

interface getRequestInterface {
    url: string;
    headers?: any;
    noAuth?: boolean;
}

interface postRequestInterface {
    data: any;
    url: string;
    headers?: any;
    noAuth?: boolean;
}

interface sendRequestInterface {
    url: string;
    method: "get" | "post";
    data?: any;
    headers?: any;
    noAuth?: boolean;
}

export const sendRequest = async (
    args: sendRequestInterface
): Promise<{ data?: any; headers?: any; error?: any; status: number }> => {
    try {
        const { url, headers, noAuth } = args;

        let headerParams;

        if (noAuth) {
            if (headers) {
                headerParams = {
                    ...headers,
                    authorization: getAccessTokenFromStorage(),
                };
            } else {
                headerParams = {
                    authorization: getAccessTokenFromStorage(),
                };
            }
        }

        const response = await axios({
            ...args,
            headers: headerParams,
            url,
        });

        return response;
    } catch (error: any) {
        return { error: error.response, status: error.response.status };
    }
};

export const getRequest = async (
    args: getRequestInterface
): Promise<{
    data: any;
    error: Error | null;
    headers?: any;
    status: number;
}> => {
    const { data, headers, error, status } = await sendRequest({
        ...args,
        method: "get",
    });
    if (status === 200) {
        return {
            data,
            error: null,
            headers,
            status,
        };
    }
    return {
        data,
        error: error || data,
        status,
    };
};

export const postRequest = async (
    args: postRequestInterface
): Promise<{
    data: any;
    error: Error | null;
    headers?: any;
    status: number;
}> => {
    const { data, headers, error, status } = await sendRequest({
        ...args,
        method: "post",
    });
    if ([200, 201, 204].indexOf(status) > -1) {
        return {
            data,
            error: null,
            headers,
            status,
        };
    }
    return {
        data: null,
        error: error || data,
        status,
    };
};
