import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";

const PaymentSuccess = () => {
  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [paymentInfo, setPaymentInfo] = useState(null);
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [axiosSecure, sessionId]);

  return (
    <div>
      <h1 className="text-2xl">Payment success sabbas</h1>

      {!paymentInfo ? (
        <h1>Loading payment info...</h1>
      ) : (
        <>
          <h1>Your Transaction ID : {paymentInfo?.transactionId}</h1>
          <h1>Your Parcel Tracking ID : {paymentInfo?.trackingId}</h1>
        </>
      )}
    </div>
  );
};

export default PaymentSuccess;
