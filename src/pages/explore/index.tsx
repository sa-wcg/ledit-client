import ExploreCard from "@/components/cards/ExploreCard";
import HeadComponent from "@/components/head/HeadComponent";
import LoadingComponent from "@/components/loading/LoadingComponent";
import NavbarComponent from "@/components/navbar";
import { getExplorePage } from "@/services/creator.services";
import { useCallback, useEffect, useState } from "react";
import data from "./data.json";

import classes from "./ExplorePage.module.scss";

const ExplorePage = () => {
    const [navPane, setNavPane] = useState<0 | 1>(0);

    const [exploreData, setExploreData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getExploreData = useCallback(async () => {
        const { data, error } = await getExplorePage();

        if (!!error) return;

        setExploreData(data.data);
        setLoading(false);
    }, []);

    useEffect(() => {
        getExploreData();
    }, [getExploreData]);

    if (loading) return <LoadingComponent fill />;

    return (
        <>
            <HeadComponent title="L`Edit - Explore" />
            <NavbarComponent />
            <main className={classes.main}>
                <div className={classes.navigation}>
                    <button
                        className={`${classes.nav_item} ${
                            navPane === 0 && classes.active
                        }`}
                        onClick={() => setNavPane(0)}
                    >
                        Explore
                    </button>
                    <button
                        className={`${classes.nav_item} ${
                            navPane === 1 && classes.active
                        }`}
                        onClick={() => setNavPane(1)}
                    >
                        Favourites
                    </button>
                </div>
                <div className={classes.parent_container}>
                    {exploreData.map((image) => (
                        <ExploreCard key={image.url} image={image} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default ExplorePage;
