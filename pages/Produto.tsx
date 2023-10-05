import { Image, Text } from "@rneui/themed"
import { StyleSheet } from "react-native"

export default function Produto({route, navigation}){
    const {produto} = route.params
    return (
        <>
        <Text h1>{produto.title}</Text>
        <Text h3>{produto.price}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
      aspectRatio: 1,
      width: '50%',
      flex: 1,
    }
})