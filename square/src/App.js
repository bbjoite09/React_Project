import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count: 3,
    }
  }

  addSquare = () => {
    this.setState({count: this.state.count + 1});
    console.log('add')
  }

  removeSquare = () => {
    if(this.state.count > 0){
      this.setState({count: this.state.constructor - 1});
    }
    else{
      window.alert('더 이상 뺄 수 없어요!')
    }

    console.log('remove')
  }

  render(){
    const square_count = Array.from({length: this.state.count}, (v, i) => (i));
    console.log(square_count);
    return (
      <div className="App">
        {square_count.map((num, idx) => {
          return (
            <div key={idx}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#ddd",
                margin: "10px",
              }}
            >
          square
        </div>
          );
        })}
        <button onClick={this.addSquare}>하나 추가</button>
        <button onClick={this.removeSquare}>하나 빼기</button>

      </div>
    );
  }
}


export default App;
