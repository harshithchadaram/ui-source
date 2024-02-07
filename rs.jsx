import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioSelector = () => {
    const [selectedOption, setSelectedOption] = useState('first');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('first')}>
                <View style={[styles.radioButton, { backgroundColor: selectedOption === 'first' ? 'blue' : 'white' }]} />
                <Text>First Option</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('second')}>
                <View style={[styles.radioButton, { backgroundColor: selectedOption === 'second' ? 'blue' : 'white' }]} />
                <Text>Second Option</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('third')}>
                <View style={[styles.radioButton, { backgroundColor: selectedOption === 'third' ? 'blue' : 'white' }]} />
                <Text>Third Option</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginVertical: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'blue',
        marginRight: 10,
    },
});

export default RadioSelector;