import { Link, useLocation } from 'react-router';
import { FaHandsHolding } from 'react-icons/fa6';

const FloatingVolunteerButton = () => {
    const location = useLocation();
    
    // Don't show the button on the volunteer form page itself
    if (location.pathname === '/pages/volunteer-form') {
        return null;
    }

    return (
        <div className="floating-volunteer-btn">
            <Link 
                to="/pages/volunteer-form" 
                className="volunteer-float-link"
                title="Join as Volunteer"
            >
                <FaHandsHolding className="volunteer-icon" />
                <span className="volunteer-text">Volunteer</span>
            </Link>
        </div>
    );
};

export default FloatingVolunteerButton;
