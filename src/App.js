import styled from 'styled-components';
import './App.css';
import Axios from 'axios';
import {Header,AppName,Logo,SearchComponent,Navigation,SearchIcon,Link,SearchInput} from './components/HeaderComponent';
// eslint-disable-next-line no-unused-vars
import {RecipeListContainer,RecipieContainer,RecipeImage,RecipeName,RecipeButtons,RecipeIngredients,FullRecipe} from './components/RecipeComponent';
import React, { useState } from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';

const APP_ID = '25c722ba';
const APP_KEY = '7bd115c345de68ebdf8ceaaff6cb5b64';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const RecipeComponent = (props) => {

  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const {recipeObj} = props;

  return (
    <>
      <Dialog open={show}>
        <DialogTitle id='alert-dialog-slide-title' style={
          {
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: 'bold',
          }
        
        }>Ingredients</DialogTitle>
        <DialogContent style={
          {
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
            height: '500px',
            overflowY: 'scroll',
            textAlign: 'center',
          }
        }>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {props.recipeObj.recipe.ingredients.map((ingredientObj, index) => (
                <tr key={index}>
                  <td style={
                    {
                      textAlign: 'left',
                      padding: '8px',
                    }
                  }>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions style={
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '8px',
          }
        }>
          <RecipeIngredients onClick={() => window.open(props.recipeObj.recipe.url)}>See More</RecipeIngredients>
          <FullRecipe onClick={() => setShow(false)}>Close</FullRecipe>
        </DialogActions>
      </Dialog>
      <RecipieContainer>
        <RecipeImage src={props.recipeObj.recipe.image} alt='recipe' />
        <RecipeName>{props.recipeObj.recipe.label}</RecipeName>
        <RecipeButtons>
          <RecipeIngredients onClick={() => setShow(true)}>Ingredients</RecipeIngredients>
          <FullRecipe onClick={() => window.open(props.recipeObj.recipe.url)}>Full Recipe</FullRecipe>
        </RecipeButtons>
      </RecipieContainer>
    </>
  )
}

function App() {
  const [timeoutId,updateTimeoutId] = useState();
  const [recipeList,updateRecipeList] = useState([]);

  const fetchRecipes = async(searchString) => {
    const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  updateRecipeList(response.data.hits);
};

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipes(event.target.value),500);
    updateTimeoutId(timeout);
  }

  return (
    <Container className="App">
      <Header>
        <AppName>
          <Logo src='/food-icon.svg' alt='logo'/>
          CookingGen
        </AppName>
        <div style={
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }
        
        }>
        <Link href = "/" style={
          {
            marginRight: '56px',
          }
        }>
          Home
        </Link>
        <SearchComponent>
          <SearchIcon src='/search-icon2.svg' alt='search'/>
          <SearchInput type='text' placeholder='Search recipes' onChange={onTextChange}/>
        </SearchComponent>
        </div>
      </Header>

      

      <RecipeListContainer>
        {recipeList.length && recipeList.map((recipeObj) =>(
          <RecipeComponent recipeObj = {recipeObj} />
        ))}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
