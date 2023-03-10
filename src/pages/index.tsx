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

const HomePage = () => {
    return (
        <>
            <HeadComponent />
            <div className="ratemyfit-div">
                <header className="header-div">
                    <Link href="/explore">
                        <p className="discover-text">Discover</p>
                    </Link>
                    <Image alt="bag" src={profile} />
                </header>
                <div className="discover-img-div">
                    <Image alt="fit-img" src={shaheen} className="fit-img" />
                    <div className="shop-look scroll-div">
                        <p>
                            s h o p
                            <br />
                            <br />
                            t h e
                            <br />
                            <br />l o o k
                        </p>
                        <Image alt="down-arrow" src={downArrow} />
                        <Image alt="down-arrow" src={downArrow} />
                        <Image alt="down-arrow" src={downArrow} />
                    </div>
                </div>
                <div className="share-div">
                    <Image alt="share-icon" src={share} />
                    <Image alt="like-icon" src={like} />
                </div>

                <div className="shop-exact-match-div">
                    <Image alt="jeans" src={jeans} />
                    <div className="exact-match-div">
                        <p>exact match</p>
                    </div>
                    <button className="shop-btn">Shop</button>
                    {/* <div className='share-div exact-share-div'> */}
                    <Image
                        alt="share-icon"
                        src={share}
                        className="share-btn-exact"
                    />
                    <Image
                        alt="like-icon"
                        src={like}
                        className="like-btn-exact"
                    />
                    {/* </div> */}
                </div>
                <div className="shop-lookalike-row-div">
                    <div className="shop-matching-div shop-exact-match-div">
                        <Image alt="jeans" src={jeans} />
                        <Image
                            alt="share-icon"
                            src={share}
                            className="share-btn-exact"
                        />
                        <Image
                            alt="like-icon"
                            src={like}
                            className="like-btn-exact"
                        />
                    </div>
                    <div className="shop-matching-div shop-exact-match-div">
                        <Image alt="jeans" src={jeans} />
                        <Image
                            alt="share-icon"
                            src={share}
                            className="share-btn-exact"
                        />
                        <Image
                            alt="like-icon"
                            src={like}
                            className="like-btn-exact"
                        />
                    </div>
                </div>

                <div className="shop-other-looks-div">
                    <p className="shop-others-text">Shop Other Looks</p>
                    <div className="other-looks-div-row">
                        <Image
                            alt="shaleen2"
                            src={shaleen2}
                            className="other-look-img"
                        />
                        <Image
                            alt="shaleen2"
                            src={shaleen2}
                            className="other-look-img"
                        />
                        <Image
                            alt="shaleen2"
                            src={shaleen2}
                            className="other-look-img"
                        />
                    </div>
                </div>

                <p className="sign-up-txt">sign up for our newsletter</p>

                <input
                    className="email-input"
                    type={"text"}
                    placeholder={"Enter your email here"}
                />
                <button className="subscribe-btn">subscribe</button>
            </div>
        </>
    );
};

export default HomePage;
