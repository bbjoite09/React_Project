import logo from './logo.svg';
import './App.css';
import styled, {keyframes} from "styled-components";
function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}
const move = keyframes`
    0%{
        top : 20px;
    }
    
    50%{
        top: 200px;
    }
    
    100%{
        top:20px;
    }
`;

const Box = styled.div`
    width: 150px;
    height: 150px;
    background-color: green;
    border-radius:150px;
    position: absolute;
    top: 20px;
    left: 20px;
    animation: ${move} 2s 1s infinite;
`;

export default App;
