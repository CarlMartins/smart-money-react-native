/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

const App = () => {
  const addEntry = () => {
    alert('Abrir tela de adicionar lançamento');
  };

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Saldo: R$2.102,45
      </Text>
      <Button
        title="Adicionar"
        onPress={ addEntry }
      />
      <Text style={ styles.title }>
        Categorias
      </Text>
      <FlatList
        data={ [
          { key: 'Alimentação: R$200.00' },
          { key: 'Combustivel: R$12.00' },
          { key: 'Aluguél: R$120.00' },
          { key: 'Lazer: R$250.00' },
          { key: 'Outros: R$1200.00' },
        ] }
        renderItem={ ({ item }) => <Text>{ item.key }</Text> }
      />

      <Text style={ styles.title }>
        Ultimos lançamentos
      </Text>
      <FlatList
        data={ [
          { key: 'Padaria Asa Branca: R$10.00' },
          { key: 'Supermercado Isadora: R$190.00' },
          { key: 'Posto Ipiranga: R$190.00' },
        ] }
        renderItem={ ({ item }) => <Text>{ item.key }</Text> }
      />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
