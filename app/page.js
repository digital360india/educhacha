import "./globals.css";
import FormEduChacha from "@/components/FormEduChacha";
import WhyChooseUsEduChacha from "@/components/WhyChooseUsEduChacha";
import AboutEduChacha from "@/components/AboutEduChacha";
import Testimonials from "@/components/Testimonials";
import MapEduChacha from "@/components/MapEduChacha";
import HeroEduChacha from "@/components/HeroEduChacha";

export async function generateMetadata() {
  return {
    title: "Find the Best Boarding Schools in Seconds | educhacha",
    description: "Find your dream boarding school in seconds with Educhacha. Unlock a world of educational possibilities. Your path to the perfect education begins here.",
    keywords: "School Admissions, School consultancy, School consultancy, Online School Listings, Admissions Guidance, Boarding School Listings, Trusted School Consultancy, School Admission Information, Finding the Right Boarding School",
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    twitter: {
      card: "summary",
      site: "@EduchachaIndia",
      title: "Find the Best Boarding Schools in Seconds | Educhacha",
      description: "Find your dream boarding school in seconds with Educhacha. Unlock a world of educational possibilities. Your path to the perfect education begins here.",
      image: "https://res.cloudinary.com/infoGoEdu/image/upload/v1703243169/GoEdu/GoEduHomeD.png",
      url: "https://x.com/GoEduindia",
    },
    openGraph: {
      locale: "en_US",
      type: "website",
      title: "Find the Best Boarding Schools in Seconds | Educhacha",
      description: "Find your dream boarding school in seconds with Educhacha. Unlock a world of educational possibilities. Your path to the perfect education begins here.",
      url: "https://www.educhacha.com/",
      siteName: "Educhacha",
      images: [
        {
          url: "https://res.cloudinary.com/infoGoEdu/image/upload/v1703243169/GoEdu/GoEduHomeD.png",
          alt: "Educhacha Home",
        },
      ],
    },
    additionalLinkTags: [
      { rel: "icon", href: "/favicon.ico" },
    ],
    additionalMetaTags: [
      {
        name: "fbq-init",
        content: `!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1033752393439199'); fbq('track', 'PageView');`,
      },
    ],
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Educhacha",
        alternateName: "Educhacha",
        url: "https://www.educhacha.com/",
        logo: "https://res.cloudinary.com/infoGoEdu/image/upload/v1703311458/GoEdu/logo1.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "9557695360",
          contactType: "",
          areaServed: "IN",
          availableLanguage: "en",
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=100092405190812",
          "https://x.com/GoEduIndia?s=20",
          "https://www.instagram.com/GoEduindia/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
          "https://www.educhacha.com/",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "ContactPoint",
        alternateName: "Educhacha",
        areaServed: "India",
        availableLanguage: "English",
        email: "educhachaindia@gmail.com",
        telephone: "9557695360",
        url: "https://www.educhacha.com/",
      },
      {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://www.educhacha.com/about" },
          { "@type": "ListItem", position: 3, name: "Contact", item: "https://www.educhacha.com/contact" },
          { "@type": "ListItem", position: 4, name: "Blog", item: "https://blog.educhacha.com/" },
          { "@type": "ListItem", position: 5, name: "Boarding schools in Dehradun", item: "https://www.educhacha.com/category/boarding-schools-in-dehradun" },
          { "@type": "ListItem", position: 6, name: "Boarding schools in Bangalore", item: "https://www.educhacha.com/category/boarding-schools-in-bangalore" },
        ],
      },
    ],
  };
}

export default function Home() {
  return (
    <div>
      <HeroEduChacha />
      <FormEduChacha />
      <MapEduChacha />
      <WhyChooseUsEduChacha />
    
      <AboutEduChacha />
      <Testimonials />
    </div>
  );
}
