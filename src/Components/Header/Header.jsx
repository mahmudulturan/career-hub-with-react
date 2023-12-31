import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const buttonList = <>
    <li className="font-bold"><NavLink to='/statistics'  className={({isActive}) => isActive && 'text-[#7E90FE]'}>Statistics</NavLink></li>
    <li className="font-bold"><NavLink to='/appliedjobs' className={({isActive}) => isActive && 'text-[#7E90FE]'}>Applied Jobs</NavLink></li>
    <li className="font-bold"><NavLink to='/blogs' className={({isActive}) => isActive && 'text-[#7E90FE]'}>Blog</NavLink></li>
  </>
  return (
    <div className="category">
      <div className="navbar md:w-3/4 mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost p-0 m-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {/* list item */}
                {buttonList}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl font-extrabold">CareerHub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                {/* list item */}
                {buttonList}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn font-extrabold btn-sm md:btn md:text-white md:font-bold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Start Applying</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
