import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import TodoCard from './components/TodoCard';
import AddTodo from "./components/AddTodo";

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, title: 'Ben sigara dumanının altında', isComplete: false },
    { id: 2, title: 'Yana yana en sonunda kül oldum', isComplete: false },
    { id: 3, title: 'Sen kibritin hiç yanmayan ucunda', isComplete: false },
    { id: 4, title: 'Birinin hayatından geçmiş oldun', isComplete: false },
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const completedTodos = todos.filter(todo => todo.isComplete);
    setCompletedCount(completedTodos.length);
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      const newTodoItem = { id: newId, title: newTodo, isComplete: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleIsComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TODO APP</Text>
        <Text style={styles.todoCount}>{completedCount}/{todos.length}</Text>
      </View>
      <View style={styles.todoList}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoCard
              todo={item.title}
              isComplete={item.isComplete}
              onPress={() => toggleIsComplete(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <AddTodo
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonLabel}>Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
  },
  todoCount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  todoList: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00A7CDC2',
    borderRadius: 16,
    padding: 8,
  },
  addButton: {
    backgroundColor: '#00A7CD',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 8,
  },
  addButtonLabel: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
