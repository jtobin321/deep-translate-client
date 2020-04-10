import React from 'react';

import {
    Card,
    Menu,
    Sidebar,
    Image,
    Icon,
    Segment
} from 'semantic-ui-react';

import SideNavBar from '../../components/SideNavBar';

const Translate = () => {
    return (
        <div>
            <SideNavBar />
            <Card style={{marginLeft: "400px"}}>
                <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
      </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
        22 Friends
      </a>
                </Card.Content>
            </Card>
        </div>
    );
}

export default Translate;