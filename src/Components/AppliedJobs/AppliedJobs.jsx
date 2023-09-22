import { useLoaderData } from "react-router-dom";
import { loadDataFromLs } from "../../Utilities/LocalStorage";
import { useState, useEffect } from "react";
import Job from "../Job/Job";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [dispalyedJobs, setDisplayedJobs] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const appliedID = loadDataFromLs();
    const applied = jobs.filter((job) => appliedID.includes(job.id));
    setAppliedJobs(applied);
    setDisplayedJobs(applied);
  }, [jobs]);

  const handleFilter = (type) =>{
        if(type === 'all'){
            setDisplayedJobs(appliedJobs)
        }
        else if(type === 'remote'){
            const remoteFilter = appliedJobs.filter(job=> job.remote_or_onsite === 'Remote')
            setDisplayedJobs(remoteFilter)
        }
        else{
            const onsiteFilter = appliedJobs.filter(job=> job.remote_or_onsite === 'Onsite')
            setDisplayedJobs(onsiteFilter)
        }
  }
  return (
    <div className="my-32 md:w-3/4 mx-auto">
      <h1 className="text-3xl font-extrabold text-center">Applied Jobs</h1>
      <div className="relative">
        <div className="right-3 absolute">
          <details className="dropdown mb-32">
            <summary className="m-1 btn">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={()=> handleFilter('all')}>
                <button>All Jobs</button>
              </li>
              <li onClick={()=> handleFilter('remote')}>
                <button>Remote Jobs</button>
              </li>
              <li onClick={()=> handleFilter('onsite')}>
                <button>Onsite Jobs</button>
              </li>
              
            </ul>
          </details>
        </div>
        <div>
          {dispalyedJobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
