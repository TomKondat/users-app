import "./layout.css";
import Navbar from "./Navbar";
const Header = ({filteredArr}) => {

    return (
        <>
        <header className="header"> 
        <h1>Love Me</h1>
        </header>
        <Navbar filteredArr={filteredArr}/>
        </>
    );
};

export default Header;