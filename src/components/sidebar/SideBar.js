import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from "react-icons/md";
import { log_out } from "../../redux/actions/auth.action";
import { useDispatch } from "react-redux";

const SideBar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Accueil</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Abonnements</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Video Aimé</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>Historique</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Bibliothèque</span>
      </li>
      <hr />
      <li onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>   
      <hr />
    </nav>
  );
};

export default SideBar;
