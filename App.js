import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ContactList from './src/ContactList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ContactList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  }
})