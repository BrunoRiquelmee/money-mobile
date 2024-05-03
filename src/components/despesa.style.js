import {COLORS, FONT_SIZE} from "./../constants/theme";

export const styles = {
    despesa: {
        width: "100%",
        backgroundColor: COLORS.grey,
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerIcon: {
        flex: 3,
    },
    despesaIcon: {
        width: 35,
        height: 35,
    },
    containerCategoria: {
        flex: 7,
    },
    containerValor: {
        flex: 8,
        justifyContent: "center"
    },
    despesaCategoria: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey,
        fontWeight: "bold"
    },
    despesaDescricao: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey,
        
    },
    despesaValor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_grey,
        fontWeight: "bold",
        textAlign: "right",
    }
}