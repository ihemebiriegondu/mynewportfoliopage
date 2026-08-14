import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { useForm } from '@formspree/react';

import { IoIosSend } from 'react-icons/io';

import '../CSS/form.css';

const MyForm = () => {
  const formRef = useRef(null);
  const formId = process.env.REACT_APP_FORMSPREE_FORM_ID;
  const [state, handleSubmit] = useForm(formId || '');

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <form
      ref={formRef}
      name="ContactMeForm"
      method="post"
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="ContactMeForm" />
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="Name"
          id="name"
          className="form-input shadow form-control-lg"
          required
        />
      </div>

      <div className="mb-3 d-flex flex-column">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="Email Address"
          id="email"
          className="form-input shadow form-control-lg"
          required
        />
      </div>

      <div className="mb-3 d-flex flex-column">
        <label htmlFor="number" className="form-label">
          Phone number
        </label>
        <input
          type="tel"
          name="Phone number"
          id="number"
          className="form-input shadow form-control-lg"
        />
      </div>

      <div className="mb-3 d-flex flex-column">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          rows="5"
          placeholder="Your message"
          name="Message"
          id="message"
          className="form-message px-3 pt-2 shadow"
          required
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={state.submitting}
        className="py-3 px-3 fw-bold mb-0 about-button mt-2 w-100"
      >
        SUBMIT <IoIosSend className="fs-3 ms-3" />
      </Button>
    </form>
  );
};

export default MyForm;
