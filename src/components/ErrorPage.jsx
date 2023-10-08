import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const { error } = useRouteError();
    console.log(error.message);

    return (
        <div>
            {error.message}
        </div>
    );
};

export default ErrorPage;