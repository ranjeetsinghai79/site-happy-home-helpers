import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Happy Home Helpers",
    tagline: "Sparkling Homes, Happy Lives",
    phone: "(702) 224-2944",
    phoneHref: "tel:+17022242944",
    email: "info@happyhomehelpers.com",
    address: "123 Main St",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas", "Summerlin", "Henderson", "Boulder City"],
    license: "Licensed & Insured",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "navy",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning", desc: "Keep your home spotless with our regular and reliable cleaning services.", urgent: false },
    { icon: "sparkles", title: "AirBnB Cleaning", desc: "Ensure your rental is guest-ready with our efficient and thorough turnover cleaning.", urgent: true },
    { icon: "droplets", title: "Deep Cleaning", desc: "Experience a truly refreshed home with our comprehensive deep cleaning service.", urgent: false },
    { icon: "truck", title: "Move Out Cleaning", desc: "Leave your old place immaculate and secure your deposit with our move-out service.", urgent: false },
    { icon: "briefcase", title: "Office Cleaning", desc: "Maintain a professional and hygienic workspace for your employees and clients.", urgent: false },
    { icon: "scissors", title: "Home Organization", desc: "Declutter and organize your living spaces for a more functional and peaceful home.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Summerlin, NV", stars: 5, text: "Happy Home Helpers did an amazing job with our move-out clean last month. They were prompt, thorough, and left the apartment sparkling. The landlord was very impressed, and we got our full deposit back without any issues. Highly recommend their efficient and friendly team!" },
    { name: "Mark T.", location: "Henderson, NV", stars: 5, text: "We use Happy Home Helpers for our weekly house cleaning, and they consistently exceed expectations. The team is always on time, professional, and pays attention to every detail. Coming home to a clean house after a long day is truly a luxury they provide at a fair price." },
    { name: "Jessica R.", location: "Las Vegas, NV", stars: 5, text: "I needed a deep clean before a big family gathering, and Happy Home Helpers delivered! They transformed my home in just a few hours. The kitchen and bathrooms were immaculate, and even the hard-to-reach spots were spotless. Their service was worth every penny, and I'll definitely be calling them again." }
  ],

  trustBadges: [
    "Licensed & Insured", "Same-Day Service", "5-Star Rated", "100% Guarantee", "Experienced Professionals", "Eco-Friendly Products"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 14, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We respond quickly to your cleaning needs, often offering same-day service." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! We provide clear, honest pricing before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our cleaning technicians are trained, certified, and dedicated to excellence." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work; if you're not happy, we'll make it right." },
    { icon: "phone", title: "Easy Booking 24/7", desc: "Schedule your cleaning anytime, anywhere with our convenient online system." },
    { icon: "shield-check", title: "Trusted & Vetted", desc: "All our staff are thoroughly background-checked for your peace of mind." }
  ],

  formServiceOptions: ["House Cleaning", "AirBnB Cleaning", "Deep Cleaning", "Move Out Cleaning", "Move In Cleaning", "Maid Services", "Apartment Cleaning", "Post Construction Cleaning", "Carpet Cleaning", "Upholstery Cleaning", "Home Organization", "Janitorial Services", "Commercial Cleaning", "Office Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!