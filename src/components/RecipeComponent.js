import styled from 'styled-components'
export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
`
export const RecipieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 3px 10px 0 #aaa;
  text-align: center;
  width: 450px;
  margin: 30px;
`
export const RecipeImage = styled.img`
  height: 300px;
`
export const RecipeName = styled.span`

  font-size: 24px;
  font-weight: bold;
  margin: 10px;
`
export const RecipeButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const RecipeIngredients = styled.button`
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
export const FullRecipe = styled.button`
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