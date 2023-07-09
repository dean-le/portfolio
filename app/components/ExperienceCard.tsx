import Link from "next/link";
import { Box, Flex, Text, Wrap, WrapItem, Tag, Icon } from "@chakra-ui/react";
import { BiLinkExternal, BiLinkAlt } from "react-icons/bi";
import { Experience } from "@/types/content";

type Props = {
  data: Experience;
};

export default function ExperienceCard(props: Props) {
  const { data } = props;
  const {
    companyName,
    companyUrl,
    title,
    date,
    descriptions,
    tags,
    externalLinks,
  } = data;
  return (
    <Flex
      gap={4}
      p={6}
      borderRadius={16}
      cursor="pointer"
      role="group"
      _hover={{
        bgColor: "rgba(60, 60, 60, 0.1)",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
      }}
    >
      <Box minW="max-content">
        <Text
          fontSize={13}
          fontWeight={600}
          lineHeight={2}
          textTransform="uppercase"
          color="gray.400"
        >
          {date}
        </Text>
      </Box>
      <Box>
        <Link href={companyUrl} target="_blank">
          <Flex alignItems="center" gap={2}>
            <Text
              fontSize={18}
              fontWeight={500}
              color="whiteAlpha.900"
              _groupHover={{
                color: "brand.600",
              }}
            >
              {`${title} · ${companyName} `}
              <Icon as={BiLinkExternal} boxSize={4} />
            </Text>
          </Flex>
        </Link>

        {descriptions.map((descriptionItem, index) => (
          <Text key={index} mt={2} mb={3} fontSize={14}>
            {descriptionItem}
          </Text>
        ))}

        {externalLinks && externalLinks.length > 0 && (
          <Wrap mb={3}>
            {externalLinks.map((externalLinkItem) => (
              <WrapItem key={externalLinkItem.text}>
                <Link href={externalLinkItem.url} target="_blank">
                  <Flex
                    alignItems="center"
                    gap={1}
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "transform .5s",
                      color: "brand.600",
                    }}
                  >
                    <Icon as={BiLinkAlt} boxSize={3} />
                    <Text fontSize={14}>{externalLinkItem.text}</Text>
                  </Flex>
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        )}

        <Wrap>
          {tags.map((tagItem) => (
            <WrapItem key={tagItem}>
              <Tag
                px={4}
                py={2}
                borderRadius={16}
                color="brand.600"
                bg="rgba(45,212,191,0.1)"
                fontSize={12}
                fontWeight={600}
              >
                {tagItem}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}
