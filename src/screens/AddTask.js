import React, { Component } from 'react'
import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native'

import commonStyles from '../commonStyles'

const initialState = { desc: '' }

export default class AddTask extends Component {
    state = {
        ...initialState
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>

                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input} placeholder="Informe a Descrição..." value={this.state.desc} onChangeText={desc => this.setState({ desc })}></TextInput>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={this.props.onCancel}><Text>Cancelar</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text>Salvar</Text></TouchableOpacity>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: '#FFF'
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    }
})