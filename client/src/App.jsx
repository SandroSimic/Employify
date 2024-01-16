import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { MainPage } from "./pages/MainPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AllJobsPage from "./pages/AllJobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/all-jobs" element={<AllJobsPage />} />
            <Route path="/job/:jobId" element={<JobDetailPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
