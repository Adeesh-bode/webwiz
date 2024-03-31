import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram , FaGithub } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <div className="newsletter-section relative w-full bg-cover bg-no-repeat bg-fixed bg-center flex justify-center gap-10 items-center" style={{backgroundImage: "url('../../../assets/newsletter-bg.jpeg')"}}>
            <div className="newsletter-content flex flex-col  items-center gap-2 p-5 md:gap-4 md:p-8">
                <h4 className="small-text uppercase font-medium text-gray-500 text-xs md:text-base">Newsletter</h4>
                <h2 className="big-text uppercase font-medium text-xs md:text-xl font-sans">Sign up for latest updates and offers</h2>
                <div className="form flex justify-between items-center gap-2">
                    <input type="text" placeholder="Email Address" className="email-input w-40 text-left p-1.5 md:w-72" />
                    <button className="subscribe cursor-pointer border-none text-white px-2 py-1.5 bg-purple-500 md:px-4">Subscribe</button>
                </div>
                <h5 className="text text-gray-500 font-normal text-xs md:text-sm font-sans font-extralight">Will be used in accordance with our policy</h5>
            </div>
                <div className="social-icons flex flex-col justify-between items-center gap-3 h-full">
                <FaLinkedin size={20} />
                <FaFacebook size={20} />
                <FaGithub size={20} />
                <FaInstagram size={20} />
                <FaTwitter size={20} />
                </div>
            {/* Define your @keyframes and possibly some responsive behavior with custom CSS */}
        </div>
    );
};

export default Newsletter;
