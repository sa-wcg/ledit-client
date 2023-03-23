import ExploreCard from "@/components/cards/ExploreCard";
import HeadComponent from "@/components/head/HeadComponent";
import LoadingComponent from "@/components/loading/LoadingComponent";
import NavbarComponent from "@/components/navbar";
import { useGetExplorePageDataQuery } from "@/redux/services/creator.service";
import { useMemo, useState } from "react";

import classes from "./HomePage.module.scss";

const ExplorePage = () => {
    const [navPane, setNavPane] = useState<0 | 1>(0);

    const { data, error, isLoading } = useGetExplorePageDataQuery(0);

    const exploreData = useMemo(() => {
        if (!data) return null;

        return data.data;
    }, [data]);

    if (isLoading) return <LoadingComponent fill />;

    if (!exploreData || !!error) {
        return (
            <div>
                {!!error ? (
                    <h1>Request failed</h1>
                ) : (
                    <h1>Something Went Wrong</h1>
                )}
            </div>
        );
    }

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
                    {exploreData.map((image, ind) => (
                        <ExploreCard key={image.url} image={image} flag={ind} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default ExplorePage;
