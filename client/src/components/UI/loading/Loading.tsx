import {FC} from 'react';
import GridLoader from "react-spinners/GridLoader";
import cl from "./Loading.module.css"

interface LoadingProps{
    color?: string;
    loading: boolean;
    size: number;
}

const Loading: FC<LoadingProps> = ({loading=false, size=20, color="green"}) => {
    return (
        <div className={cl.loading}>
            <div className={cl.overlay}>
                <GridLoader
                    color={color}
                    loading={loading}
                    size={size}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    );
};

export default Loading;
