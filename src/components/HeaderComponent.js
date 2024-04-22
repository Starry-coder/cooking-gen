import styled from 'styled-components';

export const Header = styled.header`
  justify-content: space-between;
  background-color: black;
  padding: 0px;
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
  flex-direction: row;
  font-size: calc(10px + 3vmin);
  color: white;
  font-weight: bold;
  position: sticky;
  top:0;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 3px 3px 0 #555
`;
export const Logo = styled.img`
  margin: 15px;
  height: 40px;
  width: 40px;
`
export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  background-color: white;
  border-radius: 32px;
`
export const SearchInput = styled.input`
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
  &:focus {
    outline: none;
  }
`
export const SearchIcon = styled.img`
  display: flex;
  flex-direction: row;
  width:  30px;
  height: 30px;
  margin: 12px;
`
export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Link = styled.a`
  color: white;
  text-decoration: none;
  margin: 20px;
  &:hover {
    color: #ffcc00;
    text-decoration: underline;
    transition: 0.3s;
  }
`