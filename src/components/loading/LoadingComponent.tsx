import ClipLoader from "react-spinners/ClipLoader";

import classes from "./LoadingComponent.module.scss";

type Props = {
    fill?: boolean;
};

const LoadingComponent = ({ fill }: Props) => {
    if (fill) {
        return (
            <div className={classes.fill_container}>
                <ClipLoader />
            </div>
        );
    }

    return <ClipLoader />;
};

export default LoadingComponent;
