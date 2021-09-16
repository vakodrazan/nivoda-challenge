import React from 'react';
import { FlatList } from 'react-native';
import ContactCard from '../ContactCard';

const data = [
    {
        name: 'Noeline',
        phoneNumber: "03818188",
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75hzwz2_zDqF3lqNIwf2iKcX3oXDAzufDpw&usqp=CAU'
    },
    {
        name: 'Bella',
        phoneNumber: "0341991081",
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJsmtzTXzJIdNFPCyDll83QQoM3MhMPtRjQ&usqp=CAU'
    },
    {
        name: 'Bozy',
        phoneNumber: "03393738181",
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTksIOS4_-ldfRmhj_gefk1MyRivLBB6HnA&usqp=CAU'
    },
]

function ContactList() {
    return (
        <FlatList data={data} renderItem={ContactCard} keyExtractor={item => item.phoneNumber} />
    );
}

export default ContactList;