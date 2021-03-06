import "./style";
import { Component, render } from "preact";
import { Result } from "./result";

const SEARCH = "//api.github.com/search/repositories";

// hello
// hello again

export default class App extends Component {
  componentDidMount() {
    fetch(`${SEARCH}?q=preact`)
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          results: (json && json.items) || []
        });
      });
  }

  render(props, { results = [] }) {
    // something
    return (
      <div>
        <h1>test</h1>
        <div class="list">
          {results.map((result) => (
            <Result result={result} />
          ))}
        </div>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
