import Image from "next/image";
interface IPopularItem {
  brandImageUrl: string;
  brandName: string;
  brandDescription: string;
  brandId: string;
}

export const PopularItem: React.FC<IPopularItem> = ({
  brandImageUrl,
}: IPopularItem) => {
  return (
    <div className="w-48 bg-zinc-200 rounded-lg overflow-hidden mx-auto">
      {/* Üst Görsel */}
      <div className="relative w-48 h-40">
        <Image
          src={brandImageUrl}
          alt="Product Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* İçerik */}
      <div className="p-4">
        {/* Başlık */}
        <h2 className="text-lg font-bold text-gray-800">iPad Pro</h2>
        {/* Açıklama */}
        <p className="text-gray-600 mt-2 text-sm">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        {/* Buton */}
        <button className="mt-3 w-32 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          See More...
        </button>
      </div>
    </div>
  );
};

