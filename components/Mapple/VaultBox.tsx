"use client";
import React from "react";
import AssetFactor from "./AssetFactor";
import AssetTitle from "./AssetTitle";
import BarChart from "@/icons/BarChart";
import SecuredBy from "@/icons/SecuredBy";
import Liquidity from "@/icons/Liquidity";
import "@suiet/wallet-kit/style.css";
import axios from "axios";

const VaultBox = async () => {
  const response = await axios.get(
    "https://test-vercel-seven-ivory.vercel.app/v1/vaults"
  );

  let vaults = response.data
  let assets = []
  for(let i = 0; i < vaults.length; i++){
    // console.log("vault item: ", vaults[i])
    let asset = {
      id: i + 1,
      name: vaults[i].vault_name,
      fund: "DigiTrust",
      apy: 3.01,
      secured_by: vaults[i].vault_adr,
      liquidity: `${vaults[i].lockup_time} giờ`
    }
    assets.push(asset)
  }

  // const assets = [
  //   {
  //     id: 1,
  //     name: "Gói Cơ Bản",
  //     fund: "DigiTrust",
  //     apy: 3.01,
  //     secured_by: "DigiTrust",
  //     liquidity: "24 - 48 giờ"
  //   },
  //   {
  //     id: 2,
  //     name: "Gói Ổn Định",
  //     fund: "DigiTrust",
  //     apy: 4.75,
  //     secured_by: "DigiTrust",
  //     liquidity: "24 - 48 giờ"
  //   },
  //   {
  //     id: 3,
  //     name: "Gói Tăng Trưởng",
  //     fund: "DigiTrust",
  //     apy: 3.15,
  //     secured_by: "DigiTrust",
  //     liquidity: "24 - 48 giờ"
  //   },
  // ];
  return (
    <div className="container p-4 m-auto grid">
      <AssetTitle title={"Top danh mục đầu tư"} />
      {assets.map((asset) => (
        <a key={asset.id} href={"/portfolio/" + asset.id} className="rounded-lg mt-8">
          <div className="flex flex-col lg:flex-row css-yvpm9d lg:py-0 border-2 border-transparent hover:border-blue-300 hover:border-2">
            <div className="basis-1/2 border-b-[1px] lg:border-b-0 flex flex-row items-center pb-5 lg:pb-0">
              <div className="justify-center css-factor p-2">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_170713)">
                    <path
                      d="M39.7077 35.252H35.4705C35.4153 35.3454 35.3176 35.4134 35.1987 35.4134H34.0864C33.7934 35.4134 33.5557 35.6511 33.5557 35.9441V37.5404C33.5557 37.8334 33.7934 38.0712 34.0864 38.0712H41.0875C41.3805 38.0712 41.6182 37.8334 41.6182 37.5404V35.9441C41.6182 35.6469 41.3847 35.4134 41.0875 35.4134H39.9752C39.8605 35.4134 39.7629 35.3497 39.7034 35.252H39.7077Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M39.6567 20.5491H37.7461V34.9293H39.6567V20.5491Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M34.0864 17.4158C33.7934 17.4158 33.5557 17.6536 33.5557 17.9465V19.5429C33.5557 19.8359 33.7934 20.0736 34.0864 20.0736H35.1987C35.3134 20.0736 35.411 20.1373 35.4662 20.2307H39.7034C39.7586 20.1373 39.8563 20.0736 39.9709 20.0736H41.0833C41.3762 20.0736 41.614 19.8359 41.614 19.5429V17.9465C41.614 17.6493 41.3805 17.4158 41.0833 17.4158H34.0821H34.0864Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M37.4277 20.5491H35.5171V34.9293H37.4277V20.5491Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M44.3015 13.8664H5.02454L24.1599 0.781167C24.4613 0.585865 24.8604 0.585865 25.1619 0.776921L44.3015 13.8664Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M3.21582 16.2483C3.21582 16.5412 3.45358 16.779 3.74653 16.779H45.5751C45.8681 16.779 46.1058 16.5412 46.1058 16.2483V14.6519C46.1058 14.5118 46.0507 14.3887 45.9615 14.2953C45.8511 14.2273 45.7195 14.1849 45.5751 14.1849H3.74653C3.60218 14.1849 3.47056 14.2273 3.36017 14.2953C3.27101 14.3887 3.21582 14.5118 3.21582 14.6519V16.2483Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M3.69134 41.3573C3.79748 41.3658 3.87815 41.4295 3.9291 41.5144H45.3926C45.4435 41.4295 45.5242 41.3658 45.6303 41.3573C45.8935 41.3318 46.1016 41.0983 46.1016 40.8308V39.2344C46.1016 38.9372 45.8681 38.7037 45.5709 38.7037H3.74653C3.45358 38.7037 3.21582 38.9415 3.21582 39.2344V40.8308C3.21582 41.1026 3.42386 41.3318 3.69134 41.3573Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M47.8339 41.9942H45.6643C45.5497 41.9942 45.4478 41.9305 45.3926 41.8328H3.93339C3.87819 41.9262 3.78054 41.9942 3.66166 41.9942H1.48787C1.19491 41.9942 0.957153 42.2319 0.957153 42.5249V44.1213C0.957153 44.4142 1.19491 44.652 1.48787 44.652H47.8339C48.1311 44.652 48.3646 44.4185 48.3646 44.1213V42.5249C48.3646 42.2319 48.1268 41.9942 47.8339 41.9942Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M47.8339 41.3573H46.6196C46.7003 41.2002 46.7427 41.0219 46.7427 40.8308V39.2345C46.7427 38.5891 46.2205 38.0669 45.5752 38.0669H42.1234C42.2041 37.9056 42.255 37.7272 42.255 37.5362V35.9398C42.255 35.2945 41.7328 34.7722 41.0875 34.7722H40.2935V20.7105H41.0875C41.7328 20.7105 42.255 20.1883 42.255 19.5429V17.9466C42.255 17.7555 42.2041 17.5772 42.1234 17.4158H45.5752C46.2205 17.4158 46.7427 16.8936 46.7427 16.2483V14.6519C46.7427 14.0065 46.2205 13.4843 45.5752 13.4843H44.8704L25.51 0.246248C24.9921 -0.0806709 24.3255 -0.0806709 23.8033 0.250493L4.45562 13.4843H3.74659C3.10124 13.4843 2.57902 14.0065 2.57902 14.6519V16.2483C2.57902 16.8936 3.10124 17.4158 3.74659 17.4158H7.18136C7.10069 17.5772 7.04974 17.7555 7.04974 17.9466V19.5429C7.04974 20.1883 7.57196 20.7105 8.21731 20.7105H9.01125V34.7722H8.21731C7.57196 34.7722 7.04974 35.2945 7.04974 35.9398V37.5362C7.04974 37.7272 7.10069 37.9056 7.18136 38.0669H3.74659C3.10124 38.0669 2.57902 38.5891 2.57902 39.2345V40.8308C2.57902 41.0219 2.62148 41.2002 2.70215 41.3573H1.48788C0.842533 41.3573 0.320312 41.8795 0.320312 42.5249V44.1213C0.320312 44.7666 0.842533 45.2888 1.48788 45.2888H47.8339C48.4792 45.2888 49.0015 44.7666 49.0015 44.1213V42.5249C49.0015 41.8795 48.4792 41.3573 47.8339 41.3573ZM48.3646 44.1213C48.3646 44.4185 48.1311 44.652 47.8339 44.652H1.48788C1.19493 44.652 0.957167 44.4142 0.957167 44.1213V42.5249C0.957167 42.2319 1.19493 41.9942 1.48788 41.9942H3.66167C3.77631 41.9942 3.87821 41.9305 3.9334 41.8328H45.3926C45.4478 41.9262 45.5455 41.9942 45.6643 41.9942H47.8339C48.1269 41.9942 48.3646 42.2319 48.3646 42.5249V44.1213ZM3.21588 39.2345C3.21588 38.9415 3.45364 38.7038 3.74659 38.7038H45.5752C45.8724 38.7038 46.1059 38.9373 46.1059 39.2345V40.8308C46.1059 41.1026 45.8979 41.3318 45.6346 41.3573C45.5285 41.3658 45.4478 41.4295 45.3969 41.5144H3.92915C3.87821 41.4295 3.79754 41.3658 3.6914 41.3573C3.42392 41.3318 3.21588 41.0983 3.21588 40.8308V39.2345ZM7.68659 37.5362V35.9398C7.68659 35.6469 7.92435 35.4091 8.21731 35.4091H9.32968C9.44431 35.4091 9.54196 35.3454 9.6014 35.2478H13.8386C13.8938 35.3412 13.9915 35.4091 14.1103 35.4091H15.2227C15.5199 35.4091 15.7534 35.6426 15.7534 35.9398V37.5362C15.7534 37.8291 15.5157 38.0669 15.2227 38.0669H8.22155C7.9286 38.0669 7.69084 37.8291 7.69084 37.5362H7.68659ZM7.68659 19.5429V17.9466C7.68659 17.6536 7.92435 17.4158 8.21731 17.4158H15.2185C15.5157 17.4158 15.7492 17.6494 15.7492 17.9466V19.5429C15.7492 19.8359 15.5114 20.0736 15.2185 20.0736H14.1061C13.9915 20.0736 13.8938 20.1373 13.8386 20.2307H9.6014C9.54621 20.1373 9.44856 20.0736 9.33392 20.0736H8.22155C7.9286 20.0736 7.69084 19.8359 7.69084 19.5429H7.68659ZM25.1619 0.77696L44.3057 13.8664H5.02454L24.1556 0.781205C24.4613 0.585903 24.8604 0.585903 25.1576 0.77696H25.1619ZM41.6224 17.9466V19.5429C41.6224 19.8359 41.3847 20.0736 41.0917 20.0736H39.9794C39.8647 20.0736 39.7671 20.1373 39.7119 20.2307H35.4747C35.4195 20.1373 35.3218 20.0736 35.2072 20.0736H34.0948C33.8019 20.0736 33.5641 19.8359 33.5641 19.5429V17.9466C33.5641 17.6536 33.8019 17.4158 34.0948 17.4158H41.096C41.3932 17.4158 41.6267 17.6494 41.6267 17.9466H41.6224ZM41.6224 35.9398V37.5362C41.6224 37.8291 41.3847 38.0669 41.0917 38.0669H34.0906C33.7976 38.0669 33.5599 37.8291 33.5599 37.5362V35.9398C33.5599 35.6469 33.7976 35.4091 34.0906 35.4091H35.2029C35.3176 35.4091 35.4152 35.3454 35.4747 35.2478H39.7119C39.7671 35.3412 39.8647 35.4091 39.9836 35.4091H41.096C41.3932 35.4091 41.6267 35.6426 41.6267 35.9398H41.6224ZM11.8771 34.9293V20.5492H13.7877V34.9293H11.8771ZM9.64811 20.5492H11.5587V34.9293H9.64811V20.5492ZM3.74659 14.1849H45.5752C45.7195 14.1849 45.8512 14.2273 45.9615 14.2953C46.0507 14.3887 46.1059 14.5118 46.1059 14.6519V16.2483C46.1059 16.5412 45.8681 16.779 45.5752 16.779H3.74659C3.45364 16.779 3.21588 16.5412 3.21588 16.2483V14.6519C3.21588 14.5118 3.27107 14.3887 3.36023 14.2953C3.47062 14.2273 3.60224 14.1849 3.74659 14.1849ZM37.4277 20.5492V34.9293H35.5171V20.5492H37.4277ZM39.6567 20.5492V34.9293H37.7461V20.5492H39.6567ZM15.2142 34.7722H14.4203V20.7105H15.2142C15.8596 20.7105 16.3818 20.1883 16.3818 19.5429V17.9466C16.3818 17.7555 16.3308 17.5772 16.2502 17.4158H20.1265C20.0458 17.5772 19.9949 17.7555 19.9949 17.9466V19.5429C19.9949 20.1883 20.5171 20.7105 21.1624 20.7105H21.9564V34.7722H21.1624C20.5171 34.7722 19.9949 35.2945 19.9949 35.9398V37.5362C19.9949 37.7272 20.0458 37.9056 20.1265 38.0669H16.2502C16.3308 37.9056 16.3818 37.7272 16.3818 37.5362V35.9398C16.3818 35.2945 15.8596 34.7722 15.2142 34.7722ZM24.818 34.9336V20.5534H26.7285V34.9336H24.818ZM22.589 34.9336V20.5534H24.4995V34.9336H22.589ZM28.6901 17.9508V19.5472C28.6901 19.8401 28.4523 20.0779 28.1593 20.0779H27.047C26.9323 20.0779 26.8347 20.1416 26.7795 20.235H22.5423C22.4871 20.1416 22.3894 20.0779 22.2748 20.0779H21.1624C20.8695 20.0779 20.6317 19.8401 20.6317 19.5472V17.9508C20.6317 17.6578 20.8695 17.4201 21.1624 17.4201H28.1636C28.4608 17.4201 28.6943 17.6536 28.6943 17.9508H28.6901ZM20.6275 37.5404V35.9441C20.6275 35.6511 20.8652 35.4133 21.1582 35.4133H22.2706C22.3852 35.4133 22.4828 35.3497 22.5423 35.252H26.7795C26.8347 35.3454 26.9323 35.4133 27.0512 35.4133H28.1636C28.4608 35.4133 28.6943 35.6469 28.6943 35.9441V37.5404C28.6943 37.8334 28.4565 38.0711 28.1636 38.0711H21.1624C20.8695 38.0711 20.6317 37.8334 20.6317 37.5404H20.6275ZM28.1593 34.7765H27.3654V20.7147H28.1593C28.8047 20.7147 29.3269 20.1925 29.3269 19.5472V17.9508C29.3269 17.7597 29.276 17.5814 29.1953 17.4201H33.0546C32.974 17.5814 32.923 17.7597 32.923 17.9508V19.5472C32.923 20.1925 33.4452 20.7147 34.0906 20.7147H34.8845V34.7765H34.0906C33.4452 34.7765 32.923 35.2987 32.923 35.9441V37.5404C32.923 37.7315 32.974 37.9098 33.0546 38.0711H29.1953C29.276 37.9098 29.3269 37.7315 29.3269 37.5404V35.9441C29.3269 35.2987 28.8047 34.7765 28.1593 34.7765Z"
                      fill="#393941"
                    ></path>
                    <path
                      d="M9.3297 20.0736C9.44434 20.0736 9.54199 20.1373 9.59718 20.2307H13.8344C13.8896 20.1373 13.9872 20.0736 14.1019 20.0736H15.2142C15.5072 20.0736 15.7449 19.8359 15.7449 19.5429V17.9465C15.7449 17.6493 15.5114 17.4158 15.2142 17.4158H8.21308C7.92013 17.4158 7.68237 17.6536 7.68237 17.9465V19.5429C7.68237 19.8359 7.92013 20.0736 8.21308 20.0736H9.32546H9.3297Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M11.5586 20.5491H9.64807V34.9293H11.5586V20.5491Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M15.2142 38.0669C15.5072 38.0669 15.7449 37.8291 15.7449 37.5362V35.9398C15.7449 35.6426 15.5114 35.4091 15.2142 35.4091H14.1018C13.9872 35.4091 13.8896 35.3454 13.8301 35.2477H9.59291C9.53772 35.3411 9.44006 35.4091 9.32119 35.4091H8.20881C7.91586 35.4091 7.6781 35.6468 7.6781 35.9398V37.5362C7.6781 37.8291 7.91586 38.0669 8.20881 38.0669H15.21H15.2142Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M13.7876 20.5491H11.8771V34.9293H13.7876V20.5491Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M20.6275 17.9465V19.5429C20.6275 19.8359 20.8653 20.0736 21.1582 20.0736H22.2706C22.3853 20.0736 22.4829 20.1373 22.5381 20.2307H26.7753C26.8305 20.1373 26.9281 20.0736 27.0428 20.0736H28.1552C28.4481 20.0736 28.6859 19.8359 28.6859 19.5429V17.9465C28.6859 17.6493 28.4524 17.4158 28.1552 17.4158H21.154C20.861 17.4158 20.6233 17.6536 20.6233 17.9465H20.6275Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M24.5038 20.5491H22.5933V34.9293H24.5038V20.5491Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M26.7328 20.5491H24.8223V34.9293H26.7328V20.5491Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M28.6943 37.5362V35.9398C28.6943 35.6426 28.4607 35.4091 28.1636 35.4091H27.0512C26.9365 35.4091 26.8389 35.3454 26.7795 35.2477H22.5422C22.4871 35.3411 22.3894 35.4091 22.2705 35.4091H21.1582C20.8652 35.4091 20.6274 35.6468 20.6274 35.9398V37.5362C20.6274 37.8291 20.8652 38.0669 21.1582 38.0669H28.1593C28.4523 38.0669 28.69 37.8291 28.69 37.5362H28.6943Z"
                      fill="#F9F9FC"
                    ></path>
                    <path
                      d="M24.6609 11.7946C26.7009 11.7946 28.3547 10.1408 28.3547 8.1008C28.3547 6.06079 26.7009 4.40704 24.6609 4.40704C22.6209 4.40704 20.9672 6.06079 20.9672 8.1008C20.9672 10.1408 22.6209 11.7946 24.6609 11.7946Z"
                      fill="#FF7900"
                    ></path>
                    <path
                      d="M24.6609 4.08856C22.4489 4.08856 20.6487 5.88874 20.6487 8.10074C20.6487 10.3128 22.4489 12.1129 24.6609 12.1129C26.8729 12.1129 28.673 10.3128 28.673 8.10074C28.673 5.88874 26.8729 4.08856 24.6609 4.08856ZM20.9671 8.10074C20.9671 6.06281 22.6229 4.40699 24.6609 4.40699C26.6988 4.40699 28.3546 6.06281 28.3546 8.10074C28.3546 10.1387 26.6988 11.7945 24.6609 11.7945C22.6229 11.7945 20.9671 10.1387 20.9671 8.10074Z"
                      fill="#575764"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.8774 8.4914C25.1619 8.48291 25.4463 8.45743 25.7266 8.40648C25.7478 8.40648 25.769 8.40648 25.786 8.40648C25.803 8.40648 25.8242 8.41922 25.8412 8.43621C25.8582 8.44894 25.8709 8.46592 25.8794 8.48291C25.8879 8.49989 25.8921 8.52112 25.8921 8.54235V9.07306C25.4888 9.15373 25.0812 9.19618 24.6694 9.19194C23.7056 9.19194 22.8607 8.9839 22.3937 8.66972C22.2451 8.58056 22.1262 8.44894 22.0498 8.2961C22.0201 8.23666 22.0073 8.16873 22.0073 8.10504C22.0073 8.00314 22.0413 7.90125 22.1007 7.82058C22.105 7.81209 22.1135 7.80784 22.122 7.8036C22.1304 7.79935 22.1389 7.7951 22.1474 7.7951C22.1559 7.7951 22.1644 7.7951 22.1729 7.7951C22.1814 7.7951 22.1899 7.8036 22.1941 7.80784C22.2451 7.85879 22.3003 7.90549 22.364 7.94795C22.6314 8.12202 22.9244 8.24939 23.2301 8.32157C23.6334 8.42347 24.0495 8.48291 24.4656 8.4914V8.75463C24.4656 8.78011 24.4698 8.80983 24.4826 8.8353C24.4911 8.86077 24.508 8.882 24.5293 8.90323C24.5505 8.92446 24.5717 8.9372 24.5972 8.94993C24.6227 8.95843 24.6481 8.96692 24.6779 8.96692C24.7331 8.96692 24.784 8.94569 24.8222 8.90748C24.8604 8.86927 24.8817 8.81407 24.8817 8.76312V8.49989L24.8774 8.4914Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.3314 8.10077C27.3314 8.1687 27.3144 8.23663 27.2889 8.29607C27.2125 8.44892 27.0894 8.57629 26.945 8.66545C26.7455 8.79282 26.529 8.89047 26.2997 8.9584V8.35976C26.2997 8.33004 26.3082 8.30032 26.3252 8.27909C26.3421 8.25361 26.3676 8.23663 26.3931 8.22814C26.6011 8.16021 26.7964 8.06256 26.9747 7.94368C27.0342 7.90122 27.0936 7.85452 27.1446 7.80357C27.1531 7.79508 27.1573 7.79083 27.1658 7.79083C27.1743 7.79083 27.1828 7.79083 27.1913 7.79083C27.1998 7.79083 27.2083 7.79083 27.2168 7.79932C27.2252 7.80357 27.2295 7.81206 27.238 7.81631C27.2974 7.90122 27.3314 7.99887 27.3314 8.10501V8.10077Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.3314 9.21317C27.3314 9.2811 27.3144 9.34903 27.289 9.40847C27.2125 9.56132 27.0894 9.68869 26.9451 9.77785C26.4738 10.092 25.6289 10.3001 24.6694 10.3001C23.7098 10.3001 22.8607 10.092 22.3937 9.77785C22.2451 9.68869 22.1262 9.55707 22.0498 9.40422C22.0201 9.34479 22.0073 9.27685 22.0073 9.21317C22.0073 9.11127 22.0413 9.00938 22.1007 8.92446C22.105 8.91597 22.1135 8.91172 22.122 8.90748C22.1304 8.90323 22.1389 8.89899 22.1474 8.89899C22.1559 8.89899 22.1644 8.89899 22.1729 8.89899C22.1814 8.89899 22.1899 8.90748 22.1941 8.91172C22.2451 8.96267 22.3003 9.00938 22.364 9.05183C22.6272 9.22591 22.9244 9.35328 23.2301 9.42545C23.7014 9.54433 24.1854 9.60377 24.6736 9.59953C25.0855 9.59953 25.493 9.56132 25.8964 9.48065V9.69718C25.8964 9.72265 25.9006 9.75237 25.9134 9.77785C25.9219 9.80332 25.9388 9.82455 25.9601 9.84578C25.9813 9.86701 26.0025 9.87974 26.028 9.89248C26.0535 9.90097 26.0789 9.90946 26.1087 9.90946C26.1341 9.90946 26.1639 9.90522 26.1893 9.89248C26.2148 9.88399 26.236 9.86701 26.2573 9.84578C26.2785 9.82455 26.2912 9.80332 26.304 9.77785C26.3125 9.75237 26.321 9.7269 26.321 9.69718V9.37026C26.5587 9.29808 26.788 9.19194 26.996 9.05608C27.0555 9.01362 27.1149 8.96692 27.1658 8.91597C27.1743 8.90748 27.1786 8.90323 27.1871 8.90323C27.1956 8.90323 27.2041 8.90323 27.2125 8.90323C27.221 8.90323 27.2295 8.90323 27.238 8.91172C27.2465 8.91597 27.2508 8.92446 27.2592 8.92871C27.3187 9.01362 27.3527 9.11127 27.3527 9.21741L27.3314 9.21317Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.3314 6.98415C27.3314 7.05633 27.3144 7.12426 27.2847 7.18794C27.2083 7.3323 27.0979 7.45118 26.9578 7.54034C26.8432 7.61676 26.7243 7.68044 26.5969 7.73564C26.045 7.95217 25.4591 8.06256 24.8689 8.07105V7.77809C24.8689 7.69318 24.8944 7.61251 24.9411 7.54458C24.9878 7.47665 25.0515 7.42146 25.1321 7.39174L25.4166 7.27286C25.6586 7.1837 25.8157 7.05208 25.8157 6.90348C25.8157 6.63176 25.2977 6.41523 24.6609 6.41523C24.024 6.41523 23.506 6.63176 23.506 6.90348C23.506 7.05208 23.6631 7.1837 23.9051 7.27286L24.1938 7.39174C24.2703 7.42146 24.3382 7.47665 24.3849 7.54458C24.4316 7.61251 24.4571 7.69318 24.4571 7.77809V8.07105C23.8627 8.06256 23.2768 7.95217 22.7206 7.73564C22.5932 7.68044 22.4743 7.61676 22.3597 7.54034C22.2238 7.45542 22.1092 7.3323 22.0328 7.18794C22.0031 7.12426 21.9861 7.05208 21.9861 6.98415C21.9861 6.38126 23.1791 5.89301 24.6524 5.89301C26.1256 5.89301 27.3272 6.38126 27.3272 6.98415H27.3314Z"
                      fill="white"
                    ></path>
                    <path
                      d="M46.1058 39.9435V40.8308C46.1058 41.1026 45.8978 41.3318 45.6346 41.3615C45.5284 41.37 45.4478 41.4337 45.3968 41.5186H3.93334C3.88239 41.4337 3.79748 41.37 3.69134 41.3615C3.42811 41.3318 3.21582 41.1026 3.21582 40.8308V39.9435H46.1058Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M15.7492 17.9465V19.5429C15.7492 19.8359 15.5114 20.0736 15.2185 20.0736H14.1061C13.9872 20.0736 13.8896 20.1416 13.8344 20.235H11.6054L8.78198 17.4158H15.2185C15.5157 17.4158 15.7492 17.6493 15.7492 17.9465Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M13.7876 20.5534H11.8771V34.9336H13.7876V20.5534Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M15.7492 35.9398V37.5362C15.7492 37.6721 15.6983 37.7952 15.6134 37.8886L12.9725 35.252H13.8344C13.8896 35.3454 13.9873 35.4091 14.1061 35.4091H15.2185C15.5157 35.4091 15.7492 35.6426 15.7492 35.9398Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M28.6942 17.9465V19.5429C28.6942 19.8359 28.4565 20.0736 28.1635 20.0736H27.0512C26.9323 20.0736 26.8346 20.1416 26.7794 20.235H24.5504L21.7271 17.4158H28.1635C28.4607 17.4158 28.6942 17.6493 28.6942 17.9465Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M26.7328 20.5534H24.8223V34.9336H26.7328V20.5534Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M28.6943 35.9398V37.5362C28.6943 37.6721 28.6433 37.7952 28.5584 37.8886L25.9176 35.252H26.7795C26.8347 35.3454 26.9323 35.4091 27.0512 35.4091H28.1636C28.4608 35.4091 28.6943 35.6426 28.6943 35.9398Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M41.6521 17.9465V19.5429C41.6521 19.8359 41.4144 20.0736 41.1214 20.0736H40.009C39.8902 20.0736 39.7925 20.1416 39.7373 20.235H37.5083L34.6849 17.4158H41.1214C41.4186 17.4158 41.6521 17.6493 41.6521 17.9465Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M39.6906 20.5534H37.78V34.9336H39.6906V20.5534Z"
                      fill="#CACAD9"
                    ></path>
                    <path
                      d="M41.6522 35.9398V37.5362C41.6522 37.6721 41.6012 37.7952 41.5163 37.8886L38.8755 35.252H39.7374C39.7926 35.3454 39.8902 35.4091 40.0091 35.4091H41.1215C41.4187 35.4091 41.6522 35.6426 41.6522 35.9398Z"
                      fill="#CACAD9"
                    ></path>
                  </g>
                  {/* <defs>
                    <clipPath id="clip0_1_170713">
                      <rect
                        width="48.6811"
                        height="45.2888"
                        fill="white"
                        transform="translate(0.320312)"
                      ></rect>
                    </clipPath>
                  </defs> */}
                </svg>
              </div>
              <div className="pl-2">
                <h6 className="text-xl font-bold">{asset.name}</h6>
                <p className="text-sm">{asset.fund}</p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-wrap flex-row mt-4 lg:mt-0">
              <div className="w-1/3">
                <AssetFactor
                  icon={<BarChart width={12} />}
                  factor={{ name: "Lãi 30 ngày", value: asset.apy + "%" }}
                />
              </div>
              <div className="w-1/3 border-x-[1px] lg:border-0">
                <AssetFactor
                  icon={<SecuredBy width={12} />}
                  factor={{ name: "Bảo trợ bởi", value: asset.secured_by }}
                />
              </div>
              <div className="w-1/3">
                <AssetFactor
                  icon={<Liquidity width={12} />}
                  factor={{ name: "Thanh khoản", value: asset.liquidity }}
                />
              </div>
            </div>
            <div className="absolute card__arrow css-hvjoyt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="24"
                fill="none"
              >
                <g filter="url(#a)">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1.375 22.544a2.24 2.24 0 0 1 0-3.168L8.75 12 1.375 4.624a2.24 2.24 0 0 1 3.168-3.168l8.96 8.96a2.24 2.24 0 0 1 0 3.168l-8.96 8.96a2.24 2.24 0 0 1-3.168 0Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default VaultBox;
