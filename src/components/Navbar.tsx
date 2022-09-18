import React, { useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import './Navbar.css';
import { Link } from 'react-scroll';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const Navbar:React.FC = () => {
    const sidebarItems = [
        {id: "home", title: 'Home', icon: <HomeOutlinedIcon />},
        {id: "profile", title: 'Profile', icon: <Person2OutlinedIcon />},
        {id: "experience", title: 'Experience', icon: <LightbulbOutlinedIcon />},
        {id: "myWork", title: 'My Work', icon: <WorkOutlineOutlinedIcon />},
        {id: "contactMe", title: 'Contact Me', icon: <EmailOutlinedIcon />}
    ];
    const [isOpen, setOpen] = useState(false);
    const handleIsOpen = () => {
        setOpen(!isOpen);
    };
    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
    async function closeSideBar() {
        await delay(1000);
        setOpen(false);
    };
    return (
        <Menu
            pageWrapId={ "page-wrap" }
            outerContainerId={ "outer-container" }
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
        >
            {sidebarItems.map((obj) => {
                return <Link to={obj.id} spy={true} smooth={true} duration={500} offset={-60} onClick={closeSideBar}>{obj.icon}{obj.title}</Link>
            })}
        </Menu>
    );
}