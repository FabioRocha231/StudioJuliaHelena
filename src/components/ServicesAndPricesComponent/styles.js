import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: 350,
    justifyContent: "center",
    alignSelf: 'center',
    marginTop: 22,
},
  modalView: {
    justifyContent: 'center',
    alignItems: "center",
    alignSelf: "center",
    width: 350,
    height: 350,
    margin: 20,
    backgroundColor: "#6DDDF2",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  wrapper: {
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#C1F0F4',
    elevation: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
  schedulers: {
    backgroundColor: '#F2F0F2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6FC3D8',
    width: 60,
    height: 50,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#2196F3",
  },
  textButtonClose: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  buttonToSchedule: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: 280,
  }
})

export { styles }