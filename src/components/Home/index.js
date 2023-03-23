import { Component } from "react";
import WordCard from "../WordCard";
import "./index.css";

class Home extends Component {
  state = { text: "", generatedWords: [] };

  componentDidMount() {
    console.log(this.props.history);
  }

  updataEntredValue = (event) => {
    this.setState({ text: event.target.value });
  };

  getEnteredValue = () => {
    const { text } = this.state;
    const setText = new Set(
      text
        .replace(/[^a-zA-Z ]/g, " ")
        .toLowerCase()
        .split(" ")
    );
    const listText = [...setText].sort((a, b) => b.length - a.length);
    this.setState({ generatedWords: listText });
  };
  render() {
    const { text, generatedWords } = this.state;
    return (
      <div className="home-container">
        <h1 className="home-heading">Definitions</h1>
        <textarea
          onChange={this.updataEntredValue}
          className="text-area-styles"
          placeholder="Paste your text"
          value={text}
        ></textarea>
        <button className="button" type="button" onClick={this.getEnteredValue}>
          Generate
        </button>

        <div className="">
          <ul className="results-card">
            {generatedWords.map((eachItem) => (
              <WordCard word={eachItem} key={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
