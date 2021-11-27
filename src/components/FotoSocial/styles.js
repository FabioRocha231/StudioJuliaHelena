import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    width: 55,
    height: 55,

    marginTop: 3,
    marginLeft: 10,

    borderRadius: 55 / 2,
    backgroundColor: '#D97398',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'stretch',
  },
});

export { styles };
