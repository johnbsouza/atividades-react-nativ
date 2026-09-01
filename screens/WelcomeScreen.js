import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme/index';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.bg }}>
    <View className="flex-1 flex justify-end pb-12 my-4">
        <Text className="text-black font-bold text-center text-5xl">
          Bem Vindo
        </Text>
        <View className="flex-row justify-center">
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3076/3076753.png' }} 
            style={{ width: 280, height: 280 }}
          />
        </View>
        <View className="space-y-7 mx-5">
          <TouchableOpacity 
            onPress={() => navigation.navigate('SignUp')}
            className="py-3 bg-yellow-400 rounded-xl">
              <Text className="text-xl font-bold text-center text-gray-700">
                Cadastre-se
              </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-black font-semibold">Ja possui cadastro ?  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="font-semibold text-sky-400"> Entre </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}