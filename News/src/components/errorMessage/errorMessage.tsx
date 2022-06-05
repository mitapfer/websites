import './errorMessage.scss';

import error from '../../resources/error.gif';

const ErrorMessage = () => {
    return (
        <div className="error">
            <img className="error__img" src={error} alt="loading"/>
            <h4 className="error__title">Something is wrong...</h4>
        </div>
    )
}

export default ErrorMessage;