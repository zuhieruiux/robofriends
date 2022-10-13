import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Searchbox from "../components/Searchbox";

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
    const filtered = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1 lh-title lightest-blue">Robofriends</h1>
        <Searchbox searchChange={this.handleSearchChange} />
        <Scroll>
          <CardList robots={filtered} />
        </Scroll>
      </div>
    );
  }
}

export default App;
