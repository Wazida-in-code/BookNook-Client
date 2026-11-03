import MyProfileCard from "@/components/ExtraForm&Cards/MyProfileCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My-Profile",
};

const MyProfile = () => {
    
  return <MyProfileCard />
};

export default MyProfile;