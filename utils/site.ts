export const site = {
  name: "Aeduplay",
  legalName: "Navshilp Enterprises",
  tagline: "Where Learning Meets Play",
  description:
    "Aeduplay by Navshilp Enterprises is Chennai's trusted, ISO-certified manufacturer of writing boards, school & preschool furniture, indoor and outdoor play equipment, soft play products and playground flooring — building inspiring learning spaces since 1999.",
  phone: ["+91 98418 39582", "+91 95001 14932"],
  phoneHref: "+919841839582",
  whatsapp: "919841839582",
  email: "navshilpboards@gmail.com",
  address:
    "No. 20/1, Gupta Nivas, 1st Floor, Wall Tax Road, Kondithope, George Town, Chennai – 600 079, Tamil Nadu, India",
  mapUrl: "https://maps.google.com/?q=Navshilp+Enterprises+Kondithope+Chennai",
  facebook: "https://www.facebook.com/aeduplay/",
  since: 1999,
  brandSince: 2010,
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  items: string[];
  accent: string; // tailwind gradient classes
  badge: string;
};

export const categories: Category[] = [
  {
    slug: "writing-boards",
    name: "Writing & Display Boards",
    short: "Boards that last decades, not semesters.",
    description:
      "Premium ceramic-steel magnetic whiteboards, green chalkboards, pin-up and notice boards with sliding glass doors — engineered for daily classroom intensity.",
    items: [
      "Ceramic steel magnetic whiteboards",
      "Green & black chalkboards",
      "Notice boards with sliding glass doors",
      "Pin-up & fabric display boards",
      "Graph, music & combination boards",
    ],
    accent: "from-sky-500 to-indigo-600",
    badge: "Classroom essential",
  },
  {
    slug: "school-furniture",
    name: "School Furniture",
    short: "Ergonomic. Durable. Built for growing minds.",
    description:
      "Classroom desks and benches, staff-room tables, library racks and laboratory furniture built with institutional-grade materials and finishes.",
    items: [
      "Classroom desks & benches",
      "Single & dual student desks",
      "Library & storage racks",
      "Laboratory tables & stools",
      "Staff room & office furniture",
    ],
    accent: "from-amber-500 to-orange-600",
    badge: "Institution grade",
  },
  {
    slug: "preschool-furniture",
    name: "Preschool & Play School Furniture",
    short: "Tiny furniture, thoughtfully over-engineered.",
    description:
      "Rounded-edge kids' tables and chairs, cubbies, activity stations and rest-time furniture designed around child safety standards and bright, joyful palettes.",
    items: [
      "Kids' tables & chairs",
      "Cubby & toy storage units",
      "Activity & art stations",
      "Rest mats & nap furniture",
      "Reading corners & book displays",
    ],
    accent: "from-pink-500 to-rose-600",
    badge: "Child-safe design",
  },
  {
    slug: "outdoor-play",
    name: "Outdoor Play Equipment",
    short: "Playgrounds children never want to leave.",
    description:
      "Multi-play stations, swings, slides, see-saws, web scramblers and climbers — hot-dip galvanised, UV-stabilised and certified for safe outdoor play.",
    items: [
      "Multi-play stations",
      "Swings, slides & see-saws",
      "Web scramblers & climbers",
      "Merry-go-rounds & spring riders",
      "Custom themed play systems",
    ],
    accent: "from-emerald-500 to-teal-600",
    badge: "Safety certified",
  },
  {
    slug: "soft-play",
    name: "Indoor & Soft Play",
    short: "Soft on impact, big on imagination.",
    description:
      "Ball pools, caterpillar tunnels, foam blocks and complete indoor soft-play zones with anti-bacterial, easy-clean premium foam and vinyl.",
    items: [
      "Soft play zones & ball pools",
      "Caterpillar tunnels",
      "Foam building blocks",
      "Sensory & toddler play units",
      "Indoor activity gyms",
    ],
    accent: "from-violet-500 to-purple-600",
    badge: "Anti-bacterial foam",
  },
  {
    slug: "playground-flooring",
    name: "Playground Flooring",
    short: "Every fall, safely absorbed.",
    description:
      "EPDM rubber flooring, interlocking tiles and artificial grass with certified fall-height protection — the invisible safety layer under every great playground.",
    items: [
      "EPDM seamless rubber flooring",
      "Interlocking rubber tiles",
      "Artificial grass & turf",
      "Gym & multipurpose flooring",
      "Kerbs, ramps & accessories",
    ],
    accent: "from-lime-500 to-green-600",
    badge: "Fall-height rated",
  },
];

