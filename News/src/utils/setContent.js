import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/errorMessage";
import NothingSearchResult from "../components/nothingSearchResult/nothingSearchResult";

const setContent = (process, Component) => {
    switch (process) {
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'nothing':
            return <NothingSearchResult/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;