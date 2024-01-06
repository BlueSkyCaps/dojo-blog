import {Link} from "react-router-dom";

const Navbar =() =>{
    return (
        <nav className="navbar">
            <span>我的博客</span>
            <div className="links">
                <Link to="/">首页</Link>
                <Link to="/create">新博客</Link>
            </div>
        </nav>
    );
}


export default Navbar;