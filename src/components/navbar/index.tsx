import Link from "next/link";

import classes from "./NavbarComponent.module.scss";

type Props = {};

const NavbarComponent = ({}: Props) => {
    return (
        <nav className={classes.main}>
            <ul className={classes.navbar_items}>
                <li className={classes.navbar_item}>
                    <Link href="/">Home</Link>
                </li>
                <li className={classes.navbar_item}>
                    <Link href="/">My Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarComponent;
