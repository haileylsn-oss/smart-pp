import fc from '../assets/fdic.png';
import cd from '../assets/ehl.png';
// import cd2 from '../assets/Emblem_of_the_United_Arab_Emirates.svg';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
   {/* <div className='flex justify-center'>
    <img src={cd2} alt="" width={100} /> 
     
    </div>   */}
     
     
    <div className="container mx-auto flex flex-wrap gap-3 justify-evenly">
  {/* Company Info */}
  <div>
    <p className="text-sm leading-relaxed w-[400px]">
      At USAA, we are dedicated to delivering innovative banking solutions 
      and empowering our clients to achieve their financial aspirations. From personal 
      banking services to comprehensive business growth support, we provide trusted, 
      excellent financial services with a global perspective. Experience world-class 
      banking across the United States.
    </p>
  </div>

  {/* Quick Links */}
  <div>
    <h3 className="text-lg font-semibold uppercase">Quicklinks</h3>
    <ul className="mt-2 space-y-2 text-gray-200 text-sm">
      <li>Personal Banking</li>
      <li>Business Banking</li>
      <li>Wealth Management</li>
      <li>Loans & Mortgages</li>
      <li>Credit Cards</li>
      <li>Security Center</li>
      <li>About  USAA</li>
      <li>Contact Us</li>
      <li>Careers</li>
    </ul>
  </div>

  {/* Social Media */}
  <div className="flex flex-col md:items-end">
    <h3 className="text-lg font-semibold uppercase">Follow Us</h3>
    <div className="mt-2 flex space-x-4">
      <a href="#" className="bg-white p-2 rounded-full text-blue-900 hover:opacity-75">
        <FaFacebookF size={20} />
      </a>
      <a href="#" className="bg-white p-2 rounded-full text-blue-900 hover:opacity-75">
        <FaLinkedinIn size={20} />
      </a>
      <a href="#" className="bg-white p-2 rounded-full text-blue-900 hover:opacity-75">
        <FaTwitter size={20} />
      </a>
      <a href="#" className="bg-white p-2 rounded-full text-blue-900 hover:opacity-75">
        <FaInstagram size={20} />
      </a>
    </div>
  </div>

  {/* Logos */}
  <div className="mt-6 flex space-x-4">
    <img src={fc} alt="FDIC Member" className="h-8" />
    <img src={cd} alt="Equal Housing Lender" className="h-8" />
  </div>
</div>

{/* Disclaimer */}
<div className="mt-10 px-6 text-gray-300 text-xs text-center max-w-5xl mx-auto leading-relaxed">
  Important Information: USAA Bank USA will never ask for sensitive information such as account numbers 
  or passwords via email. Stay vigilant against fraudulent communications. Always use official USAA  
  channels for updates and services. USAA Bank USA is not responsible for the content of external websites 
  linked through our online banking services.
</div>

{/* Legal Links & Copyright */}
<div className="mt-6 text-center m-auto text-sm">
  <div className="text-white font-semibold">
    <a href="#" className="hover:underline">Terms of Use</a> |
    <a href="#" className="hover:underline">Privacy Policy</a> |
    <a href="#" className="hover:underline">Digital Banking Security</a> |
    <a href="#" className="hover:underline">Cookies Policy</a>
  </div>
  <div className="mt-2 text-gray-300 text-xs text-center">
    Copyright © 2025 USAA Bank USA. All Rights Reserved.
    <br />
    Website Design & Development by <span className="font-semibold">USAA Digital USA</span>
  </div>
</div>
    </footer>
  );
};

export default Footer;
