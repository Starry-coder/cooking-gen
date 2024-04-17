import styled from 'styled-components';
import './App.css';
import {Header,AppName,Logo,SearchComponent,SearchIcon,SearchInput} from './components/HeaderComponent';
import {RecipeListContainer,RecipieContainer,RecipeImage,RecipeName,RecipeButtons,RecipeIngredients,FullRecipe} from './components/RecipeComponent';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`



function App() {
  return (
    <Container className="App">
      <Header>
        <AppName>
          <Logo src='/food-icon.svg' alt='logo'/>
          CookingGen
        </AppName>
        <SearchComponent>
          <SearchIcon src='/search-icon2.svg' alt='search'/>
          <SearchInput type='text' placeholder='Search recipes'/>
        </SearchComponent>
      </Header>
      <RecipeListContainer>

        <RecipieContainer>
          <RecipeImage src='/food-icon.svg'/>
          <RecipeName>Dish Name</RecipeName>
          <RecipeButtons>
            <RecipeIngredients>Ingredients</RecipeIngredients>
            <FullRecipe>See Entire Recipe</FullRecipe>
          </RecipeButtons>
        </RecipieContainer>

        <RecipieContainer>
          <RecipeImage src='/food-icon.svg'/>
          <RecipeName>Dish Name</RecipeName>
          <RecipeButtons>
            <RecipeIngredients>Ingredients</RecipeIngredients>
            <FullRecipe>See Entire Recipe</FullRecipe>
          </RecipeButtons>
        </RecipieContainer>
        
        <RecipieContainer>
          <RecipeImage src='/food-icon.svg'/>
          <RecipeName>Dish Name</RecipeName>
          <RecipeButtons>
            <RecipeIngredients>Ingredients</RecipeIngredients>
            <FullRecipe>See Entire Recipe</FullRecipe>
          </RecipeButtons>
        </RecipieContainer>
        
        <RecipieContainer>
          <RecipeImage src='/food-icon.svg'/>
          <RecipeName>Dish Name</RecipeName>
          <RecipeButtons>
            <RecipeIngredients>Ingredients</RecipeIngredients>
            <FullRecipe>See Entire Recipe</FullRecipe>
          </RecipeButtons>
        </RecipieContainer>
        
        <RecipieContainer>
          <RecipeImage src='/food-icon.svg'/>
          <RecipeName>Dish Name</RecipeName>
          <RecipeButtons>
            <RecipeIngredients>Ingredients</RecipeIngredients>
            <FullRecipe>See Entire Recipe</FullRecipe>
          </RecipeButtons>
        </RecipieContainer>
        
        <RecipieContainer>
          <RecipeImage src='/food-icon.svg'/>
          <RecipeName>Dish Name</RecipeName>
          <RecipeButtons>
            <RecipeIngredients>Ingredients</RecipeIngredients>
            <FullRecipe>See Entire Recipe</FullRecipe>
          </RecipeButtons>
        </RecipieContainer>
        
      </RecipeListContainer>
    </Container>
  );
}

export default App;
