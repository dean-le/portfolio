import { VStack, Text } from "@chakra-ui/react";
import profileIntro from "@/content/profile";

export default function IntroSection() {
  return (
    <VStack gap={4}>
      {profileIntro.map((item, index) => (
        <Text key={index} fontSize={16}>
          {item}
        </Text>
      ))}
    </VStack>
  );
}
