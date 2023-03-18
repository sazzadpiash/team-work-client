import Demo from "../components/Demo";
import AddTeam from "../pages/AddTeam/AddTeam";
import Basic from "../pages/Basic/Basic";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyAccount from "../pages/MyAccount/MyAccount";
import TeamManagement from "../pages/TeamManagement/TeamManagement";
// import Room from "../room/Room";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../layouts/Root");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myaccount',
                element: <PrivateRoute><MyAccount></MyAccount></PrivateRoute>
            },
            {
                path: '/team-management/:id',
                element: <TeamManagement></TeamManagement>
            },
            {
                path: '/team-management',
                element: <TeamManagement></TeamManagement>
            },
            {
                path: '/add-team',
                element: <AddTeam></AddTeam>
            },
            // {
            //     path: '/room',
            //     element: <Room></Room>
            // },
            {
                path: '/demo',
                element: <Demo></Demo>
            },
            {
                path: '/basic',
                element: <Basic></Basic>
            },
        ]
    }
])