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
import useSwiperNavigation from "@/hooks/useSwiperNavigation";
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
import BannerComponent from "@/components/home/BannerComponent";
import { formatRupiah } from "@/lib/utils";
import CardTopProductComponent from "@/components/home/CardTopProductComponent";
import CardCategoryComponent from "@/components/home/CardCategoryComponent";
import CardOfferProductComponent from "@/components/home/CardOfferProductComponent";
import CardProductComponent from "@/components/home/CardProductComponent";
import NewsLetterSection from "@/components/home/NewsLetterSection";
import BannerSlogan from "@/components/home/BannerSlogan";

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

  // handle bg color in discount
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
          <BannerComponent
            discount="20%"
            title="Produk Lokal, Kualitas Terbaik"
            description="Hanya minggu ini, jangan sampai ketinggalan"
            price="Rp. 26.000"
            imagePath="./banner/banner-3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerComponent
            discount="20%"
            title="Produk Lokal, Kualitas Terbaik"
            description="Hanya minggu ini, jangan sampai ketinggalan"
            price="Rp. 26.000"
            imagePath="./banner/banner-1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerComponent
            discount="20%"
            title="Produk Lokal, Kualitas Terbaik"
            description="Hanya minggu ini, jangan sampai ketinggalan"
            price="Rp. 26.000"
            imagePath="./banner/banner-4.png"
          />
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
            <CardCategoryComponent
              title="Fashion & Aksesoris"
              totalStok="11"
              imagePath="./category/fashion.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCategoryComponent
              title="Makanan & Minuman"
              totalStok="5"
              imagePath="./category/food.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCategoryComponent
              title="Baby Care"
              totalStok="6"
              imagePath="./category/babycare.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCategoryComponent
              title="Home Care"
              totalStok="11"
              imagePath="./category/homecare.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCategoryComponent
              title="Skin Care"
              totalStok="8"
              imagePath="./category/skincare.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCategoryComponent
              title="Toys"
              totalStok="8"
              imagePath="./category/toys.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCategoryComponent
              title="Decoration"
              totalStok="5"
              imagePath="./category/decoration.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCategoryComponent
              title="Digital Technology"
              totalStok="6"
              imagePath="./category/digital.png"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* end category */}

      {/* start banner slogan */}
      <BannerSlogan />
      {/* end banner slogan */}

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
            products
              .slice(0, limitProduct)
              .map((product, index) => (
                <CardProductComponent
                  key={index}
                  discount={product.discount}
                  imagePath={product.image}
                  category={product.category}
                  title={product.title}
                  companyName={product.company}
                  stok={product.stok}
                  priceBeforeDiscount={product.price_before_discount}
                  priceAfterDiscount={product.price_after_discount}
                />
              ))}

          {products
            .filter((product) => product.category == productCategory)
            .map((product, index) => (
              <CardProductComponent
                key={index}
                discount={product.discount}
                imagePath={product.image}
                category={product.category}
                title={product.title}
                companyName={product.company}
                stok={product.stok}
                priceBeforeDiscount={product.price_before_discount}
                priceAfterDiscount={product.price_after_discount}
              />
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
              <CardOfferProductComponent
                imagePath="./banner/banner-6.png"
                title="Organic Cage Grade A Large Eggs"
                companyName="Hambger Hel"
                priceAfterDiscount="24000"
                priceBeforeDiscount="24.000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardOfferProductComponent
                imagePath="./banner/banner-8.png"
                title="Organic Cage Grade A Large Eggs"
                companyName="Hambger Hel"
                priceAfterDiscount="24000"
                priceBeforeDiscount="24.000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardOfferProductComponent
                imagePath="./banner/banner-6.png"
                title="Organic Cage Grade A Large Eggs"
                companyName="Hambger Hel"
                priceAfterDiscount="24000"
                priceBeforeDiscount="24.000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardOfferProductComponent
                imagePath="./banner/banner-8.png"
                title="Organic Cage Grade A Large Eggs"
                companyName="Hambger Hel"
                priceAfterDiscount="24000"
                priceBeforeDiscount="24.000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardOfferProductComponent
                imagePath="./banner/banner-6.png"
                title="Organic Cage Grade A Large Eggs"
                companyName="Hambger Hel"
                priceAfterDiscount="24000"
                priceBeforeDiscount="24.000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardOfferProductComponent
                imagePath="./banner/banner-8.png"
                title="Organic Cage Grade A Large Eggs"
                companyName="Hambger Hel"
                priceAfterDiscount="24000"
                priceBeforeDiscount="24.000"
              />
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
          <CardTopProductComponent
            imagePath="./product/organic_latte_turmeric_glow.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
          <CardTopProductComponent
            imagePath="./product/asian_sesame_edamame.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
          <CardTopProductComponent
            imagePath="./product/cafe_altura.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
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
          <CardTopProductComponent
            imagePath="./product/instant_herbal_beverage_with_dandelion.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
          <CardTopProductComponent
            imagePath="./product/coffe_version_1.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
          <CardTopProductComponent
            imagePath="./product/yuja_niacin.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
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
          <CardTopProductComponent
            imagePath="./product/mighty_muffin.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
          <CardTopProductComponent
            imagePath="./product/onion.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
          <CardTopProductComponent
            imagePath="./product/pepsi.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
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
          <CardTopProductComponent
            imagePath="./product/pistachio_butter.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
          <CardTopProductComponent
            imagePath="./product/raspberry_crumble_cashew_mix.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
          <CardTopProductComponent
            imagePath="./product/unsweetened_coconut_flakes.png"
            title="Haagen Caramel Cone Ice Cream Boxed"
            stok="24"
            priceAfterDiscount={21000}
            priceBeforeDiscount={25000}
          />
        </div>
      </section>
      {/* end top rank */}

      {/* start newsletter */}
      <NewsLetterSection />
      {/* end newsletter */}
    </GuestLayout>
  );
}
