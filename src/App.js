import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { actions } from "./redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} alt="logo" className="App-logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking from new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && (
          <>
            <p style={{ color: "red" }}>Something went wrong!</p>
            <p style={{ color: "red" }}>{error.message}</p>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDog: () => dispatch({ type: actions.API_CALL_REQUEST }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
