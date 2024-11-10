import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
           <NavLink style={{margin:'20px'}} to='/'>Home</NavLink>
           <NavLink to='login'>Login</NavLink>
            
        </div>
    );
};

export default Header;