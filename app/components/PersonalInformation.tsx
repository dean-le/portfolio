import { Box, Heading, Text } from "@chakra-ui/react";

export default function PersonalInformation() {
  return (
    <Box textAlign="center" mt={4}>
      <Heading mb={4}>Dean Le</Heading>
      <Text>Frontend Developer at TechList LLC</Text>
      <Text>
        I build accessible, inclusive products and digital experiences for the
        web.
      </Text>
    </Box>
  );
}
