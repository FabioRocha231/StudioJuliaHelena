import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, FlatList } from 'react-native';
import { styles } from './styles'
import { month } from '../../../month';
import { ModalServicesAndPrices } from '../ModalServicesAndPrices';

function ModalDaysOfMonth({professional, writeUserData, user}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [dayOfWeek, setDayOfWeek] = useState("");
    const [day , setDay] = useState("")
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
                        <ModalServicesAndPrices 
                            professional={professional} 
                            writeUserData={writeUserData} 
                            user={user}
                            dayOfWeek={dayOfWeek}
                            numberOfWeek={day}
                            setModalDays={setModalVisible}
                        />
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Fechar</Text>
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
                            onPress={() => {
                                setDayOfWeek(item.dayOfWeek)
                                setDay(item.day)
                                setModalVisible(true)
                            }}
                            activeOpacity={0.5}
                            disabled={item.isAvailable ? false : true}
                        >
                            <Text style={styles.textStyle}>{item.dayOfWeek}</Text>
                            <View style={styles.divisor}/>
                            <Text style={styles.dayOfMonth}>{item.day}</Text>

                        </TouchableOpacity>
                    )}/>
                </View>
                  
      </View>
    )
}

export { ModalDaysOfMonth }