import { Route, RouteProps, Routes } from "react-router-dom";
import { landingRoutes, otherRoutes } from "@/routes/Routes.tsx";
import MainLayout from "@/components/layouts/MainLayout.tsx";

const AppRoutes = (props: RouteProps) => {
    return (
        <Routes>
            {landingRoutes.map((route) => (
                <Route key={route.name} path={route.path}
                    element={route.element} />
            ))}

            {otherRoutes.map((route) => (
                <Route key={route.name} path={route.path}
                    element={<MainLayout  {...props}>{route.element}</MainLayout>} />
            ))}
        </Routes>
    )
}

export default AppRoutes