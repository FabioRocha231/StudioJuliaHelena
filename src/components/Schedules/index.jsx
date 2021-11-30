import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import firebase from 'firebase';
import { firebaseConfig } from '../../configs/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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

const Schedules = ({ userParams }) => {
  const user = {
    userUid: userParams.user.userUid,
    username: userParams.user.username,
    userEmail: userParams.user.userEmail,
    userPhoto: userParams.user.userPhoto,
  };
  function writeUserData(userId, name, email, imageUrl) {
    firebase
      .database()
      .ref('users/' + userId)
      .set({
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
  }
  return (
    <View>
      <View style={styles.wrapper}>
        {data.map(({ id, schedule }) => (
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
        ))}
      </View>
    </View>
  );
};

export { Schedules };
