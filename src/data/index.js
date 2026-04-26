export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Rooms", path: "/rooms" },
  { label: "Amenities", path: "/amenities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Offers", path: "/offers" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export const ROOMS = [
  { name: "Deluxe King Room", price: 320, img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", amenities: ["🛏 King Bed", "🛁 Jacuzzi", "🌄 City View", "📶 Free WiFi"], description: "A sanctuary of comfort and understated elegance, our Deluxe King Room offers sweeping city vistas and a private jacuzzi experience." },
  { name: "Ocean Suite", price: 580, img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", amenities: ["🛏 King Bed", "🌊 Ocean View", "🍾 Mini Bar", "🛁 Soaking Tub"], description: "Wake to the sound of waves in this sea-facing suite, complete with a curated minibar and a deep soaking tub." },
  { name: "Presidential Villa", price: 1200, img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80", amenities: ["🛏 2 Bedrooms", "🏊 Private Pool", "🍽 Butler Service", "🚗 Chauffeur"], description: "The pinnacle of luxury. Two bedrooms, a private pool, dedicated butler, and chauffeur service throughout your stay." },
  { name: "Garden Bungalow", price: 410, img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", amenities: ["🌿 Garden View", "🛁 Rain Shower", "☕ Espresso Bar", "📶 Free WiFi"], description: "Nestled in lush tropical gardens, this bungalow is a peaceful retreat with a rain shower and private garden terrace." },
  { name: "Sky Penthouse", price: 950, img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=80", amenities: ["🏙 Panoramic View", "🛏 King Bed", "🍾 Welcome Kit", "🛁 Spa Bath"], description: "Above the world, this penthouse commands panoramic skyline views with a luxurious spa bath and curated welcome amenities." },
  { name: "Classic Double", price: 195, img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80", amenities: ["🛏 Double Beds", "📺 Smart TV", "☕ Coffee Maker", "📶 Free WiFi"], description: "Timeless comfort for the discerning traveller. Smart TV, premium coffee, and impeccable Aurum service." },
];

export const AMENITIES = [
  { icon: "♨️", name: "Infinity Spa", desc: "Rejuvenate with curated therapies and ancient rituals." },
  { icon: "🏊", name: "Rooftop Pool", desc: "Swim above the clouds with panoramic skyline views." },
  { icon: "🏋️", name: "Fitness Center", desc: "State-of-the-art equipment open 24/7 for guests." },
  { icon: "🍽️", name: "Fine Dining", desc: "Michelin-starred cuisine crafted from local ingredients." },
  { icon: "🍸", name: "Sky Bar", desc: "Craft cocktails and live jazz at golden hour." },
  { icon: "🧘", name: "Yoga Pavilion", desc: "Morning sessions with certified instructors by the ocean." },
  { icon: "🚗", name: "Valet Parking", desc: "Complimentary valet and airport transfers." },
  { icon: "🛎️", name: "Concierge", desc: "24-hour personal concierge for every request." },
];

export const GALLERY_IMGS = [
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=80", label: "Lobby" },
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=700&q=80", label: "Suite" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe2e6?w=700&q=80", label: "Pool" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80", label: "Dining" },
  { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=80", label: "Bar" },
  { src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=700&q=80", label: "Garden" },
  { src: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=700&q=80", label: "Spa" },
  { src: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=700&q=80", label: "Terrace" },
];

export const OFFERS = [
  { title: "Honeymoon Bliss", discount: "30% OFF", desc: "Includes roses, champagne, and a couples spa session.", original: 860, sale: 602, ends: 3, tag: "Most Popular" },
  { title: "Weekend Getaway", discount: "20% OFF", desc: "Two nights in our Deluxe King with breakfast included.", original: 640, sale: 512, ends: 5, tag: null },
  { title: "Summer Escape", discount: "25% OFF", desc: "Ocean Suite with free airport pickup for stays 3+ nights.", original: 1160, sale: 870, ends: 8, tag: "Limited" },
];

export const TESTIMONIALS = [
  { name: "Amara Singh", role: "Travel Blogger", text: "Absolutely the finest stay of my life. Every detail was curated to perfection — the staff, the food, the suite.", rating: 5, img: "https://i.pravatar.cc/80?img=47" },
  { name: "James Whitfield", role: "CEO, Whitfield Co.", text: "I've stayed at over 200 luxury hotels worldwide. Aurum stands in a class of its own. We'll be back every year.", rating: 5, img: "https://i.pravatar.cc/80?img=11" },
  { name: "Léa Fontaine", role: "Interior Designer", text: "The aesthetic is breathtaking — every corner is art. The rooftop pool at sunset is an experience I'll never forget.", rating: 5, img: "https://i.pravatar.cc/80?img=45" },
  { name: "Ravi Menon", role: "Film Director", text: "Shot part of our production here and the team went above and beyond. Exceptional hospitality.", rating: 5, img: "https://i.pravatar.cc/80?img=13" },
];

export const CONTACT_INFO = [
  { icon: "📍", text: "1 Aurum Boulevard, Luxury Lane, Bengaluru, India 560001" },
  { icon: "📞", text: "+91 80 4567 8900" },
  { icon: "✉️", text: "reservations@aurumresort.com" },
  { icon: "🕐", text: "24/7 Concierge Available" },
];
