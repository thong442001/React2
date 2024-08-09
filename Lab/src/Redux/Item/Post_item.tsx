import { Text, View } from "react-native"
let Post_item = (post: any) => {
    return (
        <View style={{ backgroundColor: 'green', borderCurve: 5, margin: 10, padding: 10 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{post.post.title}</Text>
            <View style={{ height: 10 }} />
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{post.post.body}</Text>
        </View>
    )
}