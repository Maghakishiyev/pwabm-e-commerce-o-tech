import Image from "next/image";
import Container from "@/components/Container";
import earphones from "@/public/images/landing/earphones.png";
import controller from "@/public/images/landing/controller.png";
import Link from "next/link";

const LandingBanner: React.FC = () => {
    return (
        <Container className="relative flex flex-col items-center justify-center lg:h-[400px] rounded-xl overflow-hidden bg-gradient-to-r from-[#238CEC] to-[#054279] shadow-lg">
            {/* Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-8 md:mt-10 text-center">
                Unlock Tomorrow&apos;s Tech Today With Us!
            </h1>

            {/* Content Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mt-6 md:mt-10 space-y-6 md:space-y-0 space-x-0 md:space-x-6 lg:px-16">
                {/* Left Image */}
                <div className="flex-1 flex justify-center items-center">
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
        </Container>
    );
};

export default LandingBanner;
