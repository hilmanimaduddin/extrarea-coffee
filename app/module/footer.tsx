import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import image from "../image/Picsart_23-09-04_20-55-33-082.png";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
        >
          <Image boxSize={"50px"} src={image} alt="" />
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Extrarea Coffee
          </Text>
        </Box>
        <Stack direction={"row"} spacing={6}>
          <Box as="a" href={"/"}>
            Home
          </Box>
          <Box as="a" href={"/about"}>
            About
          </Box>
          <Box as="a" href={"/menu"}>
            Menu
          </Box>
          <Box as="a" href={"/testimonial"}>
            Testimonial
          </Box>
          <Box as="a" href={"http://wa.me/6281233333333"}>
            Contact
          </Box>
        </Stack>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 Extrarea Coffee.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"TikTok"}
              href={"https://www.tiktok.com/@extrarea3"}
            >
              <FaTiktok />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/extrarea_/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
