import * as React from "react";
import { SearchBar } from "react-native-elements";
import { themeColorBase } from "../../styles/global-styles";

export default class SearchBarMap extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search: any) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={{ backgroundColor: themeColorBase }}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
