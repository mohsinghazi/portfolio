import ContactInfo from "./ContactInfo";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto lg:max-w-6xl xl:max-w-7xl py-20">
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-lg lg:text-xl text-BlueJeans">Get in touch</h5>
        <h1 className="text-3xl lg:text-5xl font-semibold">Contact</h1>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-10 pt-10 px-5 lg:px-0">
          <ContactInfo />
          <SendMessage />
        </div>
      </div>
    </section>
  );
};

export default Contact;
