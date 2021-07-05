import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TextInput, Button, Linking } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import nextId from 'react-id-generator';

const App = () => {

  const [items, setItems] = useState([]);

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
      <Button title='Something for you...' onPress={()=>{Linking.openURL('https://www.youtube.com/playlist?list=PLlChGbUab9K-PYvLnvljFo3XqHDZPqRM1')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
