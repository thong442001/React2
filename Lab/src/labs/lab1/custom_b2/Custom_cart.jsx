import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Custom_Text from './Custom_Text';
import Custom_btn from './Custom_btn';
import Custom_hinh_anh from './Custom_hinh_anh';

const Custom_cart = ({data}) => {

    const { ten_khach_san,gio_mo_cua,dia_diem,btn,thoi_gian1,phuong_tien_di_chuyen,thoi_gian2,hinh_anh} = data;

  return (
    <View style={[styles.cart]}>
        
        {
            ten_khach_san ? 
            (
                <Custom_Text data={ten_khach_san}/>
            )
            :null
        }
        {
            gio_mo_cua ? 
            (
                <Custom_Text data={gio_mo_cua}/>
            )
            :null
        }
        {
            dia_diem ? 
            (
                <Custom_Text data={dia_diem}/>
            )
            :null
        }
        {
            btn ? 
            (
                <Custom_btn text={btn}/>
            )
            :null
        }
        {
            thoi_gian1 ? 
            (
                <Custom_Text data={thoi_gian1}/>
            )
            :null
        }
        {
            phuong_tien_di_chuyen ? 
            (
                <Custom_Text data={phuong_tien_di_chuyen}/>
            )
            :null
        }
        {
            thoi_gian2 ? 
            (
                <Custom_Text data={thoi_gian2}/>
            )
            :null
        }
        {
            hinh_anh ? 
            (
                <Custom_hinh_anh data={hinh_anh}/>
            )
            :null
        }

    </View>
  )
}

export default Custom_cart

const styles = StyleSheet.create({
    cart: {
        shadowRadius: 10,
        borderRadius: 10,
        shadowOpacity: 0.4,
        backgroundColor: "#ffff",
        margin: 10,
        padding: 10,
    }
})