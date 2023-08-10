import { Helmet } from "react-helmet";
import ContactDetails from "../components/Contact/ContactDetails";
import Header from "../components/Contact/Header";
import Stats from "../components/Contact/Stats";
import titles from "../title";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{titles.contact}</title>
      </Helmet>
      <Header />
      <Stats />
      <ContactDetails />
    </>
  );
}

export default ContactPage;
