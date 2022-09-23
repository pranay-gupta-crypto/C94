import React, {Component} from 'react';
import {Text, View, StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Alert,
    Platform, 
    ScrollView, 
    TextInput,
    Dimensions,
    Linking } from 'react-native';
    import {RFValue} from 'react-native-responsive-fontsize';
    import DropDownPicker from 'react-native-dropdown-picker';
    import * as Font from 'expo-font';


export default class Hospitals extends Component{
    constructor(props){
        super(props);
        this.state={
            Hosp:[],
            dropdownHeight:40,

        }        
    }
    render(){
        return(
            <View style ={styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style ={styles.appTitleText}>Search</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <View style={{height:RFValue(this.state.dropdownHeight) }}>
                        <DropDownPicker
                        items={[
                            {label:'GG hospital',value:Linking.openURL('https://gg-hospital.com/')},
                            {label:'CosmoPolitan hospital', value:Linking.openURL('https://www.cosmopolitanhospitals.in/')},
                        ]}
                            open = {this.state.dropdownHeight==170?true:false}
                            onOpen = {()=>{
                                this.setState({dropdownHeight:170});
                            }}
                            onClose = {()=>{
                                this.setState({dropdownHeight:40});
                            }}
                            style={{
                                backgroundColor:'transparent',
                                borderWidth:1,
                                borderColor:'white'
                            }}
                            textStyle={{
                                color:this.state.dropdownHeight==170?'black':'white'
                            }} 
                            onSelectItem={(item)=>
                            this.setState({
                                Hosp:item.value, 
                            })
                        }
                        />
                        

                    </View>
                </View>
                <View style={{flex:0.08}}/>
            </View>
        )
    }
    
}