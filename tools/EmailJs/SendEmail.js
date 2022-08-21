import emailjs from "emailjs-com";

const SERVICE_ID = "service_hcts1xe";
const USER_ID = "DEyU2H4MQgtInYENH";
const TEMPLATE_ID = "template_qcxteaq";

const SendEmail = (data) => {
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
    (result) => {
      console.log(result.text);
      console.log(result);
    },
    (error) => {
      console.log(error.text);
      console.log(error);
    }
  );
};

export default SendEmail;
