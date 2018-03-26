import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import But from "antd-mobile/lib/button"

export default class ElekenTestBackEnd extends React.Component{
    constructor(props){
        super(props);
        console.log(props.messages);
        this.state = {
            message: "",
            name: "",
            error: ""
        }
        props.onGetAllMessage();
    }
    validateForm = () => {
        if(this.state.message.length > 200){
            this.setState({error: `the message should be shorter than 200 characters`})
            return 1;
        }
        else if(this.state.message.length < 3){
            this.setState({error: `the message should be longer than 3 characters`})
            return 1;
        }
        else if(this.state.name.length < 3){
            this.setState({error: `the name should be longer than 3 characters`})
            return 1;
        }
        else if(this.state.name.length > 200){
            this.setState({error: `the name should be shorter than 200 characters`})
            return 1;
        } else{
            return 0;
        }

    }
    sendForm = ()=>{
        if(!this.validateForm()){
            this.props.onSendMessage(this.state.name, this.state.message);
            this.setState({error:"", message: ""});
        } else {
            console.log("error");
        }
    }
    renderError = ()=>{
        if(this.state.error)
        return <Text style={{color: "red"}}>{this.state.error}</Text>;
        return <Text></Text>;
    }

    render(){
        return (
            <View>
                <View>{this.props.messages.map(function(x,i){
                    return (
                        <Text key={i}>username:{x.name}; text: {x.message}</Text>
                    )
                })}
                </View>
                <View>{this.renderError()}</View>
                <Text >Your name:</Text>
                <TextInput value={this.state.name} onChangeText={text=>this.setState({name:text})}/>
                <Text>Your message:</Text>
                <TextInput value={this.state.message} onChangeText={text=>this.setState({message:text})}/>
                <But onClick={this.sendForm}>Send post</But>
            </View>
          )
    }
}