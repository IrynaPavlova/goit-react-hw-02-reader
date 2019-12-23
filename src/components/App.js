import React, { Component } from "react";
import publications from "./publications.json";
import Reader from "./reader/Reader";
import Controls from "./controls/Controls";
import Progress from "./progress/Progress";
import Publication from "./publication/Publication";

export default class App extends Component {
  state = {
    publicationIndex: 0
  };

  handleNextPage = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1
    }));
  };

  handlePrevPage = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1
    }));
  };

  render() {
    return (
      <>
        <Reader items={publications}>
          <Controls
            nextPage={this.handleNextPage}
            prevPage={this.handlePrevPage}
            index={this.state.publicationIndex}
            items={publications}
          />
          <Progress
            length={publications.length}
            index={this.state.publicationIndex}
          />
          <Publication
            id={publications[this.state.publicationIndex].id}
            title={publications[this.state.publicationIndex].title}
            text={publications[this.state.publicationIndex].text}
          />
        </Reader>
      </>
    );
  }
}
