import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from './UserNavigation';
import ProductNavigation from './ProductNavigation';

import { useSelector } from 'react-redux';
import Man_hinh_chao from '../components/Man_hinh_chao';
import Item_gio_hang from '../components/Item/Item_gio_hang';

const AppNavigation = () => {

  const user = useSelector(state => state.app.user);

  const [ShowManHinhChao, setShowManHinhChao] = useState(true);
  //chỉ chạy 1 lần đầu
  useEffect(() => {
    // sau time tắc màn hình chào
    setTimeout(() => {
      setShowManHinhChao(false);
    }, 500)// time
    return () => {
    }
  }, [])

  //console.log(user);

  return (
    <NavigationContainer>
      {
        ShowManHinhChao ?
          <Man_hinh_chao />
          : (user ? <ProductNavigation /> : <UserNavigation />)
      }
      {/* <Item_gio_hang/> */}
    </NavigationContainer>
  )
}

export default AppNavigation