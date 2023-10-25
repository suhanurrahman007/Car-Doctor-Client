import { GiSandsOfTime } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";


const Contact = () => {
  return (
    <div className="p-10 flex space-x-24 justify-center bg-black mt-10 text-white">
      <div className="flex items-center space-x-4">
        <p className="text-4xl">
          <GiSandsOfTime></GiSandsOfTime>
        </p>
        <div className="space-y-1">
          <p className="text-sm">We are open monday-friday</p>
          <h2 className="font-bold  text-lg">7:00 am - 9:00 pm</h2>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-4xl">
          <MdWifiCalling3></MdWifiCalling3>
        </p>
        <div className="space-y-1">
          <p className="text-sm">Have a question?</p>
          <h2 className="font-bold  text-lg">+2546 251 2658</h2>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-4xl">
          <IoLocationSharp></IoLocationSharp>
        </p>
        <div className="space-y-1">
          <p className="text-sm">Need a repair? our address</p>
          <h2 className="font-bold  text-lg">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
