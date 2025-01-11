import { BoxIcon, CallIcon, GrowthIcon } from "@/assets"; // Ensure icons are imported properly
import { JSX } from "react";
import { Container, Footer } from "@/components";

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => {
  return (
    <div className="text-center max-w-xs mx-auto bg-white p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center items-center mb-6">
        <div className="h-24 w-24 sm:h-24 sm:w-24 md:h-24 md:w-24 text-blue-500">{icon}</div> {/* Responsive icon size */}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{title}</h3> {/* Text resizing */}
      <p className="text-gray-700 text-sm sm:text-base">{description}</p> {/* Text resizing */}
    </div>
  );
};
{/*Bismillahir Rahmanir Raheem*/}
export default function Home() {
  const services = [
    {
      title: 'Large Assortment',
      description: 'We offer many different types of products with fewer variations in each category.',
      icon: <BoxIcon className="h-24 w-24 sm:h-24 sm:w-24 md:h-24 md:w-24 text-blue-500" />,
    },
    {
      title: 'Fast & Free Shipping',
      description: '4-day or less delivery time, free shipping and an expedited delivery option.',
      icon: <CallIcon className="h-24 w-24 sm:h-24 sm:w-24 md:h-24 md:w-24 text-blue-500" />,
    },
    {
      title: '24/7 Support',
      description: 'Answers to any business-related inquiry 24/7 and in real-time.',
      icon: <GrowthIcon className="h-24 w-24 sm:h-24 sm:w-24 md:h-24 md:w-24 text-blue-500" />,
    },
  ];

  return (
    <>
      <Container className="pb-40">
        <h2 className="text-[26px] font-bold text-left mt-[100px] mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </>

  );
}
