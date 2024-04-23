import React from 'react';
import {Header,AppName,Logo,Navigation,Link} from '../components/HeaderComponent';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { List } from '@material-ui/core';
import './landing.css';

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
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
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
    margin-top: 12px;
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
const Footer = styled.footer`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 20vh;
    color: white;
    font-size: 16px;
    font-weight: bold;
`
const AboutSection = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    margin: 40px 120px 80px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
`
const AboutHeader = styled.h1`
    margin-bottom: 32px;
    font-size: 40px;
    font-weight: bold;
`
const AboutText = styled.p`
    padding: 12px;
    border-radius: 10px;
    border: 2px solid black;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    margin top: 12px;
    margin-bottom: 32px;
    font-size: 24px;
    color: black;
`
const Linkk = styled.a`
    color: white;
    text-decoration: none;
    margin: 20px;
    display: flex;
    background-color: #33CC99;
    border: none;
    font-size: 16px;
    border-radius: 16px;
    padding: 10px 20px;
    margin-top: 32px;
  &:hover {
    color: black;
  }
`

function Landing() {
    return (
        <Container style={{ backgroundColor: 'white' }}>
            <Header>
                <AppName>
                    <Logo src='/food-icon.svg' alt='logo' />
                    CookingGen
                </AppName>
                <Navigation>
                    <Link href='search'>Search</Link>
                    <Link href='#'>About</Link>
                    <Link href='about'>Portfolio</Link>
                </Navigation>
            </Header>

            <HeroSecrion className='heroSection'>
                <HeroContentArea>
                    <HeroHeader>
                         Welcome to CookingGen
                    </HeroHeader>
                    <HeroText>CookingGen is your personal culinary assistant. This innovative application generates recipes based on your preferences and available ingredients. Whether you're a seasoned chef or a beginner in the kitchen, CookingGen makes meal planning easy and fun. Explore a vast array of dishes, save your favorites to your portfolio, and discover new flavors with CookingGen. Start your culinary adventure today by clicking 'Search Recipes'.</HeroText>
                    <Linkk href='search' className='bttn'>Search Recipes</Linkk>
                </HeroContentArea>

                <HeroImg src='/landing-pic.jpg' alt='food-icon' />
            </HeroSecrion>

            <AboutSection className='aboutUs'>
                <AboutHeader >About Us</AboutHeader>
                <AboutText className='aboutTxt'>Our website provides you with the best recipes for your favorite dishes. You can search for any recipe you want and get the ingredients and the recipe for it. You can also view the full recipe by clicking on the full recipe button. We hope you enjoy our website and find it helpful.</AboutText>
                <AboutText className='aboutTxt'>This project is a dynamic web application built using React.js, a popular JavaScript library for building user interfaces. The application is primarily focused on providing recipes to users.</AboutText>
                <AboutText className='aboutTxt'>The application fetches its data from an external API using an API key. This key is used to authenticate your application's requests to the API. When a user interacts with your application (for example, by searching for a recipe), a request is sent to the API with the API key and the user's query. The API then responds with data that matches the query, which your application formats and displays to the user. The application uses styled-components for CSS in JS styling. This allows for dynamic and reusable styles, making the application more maintainable and the code cleaner.</AboutText>
                <AboutText className='aboutTxt'>The Landing page of the application includes an "About" section, which is styled and structured using styled-components. This section likely provides information about the application or its creator.</AboutText>
                <AboutText className='aboutTxt'>The application is structured as a single-page application (SPA), meaning all navigation on the site does not trigger a full page refresh, only the necessary components are re-rendered. This is a common pattern in modern web development, as it can provide a smoother user experience. The project demonstrates a good understanding of React and modern JavaScript, as well as API interaction and CSS-in-JS styling. It could potentially be expanded with more features, such as user accounts, saving favorite recipes, or more advanced search options.</AboutText>
            </AboutSection>

            <Footer>
                <p style={
                    {
                        marginTop: '20px',
                        marginBottom: '20px'
                    }
                }>
                    Email : cookinggen@gmail.com <br /> <br />
                    Phone : 0141 123 456
                </p>
                <p>
                    © 2021 CookingGen. All rights reserved. <br /> <br />
                    Made by Aryan Kumar
                </p>
            </Footer>
        </Container>
    );
};

export default Landing;