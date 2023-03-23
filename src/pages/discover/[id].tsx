import HeadComponent from "@/components/head/HeadComponent";
import Image from "next/image";

import share from "@/assets/images/share.png";
import like from "@/assets/images/like.png";

import classes from "./DiscoverPage.module.scss";
import NavbarComponent from "@/components/navbar";
import { useMemo } from "react";
import LoadingComponent from "@/components/loading/LoadingComponent";
import { useRouter } from "next/router";
import Link from "next/link";
import {
    useGetMatchesByIdQuery,
    useGetProfileByUsernameQuery,
} from "@/redux/services/creator.service";
import { CreatorEntity } from "@/types";

const HomePage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, error, isLoading, isFetching } = useGetMatchesByIdQuery(
        id as string
    );

    const outfitData = useMemo(() => {
        if (!data) return null;

        return data.data;
    }, [data]);

    const { data: profileData } = useGetProfileByUsernameQuery(
        (outfitData?.data.creator as CreatorEntity).username as string,
        {
            skip: !outfitData,
        }
    );

    const suggestions = useMemo(() => {
        if (!profileData) return null;

        return profileData.data.images;
    }, [profileData]);

    if (isLoading || isFetching) return <LoadingComponent fill />;

    if (!outfitData || error)
        return (
            <div>
                <h1>{!!error ? "Request Failed" : "Something went wrong"}</h1>
            </div>
        );

    return (
        <>
            <HeadComponent />
            <NavbarComponent />
            <div className={classes.ratemyfit_div}>
                <div className={classes.discover_img_div}>
                    <Image
                        alt="fit_img"
                        src={outfitData.data.url}
                        className={classes.fit_img}
                        fill
                    />
                </div>

                <div className={classes.bottom_div}>
                    <div className={classes.account_details}>
                        <Link
                            href={`/profile/${
                                (outfitData.data.creator as CreatorEntity)
                                    .username
                            }`}
                            className={classes.username}
                        >
                            @
                            {(outfitData.data.creator as CreatorEntity)
                                .full_name.length > 0
                                ? (outfitData.data.creator as CreatorEntity)
                                      .full_name
                                : (outfitData.data.creator as CreatorEntity)
                                      .username}
                        </Link>
                        <p className={classes.biography}>
                            {(outfitData.data.creator as CreatorEntity).bio}
                        </p>
                    </div>
                    <div className={classes.share_div}>
                        <Image alt="share_icon" src={share} />
                        <Image alt="like_icon" src={like} />
                    </div>
                </div>

                <h1 className={classes.shop_tagline}>Shop The Look</h1>

                {outfitData.results.brand_look?.[0]?.thumbnail && (
                    <div className={classes.shop_exact_match_div}>
                        <div className={classes.outfit_div}>
                            <Image
                                alt="jeans"
                                src={outfitData.results.brand_look[0].thumbnail}
                                fill
                            />
                        </div>
                        <div className={classes.exact_match_div}>
                            <p>exact match</p>
                        </div>
                        <a
                            href={outfitData.results.brand_look[0].link}
                            target="__blank"
                            className={classes.shop_btn}
                        >
                            Shop
                        </a>
                        {/* <div className='share_div exact_share_div'> */}
                        <Image
                            alt="like_icon"
                            src={like}
                            className={classes.like_btn_exact}
                        />
                        <Image
                            alt="share_icon"
                            src={share}
                            className={classes.share_btn_exact}
                        />
                        {/* </div> */}
                    </div>
                )}
                <div className={classes.shop_lookalike_row_div}>
                    {outfitData.results.gender_look?.[0]?.thumbnail && (
                        <div
                            className={`${classes.shop_matching_div} ${classes.shop_exact_match_div}`}
                        >
                            <a
                                href={outfitData.results.gender_look[0].link}
                                className={classes.outfit_div_small}
                                target="__blank"
                            >
                                <Image
                                    alt="jeans"
                                    src={
                                        outfitData.results.gender_look[0]
                                            .thumbnail
                                    }
                                    fill
                                />
                            </a>
                            <Image
                                alt="like_icon"
                                src={like}
                                className={classes.like_btn_exact}
                            />
                            <Image
                                alt="share_icon"
                                src={share}
                                className={classes.share_btn_exact}
                            />
                        </div>
                    )}
                    {outfitData.results.gender_look?.[1]?.thumbnail && (
                        <div
                            className={`${classes.shop_matching_div} ${classes.shop_exact_match_div}`}
                        >
                            <a
                                href={outfitData.results.gender_look[1].link}
                                className={classes.outfit_div_small}
                                target="__blank"
                            >
                                <Image
                                    alt="jeans"
                                    src={
                                        outfitData.results.gender_look[1]
                                            .thumbnail
                                    }
                                    fill
                                />
                            </a>
                            <Image
                                alt="like_icon"
                                src={like}
                                className={classes.like_btn_exact}
                            />
                            <Image
                                alt="share_icon"
                                src={share}
                                className={classes.share_btn_exact}
                            />
                        </div>
                    )}
                </div>
                {suggestions && (
                    <div className={classes.shop_other_looks_div}>
                        <p className={classes.shop_others_text}>
                            Shop Other Looks
                        </p>
                        <div className={classes.other_looks_div_row}>
                            {suggestions.slice(0, 3).map((image: any) => (
                                <Link
                                    key={image.url}
                                    href={`/discover/${image._id}`}
                                    className={classes.outfit_div}
                                >
                                    <Image
                                        alt="suggestion"
                                        src={image.url}
                                        className={classes.other_look_img}
                                        fill
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                <p className={classes.sign_up_txt}>
                    sign up for our newsletter
                </p>

                <input
                    className={classes.email_input}
                    type={"text"}
                    placeholder={"Enter your email here"}
                />
                <button className={classes.subscribe_btn}>subscribe</button>
            </div>
        </>
    );
};

export default HomePage;
