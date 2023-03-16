import HeadComponent from "@/components/head/HeadComponent";
import Image from "next/image";

import downArrow from "@/assets/images/down-arrow.png";
import profile from "@/assets/images/profile.png";
import shaheen from "@/assets/images/shaheen.png";
import shaleen2 from "@/assets/images/shaleen2.png";
import share from "@/assets/images/share.png";
import like from "@/assets/images/like.png";
import jeans from "@/assets/images/jeans.png";
import Link from "next/link";

import classes from "./HomePage.module.scss";
import NavbarComponent from "@/components/navbar";

const HomePage = () => {
    return (
        <>
            <HeadComponent />
            <NavbarComponent />
            <div className={classes.ratemyfit_div}>
                <div className={classes.discover_img_div}>
                    <Image
                        alt="fit_img"
                        src={shaheen}
                        className={classes.fit_img}
                    />
                </div>

                <div className={classes.bottom_div}>
                    <div className={classes.account_details}>
                        <p className={classes.username}>@Shaleen</p>
                        <p className={classes.biography}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem Ipsum
                        </p>
                    </div>
                    <div className={classes.share_div}>
                        <Image alt="share_icon" src={share} />
                        <Image alt="like_icon" src={like} />
                    </div>
                </div>

                <h1 className={classes.shop_tagline}>Shop The Look</h1>

                <div className={classes.shop_exact_match_div}>
                    <Image alt="jeans" src={jeans} />
                    <div className={classes.exact_match_div}>
                        <p>exact match</p>
                    </div>
                    <button className={classes.shop_btn}>Shop</button>
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
                <div className={classes.shop_lookalike_row_div}>
                    <div
                        className={`${classes.shop_matching_div} ${classes.shop_exact_match_div}`}
                    >
                        <Image alt="jeans" src={jeans} />
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
                    <div
                        className={`${classes.shop_matching_div} ${classes.shop_exact_match_div}`}
                    >
                        <Image alt="jeans" src={jeans} />
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
                </div>
                <div className={classes.shop_other_looks_div}>
                    <p className={classes.shop_others_text}>Shop Other Looks</p>
                    <div className={classes.other_looks_div_row}>
                        <Image
                            alt="shaleen2"
                            src={shaleen2}
                            className={classes.other_look_img}
                        />
                        <Image
                            alt="shaleen2"
                            src={shaleen2}
                            className={classes.other_look_img}
                        />
                        <Image
                            alt="shaleen2"
                            src={shaleen2}
                            className={classes.other_look_img}
                        />
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
