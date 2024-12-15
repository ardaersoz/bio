import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import ArticleForm from "../components/ArticleForm"
// eslint-disable-next-line no-unused-vars
import AddArticle from "../pages/Articles/AddArticle";
import ArticleList from "../pages/Articles/ArticleList";
import EditArticle from "../pages/Articles/EditArticle";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <Routes>
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/add" element={<ArticleForm />} />
          <Route path="/articles/edit/:id" element={<EditArticle />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
