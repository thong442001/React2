import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, lazy, Suspense } from 'react'
// dùng lazy
// sẽ import khi Suspense true
const Vd1 = lazy(() => import('./MyMemo'))

//VD 2
const sleep = (ms) => {
    return new Promise((res) => setTimeout(res, ms))
};
const Vd2 = lazy(async () =>{
    await sleep(2000);
    console.log("vd2 đã chạy xong... ")
    return import('./Demo_useCallback');
});

const Demo_memo = () => {

    const [Test, setTest] = useState(1);


    return (
        <View style={styles.container}>

            <View style={styles.div_khung}>
                {/* VD1 */}
                {
                    Test % 2 == 0 &&
                    <Suspense fallback={<Text>Loading....</Text>}>
                        <Vd1 cart={Test} />
                    </Suspense>
                    //đầu tiên nó sẽ chạy fallback 
                    //nếu lazy import xong thì sẽ chạy lazy và ẩn fallback
                }
                <Button
                    title="++"
                    onPress={() => setTest(Test + 1)} />
            </View>

            <View style={styles.div_khung}>
                {/* VD2 */}
                <Suspense fallback={<Text>vd2 đang chạy .....</Text>}>
                    <Vd2/>
                </Suspense>
            </View>

        </View>
    )
}

export default Demo_memo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around",
    },
    div_khung:{
        borderWidth: 3,
        borderColor: "red",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
})