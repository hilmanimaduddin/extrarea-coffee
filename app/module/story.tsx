import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  SpaceProps,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import image from "../image/WhatsApp Image 2023-10-10 at 08.09.52_099cbe79.jpg";
import background from "../image/background.jpeg";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

interface Props {
  marginTop?: number;
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={image}
        objectFit={"cover"}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Cerita Tentang Kami</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={background}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
          gap={3}
        >
          {/* <BlogTags tags={["Engineering", "Product"]} /> */}
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Sejarah Kami
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Cerita kafe kami dimulai di jantung kota Blitar, yang telah lama
            menjadi tempat bertemunya penikmat kopi dan pecinta kenyamanan. Di
            zaman dahulu, Extrarea Coffee adalah tempat berkumpulnya para kawan
            - kawan yang menginspirasi generasi demi generasi. Suasana hangat
            dan berdiskusi yang ada di sini telah menjadi landasan bagi banyak
            ide brilian yang lahir di antara setumpuk buku dan secangkir kopi
            yang harum.
          </Text>
          <BlogAuthor
            name="Hilman Imaduddin"
            date={new Date("2022-04-06T19:01:27Z")}
          />
          <Box display={"flex"}>
            <Link to={"/about"}>
              <Button colorScheme={"blue"} size={"lg"}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  Selengkapnya
                </Text>
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;
