import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './TodoCard.styles';

const TodoCard = (props) => {
    return (
        <TouchableOpacity style={props.isComplete ? styles.trueContainer : styles.falseContainer} onPress={props.onPress}>
            <Text style={props.isComplete && styles.falseTitle}>{props.todo}</Text>
        </TouchableOpacity>
    );
}

export default TodoCard;