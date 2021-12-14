import React from 'react';
import Header from './component/header/header';
import custom from './component/custum/custom';
import footer from './component/footer/footer';


class App extends React.Component {
	render () {
  return (
    <div className="App">
     <header />
     <custom />
	 <footer />
    </div>
  );
}
}
export default App;
