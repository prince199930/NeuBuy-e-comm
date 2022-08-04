import { StyleSheet } from 'react-native';
import color from '../colors';
export const styleSearchBar = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        borderRadius: 5,
        marginRight:30,
        alignSelf:'center',
        alignContent:'center',
        marginBottom:-5,
    },
    delete: {
        position: "absolute",
        marginLeft: 180,
        marginTop: 7,
        right:10
    },
    search: {
         width: 200,
         height: 30,
         backgroundColor: color.white,
         padding: 5,
    },
    searchIcon: {
        height:18,
        width:18,
        marginLeft:5,
        marginRight:5
        
    }
});
