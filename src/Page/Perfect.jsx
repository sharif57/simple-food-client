import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { TiMediaEject } from "react-icons/ti";

/* eslint-disable react/no-unescaped-entities */
const Perfect = () => {
  return <div>
    <h1 className="text-5xl font-semibold mt-16 text-center ">Perfect for any occasion</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto gap-10 px-20 mt-14">
        <div className="bg-[#f1eef1] flex flex-col items-center space-y-3 p-4 rounded-lg">
            <img src="https://i.ibb.co.com/rvDLs4b/Group.png" alt="" />
            <h1 className="text-2xl font-semibold">Business Catering</h1>
            <p className="text-center">Catering everyone will love, with convenient delivery and setup included</p>
            <li>Holiday Parties</li>
            <li>Holiday Parties</li>
            <li>Holiday Parties</li>
        </div>
        <div className="bg-[#e9f2e8] flex flex-col items-center p-4 space-y-3 rounded-lg">
            <img src="https://i.ibb.co.com/jzbDVzv/fi-3438139.png" alt="" />
            <h1 className="text-2xl font-semibold">Event Catering</h1>
            <p className="text-center">Celebrate life's special moments with a meal everyone will love.</p>
            <li>Birthday</li>
            <li>Anniversary</li>
            <li>Family & Friends Gathering</li>
        </div>
        <div className="bg-[#f9f1f2] flex flex-col items-center p-4 space-y-3 rounded-lg">
            <img src="https://i.ibb.co.com/VqZTnMr/fi-2270962.png" alt="" />
            <h1 className="text-2xl font-semibold">Bridal Category</h1>
            <p className="text-center">A once in a lifetime moment calls for an unforgettable meal.</p>
            <li>Rehearsal Dinner</li>
            <li>Wedding</li>
            <li>Bridal Shower</li>
        </div>
    </div>
    <div className="flex justify-between items-center gap-14 mt-12">
      <img src="https://i.ibb.co.com/W5zHh4x/Rectangle-5245.png" alt="" />
      <div className="bg-[#3e3e3e] text-white  py-10 p-6 space-y-4 flex flex-col justify-start items-start w-full">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="flex items-center gap-3"><CiLocationOn></CiLocationOn> AAA/7 ,Area R/A</p>
        <p className="flex items-center gap-3"><BiPhone></BiPhone> 01611198984</p>
        <p className="flex items-center gap-3"><MdEmail></MdEmail> Ecom@gmail.com</p>
        <p className="flex items-center gap-3"><TiMediaEject></TiMediaEject> 9:00am - 9:00pm</p>
      </div>

    </div>
  </div>;
};
export default Perfect;
