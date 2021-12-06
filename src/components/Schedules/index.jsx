import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import firebase from 'firebase';
import { firebaseConfig } from '../../configs/firebaseConfig';
import { ModalDaysOfMonth } from '../ModalDaysOfMonth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Schedules = ({ userParams, professional }) => {
  const user = {
    userUid: userParams.userUid,
    username: userParams.username,
    userEmail: userParams.userEmail,
    userPhoto: userParams.userPhoto,
  };
  function writeUserData(userId, name, email, imageUrl, service, day, hour, numberOfWeek) {
    firebase
      .database()
      .ref('users/' + userId)
      .set({
        username: name,
        email: email,
        profile_picture: imageUrl,
        service: service,
        dayOfWeek: numberOfWeek,
        day: day,
        hour: hour
      });
  }
  return (
    <View style={{marginTop: 90}}>
      <View style={styles.wrapper}>
      
        <ModalDaysOfMonth professional={professional} writeUserData={writeUserData} user={user}/>
        
        {/*data.map(({ id, schedule }) => (
          <TouchableOpacity
            style={styles.schedulers}
            key={id}
            onPress={() =>
              writeUserData(
                user.userUid,
                user.username,
                user.userEmail,
                user.userPhoto,
              )
            }
          >
            <Text>{schedule}</Text>
          </TouchableOpacity>
          ))*/}
      </View>
    </View>
  );
};

export { Schedules };
