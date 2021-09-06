import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MessageH1, MessageP, MessageWrapper } from "./PaymentConfirmationStyles";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const PaymentConfirmation = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/")
    }, 10000)
  })
  
  return (
    <MessageWrapper>
      <div className="icon">
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
      <MessageH1>successful purchase!!!</MessageH1>
      <MessageP>Thanks for buying!!!</MessageP>
    </MessageWrapper>
  );
};

export default PaymentConfirmation;
