import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
export const navItems = [
  {
    name: "About",
    route: "/",
    icon: PersonIcon,
  },
  {
    name: "Projects",
    route: "/projects",
    icon: DashboardIcon,
  },
  {
    name: "Publications",
    route: "/publications",
    icon: LibraryBooksIcon,
  },
  {
    name: "Experience",
    route: "/experience",
    icon: WorkIcon,
  },
];
