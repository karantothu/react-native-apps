import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { navigate } from '../navigationRef';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clear_error_message } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clear_error_message}
            />
            <AuthForm 
                headerText='Sign Up for Tracker'
                errorMessage={state.errorMessage}
                SubmitButtonText='Sign Up'
                onSubmit={signup}
            />
            <NavLink
                navigation={navigation}
                text='Already have an account? Sign in instead'
                routeName='Signin'            
            />            
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;