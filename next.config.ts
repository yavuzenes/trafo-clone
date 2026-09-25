import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const retiredCities = ["antalya", "kayseri", "manisa", "tekirdag", "samsun", "eskisehir", "hatay", "diyarbakir", "balikesir", "denizli"];
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.besenerji.net" }],
      destination: "https://besenerji.net/:path*",
      permanent: true,
    }, ...retiredCities.map(city => ({
      source: `/trafo-bakimi/${city}`,
      destination: "/hizmetler/trafo-bakim-ve-onarimi",
      permanent: true,
    }))];
  },
};

export default nextConfig;
