import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Feather as Icon } from '@expo/vector-icons';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';


interface IBGEUfInterface {
  id: number;
  sigla: string;
  nome: string;
}

interface IBGECityInterface {
  id: number;
  nome: string;
}

interface ReactPickerSelectModel {
  label: string;
  value: string;
}

const Home = () => {
  const navigation = useNavigation();

  const [ufs, setUfs] = useState<ReactPickerSelectModel[]>([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [cities, setCities] = useState<ReactPickerSelectModel[]>([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then((response) => {
      // console.log(response.data);
      setUfs(response.data.map(item => ({
        label: `${item.nome} - (${item.sigla})`,
        value: item.sigla
      })));
    });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      setCities([]);
      setSelectedCity('0');
      return;
    }

    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`).then((response) => {
      setCities(response.data.map(item => ({
        label: item.nome,
        value: item.nome
      })));
    });
  }, [selectedUf]);

  function handleNavigateToPoints() {
    navigation.navigate('Points', { uf: selectedUf, city: selectedCity });
  }

  return (
    <ImageBackground
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>
          Seu marketplace de coleta de resíduos
        </Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
        </Text>
      </View>
      
      <View>
        <RNPickerSelect
          placeholder={{label: 'Selecione um estado', value: ''}}
          onValueChange={setSelectedUf}
          value={selectedUf}
          items={ufs}
        />
        <RNPickerSelect
          placeholder={{label: 'Selecione uma cidade', value: ''}}
          onValueChange={setSelectedCity}
          value={selectedCity}
          items={cities}
        />
      </View>  

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => { handleNavigateToPoints() }}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#fff" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;