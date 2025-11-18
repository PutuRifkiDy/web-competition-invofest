export default function NewsLetterSection() {
  return (
    <section className="relative md:px-12 px-0 mt-10">
      <img
        src="./banner/banner-3.png"
        className="w-full h-auto rounded-[20px]"
        alt=""
      />
      <p className="absolute lg:block md:hidden hidden font-bold text-[40px] leading-auto text-[#253D4E] top-12 left-24 md:w-[800px] w-full">
        Tetap di rumah & dapatkan kebutuhan harian Anda dari toko kami
      </p>
      <p className="absolute lg:block md:hidden hidden text-[18px] leading-[28px] text-[#7E7E7E] top-44 left-24">
        Mulailah Belanja Harian Anda dengan{" "}
        <span className="text-[#3BB77E]">Grownesia</span>
      </p>
      <div className="absolute lg:top-60 md:top-20 top-12 md:left-24 left-0 md:w-max w-full md:px-0 px-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Email adress kamu"
            className="rounded-[50px] md:px-7 px-4 py-3 md:w-[400px] w-full border-2 focus:outline-none md:placeholder:text-[16px] placeholder:text-[12px]"
          />
          <button className="font-semibold absolute px-4 py-2 bg-[#3EB489] text-white rounded-[50px] right-2 top-1.5">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
