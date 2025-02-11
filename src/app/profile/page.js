import UserInfoForm from "@/template/profilePage/UserInfo";
import PersonalInfo from "@/template/profilePage/PersonalInfo";
import BankAccountInfo from "@/template/profilePage/BankAccountInfo";

export default function Profile() {
  return (
    <div>
      <UserInfoForm />
      <PersonalInfo />
      <BankAccountInfo />
    </div>
  );
}
