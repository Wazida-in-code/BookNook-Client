import AddBookForm from "@/components/ExtraForm&Cards/AddBookForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add-Book",
};
const AddBookPage = () => {
  
  return <AddBookForm />;
};

export default AddBookPage;
