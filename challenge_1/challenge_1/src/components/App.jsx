import React from 'react';
import ReactDOM from 'react-dom';
import Rows from './rows.jsx';

class App extends React.Component {
  render(){
    return (
       <div>
         <div>
         <span>
           <button>o</button>
           <button>x</button>
           <button>o</button>
          </span>
          </div>
          <div>
         <span>
           <button>o</button>
           <button>x</button>
           <button>o</button>
          </span>
          </div>
          <div>
         <span>
           <button>o</button>
           <button>x</button>
           <button>o</button>
          </span>
          </div>
       </div>

    )
  }
}

export default App;