import {
  View,
  Text,
  Input,
  Center,
  Stack,
  Flex,
  Image,
  Button,
  HStack,
  ScrollView,
  VStack,
} from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../Components/CustomHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WireTransfer = () => {
  const [amount, setAmount] = useState("$");
  const textInputRef = useRef(null);
  const nav = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current?.focus();
      }
    }, 200);
    if (amount === "") {
      setAmount("$");
    }
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeader title="Wire Transfer" />
      <Center>
        <Input
          variant={"unstyled"}
          ref={textInputRef}
          my={4}
          _input={{ fontSize: 48, fontFamily: "Manrope_400Regular" }}
          value={amount}
          onChangeText={(e) => setAmount(e)}
          w={"2/3"}
          keyboardType="number-pad"
          fontSize={"4xl"}
          textAlign={"center"}
        />
      </Center>
      <Stack space={2} w={"90%"} mx={"auto"} justifyContent={"space-between"} flex={1}>
        <ScrollView>
          <Stack space={4}>
            <Stack>
              <Text fontFamily={"Manrope_700Bold"} fontSize={16}>
                From
              </Text>
              <TouchableOpacity>
                <Flex align="center" direction="row" justify="space-between" mb={2} mt={4}>
                  <Stack direction={"row"} alignItems={"center"} space={2}>
                    <Image source={require("../../../assets/dollar_wings.png")} alt="Money" />
                    <Stack>
                      <Text fontFamily={"Manrope_700Bold"} fontSize={16}>
                        New Account
                      </Text>
                      <Text fontSize={"2xs"} color={"#7b7b7b"}>
                        $2,738.00 • Checking **2830
                      </Text>
                    </Stack>
                  </Stack>
                  <MaterialIcons name="keyboard-arrow-right" size={28} color="#5E41E6" />
                </Flex>
              </TouchableOpacity>
            </Stack>
            <Stack>
              <Text fontFamily={"Manrope_700Bold"} fontSize={16}>
                To
              </Text>
              <TouchableOpacity>
                <Flex align="center" direction="row" justify="space-between" mb={2} mt={4}>
                  <Stack direction={"row"} alignItems={"center"} space={2}>
                    <Image source={require("../../../assets/citi_bank.png")} alt="Money" />
                    <Stack>
                      <Text fontFamily={"Manrope_700Bold"} fontSize={16}>
                        Wade Cross
                      </Text>
                      <Text fontSize={"2xs"} color={"#7b7b7b"}>
                        CitiBank • Savings **7392
                      </Text>
                    </Stack>
                  </Stack>
                  <MaterialIcons name="keyboard-arrow-right" size={28} color="#5E41E6" />
                </Flex>
              </TouchableOpacity>
            </Stack>
          </Stack>
          <VStack my={4} space={6}>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Text color={"#3E3E3E"} fontFamily={"Manrope_500Medium"}>
                Recipient gets
              </Text>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$518.03 USD</Text>
                <Text fontSize={"2xs"} color={"#7B7B7B"}>
                  Exchange rate: 1XCD = 0.37 USD
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Text color={"#3E3E3E"} fontFamily={"Manrope_500Medium"}>
                Fee
              </Text>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$50 XCD</Text>
                <Text fontSize={"2xs"} color={"#7B7B7B"}>
                  You save upto $18.75
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Text color={"#3E3E3E"} fontFamily={"Manrope_500Medium"}>
                Delivery
              </Text>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>Within 24hrs</Text>
                <Text fontSize={"2xs"} color={"#7B7B7B"}>
                  International Swift Transfer • USA
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Text color={"#3E3E3E"} fontFamily={"Manrope_500Medium"}>
                Total cost
              </Text>
              <Text fontFamily={"Manrope_700Bold"}>$1450.00</Text>
            </HStack>
          </VStack>
        </ScrollView>
        <VStack space={6} alignItems={"center"}>
          <TouchableOpacity onPress={() => nav.navigate("Transfers", { screen: "HowWeComp" })}>
            <HStack alignItems={"center"}>
              <Text color={"#3F3D4C"} fontFamily={"Manrope_700Bold"}>
                Get Price Comparison
              </Text>
              <Feather name="arrow-up-right" size={18} color="#3F3D4C" />
            </HStack>
          </TouchableOpacity>
          <Button
            w={"100%"}
            py={4}
            mb={6}
            _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
            onPress={() => nav.navigate("Transfers", { screen: "TransferProcess" })}
            _pressed={{ bg: "#f1f1f1", borderWidth: 1, borderColor: "#5E41E6" }}
          >
            Confirm & send
          </Button>
        </VStack>
      </Stack>
    </SafeAreaView>
  );
};

export default WireTransfer;
