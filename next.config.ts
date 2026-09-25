import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/en/:path*", headers: [{ key: "Content-Language", value: "en" }] },
      { source: "/ar/:path*", headers: [{ key: "Content-Language", value: "ar" }] },
    ];
  },
  async redirects() {
    const retiredCities = ["antalya", "kayseri", "manisa", "tekirdag", "samsun", "eskisehir", "hatay", "diyarbakir", "balikesir", "denizli"];
    return retiredCities.map(city => ({
      source: `/trafo-bakimi/${city}`,
      destination: "/hizmetler/trafo-bakim-ve-onarimi",
      permanent: true,
    }));
  },
};

export default nextConfig;
