import { useNavigation } from '@react-navigation/native';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme/index';

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3428/3428647.png' }} 
              style={{ width: 140, height: 140 }} 
            />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8" style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder="Enter Name"
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder="Enter Email"
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                placeholder="Enter Password"
            />
            <TouchableOpacity className="py-3 bg-yellow-400 rounded-2xl">
                <Text className="text-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/300/300221.png' }} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png' }} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' }} className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('/login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}