import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Sidebar = () => {
  const history = useHistory();
  const pathname = history.location.pathname;

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black">TicketMaster</p>
      </div>
      <nav className="mt-5 list-none">
        <li className={pathname === '/' ? 'bg-blue-800 p-3 rounded' : 'p-3'}>
          <Link to="/">
            <a className="text-white  block">Anasayfa</a>
          </Link>
        </li>
        <li
          className={
            pathname === '/tickets' ? 'bg-blue-800 p-3 rounded' : 'p-3'
          }
        >
          <Link to="/tickets">
            <a className="text-white  block">Ticketlar</a>
          </Link>
        </li>
        <li
          className={
            pathname === '/profile' ? 'bg-blue-800 p-3 rounded' : 'p-3'
          }
        >
          <Link to="/profile">
            <a className="text-white  block">Profile</a>
          </Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
