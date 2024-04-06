import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram , FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Newsletter = () => {
    return (
        <motion.div className="relative w-full flex flex-col md:flex-row justify-center gap-10 items-center" 
         initial={{opacity:0, y: 50 }}
         animate={{opacity:1 , y:0, transition: { duration: 3} }}
        >
            <div className=" flex flex-col  items-center gap-2 p-5 md:gap-4 md:p-8">
                <h4 className="small-text uppercase font-medium text-gray-500 text-xs md:text-base">Newsletter</h4>
                <h2 className="big-text uppercase font-medium text-xs md:text-xl font-sans">Sign up for latest updates and offers</h2>
                <div className="form flex justify-between items-center gap-2">
                    <input type="text" placeholder="Email Address" className="email-input w-40 text-left p-1.5 md:w-72" />
                    <button className="subscribe cursor-pointer border-none text-white px-2 py-1.5 bg-purple-500 md:px-4">Subscribe</button>
                </div>
                <h5 className="text text-gray-500 text-xs md:text-sm font-sans font-extralight">Will be used in accordance with our policy</h5>
            </div>
                <div className="social-icons flex  md:flex-col justify-between items-center gap-3 h-full">
                    <FaLinkedin size={20} />
                    <FaFacebook size={20} />
                    <FaGithub size={20} />
                    <FaInstagram size={20} />
                    <FaTwitter size={20} />
                </div>
        </motion.div>
    );
};

export default Newsletter;
