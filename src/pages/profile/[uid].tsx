import { useState } from "react";
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

import data from "../explore/data.json";

const ProfilePage = () => {
    const router = useRouter();
    const { pid } = router.query;

    const [userData, setUserData] = useState<any>(null);
    const [navigationPane, setNavigationPane] = useState<0 | 1 | 2>(0);

    return (
        <>
            <HeadComponent title={userData || "Profile"} />
            <section className={classes.profile_details_section}>
                <Image
                    src={data.results[0].urls.raw}
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
                <p className={classes.username}>Shaleen</p>
                <p className={classes.biography}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro omnis minus, dolore culpa necessitatibus magni
                    recusandae aut, saepe deserunt, nemo delectus explicabo
                    minima animi ex tempore repellendus perspiciatis esse fugit!
                </p>
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
                    {data.results.slice(1).map((post) => (
                        <div key={post.urls.raw} className={classes.post}>
                            <Image src={post.urls.raw} alt="post" fill />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
