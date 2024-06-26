import React from "react";
import { Text, VStack, HStack, Container, Box } from "native-base";
import CustomBackButton from "./CustomBackButton";

const CustomHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <Container mb={1} mt={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Box ml={4}>
          <CustomBackButton />
        </Box>
        <VStack alignItems="center" w={"85%"}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={18} textAlign={"center"}>
            {title}
          </Text>
          {subtitle && (
            <Text
              fontFamily={"Manrope_500Medium"}
              fontSize={12}
              color="#7B7B7B"
              m={0}
              lineHeight={16}
            >
              {subtitle}
            </Text>
          )}
        </VStack>
      </HStack>
    </Container>
  );
};

export default CustomHeader;
