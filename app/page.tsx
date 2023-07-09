"use client";

import { useRef } from "react";
import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import experience from "@/content/experience";
import Navbar from "./components/Navbar";
import PersonalInformation from "./components/PersonalInformation";
import IntroSection from "./components/IntroSection";
import ProfilePicture from "./components/ProfilePicture";
import SocialLinks from "./components/SocialLinks";
import ExperienceCard from "./components/ExperienceCard";

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Container w="80%" maxW="7xl">
      <Flex
        direction="column"
        justify="space-evenly"
        align="center"
        position="fixed"
        w="50%"
        h="100%"
        left={0}
      >
        <Box>
          <ProfilePicture />
          <PersonalInformation />
        </Box>
        <Navbar
          observerRefs={[aboutRef, experienceRef, projectRef, contactRef]}
        />
        <Box>
          <SocialLinks />
        </Box>
      </Flex>
      <VStack w="50%" float="right" pb={20}>
        <Box id="about-me" mt={20} ref={aboutRef}>
          <IntroSection />
        </Box>
        <Flex
          direction="column"
          gap={8}
          mt={20}
          id="experience"
          ref={experienceRef}
        >
          {experience.map((experienceItem) => (
            <ExperienceCard
              key={experienceItem.companyName}
              data={experienceItem}
            />
          ))}
        </Flex>
        <Box id="projects" ref={projectRef}>
          <Text>Projects</Text>
        </Box>
        <Box id="contact" ref={contactRef}>
          <Text>Contact</Text>
        </Box>
      </VStack>
    </Container>
  );
}
