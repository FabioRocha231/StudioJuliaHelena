import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C1F0F4',
    marginHorizontal: 20,
    marginTop: 30,
    height: 360,
    elevation: 5,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#484B59',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  appointments: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textAppointments: {
    marginTop: 60,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
    textAlign: 'justify',
    color: '#484B59',
  }
});

export { styles };
