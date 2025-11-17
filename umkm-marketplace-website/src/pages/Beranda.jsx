import GuestLayout from "../components/layout/GuestLayout";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import useSwiperNavigation from "@/components/hooks/useSwiperNavigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import products from "../lib/data";
import IconShopingCart from "@/components/icon/IconShopingCart";
import { Progress } from "@/components/ui/progress";
import Countdown from "react-countdown";

export default function Beranda() {
  const {
    swiperRef: categorySwiperRef,
    slidePrev: categorySlidePrev,
    slideNext: categorySlideNext,
  } = useSwiperNavigation();
  const {
    swiperRef: sellsSwiperRef,
    slidePrev: sellsSlidePrev,
    slideNext: sellsSlideNext,
  } = useSwiperNavigation();
  const {
    swiperRef: bannerSwiperRef,
    slidePrev: bannerSlidePrev,
    slideNext: bannerSlideNext,
  } = useSwiperNavigation();
  const [productCategory, setProductCategory] = useState("All");
  const [limitProduct, setLimitProduct] = useState(8);

  // money formmater
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  // background color on discount label
  const getDiscountColor = (discount) => {
    let backgroundColor;
    if (discount >= 10) {
      backgroundColor = "bg-[#3BB77E]";
    } else if (discount >= 5 && discount < 10) {
      backgroundColor = "bg-[#BC911A]";
    } else if (discount < 5) {
      backgroundColor = "bg-[#DD3333]";
    }

    return backgroundColor;
  };
  // handle category change
  const handleCategoryChange = (category) => {
    setProductCategory(category);
  };
  // handle limit product
  const showMoreProduct = () => {
    setLimitProduct((prev) => prev + 4);
  };
  const showLessProduct = () => {
    setLimitProduct(8);
  };
  // handle countdown
  const countDownRenderer = ({ completed, days, hours, minutes, seconds }) => {
    if (!completed) {
      return (
        <div className="absolute flex flex-row gap-2 items-center top-24">
          <div className="bg-white p-3 flex flex-col items-center rounded-[4px]">
            <p className="text-[20px] font-bold text-[#3BB77E]">{days}</p>
            <p className="font-semibold text-[14px] leading-[20px] text-[#253D4E]">
              Days
            </p>
          </div>
          <div className="bg-white p-3 flex flex-col items-center rounded-[4px]">
            <p className="text-[20px] font-bold text-[#3BB77E]">{hours}</p>
            <p className="font-semibold text-[14px] leading-[20px] text-[#253D4E]">
              Hours
            </p>
          </div>
          <div className="bg-white p-3 flex flex-col items-center rounded-[4px]">
            <p className="text-[20px] font-bold text-[#3BB77E]">{minutes}</p>
            <p className="font-semibold text-[14px] leading-[20px] text-[#253D4E]">
              Mins
            </p>
          </div>
          <div className="bg-white p-3 flex flex-col items-center rounded-[4px]">
            <p className="text-[20px] font-bold text-[#3BB77E]">{seconds}</p>
            <p className="font-semibold text-[14px] leading-[20px] text-[#253D4E]">
              Secs
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <GuestLayout>
      {/* start section banner */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        freeMode={true}
        pagination={{ clickable: true }}
        className="cursor-pointer"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="absolute md:left-24 left-4 md:top-12 top-5 flex flex-row gap-2 items-center">
              <p className="font-medium md:text-[12px] text-[10px] tracking-[1px] text-[#202435] uppercase">
                Penawaran Spesial
              </p>
              <div className="rounded-[40px] px-5 md:py-2 py-1 bg-gradient-to-r from-[#3EB489] to-[#FFFFFF] uppercase md:text-[14px] text-[12px] tracking-[1px] font-semibold text-[#038E42]">
                -20% Diskon
              </div>
            </div>
            <div className="absolute md:left-24 left-4 md:top-24 top-14 md:w-[400px] w-[300px] flex flex-row items-center">
              <p className="font-bold md:text-[48px] text-[36px] -tracking-[0.7px] md:leading-[57.6px] leading-9 text-[#202435]">
                Produk Lokal, Kualitas Terbaik
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-52 top-32 flex flex-row gap-5 items-center">
              <p className="md:text-[16px] text-[14px] -tracking-[0.1px] leading-[24px] text-[#202435]">
                Hanya minggu ini, jangan sampai ketinggalan!
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-64 top-44 flex flex-row gap-5 items-center">
              <p className="md:text-[16px] text-[14px] -tracking-[0.1px] leading-[24px] text-[#202435]">
                Mulai dari{" "}
                <span className="font-semibold md:text-[26px] text-[22px] leading-[54px] text-[#D51243]">
                  Rp79.000
                </span>
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-80 top-56 flex flex-row gap-5 items-center">
              <Link
                to={""}
                className="flex flex-row items-center gap-4 md:py-2 py-1 px-6 bg-[#35AFA0] text-white rounded-[30px] group md:text-[16px] text-[12px]"
              >
                Belanja Sekarang
                <ArrowLongRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
              </Link>
            </div>
            <img
              src="./banner/banner-1.png"
              className="md:w-full md:h-auto h-[300px] md:object-contain object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute md:left-24 left-4 md:top-12 top-5 flex flex-row gap-2 items-center">
              <p className="font-medium md:text-[12px] text-[10px] tracking-[1px] text-[#202435] uppercase">
                Penawaran Spesial
              </p>
              <div className="rounded-[40px] px-5 md:py-2 py-1 bg-gradient-to-r from-[#3EB489] to-[#FFFFFF] uppercase md:text-[14px] text-[12px] tracking-[1px] font-semibold text-[#038E42]">
                -15% Diskon
              </div>
            </div>
            <div className="absolute md:left-24 left-4 md:top-24 top-14 md:w-[400px] w-[300px] flex flex-row items-center">
              <p className="font-bold md:text-[48px] text-[36px] -tracking-[0.7px] md:leading-[57.6px] leading-9 text-[#202435]">
                Produk Lokal, Kualitas Terbaik
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-52 top-32 flex flex-row gap-5 items-center">
              <p className="md:text-[16px] text-[14px] -tracking-[0.1px] leading-[24px] text-[#202435]">
                Hanya minggu ini, jangan sampai ketinggalan!
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-64 top-44 flex flex-row gap-5 items-center">
              <p className="md:text-[16px] text-[14px] -tracking-[0.1px] leading-[24px] text-[#202435]">
                Mulai dari{" "}
                <span className="font-semibold md:text-[26px] text-[22px] leading-[54px] text-[#D51243]">
                  Rp24.000
                </span>
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-80 top-56 flex flex-row gap-5 items-center">
              <Link
                to={""}
                className="flex flex-row items-center gap-4 md:py-2 py-1 px-6 bg-[#35AFA0] text-white rounded-[30px] group md:text-[16px] text-[12px]"
              >
                Belanja Sekarang
                <ArrowLongRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
              </Link>
            </div>
            <img
              src="./banner/banner-4.png"
              className="md:w-full md:h-auto h-[300px] md:object-contain object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute md:left-24 left-4 md:top-12 top-5 flex flex-row gap-2 items-center">
              <p className="font-medium md:text-[12px] text-[10px] tracking-[1px] text-[#202435] uppercase">
                Penawaran Spesial
              </p>
              <div className="rounded-[40px] px-5 md:py-2 py-1 bg-gradient-to-r from-[#3EB489] to-[#FFFFFF] uppercase md:text-[14px] text-[12px] tracking-[1px] font-semibold text-[#038E42]">
                -10% Diskon
              </div>
            </div>
            <div className="absolute md:left-24 left-4 md:top-24 top-14 md:w-[400px] w-[300px] flex flex-row items-center">
              <p className="font-bold md:text-[48px] text-[36px] -tracking-[0.7px] md:leading-[57.6px] leading-9 text-[#202435]">
                Produk Lokal, Kualitas Terbaik
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-52 top-32 flex flex-row gap-5 items-center">
              <p className="md:text-[16px] text-[14px] -tracking-[0.1px] leading-[24px] text-[#202435]">
                Hanya minggu ini, jangan sampai ketinggalan!
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-64 top-44 flex flex-row gap-5 items-center">
              <p className="md:text-[16px] text-[14px] -tracking-[0.1px] leading-[24px] text-[#202435]">
                Mulai dari{" "}
                <span className="font-semibold md:text-[26px] text-[22px] leading-[54px] text-[#D51243]">
                  Rp56.000
                </span>
              </p>
            </div>
            <div className="absolute md:left-24 left-4 md:top-80 top-56 flex flex-row gap-5 items-center">
              <Link
                to={""}
                className="flex flex-row items-center gap-4 md:py-2 py-1 px-6 bg-[#35AFA0] text-white rounded-[30px] group md:text-[16px] text-[12px]"
              >
                Belanja Sekarang
                <ArrowLongRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
              </Link>
            </div>
            <img
              src="./banner/banner-3.png"
              className="md:w-full md:h-auto h-[300px] md:object-contain object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* end section banner */}

      {/* start category */}
      <section className="flex flex-col md:px-12 px-5 mt-10 gap-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-[32px] leading-[30px] text-[#253D4E]">
            Kategori Produk
          </h1>
          <div className="flex flex-row gap-5 items-center">
            <button
              className="bg-gray-200 rounded-full p-3"
              onClick={categorySlidePrev}
            >
              <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="bg-gray-200 rounded-full p-3"
              onClick={categorySlideNext}
            >
              <ArrowRightIcon className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        <Swiper
          className="w-full"
          spaceBetween={20}
          grabCursor={true}
          onSwiper={(swiper) => (categorySwiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1440: {
              slidesPerView: 8,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-[#F2FCE4] rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
              <img
                src="./category/fashion.png"
                alt="Fashion & Aksesoris"
                className="w-[80px] h-[80px] mb-3"
              />
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Fashion & Aksesoris
              </p>
              <p className="text-[14px] leading-[22px] text-[#7E7E7E]">
                11 item
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#ECFFEC] rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
              <img
                src="./category/food.png"
                alt="Fashion & Aksesoris"
                className="w-[80px] h-[80px] mb-3"
              />
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Makanan & Minuman
              </p>
              <p className="text-[14px] leading-[22px] text-[#7E7E7E]">
                5 item
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FEEFEA] rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
              <img
                src="./category/babycare.png"
                alt="Fashion & Aksesoris"
                className="w-[80px] h-[80px] mb-3"
              />
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Baby Care
              </p>
              <p className="text-[14px] leading-[22px] text-[#7E7E7E]">
                6 item
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FEEFEA] rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
              <img
                src="./category/homecare.png"
                alt="Fashion & Aksesoris"
                className="w-[80px] h-[80px] mb-3"
              />
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Home Care
              </p>
              <p className="text-[14px] leading-[22px] text-[#7E7E7E]">
                11 item
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FEEFEA] rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
              <img
                src="./category/skincare.png"
                alt="Fashion & Aksesoris"
                className="w-[80px] h-[80px] mb-3"
              />
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Skin Care
              </p>
              <p className="text-[14px] leading-[22px] text-[#7E7E7E]">
                28 item
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F2FCE4] rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
              <img
                src="./category/toys.png"
                alt="Fashion & Aksesoris"
                className="w-[80px] h-[80px] mb-3"
              />
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Mainan
              </p>
              <p className="text-[14px] leading-[22px] text-[#7E7E7E]">
                11 item
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F2FCE4] rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
              <img
                src="./category/decoration.png"
                alt="Fashion & Aksesoris"
                className="w-[80px] h-[80px] mb-3"
              />
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Decoration
              </p>
              <p className="text-[14px] leading-[22px] text-[#7E7E7E]">
                11 item
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F2FCE4] rounded-[10px] p-6 flex flex-col items-center justify-center text-center">
              <img
                src="./category/digital.png"
                alt="Fashion & Aksesoris"
                className="w-[80px] h-[80px] mb-3"
              />
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Digital Technology
              </p>
              <p className="text-[14px] leading-[22px] text-[#7E7E7E]">
                11 item
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* end category */}

      {/* start card */}
      <section className="flex md:flex-row flex-col md:px-12 px-5 mt-10 gap-5">
        {/* card 1 */}
        <div className="flex md:flex-row flex-col-reverse bg-[#FEEFEA] items-center md:px-10 px-5 md:py-5 py-10 rounded-[10px] overflow-hidden">
          <div className="flex flex-col gap-5">
            <p className="text-[#253D4E] font-bold lg:text-[24px] md:text-[14px] sm:text-[12px] lg:leading-[28.8px] md:leading-auto md:text-start text-center">
              Selalu Segar & Bersih Setiap Hari dengan Produk Kami
            </p>
            <Link className="bg-[#3BB77E] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 sm:px-1 flex flex-row items-center group text-white text-[12px] font-bold md:w-fit w-full md:justify-start justify-center">
              Belanja Sekarang
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
            </Link>
          </div>
          <img
            src="/product/onion.png"
            className="lg:w-64 md:w-32 sm:w-32 lg:h-64 md:h-32 sm:h-32"
            alt=""
          />
        </div>
        {/* card 2 */}
        <div className="flex md:flex-row flex-col-reverse bg-[#ECFFEC] items-center md:px-10 px-5 md:py-5 py-10 rounded-[10px] overflow-hidden">
          <div className="flex flex-col gap-5">
            <p className="text-[#253D4E] font-bold lg:text-[24px] md:text-[14px] sm:text-[12px] lg:leading-[28.8px] md:leading-auto md:text-start text-center">
              Buat Sarapan Anda Lebih Sehat dan Praktis
            </p>
            <Link className="bg-[#3BB77E] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 sm:px-1 flex flex-row items-center group text-white text-[12px] font-bold md:w-fit w-full md:justify-start justify-center">
              Belanja Sekarang
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
            </Link>
          </div>
          <img
            src="/product/coffe_version_1.png"
            className="lg:w-64 md:w-32 sm:w-32 lg:h-64 md:h-32 sm:h-32"
            alt=""
          />
        </div>
      </section>
      {/* end card */}

      {/* start product */}
      <section className="flex flex-col md:px-12 px-5 mt-10 gap-10">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-[32px] leading-[30px] text-[#253D4E]">
            Produk Populer
          </h1>

          <div className="md:flex hidden flex-row gap-10 justify-end">
            <p
              className={`font-semibold md:text-[16px] text-[12px] leading-[24px] text-[#253D4E] cursor-pointer ${
                productCategory == "All" && "text-[#3BB77E]"
              }`}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </p>
            <p
              className={`font-semibold md:text-[16px] text-[12px] leading-[24px] text-[#253D4E] cursor-pointer ${
                productCategory == "Makanan & Minuman" && "text-[#3BB77E]"
              }`}
              onClick={() => handleCategoryChange("Makanan & Minuman")}
            >
              Makanan & Minuman
            </p>
            <p
              className={`font-semibold md:text-[16px] text-[12px] leading-[24px] text-[#253D4E] cursor-pointer ${
                productCategory == "Home Care" && "text-[#3BB77E]"
              }`}
              onClick={() => handleCategoryChange("Home Care")}
            >
              Home Care
            </p>
            <p
              className={`font-semibold md:text-[16px] text-[12px] leading-[24px] text-[#253D4E] cursor-pointer ${
                productCategory == "Body Care" && "text-[#3BB77E]"
              }`}
              onClick={() => handleCategoryChange("Body Care")}
            >
              Body Care
            </p>
            <p
              className={`font-semibold md:text-[16px] text-[12px] leading-[24px] text-[#253D4E] cursor-pointer ${
                productCategory == "Skin Care" && "text-[#3BB77E]"
              }`}
              onClick={() => handleCategoryChange("Skin Care")}
            >
              Skin Care
            </p>
            <p
              className={`font-semibold md:text-[16px] text-[12px] leading-[24px] text-[#253D4E] cursor-pointer ${
                productCategory == "Mainan" && "text-[#3BB77E]"
              }`}
              onClick={() => handleCategoryChange("Mainan")}
            >
              Mainan
            </p>
          </div>
        </div>
        <Select>
          <SelectTrigger className="w-full bg-[#3EB489] data-[placeholder]:text-white data-[placeholder]:font-medium lg:hidden md:hidden flex flex-row text-white">
            <SelectValue placeholder="Pilih Kategori Produk"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Pilih Kategori Produk</SelectLabel>
              <SelectItem
                value="makanan"
                onClick={() => handleCategoryChange("All")}
              >
                All
              </SelectItem>
              <SelectItem
                value="minuman"
                onClick={() => handleCategoryChange("Makanan & Minuman")}
              >
                Makanan & Minuman
              </SelectItem>
              <SelectItem
                value="bodycare"
                onClick={() => handleCategoryChange("Home Care")}
              >
                Home Care
              </SelectItem>
              <SelectItem
                value="homecare"
                onClick={() => handleCategoryChange("Body Care")}
              >
                Body Care
              </SelectItem>
              <SelectItem
                value="perabotan"
                onClick={() => handleCategoryChange("Skin Care")}
              >
                Skin Care
              </SelectItem>
              <SelectItem
                value="mainan"
                onClick={() => handleCategoryChange("Mainan")}
              >
                Mainan
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* katalog product */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {/* card */}
          {productCategory == "All" &&
            products.slice(0, limitProduct).map((product, index) => (
              <div
                className="relative flex flex-col border-[1px] border-[#ECECEC] rounded-[15px] overflow-hidden"
                key={index}
              >
                <div
                  className={`absolute left-0 top-0 ${getDiscountColor(
                    product.discount
                  )} rounded-br-[20px] flex items-center py-1.5 px-6`}
                >
                  <p className="text-white font-[12px] font-lato">
                    {product.discount}%
                  </p>
                </div>
                <div className="flex flex-col justify-between h-full gap-2 px-5 py-5">
                  <img src={product.image} alt="" />
                  <header className="flex flex-col">
                    <p className="text-[#ADADAD] text-[12px] font-lato">
                      {product.category}
                    </p>
                    <p className="font-bold text-[#253D4E] text-[16px] leading-[19.2px] line-clamp-1">
                      {product.title}
                    </p>
                  </header>
                  <div>
                    <p className="text-[#253D4E]/80 text-[15px] font-semibold">
                      Stok {product.stok}
                    </p>
                    <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
                      Oleh{" "}
                      <span className="text-[#3BB77E]">{product.company}</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1">
                      <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                        {formatRupiah(product.price_after_discount)}
                      </p>
                      <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                        {product.price_before_discount}
                      </p>
                    </div>
                    <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
                      <IconShopingCart />
                      Tambah
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          {products
            .filter((product) => product.category == productCategory)
            .map((product, index) => (
              <div
                className="relative flex flex-col border-[1px] border-[#ECECEC] rounded-[15px] overflow-hidden"
                key={index}
              >
                <div
                  className={`absolute left-0 top-0 ${getDiscountColor(
                    product.discount
                  )} rounded-br-[20px] flex items-center py-1.5 px-6`}
                >
                  <p className="text-white font-[12px] font-lato">
                    {product.discount}%
                  </p>
                </div>
                <div className="flex flex-col justify-between h-full gap-2 px-5 py-5">
                  <img src={product.image} alt="" />
                  <header className="flex flex-col">
                    <p className="text-[#ADADAD] text-[12px] font-lato">
                      {product.category}
                    </p>
                    <p className="font-bold text-[#253D4E] text-[16px] leading-[19.2px] line-clamp-1">
                      {product.title}
                    </p>
                  </header>
                  <div>
                    <p className="text-[#253D4E]/80 text-[15px] font-semibold">
                      Stok {product.stok}
                    </p>
                    <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
                      Oleh{" "}
                      <span className="text-[#3BB77E]">{product.company}</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1">
                      <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                        {formatRupiah(product.price_after_discount)}
                      </p>
                      <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                        {product.price_before_discount}
                      </p>
                    </div>
                    <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
                      <IconShopingCart />
                      Tambah
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {productCategory == "All" && limitProduct < products.length && (
          <div className="flex flex-row justify-center items-center w-full">
            <button
              className="bg-[#3BB77E] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 px-3 flex flex-row items-center group text-white text-[12px] font-bold md:justify-start justify-center"
              onClick={() => showMoreProduct()}
            >
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}
        {limitProduct == products.length && (
          <div className="flex flex-row justify-center items-center w-full">
            <button
              className="bg-[#1774B2] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 px-3 flex flex-row items-center group text-white text-[12px] font-bold md:justify-start justify-center"
              onClick={() => showLessProduct()}
            >
              Tampilkan Lebih Sedikit
            </button>
          </div>
        )}
      </section>
      {/* end product */}

      {/* start daily best sells */}
      <section className="flex md:flex-row flex-col md:px-12 px-5 mt-10 gap-10">
        <div className="flex flex-col gap-5 lg:w-[30%] md:w-[60%] w-full">
          <h1 className="font-bold lg:text-[32px] md:text-[24px] text-[16px] md:leading-[30px] leading-auto text-[#253D4E]">
            Penjualan Terbaik Harian
          </h1>
          <div className="relative flex">
            <img src="/banner/banner-5.png" className="w-full h-auto" alt="" />
            <div className="absolute flex flex-col gap-5 py-16 px-10">
              <p className="font-bold text-[32px] leading-[48px] text-[#253D4E]">
                Bring nature into your home
              </p>
              <button className="bg-[#3BB77E] rounded-[4px] gap-3 py-2 px-5 flex flex-row items-center group text-white text-[12px] font-bold md:justify-start justify-center group w-fit">
                Belanja Sekarang
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-[70%] md:w-[40%] w-full">
          <div className="flex flex-row gap-5 items-center">
            <button
              className="bg-gray-200 rounded-full p-3"
              onClick={sellsSlidePrev}
            >
              <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="bg-gray-200 rounded-full p-3"
              onClick={sellsSlideNext}
            >
              <ArrowRightIcon className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={10}
              grabCursor={true}
              onSwiper={(swiper) => (sellsSwiperRef.current = swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
                1440: {
                  slidesPerView: 3,
                },
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="relative flex flex-col border-[1px] border-[#ECECEC] rounded-[15px] overflow-hidden">
                    <div
                      className={`absolute left-0 top-0 ${getDiscountColor(
                        product.discount
                      )} rounded-br-[20px] flex items-center py-1.5 px-6`}
                    >
                      <p className="text-white font-[12px] font-lato">
                        {product.discount}%
                      </p>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-2 px-5 py-5">
                      <img src={product.image} alt="" />
                      <header className="flex flex-col">
                        <p className="text-[#ADADAD] text-[12px] font-lato">
                          {product.category}
                        </p>
                        <p className="font-bold text-[#253D4E] text-[16px] leading-[19.2px] line-clamp-1">
                          {product.title}
                        </p>
                      </header>
                      <p className="text-[#253D4E]/80 text-[15px] font-semibold">
                        Stok {product.stok}
                      </p>
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-1">
                          <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                            {formatRupiah(product.price_after_discount)}
                          </p>
                          <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                            {product.price_before_discount}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Progress value={33} className="" />
                          <div className="flex flex-row justify-between">
                            <p className="text-[#253D4E] leading-[26px] text-[13px] font-lato">
                              Terjual: 108 / 387
                            </p>
                            <p className="font-semibold text-[13px] leading-[15px] text-[#3BB77E]">
                              27.91%
                            </p>
                          </div>
                        </div>
                        <Link className="rounded-[4px] bg-[#3BB77E] text-white py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center justify-center transition-all duration-300 ease-in-out">
                          <IconShopingCart />
                          Tambahkan ke Keranjang
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* end daily best sells */}

      {/* start deals of the day */}
      <section className="flex flex-col md:px-12 px-5 mt-10 gap-10">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold lg:text-[32px] md:text-[24px] text-[16px] md:leading-[30px] leading-auto text-[#253D4E]">
            Penawaran Hari Ini
          </h1>
          <div className="flex flex-row gap-5 items-center">
            <button
              className="bg-gray-200 rounded-full p-3"
              onClick={bannerSlidePrev}
            >
              <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="bg-gray-200 rounded-full p-3"
              onClick={bannerSlideNext}
            >
              <ArrowRightIcon className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={10}
            grabCursor={true}
            onSwiper={(swiper) => (bannerSwiperRef.current = swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative flex justify-center items-start min-h-[400px]">
                <img src="./banner/banner-6.png" alt="" />
                <Countdown
                  date={Date.now() + 50000000}
                  renderer={countDownRenderer}
                />
                <div className="absolute flex flex-col justify-between gap-2 px-3 py-5 bg-white rounded-[10px] top-48 z-50 border border-gray-200">
                  <p className="font-bold text-[#253D4E] text-[16px] leading-auto line-clamp-1">
                    Organic Cage Grade A Large Eggs
                  </p>
                  <div>
                    <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
                      Oleh <span className="text-[#3BB77E]">Hambger Hel</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1">
                      <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                        {formatRupiah(21000)}
                      </p>
                      <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                        25.000
                      </p>
                    </div>
                    <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
                      <IconShopingCart />
                      Tambah
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex justify-center items-start min-h-[400px]">
                <img src="./banner/banner-8.png" alt="" />
                <Countdown
                  date={Date.now() + 50000000}
                  renderer={countDownRenderer}
                />
                <div className="absolute flex flex-col justify-between gap-2 px-3 py-5 bg-white rounded-[10px] top-48 z-50 border border-gray-200">
                  <p className="font-bold text-[#253D4E] text-[16px] leading-auto line-clamp-1">
                    Organic Cage Grade A Large Eggs
                  </p>
                  <div>
                    <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
                      Oleh <span className="text-[#3BB77E]">Hambger Hel</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1">
                      <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                        {formatRupiah(21000)}
                      </p>
                      <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                        25.000
                      </p>
                    </div>
                    <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
                      <IconShopingCart />
                      Tambah
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex justify-center items-start min-h-[400px]">
                <img src="./banner/banner-6.png" alt="" />
                <Countdown
                  date={Date.now() + 50000000}
                  renderer={countDownRenderer}
                />
                <div className="absolute flex flex-col justify-between gap-2 px-3 py-5 bg-white rounded-[10px] top-48 z-50 border border-gray-200">
                  <p className="font-bold text-[#253D4E] text-[16px] leading-auto line-clamp-1">
                    Organic Cage Grade A Large Eggs
                  </p>
                  <div>
                    <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
                      Oleh <span className="text-[#3BB77E]">Hambger Hel</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1">
                      <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                        {formatRupiah(21000)}
                      </p>
                      <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                        25.000
                      </p>
                    </div>
                    <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
                      <IconShopingCart />
                      Tambah
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex justify-center items-start min-h-[400px]">
                <img src="./banner/banner-8.png" alt="" />
                <Countdown
                  date={Date.now() + 50000000}
                  renderer={countDownRenderer}
                />
                <div className="absolute flex flex-col justify-between gap-2 px-3 py-5 bg-white rounded-[10px] top-48 z-50 border border-gray-200">
                  <p className="font-bold text-[#253D4E] text-[16px] leading-auto line-clamp-1">
                    Organic Cage Grade A Large Eggs
                  </p>
                  <div>
                    <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
                      Oleh <span className="text-[#3BB77E]">Hambger Hel</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1">
                      <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                        {formatRupiah(21000)}
                      </p>
                      <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                        25.000
                      </p>
                    </div>
                    <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
                      <IconShopingCart />
                      Tambah
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex justify-center items-start min-h-[400px]">
                <img src="./banner/banner-6.png" alt="" />
                <Countdown
                  date={Date.now() + 50000000}
                  renderer={countDownRenderer}
                />
                <div className="absolute flex flex-col justify-between gap-2 px-3 py-5 bg-white rounded-[10px] top-48 z-50 border border-gray-200">
                  <p className="font-bold text-[#253D4E] text-[16px] leading-auto line-clamp-1">
                    Organic Cage Grade A Large Eggs
                  </p>
                  <div>
                    <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
                      Oleh <span className="text-[#3BB77E]">Hambger Hel</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1">
                      <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                        {formatRupiah(21000)}
                      </p>
                      <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                        25.000
                      </p>
                    </div>
                    <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
                      <IconShopingCart />
                      Tambah
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex justify-center items-start min-h-[400px]">
                <img src="./banner/banner-8.png" alt="" />
                <Countdown
                  date={Date.now() + 50000000}
                  renderer={countDownRenderer}
                />
                <div className="absolute flex flex-col justify-between gap-2 px-3 py-5 bg-white rounded-[10px] top-48 z-50 border border-gray-200">
                  <p className="font-bold text-[#253D4E] text-[16px] leading-auto line-clamp-1">
                    Organic Cage Grade A Large Eggs
                  </p>
                  <div>
                    <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
                      Oleh <span className="text-[#3BB77E]">Hambger Hel</span>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1">
                      <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                        {formatRupiah(21000)}
                      </p>
                      <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                        25.000
                      </p>
                    </div>
                    <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
                      <IconShopingCart />
                      Tambah
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* end deals of the day */}

      {/* start top rank */}
      <section className="px-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] font-bold leading-[30px] text-[#253D4E]">
              Top Penjualan
            </h1>
            <div className="flex items-start">
              <div className="h-1 w-1/2 bg-[#BCE3C9]"></div>
              <span className="h-0.5 w-full bg-[#ECECEC]"></span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/organic_latte_turmeric_glow.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/asian_sesame_edamame.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/cafe_altura.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] font-bold leading-[30px] text-[#253D4E]">
              Produk Trending
            </h1>
            <div className="flex items-start">
              <div className="h-1 w-1/2 bg-[#BCE3C9]"></div>
              <span className="h-0.5 w-full bg-[#ECECEC]"></span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/instant_herbal_beverage_with_dandelion.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/coffe_version_1.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/yuja_niacin.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] font-bold leading-[30px] text-[#253D4E]">
              Baru ditambahkan
            </h1>
            <div className="flex items-start">
              <div className="h-1 w-1/2 bg-[#BCE3C9]"></div>
              <span className="h-0.5 w-full bg-[#ECECEC]"></span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/mighty_muffin.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/onion.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/pepsi.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] font-bold leading-[30px] text-[#253D4E]">
              Peringkat Teratas
            </h1>
            <div className="flex items-start">
              <div className="h-1 w-1/2 bg-[#BCE3C9]"></div>
              <span className="h-0.5 w-full bg-[#ECECEC]"></span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/pistachio_butter.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/raspberry_crumble_cashew_mix.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src="./product/unsweetened_coconut_flakes.png"
              className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
                Haagen Caramel Cone Ice Cream Boxed
              </p>
              <p className="text-[12px] leading-[12px] text-[#D3CED2]">
                Stok 24
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
                    {formatRupiah(21000)}
                  </p>
                  <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
                    25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end top rank */}
      {/* start banner newsletter */}
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
      {/* end banner newsletter */}
    </GuestLayout>
  );
}
