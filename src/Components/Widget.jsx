import React from "react";

const Widget = () => {
  return (
    <>
      <div className="shadow-md w-full rounded-lg my-5 p-5 transactions">
        <h2 className="text-2xl font-semibold pb-5">Latest Transactions</h2>
        <table className="table-auto w-full table text-left">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Satus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  className="inline w-10 rounded-full"
                  alt="logo"
                />
                <h3 className="font-semibold ml-2">Susan Carol</h3>
              </td>
              <td className="font-light">2 Jun 2021</td>
              <td className="font-light">$122</td>
              <td>
                <span className="text-textApprovedColor bg-bgApprovedColor w-fit px-3 py-2 rounded-xl text-sm font-normal">
                  Approved
                </span>
              </td>
            </tr>
            <tr>
              <td className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  className="inline w-10 rounded-full"
                  alt="logo"
                />
                <h3 className="font-semibold ml-2">Susan Carol</h3>
              </td>
              <td className="font-light">2 Jun 2021</td>
              <td className="font-light">$122</td>
              <td>
                <span className="text-textErrorColor bg-bgErrorColor w-fit px-3 py-2 rounded-xl text-sm font-normal">
                  Declined
                </span>
              </td>
            </tr>
            <tr>
              <td className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  className="inline w-10 rounded-full"
                  alt="logo"
                />
                <h3 className="font-semibold ml-2">Susan Carol</h3>
              </td>
              <td className="font-light">2 Jun 2021</td>
              <td className="font-light">$122</td>
              <td>
                <span className="text-textPendingColor bg-bgPendingColor w-fit px-3 py-2 rounded-xl text-sm font-normal">
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  className="inline w-10 rounded-full"
                  alt="logo"
                />
                <h3 className="font-semibold ml-2">Susan Carol</h3>
              </td>
              <td className="font-light">2 Jun 2021</td>
              <td className="font-light">$122</td>
              <td>
                <span className="text-textApprovedColor bg-bgApprovedColor w-fit px-3 py-2 rounded-xl text-sm font-normal">
                  Approved
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Widget;
