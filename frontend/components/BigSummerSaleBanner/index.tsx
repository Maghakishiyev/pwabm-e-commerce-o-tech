import Image from "next/image";
import leftImage from "@/public/images/landing/tablets50.png";
import rightImage from "@/public/images/landing/phonewatch50.png";

export const BigSummerSaleBanner: React.FC = () => {
    return (
        <div className="relative max-w-[1320px] my-8 rounded-xl overflow-hidden bg-gradient-to-r from-[#238CEC] to-[#054279] shadow-lg">

            {/* Content Section */}
            <div className="flex items-center ">
                {/* Left Image Section */}
                <div className="flex items-center justify-center">
                    <Image
                        src={leftImage} 
                        alt="Left Side Gadget"
                        height={400}
                        width={400}
                    />
                </div>

                {/* Middle Text Content */}
                <div className="text-center md:text-center flex-1 ">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-14">
                        Big Summer Sale
                    </h1>
                    <p className="text-[16px] text-gray-100 mb-6">
                        Explore Innovation, Embrace Possibilities. Our curated collection brings you
                        the latest gadgets, futuristic devices, and smart solutions.
                    </p>
                    <button
                        className="inline-block bg-white text-blue-500 hover:bg-gray-100 w-[168px] h-[50px] rounded-lg font-medium shadow-md">
                        Shop Now
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="flex items-center justify-center pl-4">
                    <Image
                        src={rightImage} 
                        alt="Right Side Gadget"
                        height={400}
                        width={300}
                    />
                </div>
            </div>
        </div>
    );
};
