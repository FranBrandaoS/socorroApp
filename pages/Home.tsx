import { Avatar, Button, Divider, ListItem, Text } from "@rneui/themed"
import { useEffect, useState } from "react"
import axiosConfig from "../config/axios"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title"
import { ScrollView } from "react-native"
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle"

import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store'

export default function Home({ navigation }) {
    const [produtos, setProdutos] = useState([])
    const [nomeUser, setNomeUser] = useState('')

    useEffect(() => {
        axiosConfig.get('products')
        .then((resposta)=>{
            setProdutos(resposta.data.products)
        })
        .catch(()=>{
            alert('Erro ao conectar')
        })
        AsyncStorage.getItem('user')
        .then((user) => {
            if(user) setNomeUser(user)
        })
    },[])

    async function sair(){
        await SecureStore.deleteItemAsync('token')
        await AsyncStorage.removeItem('user')
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <Text h1>Home</Text>
            <Text>Olá, {nomeUser}</Text>
            <Divider />
            <Text h3>Produtos</Text>
            <Divider />
            {
                produtos.length <= 0 && (
                    <Text>Nenhum produto encontrado</Text>
                )
            }
            {
                produtos.map((produto) => (
                    <ListItem key={produto.id} onPress={()=>{
                        navigation.navigate("Produto",{produto})
                    }}>
                        <Avatar source={{uri: produto.thumbnail}} />
                        <ListItemContent>
                            <ListItemTitle>
                                {produto.title}
                            </ListItemTitle>
                            <ListItemSubtitle>
                                ${produto.price}
                            </ListItemSubtitle>
                        </ListItemContent>
                    </ListItem>
                ))
            }
            <Divider />
            <Button title='Sair' onPress={sair} />
        </ScrollView>
    )
}