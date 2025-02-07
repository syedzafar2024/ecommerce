// File: pages/my-account.tsx

import HeaderBanner from "@/app/myaccount/HeaderBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import HomePage from "@/pages/home";
import AuthPage from "@/pages/auth";

export default function MyAccount() {
  const breadcrumbs = [{ name: "Home", link: "/" }, { name: "My Account" }];

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray">
      <Navbar />
      <HeaderBanner
        title="My Account"
        breadcrumbs={breadcrumbs}
      
      />
      <AuthPage />
      <HomePage />
      <Footer />
    </div>
  );
}
