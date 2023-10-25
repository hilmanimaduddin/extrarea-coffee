import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  SpaceProps,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "~/module/footer";
import Navbar from "~/module/navbar";
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

const About = () => {
  return (
    <>
      <Navbar />
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
              zaman dahulu, Extrarea Coffee adalah tempat berkumpulnya para
              kawan - kawan yang menginspirasi generasi demi generasi. Suasana
              hangat dan berdiskusi yang ada di sini telah menjadi landasan bagi
              banyak ide brilian yang lahir di antara setumpuk buku dan
              secangkir kopi yang harum.
            </Text>
            {/* <BlogAuthor
              name="Hilman Imaduddin"
              date={new Date("2022-04-06T19:01:27Z")}
            /> */}
          </Box>
        </Box>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Text as="p" fontSize="lg">
            Cerita kafe kami terkait erat dengan kopi. Kami percaya bahwa kopi
            bukan sekadar minuman; itu adalah sebuah pengalaman. Itulah sebabnya
            kami dengan tekun menyajikan biji kopi terbaik dari berbagai penjuru
            dunia, menggilingnya dengan cinta, dan menyeduhnya untuk Anda dalam
            berbagai cara yang menggugah selera.
          </Text>
          <Text as="p" fontSize="lg">
            Kami juga tidak hanya memelihara tradisi klasik, tetapi juga
            memberikan sentuhan modern dalam hidangan dan minuman kami. Setiap
            resep dan menu kami dibuat dengan teliti, memadukan cita rasa lama
            yang telah diwariskan dengan inovasi segar yang akan memanjakan
            lidah Anda.
          </Text>
          <Text as="p" fontSize="lg">
            Extrare Coffee adalah lebih dari sekadar kafe. Ini adalah rumah bagi
            komunitas, tempat berkumpulnya teman dan keluarga, serta tempat Anda
            dapat menemukan ketenangan di tengah hiruk-pikuk kehidupan
            sehari-hari. Sebagai bagian dari warisan kafe kami, kami percaya
            dalam membagikan cerita, tertawa bersama, dan merayakan hidup
            bersama-sama.
          </Text>
          <Text as="p" fontSize="lg">
            Seiring berjalannya waktu, kafe kami telah mengalami banyak
            perubahan, tetapi intinya tetap sama. Kami memiliki tekad untuk
            menghidupkan kembali warisan kafe tradisional dengan menawarkan
            tempat yang hangat, minuman yang lezat, dan pengalaman yang tak
            terlupakan.
          </Text>
          <Text as="p" fontSize="lg">
            Jadi, jika Anda mencari lebih dari sekadar secangkir kopi atau
            hidangan yang lezat, datanglah ke Extrareaa Coffee. Bergabunglah
            dalam perjalanan kami untuk menyatukan warisan kafe dengan cinta
            untuk kenyamanan dan suasana yang hangat. Kami dengan tulus
            mengundang Anda untuk menjadi bagian dari cerita kami dan membuat
            cerita Anda sendiri di sini di Extrarea Coffee.
          </Text>
          <Text as="p" fontSize="lg">
            Terima kasih atas kunjungan Anda, dan kami berharap dapat menyambut
            Anda dengan senyuman dan cinta dalam setiap cangkir yang kami
            sajikan.
          </Text>
          <Text as="p" fontSize="lg">
            Selamat menikmati pengalaman kafe kami di Extrarea Coffee.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default About;
