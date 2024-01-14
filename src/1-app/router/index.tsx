import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {ProfilePage} from "../../3-pages/profile";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={'/profile'} element={<ProfilePage />} />
    </>
))
