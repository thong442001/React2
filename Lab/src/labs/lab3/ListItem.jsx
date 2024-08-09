import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Animated, {
    withTiming,
    useAnimatedStyle,
} from 'react-native-reanimated'

const ListItem = memo(({ item, viewableItems }) => {
    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItems.value
                .filter(item => item.isViewable)
                .find(viewableItem => viewableItem.item.id === item.id),
        );
        return {
            opacity: withTiming(isVisible ? 1 : 0),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.2),
                },
            ],
        };
    }, []);
    return <Animated.View style={[styles.container, rStyle]} />;
})

export default ListItem

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 400,
        backgroundColor: 'blue',
        borderRadius: 20,
        marginVertical: 15,
    },
})