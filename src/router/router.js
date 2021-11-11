import {
    ABOUT_ROUTE,
    CONNECT_ROUTE,
    GAMES_ROUTE,
    NEWS_PAGE_ROUTE,
    NEWS_ROUTE,
    ORDER_ROUTE,
    PROJECTS_ROUTE
} from "./routes";
import News from "../pages/News";
import About from "../pages/About";
import Connect from "../pages/Connect";
import Games from "../pages/Games";
import Order from "../pages/Order";
import Projects from "../pages/Projects";
import GamesPage from "../pages/GamesPage";
import ProjectsPage from "../pages/ProjectsPage";
import NewsPage from "../pages/NewsPage";

export const routes = [
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: NEWS_PAGE_ROUTE,
        Component: NewsPage
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONNECT_ROUTE,
        Component: Connect
    },
    {
        path: GAMES_ROUTE,
        Component: Games
    },
    {
        path: GAMES_ROUTE + '/:id',
        Component: GamesPage
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects
    },
    {
        path: PROJECTS_ROUTE + '/:id',
        Component: ProjectsPage
    },
]