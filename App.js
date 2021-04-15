import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  Alert,
} from 'react-native';
import Body from './app/components/body/Body';
import ConexionFetch from './app/components/conexionFetch/ConexionFetch';
import OurFlatList from './app/components/ourFlatList/OurFlatList';
import Message from './app/components/message/Message';

const provincias = [
  {
    id: 1,
    name: 'Arequipa',
  },
  {
    id: 2,
    name: 'Puno',
  },
  {
    id: 3,
    name: 'Cuzco',
  },
];

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>

        <Button
          title="Go to Details"
          onPress={() => 
            {
              console.log('vamos a details'); 
              navigation.navigate('Details')
            }
          }
        />
      </View>
    );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>

      <Button
        title="Go back to first screen in stack"
        onPress={() => 
          {
            console.log('volvamos a home');
            navigation.popToTop()
          }
        }
      />
    </View>
  );
}

export default class App extends Component{
  constructor(props) {
    super(props) ;
    this.state = {
      textValue: '',
      count: 0,
    };
  }

  changeTextInput = text =>{
    console.log(text)
    this.setState({textValue: text});
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  showAlert = () => {
    Alert.alert(
      'Titulo',
      'Mensaje',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
    /*return <OurFlatList showAlert={this.showAlert} />;*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});