import ExploreCard from "@/components/cards/ExploreCard";
import HeadComponent from "@/components/head/HeadComponent";
import LoadingComponent from "@/components/loading/LoadingComponent";
import NavbarComponent from "@/components/navbar";
import { useGetExplorePageDataQuery } from "@/redux/services/creator.service";
import { PostEntity } from "@/types";
import { useEffect, useRef, useState } from "react";

import classes from "./HomePage.module.scss";

const ExplorePage = () => {
    const [navPane, setNavPane] = useState<0 | 1>(0);
    const observer = useRef<IntersectionObserver | null>(null);

    const [pageNumber, setPageNumber] = useState<number>(0);

    const { data, error, isLoading } = useGetExplorePageDataQuery(pageNumber, {
        refetchOnMountOrArgChange: true,
    });

    const [exploreData, setExploreData] = useState<PostEntity[] | null>(null);

    useEffect(() => {
        if (!data) return;

        setExploreData((prevData) => [
            ...(prevData || []),
            ...data.data.results,
        ]);
    }, [data]);

    useEffect(() => {
        setTimeout(() => {
            if (!observer.current) {
                observer.current = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        console.log("Intersection");
                        // Call the API to fetch more items
                        setPageNumber((prev) => prev + 1);
                    }
                });
            }
            if (observer.current) {
                observer.current.disconnect();
                const element = document.querySelector("#list-end");
                if (!element) return;
                observer.current.observe(element);
            }
        }, 5000);
    }, []);

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
                <div id="list-end" className={classes.loading_container}>
                    <LoadingComponent />
                </div>
            </main>
        </>
    );
};

export default ExplorePage;
