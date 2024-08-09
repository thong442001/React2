import { StyleSheet, SafeAreaView, Text, View, StatusBar, FlatList, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import Item_sp from '../Item/Item_sp';
import Item_menu from '../Item/Item_menu';
// import { AppContext } from '../../ultil/AppContext';


//data danh mục
const data_danh_muc = [
  {
    ID_loai: "1",
    ten_loai: "Tất cả",
  },
  {
    ID_loai: "2",
    ten_loai: "Bánh mì",
  },
  {
    ID_loai: "3",
    ten_loai: "Hamburger",
  },
  {
    ID_loai: "4",
    ten_loai: "Sandwich",
  },
  {
    ID_loai: "5",
    ten_loai: "Nước",
  },
];
//data tất cả sản phẩm
const data_tat_ca_san_pham = [
  //bánh mì
  {
    ID_san_pham: "1",
    ten_san_pham: "Bánh mì xí mại",
    gia: "20.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/448740887_1033588911766369_5382938959993796914_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=q_2UwtCH9B4Q7kNvgELONbf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF_va8gAZLYyTHY-twcz6FMfRGrFT0eNFhKr2VUe3gh2A&oe=66B43CD9",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Bánh mì",
  },
  {
    ID_san_pham: "2",
    ten_san_pham: "Bánh mì chả cá",
    gia: "20.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449516120_460417636690775_8598772189652209356_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rMhU2zESQN4Q7kNvgFw5yVt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QE4-qLvevEpN32B1sYlwK641m0YjttxwkhU1zasuG4J_g&oe=66B44365",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Bánh mì",
  },
  {
    ID_san_pham: "3",
    ten_san_pham: "Bánh mì thịt nguội",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449764124_1593819727854873_5584733761858262260_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Fcr8BuVjU7oQ7kNvgHldCrs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGCH-q-IgJgUhkUvgp4U7pjFpS-9fXsm8dTi1CxEu0ZHQ&oe=66B42666",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Bánh mì",
  },
  {
    ID_san_pham: "4",
    ten_san_pham: "Bánh mì trứng",
    gia: "10.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449627441_861350899182969_5428950769291679055_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=jnc0UOWMtuwQ7kNvgELk2zp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEJ5nVxTLkI5SttMYYFBrw2quD8agCosglI1a-IrrfwGA&oe=66B85340",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Bánh mì",
  },
  //hamburger
  {
    ID_san_pham: "5",
    ten_san_pham: "Hamburger bò",
    gia: "30.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/450591531_801621782075558_1337509004182289547_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UAaCqSFrARoQ7kNvgFobqun&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEqmcvy4tKrfYudn-FWv7HvojziAwjGvuRzlQRZeUJcBg&oe=66B82FC7",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Hamburger",
  },
  {
    ID_san_pham: "6",
    ten_san_pham: "Hamburger gà",
    gia: "25.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449717090_7866856923382771_3631690484788658614_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2cft3TT0F68Q7kNvgGyyL8_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHnOdGVNcEFagN6KJA0XNdF5EiYTJSCUQ6t1i3LSoQGQA&oe=66B8634F",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Hamburger",
  },
  //* sandwich
  {
    ID_san_pham: "7",
    ten_san_pham: "Sandwich xúc xích",
    gia: "20.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/450474937_993961445707163_6818638901418956649_n.png?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=hXuwhxskRwMQ7kNvgHnihgU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEz3dHXuzQ1fMoZHJH74sojj-txDArxafdipp02PZjW4A&oe=66B841F9",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Sandwich",
  },
  {
    ID_san_pham: "8",
    ten_san_pham: "Sandwich trứng",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449450416_789543260026388_7617994718757062668_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=pee5bSDFybkQ7kNvgG1l6bk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGQa4PZmQ8h9xhrR04P4TNnJMqVevznMJfqjZSwRh7dyQ&oe=66B84336",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Sandwich",
  },
  {
    ID_san_pham: "9",
    ten_san_pham: "Sandwich thịt nguội",
    gia: "20.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449778809_2828481323983206_6836942484028229306_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-3LlewySBf8Q7kNvgFDtoBR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGnh4e7ar8__5aXFTlzcjWA5pYyBPuUSlM4loJxVvfJcg&oe=66B85228",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Sandwich",
  },
  //nước
  {
    ID_san_pham: "10",
    ten_san_pham: "Ly Coca",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449713404_1014425710686777_7072643948436122871_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_-3vT0neKo0Q7kNvgHKkrk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHgq56QD2HlkksKT-vSkPF_bxaph5F0YDj90Qci8cGwqg&oe=66B84166",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Nước",
  },
  {
    ID_san_pham: "11",
    ten_san_pham: "Ly Pepsi",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449760330_1964364033983646_234472364735796400_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=KBAEzfnlGMsQ7kNvgGo-OwG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHjxUjmFOhDX_rYkLUtkYS_YxPL7lvR-KiYozRuTjUjyg&oe=66B85A37",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Nước",
  },
  {
    ID_san_pham: "12",
    ten_san_pham: "Ly Sprite",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449447420_1543125749958464_8539285668009368899_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=6U66EzRLm7YQ7kNvgEwL4Rc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEsWAVIFcZcjw4CeeNyP5E4IAPqPEmh3OJty33M6o1gcQ&oe=66B83CBF",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Nước",
  },
  {
    ID_san_pham: "13",
    ten_san_pham: "Ly Cam",
    gia: "10.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449822265_1184014116260240_8402911738474024483_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=g074sSR-tC0Q7kNvgGsU62P&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHTNxwQ0R-P_-zmkqC0szak_VWZ2KmEAfjBLxYumA2SYQ&oe=66B839FA",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Nước",
  },
];
//data bánh mì
const data_banh_mi = [
  //bánh mì
  {
    ID_san_pham: "1",
    ten_san_pham: "Bánh mì xí mại",
    gia: "20.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/448740887_1033588911766369_5382938959993796914_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=q_2UwtCH9B4Q7kNvgELONbf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF_va8gAZLYyTHY-twcz6FMfRGrFT0eNFhKr2VUe3gh2A&oe=66B43CD9",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Bánh mì",
  },
  {
    ID_san_pham: "2",
    ten_san_pham: "Bánh mì chả cá",
    gia: "20.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449516120_460417636690775_8598772189652209356_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rMhU2zESQN4Q7kNvgFw5yVt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QE4-qLvevEpN32B1sYlwK641m0YjttxwkhU1zasuG4J_g&oe=66B44365",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Bánh mì",
  },
  {
    ID_san_pham: "3",
    ten_san_pham: "Bánh mì thịt nguội",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449764124_1593819727854873_5584733761858262260_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Fcr8BuVjU7oQ7kNvgHldCrs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGCH-q-IgJgUhkUvgp4U7pjFpS-9fXsm8dTi1CxEu0ZHQ&oe=66B42666",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Bánh mì",
  },
  {
    ID_san_pham: "4",
    ten_san_pham: "Bánh mì trứng",
    gia: "10.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449627441_861350899182969_5428950769291679055_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=jnc0UOWMtuwQ7kNvgELk2zp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEJ5nVxTLkI5SttMYYFBrw2quD8agCosglI1a-IrrfwGA&oe=66B85340",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Bánh mì",
  },

];
//data hamburger
const data_hamburger = [

  //hamburger
  {
    ID_san_pham: "5",
    ten_san_pham: "Hamburger bò",
    gia: "30.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/450591531_801621782075558_1337509004182289547_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UAaCqSFrARoQ7kNvgFobqun&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEqmcvy4tKrfYudn-FWv7HvojziAwjGvuRzlQRZeUJcBg&oe=66B82FC7",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Hamburger",
  },
  {
    ID_san_pham: "6",
    ten_san_pham: "Hamburger gà",
    gia: "25.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449717090_7866856923382771_3631690484788658614_n.png?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2cft3TT0F68Q7kNvgGyyL8_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHnOdGVNcEFagN6KJA0XNdF5EiYTJSCUQ6t1i3LSoQGQA&oe=66B8634F",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Hamburger",
  },

];
//data sandwich
const data_sandwich = [

  //* sandwich
  {
    ID_san_pham: "7",
    ten_san_pham: "Sandwich xúc xích",
    gia: "20.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/450474937_993961445707163_6818638901418956649_n.png?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=hXuwhxskRwMQ7kNvgHnihgU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEz3dHXuzQ1fMoZHJH74sojj-txDArxafdipp02PZjW4A&oe=66B841F9",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Sandwich",
  },
  {
    ID_san_pham: "8",
    ten_san_pham: "Sandwich trứng",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449450416_789543260026388_7617994718757062668_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=pee5bSDFybkQ7kNvgG1l6bk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGQa4PZmQ8h9xhrR04P4TNnJMqVevznMJfqjZSwRh7dyQ&oe=66B84336",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Sandwich",
  },
  {
    ID_san_pham: "9",
    ten_san_pham: "Sandwich thịt nguội",
    gia: "20.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449778809_2828481323983206_6836942484028229306_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-3LlewySBf8Q7kNvgFDtoBR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGnh4e7ar8__5aXFTlzcjWA5pYyBPuUSlM4loJxVvfJcg&oe=66B85228",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Sandwich",
  },

];
//data Nước
const data_nuoc = [

  //nước
  {
    ID_san_pham: "10",
    ten_san_pham: "Ly Coca",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449713404_1014425710686777_7072643948436122871_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_-3vT0neKo0Q7kNvgHKkrk1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHgq56QD2HlkksKT-vSkPF_bxaph5F0YDj90Qci8cGwqg&oe=66B84166",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Nước",
  },
  {
    ID_san_pham: "11",
    ten_san_pham: "Ly Pepsi",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449760330_1964364033983646_234472364735796400_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=KBAEzfnlGMsQ7kNvgGo-OwG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHjxUjmFOhDX_rYkLUtkYS_YxPL7lvR-KiYozRuTjUjyg&oe=66B85A37",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Nước",
  },
  {
    ID_san_pham: "12",
    ten_san_pham: "Ly Sprite",
    gia: "15.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449447420_1543125749958464_8539285668009368899_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=6U66EzRLm7YQ7kNvgEwL4Rc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEsWAVIFcZcjw4CeeNyP5E4IAPqPEmh3OJty33M6o1gcQ&oe=66B83CBF",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Nước",
  },
  {
    ID_san_pham: "13",
    ten_san_pham: "Ly Cam",
    gia: "10.000đ",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/449822265_1184014116260240_8402911738474024483_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=g074sSR-tC0Q7kNvgGsU62P&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHTNxwQ0R-P_-zmkqC0szak_VWZ2KmEAfjBLxYumA2SYQ&oe=66B839FA",
    mieu_ta: "Bánh mì nóng giòn. Xí mại chắt thịt mộng nước. Nước sót gia truyền, đậm đà và độc quyền. ",
    loai: "Nước",
  },
];
const Home = (props) => {

  const {navigation} = props;

  // const {Email} = useContext(AppContext);
  // const {Name} = useContext(AppContext);

  // console.log(Email);
  // console.log(Name);

  // const [DataCate, setDataCate] = useState([{
  //   "_id": "",
  //   "name": "All"
  // }])
  const [IdCate, setIdCate] = useState("1")
  const [DataProduct, setDataProduct] = useState([])
  // const [DataGraspus_graspus, setDataGraspus_graspus] = useState([])

  //first 
  // useEffect(() => {
  //   axios.get("https://cro101-b166e76cc76a.herokuapp.com/products?category=65b07ddcfc13ae4836b4cb0f")
  //   .then(function (response) {
  //     if(response.data.status == true){
  //       setDataGraspus_graspus(response.data.products)
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);

  //   });

  //   return () => {

  //   }
  // }, [])


  // //mục danh
  // useEffect(() => {
  //   axios.get("https://cro101-b166e76cc76a.herokuapp.com/categories")
  //   .then(function (response) {

  //     if(response.data.status == true){
  //       setDataCate(DataCate.concat(response.data.categories))
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);

  //   });

  //   return () => {

  //   }
  // }, [])

  //chọn danh mục 
  useEffect(() => {
    // axios.get("https://cro101-b166e76cc76a.herokuapp.com/products",{
    //   params: {
    //     category: IdCate
    //   }
    // })
    // .then(function (response) {
    //   if(response.data.status == true){
    //     setDataProduct(response.data.products)
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error);

    // });
    switch (IdCate) {
      case "1": {
        setDataProduct(data_tat_ca_san_pham);
        break;
      }
      case "2": {
        setDataProduct(data_banh_mi);
        break;
      }
      case "3": {
        setDataProduct(data_hamburger);
        break;
      }
      case "4": {
        setDataProduct(data_sandwich);
        break;
      }
      case "5": {
        setDataProduct(data_nuoc);
        break;
      }
      default: {
        setDataProduct(data_tat_ca_san_pham);
        break;
      }

    }


    return () => {

    }
  }, [IdCate])



  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFFF', alignItems: 'center' }}>
      <StatusBar barStyle='light-content' />


      <View style={{ flexDirection: 'row', justifyContent: "center", width: "100%", height: 170 }}>
        {/* logo */}
        <TouchableOpacity
        // onPress={() => navigation.navigate('Setting')}
        >
          <Image
            style={{ width: 150, height: 150, margin: 15 }}
            source={require('../../img/Logo_ko_nen.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>

        {/* ten shop  */}
        <View style={{ backgroundColor: "white", width: 230, justifyContent: "center", alignItems: "center" }}>
          <Text style={{color: 'red', fontFamily: 'Poppins', fontSize: 28, fontWeight: 'bold',}}>BÁNH MÌ HÔNG</Text>
          <Text style={{color: 'black', fontFamily: 'Poppins', fontSize: 20, textAlign: "center", margin: 15}}>Đồ ăn nhanh không cần lanh tanh</Text>
        </View>

      </View>







      {/* List danh mục */}
      <View style={{ height: 85 }}>
        <FlatList
          data={data_danh_muc}
          renderItem={({ item }) => <TouchableOpacity onPress={() => setIdCate(item.ID_loai)}>
            <Item_menu dataItem={item} id={IdCate} />
          </TouchableOpacity>}
          keyExtractor={item => item.ID_loai}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>

      {/* list sp */}
      <View style={{ height: "70%" }}>
        <FlatList
          data={DataProduct}
          renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Chi_tiet_san_pham', { img: item.img, ten_san_pham: item.ten_san_pham, gia: item.gia, mieu_ta: item.mieu_ta})}>
            <Item_sp dataItem={item} />
          </TouchableOpacity>}
          keyExtractor={item => item.ID_san_pham}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
      {/* <Text>fsdnfjs</Text> */}






    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  view: {
    width: 500,
    height: 200,
  }
})
