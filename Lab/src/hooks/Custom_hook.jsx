import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


//Custom Hook phải là 1 hàm và return [state];
const useCustom = () => {
    const [Data, setData] = useState([]);
    //api 
    useEffect(() => {
        axios.get("https://cro101-b166e76cc76a.herokuapp.com/categories")
            .then(function (response) {

                if (response.data.status == true) {
                    setData(response.data.categories)
                    //console.log(response.data.categories);
                }
            })
            .catch(function (error) {
                console.log(error);

            });
    }, [])
    return [Data];
};

const Custom_hook = () => {

    // khai báo 1 Custom Hook
    const [data] = useCustom();

    console.log(data)

    return (
        <View style={styles.container}>
            {
                data.map((i) => {
                    //console.log(i.name);
                    //lưu ý return
                    return (
                        <View
                            key={i._id}
                        >
                            <Text style={styles.text}>{i.name}</Text>
                        </View>
                    );

                })
            }
        </View>
    )
}

export default Custom_hook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "red",
        fontSize: 20,
    },
})