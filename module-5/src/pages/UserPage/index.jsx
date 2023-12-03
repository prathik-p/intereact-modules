import { Outlet } from "react-router";
import "./style.css";
export default function UserPage() {
  return (
    <div>
      <h1>User Page</h1>
      <div>
        <p>nav</p>
        <p>nav</p>
        <p>nav</p>
      </div>
      <Outlet />
    </div>
  );
}
