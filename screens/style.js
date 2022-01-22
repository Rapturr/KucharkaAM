import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DDDDDD',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#999999',
        margin:3,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#667768',
      },
      text1: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#white',
      },
      dataText: {
        fontSize: 16,
        lineHeight: 51,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        backgroundColor: '#204075',
        lineWidth:'70%',
        borderWidth:2,
        borderRadius: 6,
        textAlign: 'center'
      },
      title: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
      },
      authors: {
          fontSize: 20,
          bottom: 0,
          fontWeight: 'bold',
          justifyContent: 'center',
        },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
  });

export default styles