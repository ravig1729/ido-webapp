import { Link } from "react-router";
import { FaAngleDown } from 'react-icons/fa6'

const TopMenu = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/about">About Us <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
                <ul className="dropdown-padding">
                    <li><Link to="/pages/team">Our Team</Link></li>
                    <li><Link to="/partners">Our Partners </Link></li>
                </ul>
            </li>
            <li><a href="#">Our Work <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
                <ul className="dropdown-padding">
                    <li><Link to="/pages/health">Health</Link></li>
                    <li><Link to="/pages/nutrition">Nutrition </Link></li>
                    <li><Link to="/pages/education">Education</Link></li>
                    <li><Link to="/pages/sustainable-health">Sustainable Health</Link></li>
                </ul>
            </li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/updates">Updates</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )
}

export default TopMenu