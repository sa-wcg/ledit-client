const ACCESS_TOKEN = "access_token"
const REFRESH_TOKEN = "refresh_token"

export const getAccessTokenFromStorage = (): string | undefined => {
	const data = localStorage.getItem(ACCESS_TOKEN);
	return data ? JSON.parse(data) : undefined;
};

export const getRefreshTokenFromStorage = (): string | undefined => {
	const data = localStorage.getItem(REFRESH_TOKEN);
	return data ? JSON.parse(data) : undefined;
};

export const saveAccessTokenToStorage = (token: string) => {
	if (!token) localStorage.removeItem(ACCESS_TOKEN);
	else localStorage.setItem(ACCESS_TOKEN, JSON.stringify(token));
};

export const saveRefreshTokenToStorage = (token: string) => {
	if (!token) localStorage.removeItem(REFRESH_TOKEN);
	else localStorage.setItem(REFRESH_TOKEN, JSON.stringify(token));
};

export const clearStorage = () => {
	localStorage.clear();
};

export const logoutUser = () => {
	clearStorage();
	window.location.reload();
};

