import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import { Box, Center, HStack, Text, VStack, View } from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome6,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Index() {
  const navigate = useNavigation();
  return (
    <SafeAreaView>
      <Header />
      <Center>
        <Box rounded={"xl"} w={"90%"} bg={"#fff"} p={4} mt={6}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={16}>
            Money to/from Island Bank
          </Text>
          <VStack space={6} mt={4}>
            <TouchableOpacity>
              <HStack space={4} alignItems={"center"}>
                <View opacity={0.2}>
                  <MaterialCommunityIcons name="bookmark-check-outline" size={20} color="black" />
                </View>
                <Text>Move your direct deposit</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity>
              <HStack space={4} alignItems={"center"}>
                <View opacity={0.2}>
                  <MaterialIcons name="fit-screen" size={20} color="black" />
                </View>
                <Text>Mobile cheque deposit</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity>
              <HStack space={4} alignItems={"center"}>
                <View opacity={0.2}>
                  <Feather name="map-pin" size={20} color="black" />
                </View>
                <Text>Find an ATM near you</Text>
              </HStack>
            </TouchableOpacity>
          </VStack>
        </Box>
        <Box rounded={"xl"} w={"90%"} bg={"#fff"} p={4} mt={6}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={16}>
            Transferring money and payments
          </Text>
          <VStack space={6} mt={4}>
            <TouchableOpacity
              onPress={() => navigate.navigate("Transfers", { screen: "TransferDirect" })}
            >
              <HStack space={4} alignItems={"center"}>
                <View opacity={0.2}>
                  <FontAwesome6 name="arrow-right-arrow-left" size={20} color="black" />
                </View>
                <Text>Transfer between accounts</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity>
              <HStack space={4} alignItems={"center"}>
                <View opacity={0.2}>
                  <FontAwesome5 name="user-circle" size={20} color="black" />
                </View>
                <Text>Pay family and friends</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate.navigate("Transfers", { screen: "WireTransfer" })}
            >
              <HStack space={4} alignItems={"center"}>
                <View opacity={0.2}>
                  <Ionicons name="earth-outline" size={20} color="black" />
                </View>
                <Text>Send money internaionally</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity>
              <HStack space={4} alignItems={"center"}>
                <View opacity={0.2}>
                  <Feather name="zap" size={20} color="black" />
                </View>
                <Text>Pay bills electronically</Text>
              </HStack>
            </TouchableOpacity>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
}
