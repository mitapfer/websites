import Form from "../form/Form";
import ContactsInfo from "../contactsInfo/ContactsInfo";
import { Helmet } from "react-helmet";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>News - Contacts</title>
      </Helmet>
      <div className="contacts">
        <div className="container">
          <div className="contacts__inner">
            <Form />
            <ContactsInfo />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts;