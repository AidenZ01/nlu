import "./QuoteForm.css";
import { useState } from "react";

function QuoteForm() {
  const [showMsg, setShowMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    capability: "",
    comment: "",
    newsletter: true,
  });

  const onChangeHandler = (e) => {
    if (e.target.name === "newsletter") {
      let copy = { ...formData };
      if (e.target.checked) {
        copy.newsletter = true;
      } else {
        copy.newsletter = false;
      }
      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.table(formData);
    setFormData({
      name: "",
      email: "",
      capability: "",
      comment: "",
      newsletter: true,
    });
    setShowMsg(!showMsg);
  };

  return (
    <div className="quote-form">
      <h3>Get a quote</h3>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={onChangeHandler}
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={onChangeHandler}
        />
        <label htmlFor="capability" className="form-label">
          Choose a capability
        </label>
        <select
          name="capability"
          defaultValue={"DEFAULT"}
          required
          onChange={onChangeHandler}
        >
          <option value="DEFAULT" disabled>
            Select a capability
          </option>
          <option value="design">Design</option>
          <option value="production">Production</option>
          <option value="certification">Certification</option>
        </select>
        <label htmlFor="comment" className="form-label">
          Comment
        </label>
        <textarea
          name="comment"
          rows="5"
          placeholder="Comment"
          required
          value={formData.comment}
          onChange={onChangeHandler}
        ></textarea>
        <input
          type="checkbox"
          name="newsletter"
          onChange={onChangeHandler}
          checked={formData.newsletter}
        />
        <label htmlFor="newsletter" className="checkbox-label">
          I'd like to receive the newsletter
        </label>
        <button type="submit">Get a quote</button>
        {showMsg && (
          <p style={{ color: "red" }}>
            Please check console for submitted data.
          </p>
        )}
      </form>
    </div>
  );
}

export default QuoteForm;
