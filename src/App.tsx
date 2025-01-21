import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@/hooks/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from '@/routes';
import { AppConfig } from '@/config/app';
import Layout from "@/components/Layout";

const App = () => {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Helmet htmlAttributes={{ lang: AppConfig.locale || 'en' }}>
                <title>{AppConfig.name}</title>
            </Helmet>
            <Router>
                <Layout>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route path={route.path} element={route.page} key={index} />
                        ))}
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App
