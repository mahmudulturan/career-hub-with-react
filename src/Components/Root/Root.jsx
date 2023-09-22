import Header from "../Header/Header";
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        // <div className="bg-gradient-to-r from-blue-300 to-purple-400 opacity-10">
            <div className="md:w-3/4 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
        // </div>
    );
};

export default Root;