//export const LandingBanner: React.FC = () => {
//    return <div className='max-w-[1320px]'></div>;
//};

import Image from "next/image";
import Container from "@/components/Container";
import earphones from "@/public/images/landing/earphones.png";
import controller from "@/public/images/landing/controller.png";



export const LandingBanner: React.FC = () => {
    return (
        <Container className="relative max-w-[1320px] mx-auto my-8 rounded-xl overflow-hidden bg-gradient-to-r from-[#238CEC] to-[#054279] shadow-lg">
            <div className="text-center md:text-center flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-14">
                    Unlock Tomorrow's Tech Today With Us!
                </h1>
            </div>
            {/* Content Container */}
            <div className="flex items-center justify-between mx-16 mb-6">
                {/* Image Content (Left side) */}
                <div className="flex items-center justify-center">
                    <Image
                        src={earphones} // Replace with the actual path of your controller image
                        alt="Controller"
                        className="w-64 h-auto"
                        width={340}
                        height={240}
                    />
                </div>
                {/* Text Content (Middle) */}
                <div className="text-center md:text-center flex-1">
                    <p className="text-[16px] text-gray-100 mb-6">
                        Explore Innovation, Embrace Possibilities. Our curated collection brings you the latest gadgets, futuristic devices, and smart solutions.
                    </p>
                    <button
                        className="inline-block bg-white text-blue-500 hover:bg-gray-100 w-[168px] h-[50px] rounded-lg font-medium shadow-md">
                        Shop Now
                    </button>
                </div>

                {/* Image Content (Right side) */}
                <div className="flex items-center justify-center pl-4">
                    <Image
                        src={controller} // Replace with the actual path of your earphones image
                        alt="Earphones"
                        className="w-60 h-auto"
                        width={240}
                        height={240}
                    />
                </div>
            </div>
        </Container>
    );
};
