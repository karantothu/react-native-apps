import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return <SafeAreaView forceInset={{ top:'always' }}>
            <Text style={{fontSize:48}}>AccountScreen</Text>
            <Spacer>
                <Button onPress={signout}/>
            </Spacer>
        </SafeAreaView>

};

const styles = StyleSheet.create({

});

export default AccountScreen;