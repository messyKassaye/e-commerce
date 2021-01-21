import { AppBar, Container, Toolbar } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeRoute from '../HomeRoute';
import Login from './Login';
import LogoComponent from './LogoComponent';

function HomePage() {
    return (
        <Container maxWidth={'lg'}>
            <AppBar color={'primary'} style={{backgroundColor:'transparent'}} elevation={0}>
                <Toolbar>
                <LogoComponent
                    variant={'h5'}
                    firstColor={green[500]} 
                    secondColor={orange[500]}/>
                </Toolbar>
            </AppBar>
            <Container maxWidth={'md'}>
               <HomeRoute/>
            </Container>
        </Container>
    );
}

export default HomePage;

if (document.getElementById('app')) {
    ReactDOM.render(<HomePage />, document.getElementById('app'));
}
