import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Button } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import nextId from 'react-id-generator';

const App = () => {

  const [items, setItems] = useState([]);

  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", [{ text: "OK" }]);
    } else {
      setItems((prevItems) => {
        return [{ id: nextId(), text }, ...prevItems];
      });
    };
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <View style={styles.btnContainer}>
        <Text style={styles.text}>{count}</Text>
        <Button title='UP' onPress={onClickHandler}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 23,
    color: 'yellow',
  },
  btnContainer: {
    alignItems: 'center',
  },
});

export default App;
