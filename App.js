import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function App() {
    return (

        <SafeAreaView style={styles.container} >
            <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 25, color: '#fff' }} >Olá, Eliel </Text>

            <ScrollView style={{marginHorizontal: 20}}>
            <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontSize: 15 }}>Cartão de Crédito</Title>
            <Paragraph style={{ fontSize: 12 }} >fatura atual</Paragraph>
            <Text style={{ fontSize: 20, color: '#2786ff', fontWeight: "bold" }}>R$ 110 </Text>
            <Text>Limite disponivel <Text style={{ color: '#1e9934', fontWeight: "bold", fontSize: 12 }} > R$ XX </Text></Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontSize: 15 }}>Conta</Title>
            <Paragraph style={{ fontSize: 12 }}>Saldo disponível</Paragraph>
            <Text style={{ fontSize: 20, color: 'black', fontWeight: "bold" }}>R$ 124 </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontSize: 15 }}>Pix</Title>
            <Paragraph style={{ fontSize: 16, color: 'black', fontWeight: "bold" }} >Transfira usando o pix</Paragraph>
            <Paragraph style={{ fontSize: 12 }}>Pague e receba em tempo real, sem custo e para qualquer banco.</Paragraph>
            <Card.Actions>
              <Button style={{borderColor: '#652279', borderWidth: 0.1, fontWeight: "bold" }}>COMEÇAR A USAR</Button>
            </Card.Actions>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Empréstimo</Title>
            <Paragraph style={{ fontSize: 12 }} >Valor disponível de até</Paragraph>
            <Text style={{ fontSize: 20, color: '#2786ff', fontWeight: "bold" }}>R$ 120</Text>
            <Text>Limite disponivel <Text style={{ color: '#1e9934', fontWeight: "bold", fontSize: 12 }} > R$ 201,14</Text></Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Cartão</Title>
            <Paragraph style={{ fontSize: 12 }} >fatura atual</Paragraph>
            <Text style={{ fontSize: 20, color: '#2786ff', fontWeight: "bold" }}>R$ XX </Text>
            <Text>Limite disponivel <Text style={{ color: '#1e9934', fontWeight: "bold", fontSize: 12 }} > R$ XX </Text></Text>
          </Card.Content>
        </Card>
          

            </ScrollView>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9300d3',
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    encima: {
      flexDirection: 'row',
      paddingVertical: 30,
      flexBasis: 1,
    },
    baixo: {
      flexDirection: 'row',
      paddingVertical: 30,
      flexBasis: 1,
    },
    card: {
      marginTop: 20
    }


});