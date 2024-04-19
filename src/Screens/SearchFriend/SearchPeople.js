import {View, Text, StyleSheet, TouchableOpacity, Button, FlatList} from 'react-native';
import React, { useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';
import Storycomponent from '../../Components/Storycomponent';

const SearchPeople = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
  };
  return (
    <WrapperContainer>
    <View style={styles.inputstyle}>
      <View style={{marginTop:20}}>
    </View>
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <TextInputWithLabel
        placeholder={strings.search}
        placeholderTextColor={colors.black}
        lefticon={imagePath.Searchicon}
        value={newTodo}
      onChangeText={setNewTodo}
        extraStyle={{paddingLeft: 20, width: width /1.2,paddingRight:20}}
      //   onFocus={()=>{
      //     Keyboard.dismiss()
      //     navigation.navigate('SearchPeople')
      // }}
      />
      <TouchableOpacity style={{marginTop:35}} onPress={addTodo}>
        <Text style={{marginRight:5}}>Search</Text>
      </TouchableOpacity>
      </View>
       <View style={styles.viewline}></View>
    <View style={styles.recent}>
      <Text style={styles.rsearch}>Recent Search</Text>
      <Text style={styles.Seeall}>See all</Text>
    </View>
    <View>
      <Storycomponent/>
    </View>
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <Text style={styles.text}>{item.text}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Button title="Add Friend" onPress={() => {
              const newText = prompt('Add todo:', item.text);
              if (newText !== null) {
                addTodo(item.id, newText);
              }
            }} />
            <Button title="Remove" color="red" onPress={() => deleteTodo(item.id)} />
          </View>
        </View>
      )}
    />
      </View>
    </View>
  </WrapperContainer>
);
};

// define your styles
const styles = StyleSheet.create({
textstyle: {
  fontSize: textScale(25),
  fontFamily: fontFamily.medium,
  paddingHorizontal: moderateScale(10),
},
inputstyle: {
  justifyContent: 'center',
  flexDirection:'row',
  alignItems: 'center',
},
viewline: {
  backgroundColor: colors.lightgrey,
  height: 1,
  marginTop: 10,
},
recent: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: 10,
  paddingRight: 10,
  marginTop: 10,
},
Seeall: {
  // color: colors.darkgreen,
  fontFamily: fontFamily.medium,
  fontSize: textScale(20),
},
rsearch: {
  fontFamily: fontFamily.medium,
  fontSize: textScale(20),
},
text:{
fontFamily:fontFamily.medium,
fontSize:textScale(15)

}
});

//make this component available to the app
export default SearchPeople;
