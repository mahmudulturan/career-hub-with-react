import './Banner.css';

const Banner = () => {
    return (
        <div className='category'>
            <div className="flex flex-col md:flex-row md:w-3/4 mx-auto justify-between items-center">
                <div className="md:flex-1 space-y-6">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">One Step <br /> Closer To Your <span className="gradient-text block m-0">Dream Job</span></h1>
                    <p className="text-lg font-medium">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
                </div>
                <div className="md:flex-1">
                    <img src="user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;