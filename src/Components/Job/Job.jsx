import PropTypes from 'prop-types';
const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className='shadow-sm bg-white p-10 space-y-3'>
            <img src={logo} alt="" />
            <h4 className='text-2xl font-extrabold'>{job_title}</h4>
            <h5 className='text-xl font-semibold text-[#757575]'>{company_name}</h5>
            <div className='flex gap-4'>
                <span className='px-5 py-2 border border-solid rounded-md gradient-text border-gradient-text font-extrabold border-[#7E90FE]'>{remote_or_onsite}</span>
                <span className='px-5 py-2 border border-solid rounded-md gradient-text border-gradient-text font-extrabold border-[#7E90FE]'>{job_type}</span>
            </div>
            <div>
                <span>{location}</span>
                <span>{salary}</span>
            </div>
            <button className="btn gradient-bg text-white font-extrabold">View Details</button>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
}

export default Job;