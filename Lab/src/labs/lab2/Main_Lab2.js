import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'


const colors = ["white", "grey", "red", "green", "blue"];
const Main_Lab2 = () => {

  const [user, setUser] = useState({
    name: 'Chưa có tên',
    avatar:
      'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/124072216_2842835719287440_7397886645200174942_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=ikxtFkL255gQ7kNvgGaL-Wb&_nc_ht=scontent.fhan3-4.fna&oh=00_AYArV2CTikWyryM3b395oBUUO3035A41kmwZvSWMJ-XAzQ&oe=66B2EB41',
  });

  const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin',);

  const [footerColor, setFooterColor] = useState(colors[0]);

  // Cập nhật thông tin cho tài khoản
  const handleUpdateInfor = useCallback(_user => {
    setUser(_user);
  }, []);

  // Hàm random màu cho background của Footer
  const handleRandomColor = useCallback(() => {
    const numberRan = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRan]);
  }, []);

  // Mỗi lần thông tin user thay đổi, sẽ cập nhật lại thời gian sửa đổi
  useEffect(() => {
    const currentdate = new Date();
    const datetime =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) + // riêng tháng sẽ phải +1
      '/' +
      currentdate.getFullYear() +
      ' ' +
      currentdate.getHours() +      
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds(); 
      setLastTimeUpdate(datetime);
  }, [user]);



  return (
    <View style={styles.container}>
      <Header user={user} />
      <Body
        onUpdateInfor={handleUpdateInfor}
        onClickChangeBgFooter={handleRandomColor}
      />
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </View>
  )
}

export default Main_Lab2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})