import React, { useEffect } from 'react';

import {
    Sticky,
    Menu,
    Sidebar,
    Image,
    Icon,
    Segment
} from 'semantic-ui-react';

import logo from '../assets/images/DeepTranslateSidebar.png';

const SideNavBar = () => {


    return (
        <Sidebar
            as={Menu}
            icon='labeled'
            vertical
            visible
            width='thin'
            style={{ backgroundColor: "#26466f"}}
        >
            <Menu.Item>
                <Image size='medium' src={logo} />
            </Menu.Item>
            <Sticky offset={window.innerHeight - 150}>
                <Menu.Item as='a'>
                    <Icon name="question circle outline"/>Contact
                </Menu.Item>
                <Menu.Item color="red" as='a'>
                    <Icon name="github"/>Github
                </Menu.Item>
            </Sticky>
        </Sidebar>


    );
}

export default SideNavBar;