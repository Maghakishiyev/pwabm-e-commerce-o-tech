import Image from "next/image";
import Container from "@/components/Container";
import earphones from "@/public/images/landing/earphones.png";
import controller from "@/public/images/landing/controller.png";
import Link from "next/link";

const LandingBanner: React.FC = () => {
    return (
        <div className="relative  mx-auto my-8 rounded-xl overflow-hidden bg-gradient-to-r from-[#238CEC] to-[#054279] shadow-lg">
            <div className="text-center md:text-center flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-14">
                    Unlock Tomorrow&apos;s Tech Today With Us!
                </h1>
            </div>
            {/* Content Container */}
            <div className="flex items-center justify-between mx-16 mb-6">
                {/* Image Content (Left side) */}
                <div className="flex items-center justify-center">
                    <Image
                        src={earphones}
                        alt="Earphones"
                        className="w-[120px] md:w-[200px] lg:w-[260px] h-auto"
                        width={240}
                        height={260}
                    />
                </div>

                {/* Text + Button in the Middle */}
                <div className="flex-1 text-center">
                    <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed mb-6">
                        Explore Innovation, Embrace Possibilities. Our curated collection brings you the latest gadgets, futuristic devices, and smart solutions.
                    </p>

                    <Link href="/products" legacyBehavior >
                        <a className="inline-flex bg-white text-blue-500 hover:bg-gray-100 w-[140px] md:w-[168px] h-[40px] md:h-[50px] rounded-lg font-medium shadow-md items-center justify-center">
                            Shop Now
                        </a>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src={controller}
                        alt="Controller"
                        className="w-[120px] md:w-[200px] lg:w-[260px] h-auto"
                        width={240}
                        height={260}
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingBanner;
