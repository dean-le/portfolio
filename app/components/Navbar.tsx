import { RefObject, useEffect, useState } from "react";
import { Link } from "@chakra-ui/next-js";
import { VStack } from "@chakra-ui/react";
import { NAV_ITEMS } from "@/constants/routes";

type Props = {
  observerRefs: RefObject<HTMLDivElement>[];
};

export default function Navbar(props: Props) {
  const { observerRefs } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      observerRefs.forEach((refItem, refIndex) => {
        if (
          refItem?.current?.offsetTop !== undefined &&
          scrollPosition >= refItem.current.offsetTop - 60
        ) {
          setActiveIndex(refIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [observerRefs]);

  return (
    <VStack spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Link
          key={navItem.href}
          px={6}
          py={2}
          href={navItem.href ?? "#"}
          bgColor={index == activeIndex ? "whiteAlpha.200" : ""}
          color={index == activeIndex ? "gray.300" : "gray.400"}
          fontSize={12}
          fontWeight={index === activeIndex ? 800 : 600}
          textTransform="uppercase"
          borderRadius={6}
        >
          {navItem.label}
        </Link>
      ))}
    </VStack>
  );
}
