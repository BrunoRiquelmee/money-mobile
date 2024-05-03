import {COLORS, FONT_SIZE} from "../../constants/theme";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        padding: 35
    },
    logo: {
        width: 100,
        height: 30,
        marginTop: 20
    },
    dashboard: {
        width: "100%",
        backgroundColor: COLORS.blue,
        padding: 15,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dashboardValor:{
        color: COLORS.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"
    },
    dashboardText:{
        color: COLORS.white,
        fontSize: FONT_SIZE.sm,
    },
    dashboardImg: {
        width: 35,
        height: 60
    },
    despesasTitulo: {
        textAlign: "left",
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_grey,
        marginTop: 15,
        fontWeight: "bold",
        paddingBottom: 7
    },
    btnAdd: {
        position: "absolute",
        bottom: 38
    },
    btnAddImage:{
        width: 50,
        height: 50,
    }
}