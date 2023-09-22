import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div className="space-y-32">
            <Banner></Banner>
            <div className="md:w-3/4 mx-auto space-y-32">
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;