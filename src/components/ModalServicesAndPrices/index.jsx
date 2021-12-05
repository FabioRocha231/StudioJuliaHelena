import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, FlatList } from 'react-native';
import { styles } from './styles'

const data = [
    {
        id: '1',
        schedule: '10:00',
    },
    {
        id: '2',
        schedule: '11:00',
    },
    {
        id: '3',
        schedule: '12:00',
    },
    {
        id: '4',
        schedule: '13:00',
    },
    {
        id: '5',
        schedule: '14:00',
    },
    {
        id: '6',
        schedule: '15:00',
    },
    {
        id: '7',
        schedule: '16:00',
    },
    {
        id: '8',
        schedule: '17:00',
    },
    {
        id: '9',
        schedule: '18:00',
    },
    {
        id: '10',
        schedule: '19:00',
    },
];

function ModalServicesAndPrices({professional}) {
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
                        <View style={styles.wrapper}>
                            {
                                data.map(({ id, schedule }) => (
                                    <TouchableOpacity
                                        style={styles.schedulers}
                                        key={id}
                                        onPress={() =>{}}
                                    >
                                        <Text>{schedule}</Text>
                                    </TouchableOpacity>
                                    ))
                            }
                        </View>
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textButtonClose}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
                            onPress={() => setModalVisible(true)}
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