import { HStack, Icon, Link } from "@chakra-ui/react";
import { SOCIAL_LINKS } from "@/constants/socials";

export default function SocialLinks() {
  return (
    <HStack gap={6} placeContent="center">
      {SOCIAL_LINKS.map((socialItem) => (
        <Link key={socialItem.name} href={socialItem.url} target="_blank">
          <Icon
            as={socialItem.icon}
            boxSize={6}
            color="whiteAlpha.600"
            cursor="pointer"
            _hover={{
              color: "whiteAlpha.900",
            }}
          />
        </Link>
      ))}
    </HStack>
  );
}
