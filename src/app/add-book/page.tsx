import AddBookForm from "@/components/ExtraForm&Cards/AddBookForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add-Book",
};
const AddBookPage = async() => {
  
  return <AddBookForm />;
};

export default AddBookPage;
