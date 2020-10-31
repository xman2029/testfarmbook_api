import React from 'react';
import Axios from 'axios';

class App extends React.Component{
    getData = async () => {
      let results = [];
      for (let index = 0; index < 5; index++) {
      let res = await Axios.post('https://api.dev.farmbook.co/mbapi/test',{ fn : "nodeJS"})
      results.push(res.data.data)
    }
      console.log(results);
    }
    render(){
      return (
        <div className="App">
          <button onClick={this.getData}>Get Data for Api</button>
        </div>
      );
    }

}

export default App;
