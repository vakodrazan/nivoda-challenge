import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

function ContactCard({ item }) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => console.log(item.phoneNumber)}
        >
            <Image style={styles.avantar} source={{uri: item.profileImage}} />
            <Text style={styles.textContext}>{item.name}</Text>
        </TouchableOpacity>
    );
}

export default ContactCard;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    textContext: {
        fontSize: 20
    },
    avantar: {
        width: 60, 
        height: 60,
        borderRadius: '50%'
    }
});