export type CreatorEntity = {
    gender: string;
    profile_url: string;
    _id: string;
    full_name: string;
    creator_category: string;
    followers: number;
    following: number;
    insta_id: string;
    last_refresh_date: string;
    is_verified: boolean;
    bio: string;
    username: string;
    created_at: string;
    updated_at: string;
    __v: number;
};

export type PostEntity = {
    _id: string;
    url: string;
    creator: string | CreatorEntity;
    matches?: MatchesEntity[] | null;
    brands_tagged?: string[] | null;
    sorted: boolean;
    created_at: string;
    updated_at: string;
    __v: number;
};

export type MatchesEntity = {
    position: number;
    title: string;
    link: string;
    source: string;
    source_icon: string;
    price?: PriceEntity | null;
    thumbnail: string;
    rating?: number | null;
    reviews?: number | null;
};

export type PriceEntity = {
    value: string;
    extracted_value?: number | null;
    currency: string;
};

export interface ResponseEntity {
    data?: any;
    status: boolean;
    message: string;
}
