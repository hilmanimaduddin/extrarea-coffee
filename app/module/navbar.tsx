import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import image from "../image/Picsart_23-09-04_20-55-33-082.png";

interface Props {
  children: React.ReactNode;
}
const mylink = [
  { name: "Home", link: "/" },
  { name: "Tentang", link: "/about" },
  { name: "Menu", link: "/menu" },
  { name: "Testimonial", link: "/testimonial" },
];
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* <Box>Logo</Box> */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {mylink.map((link, index) => (
                <Box key={index}>
                  <Link to={link.link}>
                    <Button>{link.name}</Button>
                  </Link>
                </Box>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={image} />
              </MenuButton>
              <MenuList>
                <Link to={"https://www.instagram.com/extrarea_/"}>
                  <MenuItem>Instagram</MenuItem>
                </Link>
                <Link to={"https://www.tiktok.com/@extrarea3"}>
                  <MenuItem>TikTok</MenuItem>
                </Link>
                <MenuDivider />
                <Link target="_blank" to={"https://wa.me/082140078111"}>
                  <MenuItem>Contact Me</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {mylink.map((link, index) => (
                <Box key={index}>
                  <Link to={link.link}>
                    <Button>{link.name}</Button>
                  </Link>
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
