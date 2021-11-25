import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -23,
    width: '100%',
    height: 80,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#DA5386',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 4,
  },
  titleText: {
    color: '#ffff',
    fontSize: 24,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});
