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
        opacity: 1;
        left: 20px;
        background-color: pink;
    }
    
    30%{
        top: 180px;
        background-color: orange;
    }
    
    50%{
        top: 200px;
        opacity: 0;
        left: 200px;
    }
    
    80%{
        top:40px;
    }
    
    100%{
        top:20px;
        opacity: 1;
        background-color: pink;
    }
`;

const Box = styled.div`
    width: 150px;
    height: 150px;
    background-color: green;
    border-radius:150px;
    opacity: 1;
    position: absolute;
    top: 20px;
    left: 20px;
    animation: ${move} 3s 1s infinite;
`;

export default App;
