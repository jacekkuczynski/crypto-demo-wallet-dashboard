import { logOut } from "../../firebase/logOut";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
export const LogoutBtn = () => {
  return (
    <div className="flex w-full h-8 items-center gap-6 text-neutral-900">
      <ArrowLeftOnRectangleIcon className="h-4/6 w-auto" />
      <button onClick={logOut}>Logout</button>
    </div>
  );
};
