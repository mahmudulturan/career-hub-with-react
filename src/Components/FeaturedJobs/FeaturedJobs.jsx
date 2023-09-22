import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [displayed, setDisplayed] = useState([4]);
    useEffect(()=>{
        fetch('../../../public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
                <p className="text-lg font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0,displayed).map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center mt-14 ${displayed === jobs.length && 'hidden'}`}>
            <button onClick={()=> setDisplayed(jobs.length)} className="btn font-extrabold text-xl gradient-bg text text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;