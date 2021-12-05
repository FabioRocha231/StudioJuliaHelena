import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, FlatList } from 'react-native';
import { styles } from './styles'

const juliaRocha = [
  {
    id: 1,
    service: 'Corte',
    price: 59.90
  },
  {
    id: 2,
    service: 'Escova Curto',
    price: 35.00
  },
  {
    id: 3,
    service: 'Escova Medio',
    price: 45.00
  },
  {
    id: 4,
    service: 'Escova Longo',
    price: 55.00
  },
  {
    id: 5,
    service: 'Cauterização Curto',
    price: 80.00
  },
  {
    id: 6,
    service: 'Cauterizaçao Médio',
    price: 100.00
  },
  {
    id: 7,
    service: 'Cauterizaçao Longo',
    price: 120.00
  },
  {
    id: 8,
    service: 'Cauterizaçao Médio',
    price: 100.00
  },
  {
    id: 9,
    service: 'Relaxamento Curto',
    price: 80.00
  },
  {
    id: 10,
    service: 'Relaxamento Médio',
    price: 100.00
  },
  {
    id: 10,
    service: 'Relaxamento Longo',
    price: 120.00
  },
  

]

function ModalServicesAndPrices() {
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
                        <Text style={styles.modalText}>Hello World!</Text>
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
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                    activeOpacity={0.9}
                >
                    <Text style={styles.textStyle}>Serviço</Text>
                    <View style={{borderBottomWidth: 1, borderColor: '#FFFFFF'}}/>
                    <Text style={styles.dayOfMonth}>Preço</Text>
                </TouchableOpacity>
            </View>
                  
      </View>
    )
}

export { ModalServicesAndPrices }