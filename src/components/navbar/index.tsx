import Link from "next/link";
import Image from "next/image";

import homeActiveIcon from "@/assets/images/navbar/home-active.svg";
import exploreActiveIcon from "@/assets/images/navbar/search-active.svg";
import profileActiveIcon from "@/assets/images/navbar/avatar-active.svg";
import homeInActiveIcon from "@/assets/images/navbar/home-inactive.svg";
import exploreInActiveIcon from "@/assets/images/navbar/search-inactive.svg";
import profileInActiveIcon from "@/assets/images/navbar/avatar-inactive.svg";

import classes from "./NavbarComponent.module.scss";
import { useRouter } from "next/router";

type Props = {};

const NavbarComponent = ({}: Props) => {
    const router = useRouter();

    return (
        <nav className={classes.main}>
            <Link className={classes.nav_item} href="/">
                {router.asPath === "/" ? (
                    <Image src={homeActiveIcon} alt="home" />
                ) : (
                    <Image src={homeInActiveIcon} alt="home" />
                )}
            </Link>
            <Link className={classes.nav_item} href="/explore">
                {router.asPath === "/explore" ? (
                    <Image src={exploreActiveIcon} alt="explore" />
                ) : (
                    <Image src={exploreInActiveIcon} alt="home" />
                )}
            </Link>
            <Link className={classes.nav_item} href="/profile/shalsc">
                {router.asPath.indexOf("/profile") > -1 ? (
                    <Image src={profileActiveIcon} alt="profile" />
                ) : (
                    <Image src={profileInActiveIcon} alt="home" />
                )}
            </Link>
        </nav>
    );
};

export default NavbarComponent;
