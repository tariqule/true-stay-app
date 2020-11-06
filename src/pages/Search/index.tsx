import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar } from 'react-native-elements';

const data: any[] = [
    {title: "New room at 234 Yonge",
    description:"600$ a month all inclusive"},
    {title: "Best room for rent in town",
    description:"Near Dundas Station"},
    {title: "Cheapest one",
    description:"300$ a month"},
    {title: "245 Bridletowne Circle",
    description:"Don't look elsewhere"},
    {title: "44 Finch Ave East",
    description:"This is what you need"},
    {title: "1200 Warden",
    description:"testing content"},
  ];

function Search(){

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
  
    const updateSearch = (text: React.SetStateAction<string>) => {
      setSearchTerm(text);
    };
    
    useEffect(()=>{
      const newData = data.filter(item=>{
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = searchTerm.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setResults(newData)
    }, [searchTerm]);
  
    const renderList = results.map(record=>{
      return(
        <View style={styles.resultItem}>
          <Text style={styles.resultTitle}>
            {record.title}
          </Text>
          <Text style={styles.resultContent}>
            {record.description}
          </Text>
        </View>
        
      )
    })
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}> SEARCH</Text>
        </View>
        <View style={styles.searchBar}>
          <SearchBar
            placeholder="Search..."
            onChangeText={(text)=>{updateSearch(text)}}
            value={searchTerm}
            lightTheme={true}
            />
        </View>
        <View style={styles.listResult}>
          {renderList}
        </View>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    header:{
      fontSize: 20,
      color: "#f0990e",
    },
    searchBar:{
      alignSelf: 'stretch',
      backgroundColor: 'white',
    },
    listResult:{
      alignSelf: 'stretch',
      fontSize: 15,
      padding: 10,
    },
    resultItem:{
      borderColor: "white",
      borderWidth:2,
      padding: 5,
      backgroundColor: "#fceace"
      
    },
    resultTitle:{
      fontWeight:'bold',
      color: "#f0990e",
    },
    resultContent:{
      paddingLeft:10,
      color: "#f0990e",
    }
});
export default Search;