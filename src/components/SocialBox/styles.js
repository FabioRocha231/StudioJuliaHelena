import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    height: StatusBar.currentHeight,

    width: '100%',
    height: 90,
    alignItems: 'center',
    backgroundColor: 'rgba( 255, 255, 255, 0.8)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  text: {
    backgroundColor: '#C1F0F4',
    color: '#000000',
    width: 200,
    marginRight: 30,
    borderRadius: 20,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  currentHeight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: StatusBar.currentHeight,
  },
});

export { styles };
