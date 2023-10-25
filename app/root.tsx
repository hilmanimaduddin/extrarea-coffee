import { ChakraProvider } from "@chakra-ui/react";
import { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Document } from "~/Document";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Extrarea Coffee" },
    {
      tagName: "link",
      rel: "icon",
      href: "https://res.cloudinary.com/dlcgwbdtv/image/upload/v1693836013/Picsart_23-09-04_20-55-33-082_ltcwzs.png",
    },
    {
      property: "og:title",
      content: "Visit Extrarea Coffee",
    },
    {
      name: "description",
      content: "Extrarea Coffee is a coffee shop in Blitar,",
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
  ];
};

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
