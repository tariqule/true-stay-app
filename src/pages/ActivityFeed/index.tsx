import { Dimensions } from "react-native";
import { ListViewData } from "../../components/ListCard";
import { house1, houses, houses1 } from "../../utils/global";
import { ActivityFeedScreen } from "./ActivityFeedScreen";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const fakeData: ListViewData[] = [
  {
    title: "Best Place in Downtown",
    location: "263 Yonge St.",
    description:
      "A REWARDING ESCAPE PEACEFULLY SITUATED: Luxurious and upgraded, this 4 bedroom, 4.5 bathroom home of 5,281 sq. ft. (including poolhouse, per independent third-party measurement) rests on a lot of 1.23 acres (per county) on a peaceful cul-de-sac in the Lakeside neighborhood. Richly-appointed spaces include large gathering areas, a bright, professional-grade kitchen, spectacular dining room, two walk-out master suites, and a home theater. Contemporary amenities include solar PV and a Tesla EV charging station. The expansive backyard includes a sparkling pool and spa plus a comfortable poolhouse all in private, verdant surroundings. You’ll appreciate the short drive to downtown Los Altos, Rancho Shopping Center, access to Interstate 280, and numerous parks and preserves.",
    amount: "299",
    landlordAvatar:
      "https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg",
    image:
      "https://www.credit.com/blog/wp-content/uploads/2013/11/pexels-pixabay-280222.jpg",
    name: "John",
    phoneNumber: "4167656567",
    email: "John@gmail.com",

    // image: building1,
    // onPress: navigation.navigate(DETAILSPAGE_SCREEN),
  },
  {
    title: "Students only",
    location: "23 Scarb Lane",
    description:
      "Boasting an array of sleek finishes and a thoughtful open plan layout, this immaculate 1-bedroom, 1-bathroom condo is a paradigm of contemporary Brooklyn living. Features of this 531 sq. ft. home include wide plank engineered hardwood floors, huge Pella windows with western exposure, central heating and cooling, and a convenient washer/dryer hook-up. Beyond a functional entryway space the home flows into a luminous, open- concept living, dining, and kitchen area.",
    amount: "299",
    landlordAvatar:
      "https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg",
    image:
      "https://images.rentals.ca/property-pictures/medium/victoria-bc/337362/apartment-2336931.jpg",
    name: "George",
    phoneNumber: "416656567",
    email: "George@gmail.com",

    // image: building1,
    // onPress: navigation.navigate(DETAILSPAGE_SCREEN),
  },
  {
    title: "Amazing Place to Stay",
    location: "21 Ying rd",
    description:
      "This 3 Bedroom W/ 2 Full Bathroom Ranch Home Is Immaculate & Full Of Upgrades! Enjoy The Open Floor Plan W/ Vaulted 15ft Ceilings & Large Windows Throughout. The Beautiful Kitchen Is The Heart Of The Home Complete With Large Customized Granite Island & Stainless Steel Appliances. Updated Lighting Throughout The Entire Home.",
    amount: "299",
    landlordAvatar:
      "https://images.squarespace-cdn.com/content/v1/562eb1a8e4b0cd8682c40651/1575483224032-8QDRU79RHGBUB5UDHT5P/ke17ZwdGBToddI8pDm48kDyYq4OpRDo2fk76bJ9O4l57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmnhdptcuU1alwky_sWs380vROUzGxSR0prsBfut9UyNoq2LCFRTJdnfp8O8SwdqOU/caeron+boyce.jpg",
    image:
      "https://pix10.agoda.net/hotelImages/300/3008410/3008410_17102515500058316422.jpg?s=1024x768",
    name: "Eric",
    phoneNumber: "4167656567",
    email: "eric@gmail.com",

    // image: building1,
    // onPress: navigation.navigate(DETAILSPAGE_SCREEN),
  },
  // { title: " Scarborough", amount: "300", image: building2 },
  // { title: "Downtiwn", amount: "100", image: building1 },
];

export const fakeData2: ListViewData[] = [
  {
    title: "Best Place for College Party",
    location: "263 Isablle St.",
    description:
      "Bring your Smores to the Campfire and Build your Dream Home! 46x120ft Lot Zone NT-1. This property has been ordered from the City to be demolished and is being sold for Land Value. ",
    amount: "299",
    landlordAvatar:
      "https://images.everydayhealth.com/images/emotional-health/anxiety-disorders/famous-people-with-anxiety-rm-kim-kardashian-722x406.jpg",
    image:
      "https://media.newyorker.com/photos/5e7f67c55749570008a1b26f/4:3/w_2272,h_1704,c_limit/KnightBritainHouseNaming.jpg",
    name: "Tanjila",
    phoneNumber: "4167656567",
    email: "Tanjila@gmail.com",

    // image: building1,
    // onPress: navigation.navigate(DETAILSPAGE_SCREEN),
  },
  {
    title: "Downtown Location",
    location: "32 Payne St.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima veritatis non minus cum nemo nobis quia facere reiciendis libero assumenda quos ut exercitationem ipsum provident laudantium, iste est officiis! Quia eligendi dicta, alias eveniet, aliquid incidunt atque deleniti quasi officiis quibusdam expedita fugit. Similique veniam temporibus inventore culpa adipisci!",
    amount: "299",
    landlordAvatar:
      "https://images.thestar.com/j7gUcGlSk9Vr-_yvp1GfCduUFZA=/1086x842/smart/filters:cb(1591360136680)/https://www.thestar.com/content/dam/thestar/opinion/contributors/2020/06/02/for-black-people-calling-the-police-can-be-dangerous-its-time-we-had-another-option/angelyn_francis_2.jpg",
    image:
      "https://torontostoreys.com/wp-content/uploads/2019/09/lucyavenue.jpg",
    name: "Tariq",
    phoneNumber: "4167656567",
    email: "lucy@gmail.com",

    // image: building1,
    // onPress: navigation.navigate(DETAILSPAGE_SCREEN),
  },
  {
    title: "Urgent Listing",
    location: "2363 Scarb St.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima veritatis non minus cum nemo nobis quia facere reiciendis libero assumenda quos ut exercitationem ipsum provident laudantium, iste est officiis! Quia eligendi dicta, alias eveniet, aliquid incidunt atque deleniti quasi officiis quibusdam expedita fugit. Similique veniam temporibus inventore culpa adipisci!",
    amount: "299",
    landlordAvatar:
      "https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg",
    image:
      "https://www.justinhavre.com/uploads/agent-1/sell-home-in-slow-market.jpg",
    name: "Teresa",
    phoneNumber: "4167656567",
    email: "just@gmail.com",

    // image: building1,
    // onPress: navigation.navigate(DETAILSPAGE_SCREEN),
  },
  // { title: " Scarborough", amount: "300", image: building2 },
  // { title: "Downtiwn", amount: "100", image: building1 },
];
export default ActivityFeedScreen;
