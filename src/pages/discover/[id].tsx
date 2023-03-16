import HeadComponent from "@/components/head/HeadComponent";
import Image from "next/image";

import share from "@/assets/images/share.png";
import like from "@/assets/images/like.png";

import classes from "./DiscoverPage.module.scss";
import NavbarComponent from "@/components/navbar";
import { useCallback, useEffect, useState } from "react";
import LoadingComponent from "@/components/loading/LoadingComponent";
import { useRouter } from "next/router";
import { getOutfit, getUserProfile } from "@/services/creator.services";
import Link from "next/link";

const HomePage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState<boolean>(true);
    const [outfitData, setOutfitData] = useState<any>();
    const [suggestions, setSuggestions] = useState<any[]>([]);

    const getOutfitData = useCallback(async () => {
        if (!id) return;

        setLoading(true);

        const { data, error } = await getOutfit(id as string);

        if (!!error) return;

        setOutfitData(data.data);

        setLoading(false);
    }, [id]);

    const getSimilar = useCallback(async () => {
        if (!outfitData?.data?.creator?.username) return;

        const { data, error } = await getUserProfile(
            outfitData.data.creator.username
        );

        if (!!error) return;

        setSuggestions(
            data.data.images.filter((image: any) => image._id !== id)
        );
    }, [outfitData]);

    useEffect(() => {
        getOutfitData();
    }, [getOutfitData]);

    useEffect(() => {
        getSimilar();
    }, [getSimilar]);

    if (loading) return <LoadingComponent fill />;

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
                        <Link href={`/profile/${outfitData.data.creator.username}`} className={classes.username}>
                            @{outfitData.data.creator.full_name}
                        </Link>
                        <p className={classes.biography}>
                            {outfitData.data.creator.bio}
                        </p>
                    </div>
                    <div className={classes.share_div}>
                        <Image alt="share_icon" src={share} />
                        <Image alt="like_icon" src={like} />
                    </div>
                </div>

                <h1 className={classes.shop_tagline}>Shop The Look</h1>

                {outfitData.results.brand_look[0]?.thumbnail && (
                    <div className={classes.shop_exact_match_div}>
                        <div className={classes.outfit_div}>
                            <Image
                                alt="jeans"
                                src={
                                    outfitData.results.gender_look[0]?.thumbnail
                                }
                                fill
                            />
                        </div>
                        <div className={classes.exact_match_div}>
                            <p>exact match</p>
                        </div>
                        <a
                            href={outfitData.results.gender_look[0].link}
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
                    {outfitData.results.gender_look[0]?.thumbnail && (
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
                    {outfitData.results.gender_look[0]?.thumbnail && (
                        <div
                            className={`${classes.shop_matching_div} ${classes.shop_exact_match_div}`}
                        >
                            <a
                                href={outfitData.results.gender_look[2].link}
                                className={classes.outfit_div_small}
                                target="__blank"
                            >
                                <Image
                                    alt="jeans"
                                    src={
                                        outfitData.results.gender_look[2]
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
                <div className={classes.shop_other_looks_div}>
                    <p className={classes.shop_others_text}>Shop Other Looks</p>
                    <div className={classes.other_looks_div_row}>
                        {suggestions.slice(0, 3).map((image: any) => (
                            <Link
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
