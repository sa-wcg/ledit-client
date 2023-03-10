import ExploreCard from "@/components/cards/ExploreCard";
import HeadComponent from "@/components/head/HeadComponent";
import NavbarComponent from "@/components/navbar";
import data from "./data.json";

import classes from "./ExplorePage.module.scss";

const ExplorePage = () => {
    return (
        <>
            <HeadComponent title="L`Edit - Explore" />
            <NavbarComponent />
            <main className={classes.main}>
                <div className={classes.parent_container}>
                    {data.results.map((image) => (
                        <ExploreCard key={image.id} image={image} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default ExplorePage;
