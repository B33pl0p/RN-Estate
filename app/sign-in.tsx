import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
const SignIn = () => {

  const handleLogin = () => {}
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-300 ">
            Welcome to EstateNP
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's get you closer to {"\n"}
            <Text className="text-primary-300">your ideal home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-10">
            Login With Google
          </Text>
          <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 ">
             <View className="flex justify-center items-center flex-row">
               <Image source={icons.google} className="h-5 w-5" resizeMode="contain">
               </Image>
               <Text className="text-black-300 text-lg font-rubik-medium ml-5 ">Continue with google</Text>
             </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
