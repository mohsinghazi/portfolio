import { useState, useRef } from "react";
 import { BsArrowRightShort } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const SendMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [wait, setWait] = useState(false);
  const form = useRef();

  const { name, phone, email, subject, message } = formData;

  const chageHandler = (evt) => {
    setFormData((prevSatae) => ({
      ...prevSatae,
      [evt.target.name]: evt.target.value,
    }));
  };
  const submitHandler = (evt) => {
    evt.preventDefault();
    setSuccess(false);
    setWait(true);
    emailjs
      .sendForm(
        "service_poty3li",
        "template_xlp5ecn",
        form.current,
        "gHvgcdICfLOTb_F0J"
      )
      .then(
        (result) => {
          setWait(false);
          setSuccess(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="col-span-3 nm-flat-primary relative text-sm lg:text-base rounded-lg">
      <form
        ref={form}
        onSubmit={submitHandler}
        className="flex flex-col gap-5 lg:gap-10 p-10 uppercase text-BlueJeans font-semibold"
      >
        <div className="lg:flex lg:justify-between lg:gap-10 space-y-5 lg:space-y-0">
          <div className="space-y-2 w-full">
            <label className="block">your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={chageHandler}
            />
          </div>
          <div className="space-y-2 w-full">
            <label className="block">phone number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={chageHandler}
            />
          </div>
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={chageHandler}
          />
        </div>
        <div>
          <label>subject</label>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={chageHandler}
          />
        </div>
        <div>
          <label className="block">your message</label>
          <textarea
            className="nm-inset-primary-sm w-full px-4 py-3 rounded-lg font-semibold outline-none text-black text-base lg:text-xl max-h-32 h-full min-h-full"
            placeholder="Type your message"
            name="message"
            value={message}
            onChange={chageHandler}
          />
        </div>
        <button
          className="btn flex justify-center items-center space-x-1"
          type="submit"
        >
          <span> Send message</span> <BsArrowRightShort size={28} />
        </button>
      </form>
      {success && (
        <h1 className=" animate-pulse absolute bottom-5 right-1/3 text-Blue font-semibold">
          Success! Thanks for contacting.
        </h1>
      )}

      {wait && (
        <h1 className=" animate-pulse absolute bottom-5 right-1/3 text-Blue font-semibold">
          Please wait!
        </h1>
      )}
    </div>
  );
};

export default SendMessage;
