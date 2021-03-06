import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {

  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);

  const onPress = () => {
    addItem(text);
    setText('');
  };

  return (
    <View>
      <TextInput value={text} placeholder='Add Item...' style={styles.input}  onChangeText={onChange} />
      <TouchableOpacity sytle={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}><Icon name='plus' size={20} />  Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    backgroundColor: 'blue',
    color: 'yellow',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
