import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");

      return res.data;
    },
  });
  console.log(data);

  const handleVerified = async (id, isVerified) => {
    try {
      const { data } = await axiosSecure.patch(`/users/${id}`, {
        isVerified: !isVerified, // 🔁 Toggle the current status
      });

      if (data.modifiedCount > 0) {
        toast.success("Verified status updated");
        refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update verification");
    }
  };

  return (
    <div>
      <table className="w-full border text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Verified</th>
            <th>Bank Account</th>
            <th>Salary</th>
            <th>Pay</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="border ">
          {data?.map((userData) => (
            <tr key={userData._id}>
              <td>{userData.name}</td>
              <td>{userData.email}</td>
              <td>
                <button
                  onClick={() =>
                    handleVerified(userData._id, userData.isVerified)
                  }
                >
                  {userData.isVerified ? "✅" : "❌"}
                </button>
              </td>
              <td>{userData.bank_account_no}</td>
              <td>{userData.salary}</td>
              <td>pay</td>
              <th>detail</th>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
      <table></table>
    </div>
  );
};

export default EmployeeList;
