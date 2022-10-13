import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Searchbox from "../components/Searchbox";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }
  handleSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filtered = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1 lh-title lightest-blue">Robofriends</h1>
        <Searchbox searchChange={this.handleSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filtered} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
