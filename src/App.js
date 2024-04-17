import styled from 'styled-components';
import './App.css';
import Axios from 'axios';
import {Header,AppName,Logo,SearchComponent,SearchIcon,SearchInput} from './components/HeaderComponent';
// eslint-disable-next-line no-unused-vars
import {RecipeListContainer,RecipieContainer,RecipeImage,RecipeName,RecipeButtons,RecipeIngredients,FullRecipe} from './components/RecipeComponent';
import React, { useState } from 'react';

const APP_ID = '25c722ba';
const APP_KEY = '7bd115c345de68ebdf8ceaaff6cb5b64';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const RecipeComponent = (props) => {
  const {recipeObj} = props;
  return (
    <RecipieContainer>
      <RecipeImage src={props.recipeObj.recipe.image} alt='recipe'/>
      <RecipeName>{props.recipeObj.recipe.label}</RecipeName>
      <RecipeButtons>
        <RecipeIngredients>Ingredients</RecipeIngredients>
        <FullRecipe onClick={() => window.open(recipeObj.url)}>Full Recipe</FullRecipe>
      </RecipeButtons>
    </RecipieContainer>
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
        <SearchComponent>
          <SearchIcon src='/search-icon2.svg' alt='search'/>
          <SearchInput type='text' placeholder='Search recipes' onChange={onTextChange}/>
        </SearchComponent>
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
