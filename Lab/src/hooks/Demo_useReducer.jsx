import { Button, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useReducer, useState } from 'react'

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((t) => {
        if (action.id === t.id) {
          return {...t, complete: !t.complete};
        } else{
          return t;
        }
      })
    default:
      return state;
  }
};

const Demo_useReducer = () => {

  // const [state, dispatch] = useReducer(reducer, initialArg,)
  // initialArg là giá trị ban đầu 
  // * reducer là 1 hàm có tham số (state, action)
  // const reducer = (state, action) => {
  //   ...
  // };
  // * dispatch tương tự với set

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({type: 'COMPLETE', id: todo.id});
  };

  return (
    <>
      {
        todos.map((todo) => (
          <View
            key={todo.id}
            style={{alignItems: 'center', 
                    backgroundColor: todo.complete ? "green" : "white", 
                    flexDirection: "row" }}  
          >
            <Pressable 
             style={{ backgroundColor: 'blue',
                      width: 100,
                      height: 40,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 2}}
             onPress={() => handleComplete(todo)}
            >
              <Text style={{fontSize: 14, color: "white"}}> {todo.name}
                {todo.complete ? "UmComplete" : "Complete"}
              </Text>
            </Pressable>
            <Text>{todo.title}</Text>
          </View>
        ))
      }
    </>
  )
}

export default Demo_useReducer

const styles = StyleSheet.create({})