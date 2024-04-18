import React from 'react';
import {Header,AppName,Logo,Navigation,Link} from '../components/HeaderComponent';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`


function Landing() {
    return (
        <Container>
            <Header>
                <AppName>
                    <Logo src='/food-icon.svg' alt='logo'/>
                    CookingGen
                </AppName>
                <Navigation>
                    <Link href = 'search'>Search</Link>
                    <Link to = "#">About</Link>
                    <Link to = "/portfolio">Portfolio</Link>
                </Navigation>
            </Header>
        </Container>
    );
};

export default Landing;