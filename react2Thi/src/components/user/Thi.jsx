import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux';

import Item_sp from './Item_sp';

const colors = ["white", "grey", "red", "green", "blue", "#F8A44C", "#53B175", "#D3B0E0", "#F7A593", "white", "grey", "red", "green", "blue", "#F8A44C", "#53B175", "#D3B0E0", "#F7A593", "white", "grey", "red", "green", "blue", "#F8A44C", "#53B175", "#D3B0E0", "#F7A593"];

const Thi = () => {

    const [list, setList] = useState([]);

    const products = useSelector(state => state.app.products);
    console.log(products);

    useEffect(() => {
        setList(products);
        return () => {
        }
    }, [products])


    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFFF', alignItems: 'center' }}>

            <View style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', height: 40 }}>Daftar Produk</Text>
            </View>

            <View style={{
                width: "90%",
                height: 50,
                backgroundColor: "#F2F3F2",
                flexDirection: "row",
                borderRadius: 15,
                // Shadow properties for iOS
                shadowColor: 'grey',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                // Elevation property for Android
                elevation: 5,
            }}>
                <TextInput
                    placeholderTextColor={'grey'}
                    style={{ paddingLeft: 40, width: "90%", }}
                    placeholder='cari produk'
                    keyboardType='text'
                />
                <Image
                    style={{ width: 25, height: 25, position: 'absolute', marginTop: 10, left: 0, marginLeft: 10 }}
                    source={require('../../img/Icon_search_black.png')}
                />
            </View>

            <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                <FlatList
                    data={list}
                    renderItem={({ item }) =>
                        <Item_sp dataItem={item} color={colors[item.id]} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}

export default Thi

const styles = StyleSheet.create({})