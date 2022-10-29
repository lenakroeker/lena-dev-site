import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Thank you for your message! You will recieve a response shortly", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 of form */}
        <InputWrapper>
          <Input
            type="text"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="form-control formInput"
            placeholder="Name"
          ></Input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
          <InputEmail
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            placeholder="Email address"
          ></InputEmail>
          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
        </InputWrapper>
        <div>
          <div>
            <TextArea
              rows={3}
              name="message"
              {...register("message", {
                required: true,
              })}
              placeholder="Message"
            ></TextArea>
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
          </div>
        </div>
        <Button type="submit">Send Message</Button>
      </form>
      <ToastContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40vw;
  margin: auto;
  text-align: center;
  background: black;
  @media (max-width: 768px) {
    width: 80vw;
    margin: 10px 10vw 10px 9vw;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  margin: 10px auto;
  background: black;
  border: 3px solid #fff0f5;
  color: #fff0f5;
  transition: 0.5s ease-in-out;
  &:hover {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #ff9e9e, 0 0 15px #ff9e9e, 0 0 20px #c896fa, 0 0 30px #ff9e9e,
      0 0 40px #ff9e9e, 0 0 50px #75ffca;
    background: white;
    color: black;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 25px;
    padding: 20px 0;
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #ff9e9e, 0 0 15px #ff9e9e, 0 0 20px #c896fa, 0 0 30px #ff9e9e,
      0 0 40px #ff9e9e, 0 0 50px #75ffca;
    background: white;
    color: black;
  }
`;

const Input = styled.input`
  border: 5px solid #fff0f5;
  padding: 3px 12px;
  font-family: "Mukta", sans-serif;
  font-size: 16px;
  margin: 10px 0;
  background: black;
  transition: 0.5s ease-in-out;
  color: #ccfcf1;
  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 15px 0;
    width: calc(100% - 40px);
    font-size: 20px;
  }
  &:focus {
    outline: none;
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #ff9e9e, 0 0 15px #ff9e9e, 0 0 20px #c896fa, 0 0 20px #ff9e9e,
      0 0 8px #ff9e9e, 0 0 10px #75ffca;
  }
`;

const InputEmail = styled.input`
  display: inline;
  border: 5px solid #fff0f5;
  padding: 3px 12px;
  color: #ccfcf1;
  font-family: "Mukta", sans-serif;
  font-size: 16px;
  margin: 10px;
  background: black;
  transition: 0.5s ease-in-out;
  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 15px 0;
    width: calc(100% - 40px);
    font-size: 20px;
  }
  &:focus {
    outline: none;
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #ff9e9e, 0 0 15px #ff9e9e, 0 0 20px #c896fa, 0 0 20px #ff9e9e,
      0 0 8px #ff9e9e, 0 0 10px #75ffca;
  }
`;

const TextArea = styled.textarea`
  width: calc(100% - 40px);
  height: 12em;
  padding: 3px 12px;
  font-family: "Mukta", sans-serif;
  font-size: 16px;
  border: 5px solid #fff0f5;
  padding: 10px 20px;
  background: black;
  margin-left: -5px;
  color: #ccfcf1;
  transition: 0.5s ease-in-out;
  @media (max-width: 768px) {
    margin: 15px 0;
    font-size: 20px;
  }
  &:focus {
    outline: none;
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #ff9e9e, 0 0 15px #ff9e9e, 0 0 20px #c896fa, 0 0 20px #ff9e9e,
      0 0 8px #ff9e9e, 0 0 10px #75ffca;
  }
`;
