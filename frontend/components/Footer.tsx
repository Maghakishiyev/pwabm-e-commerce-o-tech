import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon } from "@/assets";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-blue-800 text-white py-12 px-4" id="footer">
            <Container className="flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-6 lg:mb-0 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-2">O-Tech</h2>
                    <p className="text-sm mb-4 max-w-xs mx-auto lg:max-w-none lg:mx-0">
                        We are a residential interior design firm located in Portland. Our boutique-studio offers more than...
                    </p>

                    <div className="flex justify-center lg:justify-start space-x-4">
                        <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
                            <TwitterIcon width={24} height={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
                            <FacebookIcon width={24} height={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300" aria-label="Tiktok">
                            <TiktokIcon width={24} height={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
                            <InstagramIcon width={24} height={24} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8">
                    <Link href="#about" passHref legacyBehavior>
                        <a className="text-white hover:text-gray-300">About Us</a>
                    </Link>
                    <Link href="#services" passHref legacyBehavior>
                        <a className="text-white hover:text-gray-300">Services</a>
                    </Link>
                    <Link href="#contact" passHref legacyBehavior>
                        <a className="text-white hover:text-gray-300">Contact</a>
                    </Link>
                    <Link href="#privacy" passHref legacyBehavior>
                        <a className="text-white hover:text-gray-300">Privacy Policy</a>
                    </Link>
                </div>
            </Container>
        </footer>
    );
}