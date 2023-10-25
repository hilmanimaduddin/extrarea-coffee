import {
  Box,
  Button,
  chakra,
  Image,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import image from "../image/instagram.png";
import image2 from "../image/Screenshot_20.jpg";
import image3 from "../image/Screenshot_22.jpg";
import image1 from "../image/Screenshot_23.jpg";
import MyCard from "./Card/card";

interface StatsCardProps {
  title: string;
  stat: string;
  photo: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, photo } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Image h={"400px"} w={"100%"} objectFit={"cover"} src={photo} alt="" />
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Social() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Box
        mb={10}
        display={"flex"}
        justifyContent={"center"}
        flexDir={"column"}
        gap={5}
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          Follow Kami
        </chakra.h1>
        <Box display={"flex"} justifyContent={"center"}>
          <Link target="_blank" to={"https://www.instagram.com/extrarea_/"}>
            <Button colorScheme={"blue"} size={"lg"} display={"flex"} gap={2}>
              <Image boxSize={"20px"} src={image} alt="" />
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Follow
              </Text>
            </Button>
          </Link>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <MyCard name={"Blitar"} imageURL={image1} />
          <MyCard name={"Malang"} imageURL={image2} />
          <MyCard name={"Tulungagung"} imageURL={image3} />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
