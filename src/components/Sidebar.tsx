import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
    const sidebarItems = [
        {id: "home", title: 'Home'},
        {id: "profile", title: 'Profile'},
        {id: "experience", title: 'Experience'},
        {id: "myWork", title: 'My Work'},
        {id: "contactMe", title: 'Contact Me'}
    ]
    return (
    <SidebarMenu>
        {sidebarItems.map((obj) => {
            return <Link to={obj.id} className="Sidebar-item" spy={true} smooth={true} duration={500} offset={-10}>{obj.title}</Link>
        })}
    </SidebarMenu>
    );
}

const SidebarMenu = styled.nav`
  display: flex;
  position: fixed;
  right: 2%;
  flex-direction: column;
  justify-content: space-between;
  min-height: 50vh;
  text-align: right;
  vertical-align: middle;
  top: 50%;
  transform: translate(0, -50%) 
`;