import "./form.css";

const Form = () => {
  return (
    <div>
      {/* <label htmlFor="name">Name</label> */}
      <input type="text" name="name" id="name" placeholder="Name*" required />
      {/* <label htmlFor="email">Email</label> */}
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email*"
        required
      />
      {/* <label htmlFor="phone">Phone</label> */}
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone*"
        required
      />
      <textarea
        name="help"
        id="help"
        cols="100"
        rows="10"
        placeholder="How can we help?*"
      />
    </div>
  );
};

export default Form;
