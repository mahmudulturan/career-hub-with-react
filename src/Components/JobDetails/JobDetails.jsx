import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { loadDataFromLs, setDataOnLs } from "../../Utilities/LocalStorage";


const JobDetails = () => {
    const {jobID} = useParams();
    const id = parseInt(jobID);
    const jobs = useLoaderData()
    const findJob = jobs.find(job => job.id === id);
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = findJob;
    const handleApply = ()=>{
        const loadFromLs = loadDataFromLs();
        const isExist = loadFromLs.find(data=> data === id);
        if(isExist){
            return Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Already Applied...',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Job Applied...',
                showConfirmButton: false,
                timer: 1500
            })
            setDataOnLs(id)
        }
    }

    return (
        <div>
            <div className="w-3/4 mx-auto my-32 grid md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <p>
                        <span className="font-extrabold">Job Description:  </span> {job_description}
                    </p>
                    <p>
                        <span className="font-extrabold">Job Responsiblity:  </span> {job_responsibility}
                    </p>
                    <p>
                        <span className="font-extrabold block">Educational Requirements:  </span> {educational_requirements}
                    </p>
                    <p>
                        <span className="font-extrabold block">Experiences:  </span> {experiences}
                    </p>
                </div>
                <div className="md:col-span-1">
                    <div>
                        <div className="p-7 space-y-4 category">
                            <div className="space-y-6">
                                <h3 className="text-xl font-extrabold">Job Details</h3>
                                <hr  />
                                
                                <div className="space-y-3">
                                <h1 className="font-medium"><span className="font-extrabold">Salary:  </span>{salary} (Per Month)</h1>
                                <h1 className="font-medium"><span className="font-extrabold">Job Title: </span>{job_title} (Per Month)</h1>
                                </div>
                            <hr />
                            </div>
                            <div className="space-y-6" >
                                <h3 className="text-xl font-extrabold">Contact Information</h3>
                                <hr/>
                                <div className="space-y-3">
                                <h1 className="font-medium"><span className="font-extrabold">Phone:  </span>{contact_information.phone}</h1>
                                <h1 className="font-medium"><span className="font-extrabold">Email:  </span>{contact_information.email}</h1>
                                <h1 className="font-medium"><span className="font-extrabold">Address:  </span>{contact_information.address}</h1>
                                </div>
                            </div>
                        </div>
                            {/* <Link handleApply> */}
                            <button onClick={handleApply} className="btn gradient-bg text-white font-extrabold w-full my-6">Apply Now</button>
                            {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;