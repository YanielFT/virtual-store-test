import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home";
import SimpleLayout from "./components/layout/SimpleLayout";
import ProductFormPage, { loader } from "./pages/product-form/product-form";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SimpleLayout />}>
        {["/", "/home"].map((path) => (
          <Route key={path} path={path} element={<HomePage />} />
        ))}
        <Route
          path="product/new"
          element={<ProductFormPage />}
        />
        <Route
          path="product/:id"
          element={<ProductFormPage />}
          loader={loader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
