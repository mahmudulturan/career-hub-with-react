import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <div className="px-1">
            <div className="min-h-screen">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
       </div>
    );
};

export default Root;