import './contactsInfo.scss';

const ContactsInfo = () => {
    return (
        <div className="contacts__info">
            <h2 className="contacts__title">
                CONTACTS
            </h2>
            <div className="contacts__phone">
                Telephone: <a href="tel:734412533">+734412533</a>
            </div>
            <div className="contacts__adress">
                Adress: 2101 N Stafford St, Arlington, VA 22207, United States
            </div>
            <div className="contacts__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.3498761395952!2d-77.01865798885467!3d38.90798081955375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7f2449d8f3d%3A0xe8b8049fc53afa7f!2sWalter%20Convention%20Center%20Apartments%2030%20Day%20Rentals!5e0!3m2!1sen!2s!4v1647152279934!5m2!1sen!2s" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ContactsInfo;