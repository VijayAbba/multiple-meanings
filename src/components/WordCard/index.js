import { Component } from "react";
// import Loader from "react-loader-spinner";
import Popup from "reactjs-popup";
import "./index.css";

class WordCard extends Component {
  state = { listofMeaning: [] };

  renderListOfMeanings = () => {
    const { listofMeaning } = this.state;

    return (
      <div className="">
        {listofMeaning.map((eachItem) => (
          <p className="">{eachItem}</p>
        ))}
      </div>
    );
  };

  getResponse = async () => {
    const { word } = this.props;
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    const firstItem = data[0];
    const { meanings } = firstItem;
    const { definitions } = meanings[0];

    const allWOrds = definitions.map((eachItem) => eachItem.definition);
    console.log("----------");
    this.setState({ listofMeaning: allWOrds });
  };

  render() {
    const { word } = this.props;

    return (
      <div className="single-card">
        <p>{word}</p>

        <Popup
          trigger={
            <div className="">
              <button
                onClick={this.getResponse}
                className="trigger-button"
                type="button"
              >
                opent
              </button>
            </div>
          }
        >
          {this.renderListOfMeanings}
        </Popup>
      </div>
    );
  }
}

export default WordCard;
