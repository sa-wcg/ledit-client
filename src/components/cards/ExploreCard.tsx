import { generateRandomInteger } from "@/utils/randomness.utils";
import Image from "next/image";

import favouriteImage from "@/assets/images/favorite.svg";
import dotsImage from "@/assets/images/home/dots.svg";

import classes from "./ExploreCard.module.scss";
import Link from "next/link";

type Image = {
    _id: string;
    url: string;
};

type Props = {
    image: Image;
    flag: number;
};

const ExploreCard = ({ image, flag }: Props) => {
    const handleShare = () => {
        if (!navigator?.share) return;

        navigator.share({
            url: `http://ledit-client.vercel.com/discover/${image._id}`,
        });
    };

    return (
        <div
            className={classes.main}
            style={{
                gridRow: `span ${5 + (flag % 3)}`,
            }}
        >
            <Link
                href={`/discover/${image._id}`}
                className={classes.image_container}
            >
                <Image
                    src={image.url}
                    className={classes.image_item}
                    alt="image"
                    fill
                />
            </Link>
            <div className={classes.actions}>
                <Image
                    onClick={handleShare}
                    src={dotsImage}
                    alt="share"
                    width={16}
                    height={16}
                />
            </div>
        </div>
    );
};

export default ExploreCard;
