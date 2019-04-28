import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import styles from './styles';

export default class Repository extends Component {
  state = {
    repo: '',
    repo_list: [],
  }
  
  componentDidMount() {
    const { navigation } = this.props;
    const repo = navigation.getParam('title', '');
    this.setState({ repo });
    this.loadRepositorios(repo);
  }

  loadRepositorios = async (repo) => {
    const _list = await api.getReposities(repo);
    this.setState({ repo_list: _list.data });
  }

  _renderItem = ({ item }) => (
    <View style={styles.fileInfo}>
      <Icon name='attach-file' size={24} color='#A5CFFF' />
      <Text style={styles.fileTitle}>{item.name}</Text>
    </View>
  );
  
  render() {
    const { repo, repo_list } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.boxTitle}>{repo}</Text>
        <FlatList
          data={repo_list}
          style={styles.list}
          keyExtractor={file => file.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={this._renderItem}
          ListEmptyComponent={() => 
            <View style={styles.fileInfo}>
              <Text style={styles.fileTitle}>Nenhum repositório encontrado no usuário informado.</Text>
            </View>
         }
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')} style={styles.button}>
          <Text style={styles.buttonText}>Nova busca</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
