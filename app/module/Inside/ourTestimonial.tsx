import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import image1 from "../../image/WhatsApp Image 2023-10-25 at 11.49.33_9e7c0fcb.jpg";
import image2 from "../../image/WhatsApp Image 2023-10-25 at 11.49.58_d3f67773.jpg";
import image3 from "../../image/WhatsApp Image 2023-10-25 at 11.50.17_5558e4ba.jpg";
import image4 from "../../image/WhatsApp Image 2023-10-25 at 14.39.35_c0396567.jpg";
import image5 from "../../image/WhatsApp Image 2023-10-25 at 14.42.36_d3c33a2b.jpg";
import image6 from "../../image/WhatsApp Image 2023-10-25 at 14.42.37_5148375a.jpg";

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

export default function OurTestimonial() {
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
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <Box w={["100%", "100%", "40%", "30%"]}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialText>
                    "Extrarea Coffee adalah tempat yang luar biasa! Aroma kopi
                    mereka begitu memikat, dan rasa kopinya tak tertandingi.
                    Saya selalu merasa tenang dan terinspirasi ketika berada di
                    sini."
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar src={image1} name={"Wildan Faza"} />
              </Testimonial>
            </Box>
            <Box w={["100%", "100%", "40%", "30%"]}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialText>
                    "Kafe ini, Extrarea Coffee, adalah tempat yang selalu
                    membuat saya merasa di rumah. Aroma kopi, keramahan staf,
                    dan suasana yang nyaman membuat saya selalu kembali."
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar src={image2} name={"Laksamana Adjie"} />
              </Testimonial>
            </Box>
            <Box w={["100%", "100%", "40%", "30%"]}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialText>
                    "Saya sering datang ke Extrarea Coffee untuk beristirahat
                    sejenak. Kopi mereka selalu segar dan minuman segar yang
                    lezat. Tempat ini memberikan ketenangan dan kreativitas."
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar src={image3} name={"Salmansyah Mousavi"} />
              </Testimonial>
            </Box>
            <Box w={["100%", "100%", "40%", "30%"]}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialText>
                    "Sisi Seni Extrarea Coffee adalah perpaduan unik antara seni
                    dan rasa. Mereka tidak hanya menyajikan kopi yang luar
                    biasa, tetapi juga menghadirkan seni di mana pun Anda
                    melihat."
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar src={image4} name={"Habib Ilham"} />
              </Testimonial>
            </Box>
            <Box w={["100%", "100%", "40%", "30%"]}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialText>
                    "Saya telah mencicipi kopi dari seluruh dunia, tetapi
                    Extrarea Coffee adalah yang terbaik. Mereka memiliki beragam
                    kopi eksotis yang memanjakan lidah dan jiwa."
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar src={image5} name={"Bahrul Ulum"} />
              </Testimonial>
            </Box>
            <Box w={["100%", "100%", "40%", "30%"]}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialText>
                    "Extrarea Coffee adalah salah satu tempat favorit saya. Kopi
                    mereka selalu segar dan nikmat. Ini adalah tempat yang
                    sempurna untuk memulai pagi dengan semangat!"
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar src={image6} name={"Zaky Fathur"} />
              </Testimonial>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
