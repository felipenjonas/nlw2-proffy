import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// ReactButton é um botão adaptavel ao sistema operacional do dispositivo = Botao retangular
import { RectButton } from 'react-native-gesture-handler';


import styles from './styles';

// Typescript precisa ler arquvios PNG, então criar a pasta e o arquivo 
// ./src/@types/index.d.ts
// Dentro deste arquivo: declare module '*.png'
// Agora É possível importar imagens png no TS
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api';

function Landing() {

    const {navigate} = useNavigation();

    function handleNavigateToGiveClassesPage() {
        // Mesmo nome da propriedade name lá em AppStack
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }


    const [totalConnections, setTotalConnections] = useState(0);

    // Sempre que acessar a Landing Page, devemos disparar a requisição na API
    useEffect(() => {
        api.get('/connections').then(response => {
            // console.log(response)
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])


    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
        
            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                    >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}> Estudar </Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavigateToGiveClassesPage} 
                    style={[styles.button, styles.buttonSecondary]}
                    >
                    
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}> Dar aulas </Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>

    ) 
    
}

export default Landing;