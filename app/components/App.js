var React = require('react');

class Button extends React.Component {
  var handleClick = () => {
  	this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick} >
      	+{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  );
};

class App extends React.Component {
  state = { counter: 0 };

  incrementCounter = (incrementValue) => {
  this.setState((prevState) => ({
  	counter: prevState.counter + incrementValue
  }));
  };

	render() {
		return (
  		<div>
      	<Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
	}
}

// module.exports = {
//     Component: Button, App
// }
