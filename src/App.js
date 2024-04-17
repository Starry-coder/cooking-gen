import styled from 'styled-components';
import './App.css';
import {Header,AppName,Logo,SearchComponent,SearchIcon,SearchInput} from './components/HeaderComponent';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
`
const RecipieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 3px 10px 0 #aaa;
  text-align: center;
  width: 450px;
  margin: 30px;
`
const RecipeImage = styled.img`
  height: 300px;
`
const RecipeName = styled.span`

  font-size: 24px;
  font-weight: bold;
  margin: 10px;
`
const RecipeButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const RecipeIngredients = styled.button`
  flex-direction: column;
  align-items: center;
  width: 200px;
  display: flex;
  font-size: 20px;
  border:0.5px solid green;
  border-radius: 8px;
  background-color: white;
  color:green;
  padding: 8px;
  margin: 8px;
  box-shadow: 0 3px 3px 0.5px green;
  &:hover {
    background-color: green;
    box-shadow:none;
    color: white;
    transition: 0.4s;
  }
`
const FullRecipe = styled.button`
flex-direction: column;
align-items: center;
width: 200px;
display: flex;
font-size: 20px;
border: 0.5px solid orange;
border-radius: 8px;
color:Orange  ;
background-color: white;
padding: 8px;
margin:8px;
box-shadow: 0 3px 3px 0.5px orange;
&:hover {
  background-color: orange;
  box-shadow:none;
  color: white;
  transition: 0.4s;
}
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
