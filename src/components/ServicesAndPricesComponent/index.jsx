import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { data } from '../../../serviços';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

function ServicesAndPricesComponent({
  setModalVisible, 
  modalVisible,
  user,
  writeUserData,
  dayOfWeek,
  numberOfWeek,
  service,
  setHour,
  hour,
  setModalDays,
}) {
  const navigation = useNavigation();
  const [ active, setActive ] = useState(false)
  return(
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
          <View style={styles.wrapper}>
              {
                  data.map(({ id, schedule }) => (
                      <TouchableOpacity
                          style={[styles.schedulers, active === false ? null : {opacity: 0.3}]}
                          key={id}
                          onPress={() =>{
                              setHour(schedule)
                              setActive(!active)       
                          }}
                          disabled={active}
                      >
                          <Text>{schedule}</Text>
                      </TouchableOpacity>
                      ))
              }
          </View>
          <View style={styles.buttonToSchedule}>
            <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => {
                    Alert.alert(
                        "Agendar",
                        `Deseja marcar para ${dayOfWeek}. Dia ${numberOfWeek}, no horario de: ${hour}, o servico de ${service}?`,
                        [
                          {
                            text: "Cancel",
                            onPress: () => {setModalVisible(!modalVisible)},
                            style: "cancel"
                          },
                          { text: "OK", onPress: () => {
                            writeUserData(
                                user.userUid,
                                user.username,
                                user.userEmail,
                                user.userPhoto,
                                service, 
                                numberOfWeek,
                                hour, 
                                dayOfWeek
                            )
                            navigation.navigate('UserScreen')
                            setModalVisible(!modalVisible)
                            setModalDays(!modalVisible)
                            Alert.alert(
                              "",
                              "Agendamento Concluido com sucesso, Obrigado pela prefencia ^.^"
                            )
                          }}
                        ]
                      );
                }}
            >
                <Text style={styles.textButtonClose}>Agendar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.buttonClose}
              onPress={() => {
                setModalVisible(!modalVisible)
                setModalDays(!modalVisible)
              }}
            >
              <Text style={styles.textButtonClose}>Cancelar</Text>
            </TouchableOpacity>
          </View>

      </View>
  </View>
  )
}

export { ServicesAndPricesComponent }