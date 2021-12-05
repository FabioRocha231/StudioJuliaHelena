import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    backgroundColor: '#6FC3D8',
    marginHorizontal: 50,
    height: 40,
    borderRadius: 20,
    borderColor: '#BE809F',
    borderWidth: 2,
  },
  instagramIcon: {
    position: 'absolute',
    top: 3,
    left: 20,
    height: 30,
    width: 30,
    alignItems: 'center',

    justifyContent: 'center',
  },
  text: {
    flex: 1,

    color: '#ffff',
    marginTop: 7,

    alignSelf: 'center',
  },
});
