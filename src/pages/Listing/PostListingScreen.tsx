import React from 'react';
import {View, StyleSheet, Text, Dimensions, TextInput, Button, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('screen').width

export const PostListingScreen = () =>{
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <Text style={styles.heading}>My Property</Text>
            </SafeAreaView>
            <View style={styles.userDetails}>
                <TextInput 
                style={styles.input} 
                placeholder='Agent Name'
                />
                <TextInput 
                style={styles.input} 
                placeholder='Agent Number'
                />
                <Text style={{color: 'rgb(175, 174, 174)'}}>-OR-</Text>
                <TouchableOpacity style={styles.Button} onPress={()=> console.log("using profile")}>
                <Text style={styles.ButtonText}>Use Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.AddressInfo}>
            <TextInput 
                style={styles.input} 
                placeholder='Street Address'
                />
                <TextInput 
                style={styles.input} 
                placeholder='Apartment, Suite, Unit'
                />
                <TextInput 
                style={styles.input} 
                placeholder='City'
                />
                <TextInput 
                style={styles.input} 
                placeholder='Postal Code'
                />
                <TouchableOpacity style={styles.navButton} onPress={()=> console.log("Next page")}>
                <Text style={styles.ButtonText}>&gt;</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        flex: 0.05,
        justifyContent: 'center',
        textAlign: 'left',
        padding: 20,
        backgroundColor: 'rgb(187, 122, 68)',
        width: screenWidth,
        },
    heading: {
        fontWeight: "bold",
        fontSize: 25,
        fontFamily: 'Verdana',
        color: 'white',
    },
    userDetails: {
        flex: 0.35,
        backgroundColor: 'rgb(248, 248, 248)',
        borderRadius: 20,
        width: screenWidth - 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 1,
	        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    AddressInfo:{
        flex: 0.55,
        backgroundColor: 'rgb(248, 248, 248)',
        borderRadius: 20,
        width: screenWidth - 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 1,
	        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    input: {
        width: screenWidth - 30,
        borderRadius: 30,
        borderColor: 'rgb(187, 122, 68)',
        borderWidth: 1.5,
        padding: 15,
        margin: 15,
        fontSize: 15,
    },
    Button:{
        backgroundColor: 'rgb(106, 127, 219)',
        color: 'white',
        width: 95,
        borderRadius: 30,
        fontSize: 16,
        margin: 10,
        padding: 8,
        alignItems: 'center',
    },
    ButtonText: {
        color: 'white',
        fontSize: 15,
    },
    navButton: {
        backgroundColor: 'rgb(106, 127, 219)',
        color: 'white',
        width: 35,
        borderRadius: 30,
        fontSize: 16,
        margin: 10,
        padding: 8,
        alignItems: 'center',
    }
})
