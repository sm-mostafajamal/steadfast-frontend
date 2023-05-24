import "./form.css";

const Form = () => {
  return (
    <div>
      <input type="text" name="name" id="name" placeholder="Name*" required />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email*"
        required
      />
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="Phone*"
        required
      />
      <textarea
        name="message"
        id="message"
        cols="100"
        rows="10"
        placeholder="How can we help?*"
      />
    </div>
  );
};

export default Form;
