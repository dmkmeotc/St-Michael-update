export const menuItems = [
  { label: "home", href: "/home" },
  { label: "announcements", href: "/announcements" },
  {
    label: "deacons",
    children: [
      { label: "allDeacons", href: "/deacons" },
      { label: "schedules", href: "/deacons/schedules" },
    ],
  },
  {
    label: "donation",
    children: [
      { label: "makeDonation", href: "/donation" },
      { label: "fundraisingEvents", href: "/donation/events" },
    ],
  },
  { label: "ourDiocese", href: "/diocese" },
  {
    label: "ourChurch",
    children: [
      { label: "about", href: "/church/about" },
      { label: "events", href: "/church/events" },
    ],
  },
  { label: "sundaySchool", href: "/sunday-school" },
  {
    label: "youthCorner",
    children: [
      { label: "programs", href: "/youth/programs" },
      { label: "media", href: "/youth/media" },
    ],
  },
  {
    label: "prayersQuotes",
    children: [
      { label: "morningPrayers", href: "/prayers/morning" },
      { label: "quotes", href: "/quotes" },
    ],
  },
  {
    label: "holyFamily",
    children: [
      { label: "info", href: "/holy-family/info" },
      { label: "meetings", href: "/holy-family/meetings" },
    ],
  },
  { label: "contactUs", href: "/contact" },
]
