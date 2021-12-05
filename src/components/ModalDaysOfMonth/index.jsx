import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, FlatList } from 'react-native';
import { styles } from './styles'
import { month } from '../../../month';
import { ModalServicesAndPrices } from '../ModalServicesAndPrices';

function ModalWindow() {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ModalServicesAndPrices />
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={{paddingHorizontal: 5}}>
                <FlatList 
                    data={month}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            style={[styles.button, item.isAvailable ? null : styles.unvaliable]}
                            onPress={() => setModalVisible(true)}
                            activeOpacity={0.9}
                            disabled={item.isAvailable ? false : true}
                        >
                            <Text style={styles.textStyle}>{item.dayOfWeek}</Text>
                            <View style={{borderBottomWidth: 1, borderColor: '#FFFFFF'}}/>
                            <Text style={styles.dayOfMonth}>{item.day}</Text>

                        </TouchableOpacity>
                    )}/>
                </View>
                  
      </View>
    )
}

export { ModalWindow }