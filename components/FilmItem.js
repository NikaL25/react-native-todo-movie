import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, SafeAreaView } from 'react-native';

export default function FilmItem({ film }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);

    const openModal = (film) => {
        setSelectedFilm(film);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedFilm(null);
        setModalVisible(false);
    };

    return (
        <TouchableOpacity
            onPress={() => openModal(film)}
            style={styles.filmItem}
        >
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w200${film.poster_path}` }}
                style={styles.image}
            />
            <Text style={styles.title}>{film.title}</Text>

            <Modal
                animationType='slide'
                presentationStyle='formSheet'
                visible={modalVisible}
                onRequestClose={closeModal} // Android back button support
            >
                <SafeAreaView style={styles.modal}>
                    <TouchableOpacity onPress={closeModal} style={styles.close}>
                        <Text>&times;</Text>
                    </TouchableOpacity>
                    {selectedFilm && (
                        <>
                            <Image
                                source={{ uri: `https://image.tmdb.org/t/p/w200${selectedFilm.poster_path}` }}
                                style={styles.modalImg}
                            />
                            <Text style={styles.overview}>{selectedFilm.overview}</Text>
                        </>
                    )}
                </SafeAreaView>
            </Modal>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    filmItem: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        margin: 15
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
    modal: {
        margin: 25
    },
    close: {
        fontSize: 30,
        textAlign: 'right'
    },
    modalImg: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        display: 'flex',
        alignItems: 'center'
    },
    overview: {
        fontSize: 18,
        marginTop: 25
    }
});
