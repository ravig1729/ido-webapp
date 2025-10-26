import { useState } from 'react'
import { Link } from "react-router";
import { FaMinus, FaPlus } from 'react-icons/fa6'

interface MobileMenuItemProps {
    onLinkClick?: () => void;
}

const menuItems = [
    {
        title: 'Home', path: "/"
    },
    {
        title: 'About Us', path: '/about', links: [
            { path: '/pages/team', label: 'Our Team' },
            { path: '/partners', label: 'Our Partners' }
        ]
    },
    {
        title: 'Our Work', links: [
            { path: '/pages/health', label: 'Health' },
            { path: '/pages/nutrition', label: 'Nutrition' },
            { path: '/pages/education', label: 'Education' },
            // { path: '/pages/sustainable-health', label: 'Sustainable Health' },
        ]
    },
    {
        title: 'Reports', path: '/reports'
    },
    {
        title: 'Contact', path: '/contact'
    },
];

const MobileMenuItem = ({ onLinkClick }: MobileMenuItemProps) => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleMenu = (index: any) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <ul className="mobile-nav-list nav-list1">
            {menuItems.map((item, index) => (
                <li key={index} className={`has-sub ${openIndex === index ? 'submenu-opened' : ''}`}>
                    {item.links ? (
                        <>
                            <div className="d-flex align-items-center justify-content-between"
                                onClick={() => toggleMenu(index)}>
                                <a href="#">{item.title}</a>
                                <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
                            </div>
                            <ul className={`sub-menu ${openIndex === index ? 'open-sub sub-menu-active d-block' : ''}`}>
                                {item.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link to={link.path} onClick={onLinkClick}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Link to={item.path} onClick={onLinkClick}>{item.title}</Link>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default MobileMenuItem
