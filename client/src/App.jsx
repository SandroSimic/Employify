import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { MainPage } from "./pages/MainPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AllJobsPage from "./pages/AllJobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import CreateCompanyPage from "./pages/CreateCompanyPage";
import AddJobPage from "./pages/AddJobPage";
import UpdateJobPage from "./pages/UpdateJobPage";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyDashboardApplicants from "./components/Company/Dashboard/CompanyDashboardApplicants";
import CompanyDashboardLayout from "./layout/CompanyDashboardLayout";
import CompanyDashboardJobs from "./components/Company/Dashboard/CompanyDashboardJobs";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: 2000,
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
            <Route path="/job/create-company" element={<CreateCompanyPage />} />
            <Route path="/job/add-job" element={<AddJobPage />} />
            <Route path="/job/:jobId" element={<JobDetailPage />} />
            <Route path="/job/update-job/:jobId" element={<UpdateJobPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/company/dashboard" element={<CompanyDashboardLayout />}>
            <Route index element={<CompanyDashboard />} />
            <Route
              path="/company/dashboard/applicants"
              element={<CompanyDashboardApplicants />}
            />
            <Route
              path="/company/dashboard/jobs"
              element={<CompanyDashboardJobs />}
            />
          </Route>
        </Routes>
      </Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "1.7rem",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
