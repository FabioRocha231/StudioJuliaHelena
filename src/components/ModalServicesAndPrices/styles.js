import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        justifyContent: 'center',
        width: 300,
        height: 250,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
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
        width: 60,
        height: 90,
        marginLeft: 5,
        borderRadius: 30,
        justifyContent: 'center',
        padding: 10,
        elevation: 2,
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#2196F3",
        
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    dayOfMonth: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    unvaliable: {
        backgroundColor: 'rgba(241,148,255, 0.2)'
    }
})

export { styles }