export const stats = [
  { value: 25, suffix: "+", label: "Years of craftsmanship" },
  { value: 1000, suffix: "+", label: "Institutions served" },
  { value: 350, suffix: "+", label: "Products in catalogue" },
  { value: 100, suffix: "%", label: "ISO-certified quality" },
];

export const testimonials = [
  {
    quote:
      "Aeduplay transformed our campus. The multi-play station and EPDM flooring have survived three years of enthusiastic kindergartners without a scratch — and the children adore it.",
    name: "Mrs. Lakshmi Raghavan",
    role: "Principal, CBSE School, Chennai",
  },
  {
    quote:
      "We furnished 42 classrooms with their desks and ceramic-steel boards. Delivery was on schedule, installation was meticulous, and the after-sales support has been outstanding.",
    name: "Fr. Antony Xavier",
    role: "Correspondent, Matriculation School, Kancheepuram",
  },
  {
    quote:
      "From design consultation to final handover, the team understood exactly what a preschool needs. Our soft-play zone is now the highlight of every admission tour.",
    name: "Ms. Divya Krishnan",
    role: "Founder, Montessori Preschool, Tambaram",
  },
  {
    quote:
      "As a facilities head, I value vendors who deliver what they promise. Navshilp's playground equipment for our township came certified, on budget and ahead of time.",
    name: "Mr. R. Senthil Kumar",
    role: "Facilities Head, IT Park, Chennai",
  },
];

export const clients = [
  "CBSE Schools",
  "Matriculation Schools",
  "Montessori Preschools",
  "International Schools",
  "Colleges & Universities",
  "IT Parks & MNCs",
  "Hospitals",
  "Residential Townships",
  "Hotels & Resorts",
  "Government Institutions",
];

export const faqs = [
  {
    q: "Do you handle design, supply and installation?",
    a: "Yes — we are an end-to-end partner. Our team surveys your space, proposes a layout with 3D visualisation for larger projects, manufactures to specification, delivers and installs with our own trained crew, and supports you after handover.",
  },
  {
    q: "Which regions do you serve?",
    a: "We are headquartered in Chennai and serve all of Tamil Nadu and South India — including Kancheepuram, Tiruvallur, Chengalpattu, Bengaluru, Hyderabad and Kochi. For large institutional projects we deliver pan-India.",
  },
  {
    q: "Are your products safety certified?",
    a: "Absolutely. Navshilp Enterprises is an ISO-certified company. Our play equipment uses hot-dip galvanised structures, food-grade plastics and UV-stabilised components, and our flooring meets certified fall-height protection standards.",
  },
  {
    q: "Can equipment be customised to our theme and space?",
    a: "Yes. Most of our playground systems, soft-play zones and furniture lines are modular and can be customised in colour, theme, size and configuration to match your branding and available area.",
  },
  {
    q: "What warranty and after-sales support do you provide?",
    a: "Every product carries a manufacturer's warranty appropriate to its category, and we maintain spare-part availability and service visits. Most of our business comes from repeat institutional clients — support is how we earn it.",
  },
  {
    q: "How do I get a quotation?",
    a: "Call us at +91 98418 39582, WhatsApp us, or use the enquiry form on our contact page with your requirement and location. We typically respond with a detailed quotation within 24–48 hours.",
  },
];

export const milestones = [
  {
    year: "1999",
    title: "Navshilp Enterprises founded",
    text: "Started in George Town, Chennai as a specialist manufacturer of school writing boards and classroom essentials.",
  },
  {
    year: "2005",
    title: "Full-line school furniture",
    text: "Expanded into institutional furniture — desks, benches, lab and library furniture for schools and colleges across Tamil Nadu.",
  },
  {
    year: "2010",
    title: "Aeduplay is born",
    text: "Launched the Aeduplay brand to bring world-class play-based learning equipment to Indian preschools and schools.",
  },
  {
    year: "2015",
    title: "ISO certification",
    text: "Achieved ISO certification, formalising the quality systems behind every board, bench and play structure we build.",
  },
  {
    year: "2019",
    title: "South India expansion",
    text: "Grew beyond Tamil Nadu to serve schools, IT parks, hospitals and townships across South India.",
  },
  {
    year: "Today",
    title: "1000+ institutions and counting",
    text: "A complete learning-space partner — from a single whiteboard to entire playgrounds — trusted by generations of educators.",
  },
];
