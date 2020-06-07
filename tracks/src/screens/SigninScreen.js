import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clear_error_message } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clear_error_message}
            />
            <AuthForm 
                headerText='Sign In to Your Account'
                errorMessage={state.errorMessage}
                SubmitButtonText='Sign In'
                onSubmit={signin}
            />
            <NavLink
                navigation={navigation}
                text="Don't have an account? Sign Up instead"
                routeName='Signup'            
            />            
        </View>
    );

};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;