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
    button: {
        width: 140,
        height: 180,
        marginLeft: 5,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        elevation: 5,
        backgroundColor: "#FFFFFF",
    },
    buttonClose: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#2196F3",
    },
    textStyle: {
        fontSize: 16,
        color: "#000000",
        textAlign: "center",
        marginBottom: 20
    },
    priceOfService: {
        fontSize: 18,
        color: "#000000",
        textAlign: "center",
        marginTop: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    unvaliable: {
        backgroundColor: 'rgba(241,148,255, 0.2)'
    },
    divisor: {
        borderBottomWidth: 1, 
        borderColor: '#000000'
    },
    titleStyle: {
        alignSelf: 'center',
        textAlign: "center",
        marginTop: -50,
        marginBottom: 20,
        width: 100,
        padding: 5,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 18,
    },
    textButtonClose: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
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
      wrapper: {
        borderWidth: 1,
        height: 240,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: '#C1F0F4',
        elevation: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
      }
})

export { styles }