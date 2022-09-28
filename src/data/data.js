import { FaUsers } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { HiUser } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const homeData = {
  likes: "25,353",
  love: "6,359",
  smiles: "59,551",
  views: "3.576.293",
};

export const chartViewData = {
  views_label: "Views",
  views_data: [800000, 1100000, 4300000, 3100000, 2500000, 1500000, 3000000],
  likes_label: "Likes",
  likes_data: [400000, 1600000, 3500000, 3700000, 200000, 1200000, 3000000],
};

export const teamProgressData = [
  {
    name: "Marketing Team",
    completed: 75,
    bgColor: "rgba(41, 98, 255, 0.3)",
    completedColor: "#2962ff",
  },
  {
    name: "Operations Team",
    completed: 50,
    bgColor: "rgba(41, 98, 255, 0.3)",
    completedColor: "#ffc400",
  },
  {
    name: "Sales Team",
    bgColor: "rgba(255, 61, 0, 0.3)",
    completed: 25,
    completedColor: "#ff3d00",
  },
  {
    name: "Research Team",
    bgColor: "rgba(44, 62, 80, 0.3)",
    completed: 10,
    completedColor: "#2C3E50",
  },
];

export const progressData = [
  {
    title: "Visits",
    bgColor: "rgba(41, 98, 255, 0.3)",
    completed: 75,
    completedColor: "#2962ff",
    icon: <FaUsers size={20} />,
  },
  {
    title: "Orders",

    bgColor: "rgba(255, 196, 0, 0.3)",
    completed: 50,
    completedColor: "#ffc400",
    icon: <MdShoppingBasket size={20} />,
  },
  {
    title: "Sales",

    bgColor: "rgba(255, 61, 0, 0.3)",
    completed: 25,
    completedColor: "#ff3d00",
    icon: <BiDollarCircle size={20} />,
  },
];

export const meetingData = [
  {
    name: "Sarah Andreson",
    time: "8:00 - 10:00",
    image:
      "https://img.freepik.com/free-photo/emotional-happy-young-caucasian-female-with-fair-hair-dressed-blue-clothes-giving-her-thumbs-up-showing-how-good-product-is-pretty-girl-smiling-brodly-with-teeth-gestures-body-language_176420-13493.jpg?w=996&t=st=1663584121~exp=1663584721~hmac=ae944ba9413185436fd2fe6b43056012a63ff4064249bf70f12fb52248ac6f41",
  },
  {
    name: "Kevin Nelson",
    time: "11:00 - 12:00",
    image:
      "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1663584206~exp=1663584806~hmac=b897806f8238651f8c1f200251b9b4e72ea206b19ad54ab5f2262066e9c25cc2",
  },
  {
    name: "Maria Clark",
    time: "15:00 - 16:00",
    image:
      "https://img.freepik.com/free-photo/happy-cute-girl-pink-dress-posing_273443-4106.jpg?w=996&t=st=1663584174~exp=1663584774~hmac=86385577d1963ad8003bcd6e3042d68e0a3bd7abff06e34142b1b79714029606",
  },
];

export const pieChartViewData = [
  {
    title: "Books",
    value: 400,
    bgColor: "rgb(41, 98, 255)",
  },
  {
    title: "Movies & TV",
    value: 300,
    bgColor: "rgb(255, 196, 0)",
  },
  {
    title: "Software",
    value: 300,
    bgColor: "rgb(255, 61, 0)",
  },
];

export const lineChartViewData = {
  title: "Activity",
  activity: [2400, 1500, 7800, 3600, 2600, 2400, 1800],
};

export const polarChartViewData = [
  {
    label: "Marketing",
    data: 110,
  },
  {
    label: "Research",
    data: 98,
  },
  {
    label: "Sales",
    data: 86,
  },
  {
    label: "Ops",
    data: 99,
  },
  {
    label: "HR",
    data: 85,
  },
  {
    label: "Dev",
    data: 65,
  },
];

export const barchartViewData = [560, 350, 110, 850, 400, 210];

export const recentlyUsers = [
  {
    name: "Brayan king",
    permision: "Admin",
    icon: <HiUser size={25} />,
    arrow: <IoIosArrowForward size={20} />,
  },
  {
    name: "Alisia byer",
    permision: "Member",
    icon: <HiUser size={25} />,
    arrow: <IoIosArrowForward size={20} />,
  },
  {
    name: "Kevin almeida",
    permision: "Member",
    icon: <HiUser size={25} />,
    arrow: <IoIosArrowForward size={20} />,
  },
];

export const usersData = [
  {
    id: 1,
    fullName: "Ariana Smith",
    email: "smitharia@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Admin",
    status: "Active",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 1,
  },
  {
    id: 2,
    fullName: "Cloey Johnson",
    email: "cloey.johnson@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Member",
    status: "Active",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 2,
  },
  {
    id: 3,
    fullName: "Kevin Yamga",
    email: "kevin22.gn@gmail.com",
    icon: <HiUser size={22} />,
    gender: "M",
    role: "Admin",
    status: "Active",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 3,
  },
  {
    id: 4,
    fullName: "Sara Sebastian",
    email: "sara.sebastian@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Admin",
    status: "Disabled",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 4,
  },
  {
    id: 5,
    fullName: "Ali B",
    email: "Ali.b2022@gmail.com",
    icon: <HiUser size={22} />,
    gender: "n",
    role: "Member",
    status: "Active",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 5,
  },
  {
    id: 6,
    fullName: "Angelina Brown",
    email: "angelina.brown@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Admin",
    status: "Disabled",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 6,
  },
  {
    id: 7,
    fullName: "Garry Hemiltion",
    email: "Garry.m@gmail.com",
    icon: <HiUser size={22} />,
    gender: "M",
    role: "Admin",
    status: "Disabled",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 7,
  },
  {
    id: 8,
    fullName: "Maryam Fares",
    email: "fares22200@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Member",
    status: "Active",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 8,
  },
  {
    id: 9,
    fullName: "Martin Max",
    email: "Martin.max@gmail.com",
    icon: <HiUser size={22} />,
    gender: "M",
    role: "Member",
    status: "Active",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 9,
  },
  {
    id: 10,
    fullName: "Anna Milley",
    email: "milley2002@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Member",
    status: "Disabled",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 10,
  },
  {
    id: 11,
    fullName: "Bella Jayne",
    email: "jayne.bella@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Member",
    status: "Disabled",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 11,
  },
  {
    id: 12,
    fullName: "Bella Jayne",
    email: "jayne.bella@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Member",
    status: "Disabled",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 12,
  },
  {
    id: 13,
    fullName: "Bella Jayne",
    email: "jayne.bella@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Member",
    status: "Disabled",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 13,
  },
  {
    id: 14,
    fullName: "Bella Jayne",
    email: "jayne.bella@gmail.com",
    icon: <HiUser size={22} />,
    gender: "F",
    role: "Member",
    status: "Disabled",
    dots: <BiDotsVerticalRounded size={20} />,
    checkValue: 14,
  },
];
