import './App.css';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
`

const Header = styled.header`
  background-color: black;
  min-height: 15vh;
  display: flex;
  padding-left: 40px;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-weight: bold;
  box-shadow: 0 3px 3px 0 #555
`;

function App() {
  return (
    <div className="App">
      <Header>
        CookingGen
      </Header>
    </div>
  );
}

export default App;
