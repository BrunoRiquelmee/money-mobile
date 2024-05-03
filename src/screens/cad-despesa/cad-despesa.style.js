import {COLORS, FONT_SIZE} from "../../constants/theme";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 35
    },
    containerField:{
        marginBottom: 40
    },
    inputLabel: {
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_grey
    },
    inputValor: {
        fontSize: FONT_SIZE.xl,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 2,
        padding: 5,
        fontWeight: "bold"
    },
    inputText: {
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 2,
        padding: 5
    },
    containerBtn: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    btn: {
        backgroundColor: COLORS.blue,
        padding: 10,
        borderRadius: 6,
        width: 150,
    },
    btnText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        textAlign: "center",
    },
    btnDelete: {
        width: 60,
        height: 60
    },
    inputPicker: {
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 2,
        overflow: "hidden"
    }
   
}