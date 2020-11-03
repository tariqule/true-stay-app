import React from 'react'
import {View, Text, StyleSheet, Dimensions, SafeAreaView, Button, TextInput} from 'react-native'

const screenWidth = Dimensions.get('screen').width

export const SignUpScreen = () =>{
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
            <Text style={styles.heading}>TrueStay</Text>
            </SafeAreaView>
            <View style={styles.body}>
                <TextInput 
                style={styles.input} 
                placeholder='Username'
                />
                <TextInput 
                style={styles.input} 
                placeholder='Password'
                />
                <TextInput 
                style={styles.input} 
                placeholder='Confirm Password'
                />
            </View>
            <View style={styles.footer}>
            <View style={styles.signUpButton}>
                <Button 
                color='white' 
                title="Sign Up" 
                onPress={() => console.log("Signed Up")}/>
                </View>
                <View style={styles.fbButton}>
                <Button title="Sign Up with FaceBook" onPress={()=> console.log("FB button ")}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flex: 0.20,
        backgroundColor: 'rgb(187, 122, 68)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        },
    body: {
        flex: 0.50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 0.30,
        backgroundColor: 'white',
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
    signUpButton:{
        backgroundColor: 'rgb(187, 122, 68)',
        width: screenWidth - 30,
        borderRadius: 30,
        fontSize: 16,
        margin: 10,
        padding: 8,
    },
    fbButton: {
        borderColor: 'rgb(184, 217, 244)',
        borderWidth: 1.5,
        width: screenWidth - 30,
        borderRadius: 30,
        margin: 10,
        padding: 8,
    }
}) 