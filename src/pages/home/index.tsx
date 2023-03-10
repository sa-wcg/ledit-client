import HeadComponent from "@/components/head/HeadComponent";
import Image from "next/image";

const HomePage = () => {
    return (
        <>
            <HeadComponent />
            <div className="ratemyfit-div">
                <header className="header-div">
                    <p className="discover-text">Discover</p>
                    <Image alt="bag" src="/profile.png" />
                </header>
                <div className="discover-img-div">
                    <Image
                        alt="fit-img"
                        src="/shaheen.png"
                        className="fit-img"
                    />
                    <div className="shop-look scroll-div">
                        <p>
                            s h o p
                            <br />
                            <br />
                            t h e
                            <br />
                            <br />l o o k
                        </p>
                        <Image alt="down-arrow" src="/down-arrow.png" />
                        <Image alt="down-arrow" src="/down-arrow.png" />
                        <Image alt="down-arrow" src="/down-arrow.png" />
                    </div>
                </div>
                <div className="share-div">
                    <Image alt="share-icon" src="/share.png" />
                    <Image alt="like-icon" src="/like.png" />
                </div>

                <div className="shop-exact-match-div">
                    <Image alt="jeans" src="/jeans.png" />
                    <div className="exact-match-div">
                        <p>exact match</p>
                    </div>
                    <button className="shop-btn">Shop</button>
                    {/* <div className='share-div exact-share-div'> */}
                    <Image
                        alt="share-icon"
                        src="/share.png"
                        className="share-btn-exact"
                    />
                    <Image
                        alt="like-icon"
                        src="/like.png"
                        className="like-btn-exact"
                    />
                    {/* </div> */}
                </div>
                <div className="shop-lookalike-row-div">
                    <div className="shop-matching-div shop-exact-match-div">
                        <Image alt="jeans" src="/jeans.png" />
                        <Image
                            alt="share-icon"
                            src="/share.png"
                            className="share-btn-exact"
                        />
                        <Image
                            alt="like-icon"
                            src="/like.png"
                            className="like-btn-exact"
                        />
                    </div>
                    <div className="shop-matching-div shop-exact-match-div">
                        <Image alt="jeans" src="/jeans.png" />
                        <Image
                            alt="share-icon"
                            src="/share.png"
                            className="share-btn-exact"
                        />
                        <Image
                            alt="like-icon"
                            src="/like.png"
                            className="like-btn-exact"
                        />
                    </div>
                </div>

                <div className="shop-other-looks-div">
                    <p className="shop-others-text">Shop Other Looks</p>
                    <div className="other-looks-div-row">
                        <Image
                            alt="shaleen2"
                            src="/shaleen2.png"
                            className="other-look-img"
                        />
                        <Image
                            alt="shaleen2"
                            src="/shaleen2.png"
                            className="other-look-img"
                        />
                        <Image
                            alt="shaleen2"
                            src="/shaleen2.png"
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
