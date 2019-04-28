import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class Main extends Component {

  state = {
    newRepository: '',
  };

  handleSignIn = () => {
    const { newRepository } = this.state;
    this.props.navigation.navigate('Repository', { title: newRepository });
  }

  render() {
    const { newRepository } = this.state;
    return (
      <View style={styles.container}>
        <Icon style={styles.logo} name='logo-github' size={48} />
        <Text style={styles.title}>Informe um usuário para visualizar seu repositório.</Text>
        <TextInput
          style={styles.input}
          placeholder='Procure por um repositório'
          placeholderTextColor='#999'
          autoCapitalize='none'
          autoCorrect={false}
          underlineColorAndroid='transparent'
          value={newRepository}
          onChangeText={(text) => this.setState({ newRepository: text })}
        />

        <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
