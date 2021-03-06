import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.create({
    $primaryColor: '$primary',
    $whiteColor: '$white',
    btn: {
        borderStyle: "solid",
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: "center",
        borderWidth: 1,
        marginBottom: 10,
    },
    btnPrimary: {
        backgroundColor: '$primary',
        borderColor: '$primary',
    },
    btnDefault: {
        borderColor: '$white',
    },
    text: {
        color: '$white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    icon: {

    },
    smallBtn: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 0,
    },
    smallText: {
        fontSize: 15,
        fontWeight: "normal",
    },
})