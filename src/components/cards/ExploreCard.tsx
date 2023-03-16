import { generateRandomInteger } from "@/utils/randomness.utils";
import Image from "next/image";

import favouriteImage from "@/assets/images/favorite.svg";
import shareImage from "@/assets/images/share.svg";

import classes from "./ExploreCard.module.scss";

type Image = {
    id: string;
    url: string;
}

type Props = {
    image: Image;
};

const ExploreCard = ({ image }: Props) => {
    return (
        <div
            className={classes.main}
            style={{
                gridRow: `span ${generateRandomInteger(5, 7)}`,
            }}
        >
            <div className={classes.image_container}>
                <Image
                    src={image.url}
                    className={classes.image_item}
                    alt="image"
                    fill
                />
            </div>
            <div className={classes.actions}>
                <Image
                    src={favouriteImage}
                    alt="favourite"
                    width={16}
                    height={16}
                />
                <Image src={shareImage} alt="share" width={16} height={16} />
            </div>
        </div>
    );
};

export default ExploreCard;
