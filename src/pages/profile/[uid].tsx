import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import HeadComponent from "@/components/head/HeadComponent";

import classes from "./ProfilePage.module.scss";
import Image from "next/image";

import postsActiveIcon from "@/assets/images/profile/posts-active.svg";
import timelineActiveIcon from "@/assets/images/profile/timeline-active.svg";
import tagsActiveIcon from "@/assets/images/profile/tags-active.svg";
import postsInActiveIcon from "@/assets/images/profile/posts-inactive.svg";
import timelineInActiveIcon from "@/assets/images/profile/timeline-inactive.svg";
import tagsInActiveIcon from "@/assets/images/profile/tags-inactive.svg";
import addIcon from "@/assets/images/profile/add-icon.svg";

import NavbarComponent from "@/components/navbar";
import LoadingComponent from "@/components/loading/LoadingComponent";
import { getUserProfile } from "@/services/creator.services";
import Link from "next/link";

const ProfilePage = () => {
    const router = useRouter();
    const { uid } = router.query;

    const [userData, setUserData] = useState<any>(null);
    const [navigationPane, setNavigationPane] = useState<0 | 1 | 2>(0);
    const [loading, setLoading] = useState<boolean>(true);

    console.log({ uid });

    const getProfileData = useCallback(async () => {
        if (!uid) return;

        const { data, error } = await getUserProfile(uid as string);

        if (!!error) return;

        setUserData(data.data);
        setLoading(false);
    }, [uid]);

    useEffect(() => {
        getProfileData();
    }, [getProfileData]);

    if (loading) return <LoadingComponent fill />;

    return (
        <>
            <HeadComponent title={userData || "Profile"} />
            <NavbarComponent />
            <section className={classes.profile_details_section}>
                <Image
                    src={userData.images[0].url}
                    className={classes.pfp_avatar}
                    width={100}
                    height={100}
                    alt="profile_picture"
                />
                <Image
                    src={addIcon}
                    className={classes.add_icon}
                    width={20}
                    height={20}
                    alt="add_icon"
                />
                <p className={classes.username}>{userData.creator.full_name}</p>
                <p className={classes.biography}>{userData.creator.bio}</p>
            </section>
            <div className={classes.section_divider} />
            <section className={classes.profile_data}>
                <div className={classes.navigation}>
                    <button
                        className={classes.navigation_button}
                        onClick={() => setNavigationPane(0)}
                    >
                        {navigationPane === 0 ? (
                            <Image
                                src={postsActiveIcon}
                                className={classes.navigation_button_icon}
                                alt="navigation"
                            />
                        ) : (
                            <Image
                                src={postsInActiveIcon}
                                className={classes.navigation_button_icon}
                                alt="navigation"
                            />
                        )}
                    </button>
                    <button
                        className={classes.navigation_button}
                        onClick={() => setNavigationPane(1)}
                    >
                        {navigationPane === 1 ? (
                            <Image
                                src={timelineActiveIcon}
                                className={classes.navigation_button_icon}
                                alt="navigation"
                            />
                        ) : (
                            <Image
                                src={timelineInActiveIcon}
                                className={classes.navigation_button_icon}
                                alt="navigation"
                            />
                        )}
                    </button>
                    <button
                        className={classes.navigation_button}
                        onClick={() => setNavigationPane(2)}
                    >
                        {navigationPane === 2 ? (
                            <Image
                                src={tagsActiveIcon}
                                className={classes.navigation_button_icon}
                                alt="navigation"
                            />
                        ) : (
                            <Image
                                src={tagsInActiveIcon}
                                className={classes.navigation_button_icon}
                                alt="navigation"
                            />
                        )}
                    </button>
                </div>
                <div className={classes.profile_content}>
                    {userData.images.map((image: any) => (
                        <Link
                            href={`/discover/${image._id}`}
                            key={image.url}
                            className={classes.post}
                        >
                            <Image
                                src={image.url.split("?")[0]}
                                alt="post"
                                fill
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
