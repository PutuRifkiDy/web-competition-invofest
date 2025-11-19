export default function CardCategoryComponent({ imagePath, title, totalStok }) {
  return (
    <div className="bg-[#F2FCE4] rounded-[10px] p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 ease-in-out">
      <img
        src={imagePath}
        alt="Fashion & Aksesoris"
        className="w-[80px] h-[80px] mb-3"
      />
      <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
        {title}
      </p>
      <p className="text-[14px] leading-[22px] text-[#7E7E7E]">{totalStok} item</p>
    </div>
  );
}
