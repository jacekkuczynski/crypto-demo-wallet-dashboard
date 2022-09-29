import {
  HomeIcon,
  PresentationChartBarIcon,
  ClockIcon,
  BookmarkIcon,
  QuestionMarkCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export const sidebarData = [
  {
    name: "Start",
    to: "/",
    icon: <HomeIcon className="h-4/6 w-auto" />,
  },
  {
    name: "Market",
    to: "market",
    icon: <PresentationChartBarIcon className="h-4/6 w-auto" />,
  },
  {
    name: "History",
    to: "/history",
    icon: <ClockIcon className="h-4/6 w-auto" />,
  },

  {
    name: "Positions",
    to: "/positions",
    icon: <BookmarkIcon className="h-4/6 w-auto" />,
  },
  {
    name: "FAQ",
    to: "/faq",
    icon: <QuestionMarkCircleIcon className="h-4/6 w-auto" />,
  },
  {
    name: "Support",
    to: "/support",
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-4/6 w-auto" />,
  },
  {
    name: "Buy",
    to: "/buy",
    icon: <CurrencyDollarIcon className="h-4/6 w-auto" />,
  },
];
