import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-around gap-5 bg-gray-300 py-8 dark:bg-base-100 dark:text-white">
            <nav className="text-lg">
                <ul className="flex h-full flex-wrap items-center justify-center gap-5">
                    <li className="cursor-pointer">
                        <a>
                            <FaFacebook className="size-6 fill-current" />
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a>
                            <FaInstagram className="size-6 fill-current" />
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a>
                            <FaTwitter className="size-6 fill-current" />
                        </a>
                    </li>
                </ul>
            </nav>
            <aside className="text-center text-sm">
                <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;