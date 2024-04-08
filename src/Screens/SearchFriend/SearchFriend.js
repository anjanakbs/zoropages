import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, Button, FlatList, TouchableOpacity} from 'react-native';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import strings from '../../constants/lang';
import SearchList from './SearchList';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import Storycomponent from '../../Components/Storycomponent';

const Search = ({navigation}) => {
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
      {/* <View style={styles.container}>
        {/* <Text style={styles.textstyle}>Search</Text> */}
      {/* </View> */} 
      <View style={styles.inputstyle}>
        <View style={{marginTop:20}}>
      </View>
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <View style={{marginTop:20}}>
          <HeaderComp leftIcon={imagePath.backicon}/>
          </View>
        <TextInputWithLabel
          placeholder={strings.search}
          placeholderTextColor={colors.black}
          lefticon={imagePath.Searchicon}
          value={newTodo}
        onChangeText={setNewTodo}
          extraStyle={{paddingLeft: 20, width: width /1.2,paddingRight:20}}
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
        {/* <SearchList navigation={navigation} /> */}
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.text}>{item.text}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Add Friend" onPress={() => {
                const newText = prompt('Edit todo:', item.text);
                if (newText !== null) {
                  editTodo(item.id, newText);
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
export default Search;
