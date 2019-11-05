import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, StyleSheet} from 'react-native';

export default class FlexDirectionBasics extends Component {
  _onPressButton1() {
    alert('Good Morning!')
  }
  _onPressButton2() {
    alert('Good Afternoon!')
  }
  _onPressButton3() {
    alert('Good Evening!')
  }
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, column: 'row'}}>
        <View style={{width: 5550, height: 300, backgroundColor: 'powderblue'}} >
             <Text style={{fontSize:16}}>What is your name?</Text>
             <TextInput
               style={{height: 40}}
               placeholder="Type here to get reply!"
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
             />
             <Text style={{padding: 10, fontSize: 16}}>
               {this.state.text.split(' ').map((word) => word).join(' ')}
             </Text>
             <Text style={{padding: 10, fontSize: 16}}>
               {this.state.text.split(' ').map((word) => word && 'Hi! Now I know your name! And I want to tell you that ').join(' ')}
             </Text>
             <Text style={{padding: 10, fontSize: 16}}>
               {this.state.text.split(' ').map((word) => word && 'here is the project I am currently working on! ').join(' ')}
             </Text>
             <Text style={{padding: 10, fontSize: 16}}>
               {this.state.text.split(' ').map((word) => word && 'You can see it through this link!').join(' ')}
             </Text>
             <Text style={{padding: 10, fontSize: 16}}>
               {this.state.text.split(' ').map((word) => word && 'https://aptproject-t2.appspot.com/' ).join(' ')}
             </Text>

        </View>
        <View style={{width: 5550, height: 300, backgroundColor: 'turquoise'}}>
            <Text style={{fontSize:16}}>I recommend you to use the following manner everyday!</Text>
            <View style={styles.alternativeLayoutButtonContainer}>
              <Button
                onPress={this._onPressButton1}
                title="Greeting Manner 1"
              />
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
              <Button
                onPress={this._onPressButton2}
                title="Greeting Manner 2"
              />
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
              <Button
                onPress={this._onPressButton3}
                title="Greeting Manner 3"
              />
            </View>
        </View>
        <View style={{width: 5550, height: 300, backgroundColor: 'skyblue'}}>
         <Text style={{fontSize:16}}>Have a good day!</Text>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});