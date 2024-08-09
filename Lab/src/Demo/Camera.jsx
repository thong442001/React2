import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Camera = () => {
    const [img, setImg] = useState(null)
    
    const onCamera = async () => {
        try{
            const options ={
                mediaType: 'photo',
                quality: 1,
                cameraType: 'back',
                saveToPhotos: true,
            }
            launchCamera(options, async(response)=>{
                if(response.didCancel){
                    console.log("hủy");
                }else if(response.errorMessage){
                    console.log("error ", response.errorMessage);
                }else{
                    console.log("response-> ", response);
                }
            })
        }catch(e){
            console.log(" error ",e );
        }
    }
    return (
        <View style={styles.container}>
            
            {
                img ? <Image 
                        source={{uri: img}}
                        style={styles.img}
                       />
                       : <View style={styles.placeholder}></View>
            }
            <TouchableOpacity onPress={onCamera} style={styles.btn}>
                <Text style={{textAlign: "center"}}>Chụp hình</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Camera

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      btn: {
        height: 80,
        width: 100,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 50,
        justifyContent: 'center',
      },
})