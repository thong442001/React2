import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Custom_section from './custom_b2/Custom_section';

const Lab1_b2 = () => {

    const data = [
        {
            index: 1,
            data: {
                title: "Lịch trình",
                cart: {
                    dia_diem: {
                        title: "Địa điểm",
                        noi_dung: "Hồ Tràm, Vũng Tàu"
                    },
                    thoi_gian1: {
                        title: "Thời gian",
                        noi_dung: "09:00 AM 12:00 AM, 12/12/2024"
                    },
                    phuong_tien_di_chuyen: {
                        title: "Phương tiện di chuyển",
                        noi_dung: "xe bus"
                    },
                    thoi_gian2: {
                        title: "Thời gian",
                        noi_dung: "21:00 - 22:00"
                    },
                    hinh_anh:{
                        title: "Hình ảnh",
                        uri: "https://statics.vinwonders.com/bien-kien-giang_1627288360_1680093521.jpg",
                    }
                }
            }
        },
        {
            index: 2,
            data: {
                title: "Khách sạn",
                cart: {
                    ten_khach_san: {
                        title: "Tên khách sạn",
                        noi_dung: "Hồng Quỳnh"
                    },
                    gio_mo_cua: {
                        title: "Giờ mở cửa",
                        noi_dung: "06:00 AM - 12:00 AM"
                    },
                    dia_diem: {
                        title: "Địa điểm",
                        noi_dung: "234 Quang Trung, Hồ Chí Minh"
                    },
                    btn: "CHI TIẾT"
                }
            }
        },
    ]

  return (
    <SafeAreaView>
        <ScrollView style={[styles.container]}>
            {
                data?.map?.((x)=> <Custom_section 
                                        data={x.data} 
                                        index={x.index}/>)
            }
        </ScrollView>
    </SafeAreaView>
    
    
  )
}

export default Lab1_b2

const styles = StyleSheet.create({

})