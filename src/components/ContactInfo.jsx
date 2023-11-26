import FindMe from "./FindMe";

const ContactInfo = () => {
  return (
    <figure className="p-5 nm-flat-primary rounded-lg col-span-2 ">
      <img
        src="https://images.unsplash.com/photo-1582389197103-1ac281b8a6c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmQlMjBzaGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <div className="py-5 text-lg">
        <h1 className="text-xl font-bold ">MOHD Mohsin Ghazi</h1>
        <h2 className="pt-5 text-lg font-semibold ">Software Engineer</h2>
        <p>I am looking for job change.Contact with me via call or email</p>
        <div className="pt-5">Phone: +91 7830811252</div>
        <div>Email: md.mohsin.ghazi@outlook.com</div>
      </div>
      <FindMe />
    </figure>
  );
};

export default ContactInfo;
