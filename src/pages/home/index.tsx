import HeadComponent from "@/components/head/HeadComponent";

import classes from "./HomePage.module.scss";

export default function Home() {
    return (
        <>
            <HeadComponent />
            <main className={classes.main}></main>
        </>
    );
}
