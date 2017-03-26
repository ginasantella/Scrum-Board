import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  AppRegistry
} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-menu';


//const StatusBar = require('../components/StatusBar');


/*const App = () => (
        <MenuContext style={{ flex: 1 }}>
        <TopNavigation/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Hello!</Text></View>
        </MenuContext>
                   );

const TopNavigation = () => (
                             <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
                             <View style={{ flex: 1 }}><Text>My App</Text></View>
                             <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
                             <MenuTrigger>
                             <Text style={{ fontSize: 20 }}>&#8942;</Text>
                             </MenuTrigger>
                             <MenuOptions>
                             <MenuOption value={1}>
                             <Text>One</Text>
                             </MenuOption>
                             <MenuOption value={2}>
                             <Text>Two</Text>
                             </MenuOption>
                             </MenuOptions>
                             </Menu>
                             </View>
                             );

export default class Home extends React.Component {
  render() {
     // const menu = <Menu navigator = {navigator}/>;
    return (
        <ScrollView style={styles.scroll}>
            <Container>
                <StatusBar title="Home Page" />
            </Container>
            

            <Container>
            <Label text="Welcome **User 1** !!!" />
            <TextInput
                style={styles.textInput} />
            </Container>
            
            <View style={styles.footer}>
                <Container>
                    <Button 
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                        onPress={this.press.bind(this)} />
                </Container>
                <Container>
                    <Button 
                        label="CANCEL"
                        styles={{label: styles.buttonBlackText}} 
                        onPress={this.press.bind(this)} />
                </Container>
            </View>
        </ScrollView> 
    );
  }
  press() {
  //execute any code here
}
}

const styles = StyleSheet.create({
 scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
},
label: {
    color: '#0d8898',
    fontSize: 15
},
alignRight: {
    alignSelf: 'flex-end'
},
textInput: {
    height: 40,
    fontSize: 15,
    backgroundColor: '#FFF'
},
buttonWhiteText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "500",
    textAlign: 'center',
    fontFamily: "Helvetica"
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
primaryButton: {
    backgroundColor: '#4169E1',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10,
},
footer: {
   marginTop: 40
}

});*/
const Example = React.createClass({
                                  componentDidMount() {
                                  // We can use the public context API to open/close/toggle the menu.
                                  //setInterval(() => {
                                  //  this.refs.MenuContext.toggleMenu('menu1');
                                  //}, 2000);
                                  },
                                  getInitialState() {
                                  return {
                                  message: 'WELCOME **USER**!!!',
                                  firstMenuDisabled: false,
                                  dropdownSelection: '-- Choose --'
                                  };
                                  },
                                  setMessage(value) {
                                  if (typeof value === 'string') {
                                  this.setState({ message: `You selected "${value}"` });
                                  } else {
                                  this.setState({ message: `Woah!\n\nYou selected an object:\n\n${JSON.stringify(value)}` });
                                  }
                                  return value !== 'do not close';
                                  },
                                  setFirstMenuDisabled(disabled) {
                                  
                                  return false;
                                  },
                                  render() {
                                  return (
                                          <MenuContext style={{ flex: 1 }} ref="MenuContext">
                                          <View style={styles.topbar}>
                                          <Menu onSelect={this.setMessage}>
                                          <MenuTrigger disabled={this.state.firstMenuDisabled} style={styles.menuTrigger}>
                                          <Text style={styles.menuTriggerText}>SCRUM</Text>
                                          </MenuTrigger>
                                          <MenuOptions style={styles.menuOptions}>
                                          <MenuOption value="User Profile">
                                          <Text>User Profile</Text>
                                          </MenuOption>
                                          <MenuOption value="Projects Owned">
                                          <Text>Projects Owned</Text>
                                          </MenuOption>
                                          <MenuOption value="disabled" disabled={true}>
                                          <Text style={styles.disabled}>Disabled option</Text>
                                          </MenuOption>
                                          <View style={styles.divider}/>
                                          <MenuOption value={{ message: 'Hello World!' }}>
                                          <Text>Log Out</Text>
                                          </MenuOption>
                                          </MenuOptions>
                                          </Menu>
                                          </View>
                                          <View style={[styles.topbar, { backgroundColor: '#333' }]}>
                                          <Menu onSelect={this.setFirstMenuDisabled}>
                                          <MenuTrigger style={styles.menuTrigger}>
                                          <Text style={styles.menuTriggerText}>HOME PAGE</Text>
                                          </MenuTrigger>
                                          <MenuOptions>
                                          {
                                          this.state.secondMenuDisabled
                                                                                   }
                                          </MenuOptions>
                                          </Menu>
                                          </View>
                                          <View style={styles.content}>
                                          <Text style={styles.contentText}>
                                          { this.state.message }
                                          </Text>
                                          </View>
                                          <View style={styles.content}>
                                          <Text style={styles.contentText}>
                                          Select desired project:
                                          </Text>
                                          <Menu style={styles.dropdown} onSelect={(value) => this.setState({ dropdownSelection: value })}>
                                          <MenuTrigger>
                                          <Text>{this.state.dropdownSelection}</Text>
                                          </MenuTrigger>
                                          <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                                          renderOptionsContainer={(options) => <ScrollView><Text>Current Active Project List...</Text>{options}</ScrollView>}>
                                          <MenuOption value="Project One">
                                          <Text>Project One</Text>
                                          </MenuOption>
                                          <MenuOption value="Project Two">
                                          <Text>Project Two</Text>
                                          </MenuOption>
                                          <MenuOption value="Project Three">
                                          <Text>Project Three</Text>
                                          </MenuOption>
                                          <MenuOption value="Project Four">
                                          <Text>Project Four</Text>
                                          </MenuOption>
                                          <MenuOption value="Project Five">
                                          <Text>Project Five</Text>
                                          </MenuOption>
                                          </MenuOptions>
                                          </Menu>
                                          </View>
                                          </MenuContext>
                                          
                                          );
                                  }
                                  });


const styles = StyleSheet.create({
                                 topbar: {
                                 flexDirection: 'row',
                                 justifyContent: 'flex-end',
                                 backgroundColor: '#4169E1',
                                 paddingHorizontal: 5,
                                 paddingVertical: 10
                                 },
                                 menuTrigger: {
                                 flexDirection: 'row',
                                 paddingHorizontal: 10
                                 },
                                 menuTriggerText: {
                                 color: '#E1D7D8',
                                 fontWeight: '600',
                                 fontSize: 20
                                 },
                                 disabled: {
                                 color: '#ccc'
                                 },
                                 divider: {
                                 marginVertical: 5,
                                 marginHorizontal: 2,
                                 borderBottomWidth: 1,
                                 borderColor: '#ccc'
                                 },
                                 content: {
                                 backgroundColor: '#E1D7D8',
                                 padding: 50,
                                 flexDirection: 'column'                                 },
                                 contentText: {
                                 fontSize: 18
                                 },
                                 dropdown: {
                                 width: 300,
                                 borderColor: '#999',
                                 borderWidth: 1,
                                 padding: 5
                                 },
                                 dropdownOptions: {
                                 marginTop: 30,
                                 borderColor: '#ccc',
                                 borderWidth: 2,
                                 width: 300,
                                 height: 200
                                 }
                                 });

module.exports = Example;
