import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';


function Favorites() {

    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        // Pegar os usuários favoritados
        AsyncStorage.getItem('favorites').then(response => {
            // Somente em dados de texto, pode ser json.
            if (response) {
                // A resposta precisa ser convertida em Json 
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        })
    }


    useFocusEffect(() => {
        loadFavorites();
    });


    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >

                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id}
                            teacher={teacher}
                            // favorited or favorited={true} - No react ele entende como true se não pasar nada
                            favorited
                        />
                    )
                })}


            </ScrollView>
        </View>
    )


}

export default Favorites;