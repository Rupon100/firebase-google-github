 import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex justify-center gap-4 p-4 bg-gray-200'> 
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;