import './App.css';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
`

const Header = styled.header`
  justify-content: space-between;
  background-color: black;
  padding: 20px;
  display: flex;
  padding-left: 40px;
  flex-direction: row;
  font-size: calc(10px + 3vmin);
  color: white;
  font-weight: bold;
  box-shadow: 0 3px 3px 0 #555
`;
const Logo = styled.img`
  margin: 15px;
  height: 40px;
  width: 40px;
`
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-right: 40px;
  background-color: white;
  border-radius: 32px;
`
const SearchInput = styled.input`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 30px;
  border: none;
  padding: 8px;
  padding-left: 4px;
  font-size: 20px;
  color: black;
  background-color: white;
`
const SearchIcon = styled.img`
  display: flex;
  flex-direction: row;
  width:  30px;
  height: 30px;
  margin: 12px;
`

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
