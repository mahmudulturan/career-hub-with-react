import './Category.css'
import PropTypes from 'prop-types'
const Category = ({category}) => {
    const { logo, category_name, availability} = category;
    return (
        <div className='category p-10 space-y-11'>
            <img src={logo} alt={`logo of ${category_name}`} />
            <div>
            <h3 className="text-xl font-extrabold">{category_name}</h3>
            <p className="font-medium">{availability}</p>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired,
}

export default Category;