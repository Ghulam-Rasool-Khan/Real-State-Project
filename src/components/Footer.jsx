
import { assets } from "../assets/assets";
import {motion} from "framer-motion"

function Footer() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
      className="my-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden pt-10" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dignissimos magni mollitia similique, atque, minus reiciendis veritatis deserunt voluptate rem ea delectus tenetur porro illo.</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">Home</a>
            <a href="#About" className="hover:text-white">About Us</a>
            <a href="#Contact" className="hover:text-white">Contact Us</a>
            <a href="#" className="hover:text-white">Pricacy Policy</a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletters
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col md:flex-row gap-1">
            <input type="email" placeholder="Enter your Email" className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-[80%]" />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscrive</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-700">
        Copyright 2024 @ Al-Habib Science Academy Narang. All Rights Reserved.
      </div>
    </motion.div>
  )
}
export default Footer;