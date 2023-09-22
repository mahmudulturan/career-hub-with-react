import Header from "../Header/Header";
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;