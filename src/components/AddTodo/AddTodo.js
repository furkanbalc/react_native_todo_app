import React from "react";
import { TextInput } from 'react-native';
import styles from './AddTodo.styles';

const AddTodo = (props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder="Yeni görev girin"
            value={props.value}
            onChangeText={props.onChangeText}
        />
    );
}

export default AddTodo;