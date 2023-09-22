import { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('../../../public/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-extrabold">Job Category List</h2>
                <p className="text-lg font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"> 
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;