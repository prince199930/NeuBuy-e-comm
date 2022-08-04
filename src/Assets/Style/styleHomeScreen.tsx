import { StyleSheet } from "react-native";
import color from '../colors';
export const styleHomeScreen=StyleSheet.create({
    categoryStyle: {
        borderColor: color.black,
                justifyContent: 'center',
                alignItems: 'center',
    },
    categoryText: {
        textAlign: 'center',
        fontSize:13,
    },
    categorySelected: {
        color: color.etonBlue
    },
    categoryUnselected: {
        color: color.charcoal
    },
    categoryContainer: {
        height: 30,
        marginBottom:10
    }
})