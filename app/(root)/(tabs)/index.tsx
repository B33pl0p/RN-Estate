import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Index = () => {
  return (
    <View className='flex-1 justify-center items-center my-10 mx-10 '>
    <Text className='font-rubik-bold' >  Hello Hi</Text>

     <Link href = "/sign-in" >Sign In</Link>
     <Link href = "/explore" >Explore</Link>
     <Link href = "/profile" >Profile</Link>
     <Link href = "/properties/1" >Properties</Link>


    </View>
  )
}

export default Index