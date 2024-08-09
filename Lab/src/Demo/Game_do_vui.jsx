import {    StyleSheet,Text, View,TextInput, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Game_do_vui = () => {

    const [Data, setData] = useState([]);
    const [Cau, setCau] = useState(0);

    useEffect(() => {
        axios.get(`https://chungnhanthamgia.io.vn/questionLv1/getAllQuestion`)
        .then(function (response) {
    
            setData(response.data);
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    // console.log(Data[Cau]?.question);

    const check_kq = (index) => {

        
        
        if(Data[Cau].answers[index].isCorrect == true){
            alert("Đúng");
            console.log("true");
            setCau(Cau+1)
        }else{
            alert("Sai");
            console.log("false");
        }
        
    }
    

    return (
    
        <View style={styles.container}>
            {
                Cau != 5?
                <View style={styles.container}>
                    <View>
                        <Text>Câu {Cau+1}:</Text>
                        <Text>{Data[Cau]?.question}</Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {
                            check_kq(0);
                        }}>
                        <Text>A</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {
                            check_kq(1);
                        }}>
                        <Text>B</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {
                            check_kq(2);
                        }}>
                        <Text>C</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {
                            check_kq(3);
                        }}>
                        <Text>D</Text>
                    </TouchableOpacity>
                
                </View>
                :<View style={styles.container}>
                    <Text>Chúc mừng bạn đã chiến thắng</Text>
                </View>
            }
        </View>
        
    )
}

export default Game_do_vui

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        backgroundColor: 'green',
        width: 120,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})