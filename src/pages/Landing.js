import React from 'react';
import {Header,AppName,Logo,Navigation,Link} from '../components/HeaderComponent';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const HeroSecrion = styled.div`
    justify-content: right;
    display: flex;
    flex-direction: row;
    height: 70vh;
    border-radius: 10px;
    margin: 80px 120px 80px 120px;
    background-color: #FFB89A;
`
const HeroContentArea = styled.div`
    border-radius: 10px 0 0 10px;
    width: 50%;
    display: flex;
    background-color: #FFB89A;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const HeroHeader = styled.h1`
    margin-bottom: 0px;
    display: flex;
    font-size: 40px;
    font-weight: bold;
`
const HeroText = styled.p`
text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    font-size: 16px;
    color: black;
`
const HeroImg = styled.img`
    border-radius: 0 10px 10px 0;
    justify-content: right;
    height:70vh;
`
const HeroButton = styled.button`
    color: white;
    display: flex;
    background-color: #33CC99;
    border: none;
    font-size: 16px;
    border-radius: 16px;
    padding: 0px;
    margin-top: 32px;
`
const Footer = styled.footer`
padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 10vh;
    color: white;
    font-size: 16px;
    font-weight: bold;
`

function Landing() {
    return (
        <Container style={
            {
              backgroundColor: 'white',
            }
          }>
            <Header>
                <AppName>
                    <Logo src='/food-icon.svg' alt='logo'/>
                    CookingGen
                </AppName>
                <Navigation>
                    <Link href = 'search'>Search</Link>
                    <Link href = "#">About</Link>
                    <Link href = "about">Portfolio</Link>
                </Navigation>
            </Header>
            <HeroSecrion>
                <HeroContentArea>
                    <HeroHeader>Welcome to CookingGen</HeroHeader>
                    <HeroText>CookingGen is your personal culinary assistant. This innovative application generates recipes based on your preferences and available ingredients. Whether you're a seasoned chef or a beginner in the kitchen, CookingGen makes meal planning easy and fun. Explore a vast array of dishes, save your favorites to your portfolio, and discover new flavors with CookingGen. Start your culinary adventure today by clicking 'Search Recipes'.</HeroText>
                    <HeroButton><Link href='search'>Search Recipes</Link></HeroButton>
                </HeroContentArea>

                <HeroImg src='/landing-pic.jpg' alt='food-icon'/>
            </HeroSecrion>

            <Footer>
                <p>cookinggen@gmail.com</p>

                <p>© 2021 CookingGen. All rights reserved.</p>
            </Footer>
        </Container>
    );
};

export default Landing;