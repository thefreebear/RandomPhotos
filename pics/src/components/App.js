import React from "react";
import Unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {
  state = { img: [] };
   onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ img: response.data.results });
  }
  render() {
    console.log(this.state.img);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.img.length} images
        <ImageList images={this.state.img} />
      </div>
    );
  }
}
export default App;
