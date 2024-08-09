import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ProductNavigation from './ProductNavigation';

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../rtk/API';

const AppNavigation = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts());
    return () => {
    }
  }, [])

  return (
    <NavigationContainer>
      {/* {
        user ? <ProductNavigation /> : <UserNavigation />
      } */}
      <ProductNavigation />
    </NavigationContainer>
  )
}

export default AppNavigation