import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import image1 from "../image/WhatsApp Image 2023-10-25 at 11.49.33_9e7c0fcb.jpg";
import image2 from "../image/WhatsApp Image 2023-10-25 at 11.49.58_d3f67773.jpg";
import image3 from "../image/WhatsApp Image 2023-10-25 at 11.50.17_5558e4ba.jpg";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"lg"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text
          fontSize={"sm"}
          color={useColorModeValue("gray.600", "gray.400")}
        ></Text>
      </Stack>
    </Flex>
  );
};

export default function MyTestimonial() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} pb={5}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Testimoni</Heading>
          {/* <Text>We have been working with clients around the world</Text> */}
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                "Extrarea Coffee adalah tempat yang luar biasa! Aroma kopi
                mereka begitu memikat, dan rasa kopinya tak tertandingi. Saya
                selalu merasa tenang dan terinspirasi ketika berada di sini."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={image1} name={"Wildan Faza"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                "Kafe ini, Extrarea Coffee, adalah tempat yang selalu membuat
                saya merasa di rumah. Aroma kopi, keramahan staf, dan suasana
                yang nyaman membuat saya selalu kembali."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={image2} name={"Laksamana Adjie"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                "Saya sering datang ke Extrarea Coffee untuk beristirahat
                sejenak. Kopi mereka selalu segar dan minuman segar yang lezat.
                Tempat ini memberikan ketenangan dan kreativitas."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={image3} name={"Salmansyah Mousavi"} />
          </Testimonial>
        </Stack>
      </Container>
      <Box display={"flex"} justifyContent={"center"}>
        <Link to={"/testimonial"}>
          <Button colorScheme={"blue"} size={"lg"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Selengkapnya
            </Text>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
