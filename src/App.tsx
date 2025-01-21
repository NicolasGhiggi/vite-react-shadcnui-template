import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@/hooks/ThemeProvider';
import { AppConfig } from '@/config/app';
import { routes } from '@/routes';
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
                        {routes.map((r, i) => (
                            <Route path={r.path} element={r.page} key={i} />
                        ))}
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App
