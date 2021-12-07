import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import firebase from 'firebase';
import { firebaseConfig } from '../../configs/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ClientSchedules = () => {
  const [ day, setDay ] = useState(0);
  const [ dayOfWeek, setDayOfWeek ] = useState('');
  const [ hour, setHour ] = useState(0);
  const [ service, setService ] = useState('');


  const currentUser = firebase.auth().currentUser.uid;
  let clientAppointments = firebase.database().ref('users/' + currentUser);
  useEffect(() => {
    clientAppointments.on('value', (snapshot) => {
      const data = snapshot.val();
      if(data !== null) {
        setDay(data.day);
        setDayOfWeek(data.dayOfWeek);
        setHour(data.hour);
        setService(data.service);
      }
        
    })
  }, [ day, dayOfWeek, hour, service ])
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meus Horarios esta semana</Text>
      <View style={styles.appointments}>
          {day !== 0 ? (
            <Text style={styles.textAppointments}>
              Você tem um horario marcado com nos {dayOfWeek}. Feira dia {day} ás {hour}h para
              realizar um(a) {service}
            </Text>
          ) : null}
          
      </View>
    </View>
  );
};

export { ClientSchedules };
