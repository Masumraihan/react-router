import { useLoaderData } from "react-router-dom";


const User = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="">
            <p>user</p>
        </div>
    );
};

export default User;