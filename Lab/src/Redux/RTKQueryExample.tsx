// import { Text, View, ScrollView } from "react-native"
// import { useGetPostsQuery } from "./Slices/api_slice"

// let Post_item = (post: any) => {
//     return (
//         <View style={{ backgroundColor: 'green', borderCurve: 5, margin: 10, padding: 10 }}>
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>{post.post.title}</Text>
//             <View style={{ height: 10 }} />
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>{post.post.body}</Text>
//         </View>
//     )
// }

// export const RTKQueryExample = () => {
//     const {
//         data: posts = [],
//         isLoading,
//         isSuccess,
//         isError,
//         error,
//         refetch
//     } = useGetPostsQuery()

//     let content

//     if (isLoading) {
//         content = <View><Text style={{ alignContent: "center" }}>Content is loading</Text></View>
//     } else if (isSuccess) {
//         content = <ScrollView>
//         {posts.map(p => <Post_item key={p.id} post={p} />)}
//         </ScrollView>
//     } else if (isError) {
//         content = <View><Text style={{ alignContent: "center" }}>Error occurs</Text></View>
//     }
//     return content 

// }