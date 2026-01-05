import { useState } from "react";
import { MailWarning, ShieldAlert, CreditCard, Info, CheckCircle, Lock } from "lucide-react";
import BottomNav from "../pages/stickyNav";
import BottomNav2 from "../pages/bottomnav2";
import SupportBot from "./support";

type Message = {
  id: number;
  icon: JSX.Element;
  subject: string;
  preview: string;
  full: string;
  date: string;
  unread: boolean;
};

const messages: Message[] = [
  {
    id: 5,
    icon: <Lock className="text-red-600" size={24} />,
    subject: "Account Security Alert: Suspicious Activity Detected",
    preview: "Unusual login attempt detected from unrecognized device.",
    full: `Security Alert:
We've detected an unauthorized login attempt to your USAA account from an unrecognized device in Dallas, TX. 
Your account has been temporarily secured for your protection. Please verify this activity was not initiated by you.`,
    date: "January 5, 2026",
    unread: true,
  },
  {
    id: 1,
    icon: <ShieldAlert className="text-red-700" size={24} />,
    subject: "Account On Hold: Verification Required",
    preview: "Your account has been restricted pending identity verification.",
    full: `Account Access Restricted – Immediate Action Required

Dear USAA Member,

Your account has been placed on temporary hold due to security verification requirements. 
To restore full access, please complete the identity verification process through the USAA mobile app or website.

This is a standard security measure to protect your account from unauthorized access. 
Once verified, all account functionality will be restored immediately.`,
    date: "January 5, 2026",
    unread: true,
  },
  {
    id: 2,
    icon: <MailWarning className="text-yellow-600" size={24} />,
    subject: "Important: Account Verification Pending",
    preview: "Your account verification is not yet complete. Please update your details.",
    full: `Important Account Update

We noticed your USAA account verification is still pending completion.  
Please log in to your account and complete the verification process to maintain full access to all banking services.

Required documents may include:
• Government-issued ID
• Proof of address
• Military service verification (if applicable)

Thank you for helping us keep your account secure.`,
    date: "January 5, 2026",
    unread: true,
  },
  {
    id: 3,
    icon: <CreditCard className="text-green-700" size={24} />,
    subject: "Card Issuance Notice",
    preview: "Your USAA Visa® debit card has been approved and shipped.",
    full: `Good News – Your New Card is on the Way!

Your USAA Visa® debit card has been approved and shipped to your address on file.  
You should receive it within 5-7 business days.

Once received, you can activate your card:
1. Through the USAA mobile app
2. Online at usaa.com
3. By calling the number on the card

Thank you for choosing USAA for your banking needs.`,
    date: "January 5, 2026",
    unread: false,
  },
  {
    id: 4,
    icon: <Info className="text-blue-600" size={24} />,
    subject: "New Feature: Military Pay Advance Now Available",
    preview: "Access up to $1,000 of your military pay early with no fees.",
    full: `Introducing Military Pay Advance

USAA is proud to offer Military Pay Advance, a new benefit for eligible members. 
Access up to $1,000 of your military pay early with no interest or fees.

Features:
• No credit check required
• No interest or fees
• Automatic repayment on your next payday
• Available up to twice per pay period

Log in to your USAA account to check your eligibility and get started.`,
    date: "January 5, 2026",
    unread: false,
  },
  {
    id: 6,
    icon: <CheckCircle className="text-green-600" size={24} />,
    subject: "Your Profile Has Been Verified",
    preview: "Thank you for completing verification. Your account now has full access.",
    full: `Verification Complete – Full Access Restored

We're pleased to inform you that your USAA profile verification has been successfully completed.  
Your account now has full access to all banking features and services.

Thank you for your patience and cooperation during this security review. We appreciate your commitment to keeping your account secure.

Welcome back to full banking access with USAA!`,
    date: "January 5, 2026",
    unread: false,
  }
];


const InboxPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 mb-8">
        <h1 className="text-2xl font-bold mb-6 text-red-800 text-center">USAA Message Center</h1>

        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`cursor-pointer border rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 bg-white ${
                msg.unread ? "border-l-4 border-red-600 bg-red-50/30" : "border-gray-200"
              }`}
            >
              <div className="mt-1">{msg.icon}</div>
              <div className="flex-1">
                <h3 className={`text-base font-semibold ${msg.unread ? "text-red-700" : "text-gray-800"}`}>
                  {msg.subject}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{msg.preview}</p>
              </div>
              <div className="text-sm text-gray-500 text-right">
                <p>{msg.date}</p>
                {msg.unread && (
                  <span className="text-xs text-white bg-red-600 px-2 py-0.5 rounded-full ml-1">
                    Unread
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>
            <div className="mb-3">{selectedMessage.icon}</div>
            <h2 className="text-xl font-bold text-red-700 mb-2">{selectedMessage.subject}</h2>
            <p className="text-gray-700 text-sm whitespace-pre-line">{selectedMessage.full}</p>
            <p className="text-xs text-gray-400 mt-4">{selectedMessage.date}</p>
          </div>
        </div>
      )}

      <BottomNav />
      <BottomNav2 />
      <SupportBot />
    </>
  );
};

export default InboxPage;