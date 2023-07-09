import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { liquidShapeKeyframes } from "@/utils/animations";

export default function ProfilePicture() {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        as={motion.div}
        animation={`${liquidShapeKeyframes} 8s ease-in-out infinite`}
        bgGradient="linear-gradient(45deg, #00ffb6  0%, #000fa3 100%)"
        w={300}
        h={300}
      />
    </Box>
  );
}
