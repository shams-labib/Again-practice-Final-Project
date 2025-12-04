import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-xl">Payment History {payments.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Paid Time</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>Cy Ganderton</td>
                <td>${payment.amount}</td>
                <td>{payment.paidAt}</td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
