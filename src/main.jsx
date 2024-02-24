import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Routes/Root";
import ErrorPage from "./ErrorPage";
import Contact from "./Routes/Contacts";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoader";
import {
  EditContactAction,
  contactFavoriteAction,
  createContactAction,
  deleteContactAction,
} from "./actions/conatctAction";
import EditContact from "./Routes/EditContact";
import Index from "./Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader, // Loader load Data from API
    action: createContactAction, // Action handle Form action(submit)
    children:[
      {
        errorElement:<ErrorPage/>,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action:contactFavoriteAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: EditContactAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
