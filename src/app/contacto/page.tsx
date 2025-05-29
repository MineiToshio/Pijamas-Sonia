import ContactInfo from "@/components/ContactInfo";
import Map from "@/components/Map";
import PageTitle from "@/components/PageTitle";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <>
      <PageTitle title="Encuéntranos aquí" />
      <Map />
      <ContactInfo />
    </>
  );
};

export default page;
