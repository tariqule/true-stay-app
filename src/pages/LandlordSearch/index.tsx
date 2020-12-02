import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { SearchBar } from 'react-native-elements';
import { themeColorBase, themeColorIsabelline, themeColorMelon, themeColorPeach, themeColorPink, themeColorPuff } from "../../styles/global-styles";

const data: any[] = [
    {title: "New room at 234 Yonge",
    price: 600,
    location: "234 Yonge",
    description:"600$ a month all inclusive"},
    {title: "Best room for rent in town",
    price: 900,
    location: "444 Dundas Street West",
    description:"Near Dundas Station"},
    {title: "Cheapest one in town",
    price: 50,
    location: "Warden Park",
    description:"50$ a month"},
    {title: "245 Bridletowne Circle",
    price: 500,
    location: "245 Bridletowne Circle",
    description:"Don't look elsewhere"},
    {title: "44 Finch Ave East",
    price: 600,
    location: "44 Finch Ave East",
    description:"This is what you need"},
    {title: "1200 Warden",
    price: 600,
    location: "1200 Warden",
    description:"testing content"},
  ];

function LandlordSearch(){

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [filterValue, setFilterValue] = useState("price");
  
    const updateSearch = (text: React.SetStateAction<string>) => {
      setSearchTerm(text);
    };
    
    useEffect(()=>{
      const newData = data.filter(item=>{
        var itemData = '';
        switch(filterValue) {
          case 'title':
            itemData = item.title ? item.title.toUpperCase() : '';
            break;
          case 'price':
            itemData = item.price ? item.price.toString() : '';
            break;
          case 'location':
            itemData = item.location ? item.location.toUpperCase() : '';
            break;
        }
        
        const textData = searchTerm.toUpperCase();        
        return itemData.indexOf(textData) > -1;
      });
      setResults(newData)
    }, [searchTerm, filterValue]);
  
    const renderList = results.map(record=>{
      return(
        <View style={styles.resultItem} key={record.title} >
          <Text style={styles.resultTitle}>
            {record.title}
          </Text>
          <Text style={styles.resultContent}>
            Price: {record.price}
          </Text>
          <Text style={styles.resultContent}>
            Location: {record.location}
          </Text>
          <Text style={styles.resultContent}>
            Description: {record.description}
          </Text>
        </View>
        
      )
    })
    return (
      <ScrollView>
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

          <View style = {styles.picker}>
            <Picker
              selectedValue={filterValue}
              style={{ height: 40, width: 150}}
              onValueChange={(itemValue) => setFilterValue(itemValue)}
            >
              <Picker.Item label="By Title" value="title" />
              <Picker.Item label="By Location" value="location" />
              <Picker.Item label="By Price" value="price" />
            </Picker>
          </View>
          <View style={styles.listResult}>
            {renderList}
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
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
      color: themeColorMelon,
    },
    searchBar:{
      alignSelf: 'stretch',
      backgroundColor: 'white',
    },
    picker: {
      alignSelf: 'flex-end',
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 10,
      marginRight: 10,
      borderColor:themeColorMelon,      
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
      backgroundColor: themeColorIsabelline
      
    },
    resultTitle:{
      fontWeight:'bold',
      color: themeColorMelon,
    },
    resultContent:{
      paddingLeft:10,
      color: themeColorMelon,
    }
});
export default LandlordSearch;