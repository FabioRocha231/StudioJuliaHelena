import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, FlatList } from 'react-native';
import { ServicesAndPricesComponent } from '../ServicesAndPricesComponent';
import { styles } from './styles';

function ModalServicesAndPrices({
    professional,
    writeUserData, 
    user, 
    dayOfWeek, 
    numberOfWeek,
    setModalDays
}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [ service, setService ] = useState("");
    const [ hour, setHour ] = useState(0);
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
                <ServicesAndPricesComponent 
                    setModalVisible={setModalVisible}
                    modalVisible={modalVisible}
                    user={user}
                    writeUserData={writeUserData}
                    dayOfWeek={dayOfWeek}
                    numberOfWeek={numberOfWeek}
                    service={service}
                   setHour={setHour}
                   hour={hour}
                   setModalDays={setModalDays}
                />            
            </Modal>

            <View style={{padding: 5}}>
                <Text style={styles.titleStyle}>Serviços</Text>
                <FlatList 
                    style={{height: '100%', }}
                    data={professional}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => {
                                setService(item.service)
                                setModalVisible(true)
                            }}
                            activeOpacity={0.9}
                        >
                            <Text style={styles.textStyle}>{item.service}</Text>
                            <View style={styles.divisor}/>
                            <Text style={styles.priceOfService}>{`R$ ${item.price}.00`}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>      
      </View>
    )
}

export { ModalServicesAndPrices }