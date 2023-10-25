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

export default function Product() {
  const data = [
    {
      title: "Kopi",
      stat: "Kopi Hitam",
      photo:
        "https://i.pinimg.com/564x/39/e8/9f/39e89f25bf75858f4c0be23d4a67f1aa.jpg",
    },
    {
      title: "Kopi",
      stat: "Kafe Latte",
      photo:
        "https://i.pinimg.com/564x/54/5d/e3/545de3f1f1a0bb2d629fa9289147a2c1.jpg",
    },
    {
      title: "Teh",
      stat: "Es Teh",
      photo:
        "https://i.pinimg.com/564x/0a/7c/27/0a7c27f56aa886c3451e4cf97bc37e57.jpg",
    },
  ];
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
          Menu Extrarea
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {data.map((item, index) => (
            <StatsCard
              key={index}
              title={item.title}
              stat={item.stat}
              photo={item.photo}
            />
          ))}
        </SimpleGrid>
        <Box display={"flex"} justifyContent={"center"}>
          <Link to={"/menu"}>
            <Button colorScheme={"blue"} size={"lg"}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Selengkapnya
              </Text>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
