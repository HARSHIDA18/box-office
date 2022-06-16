import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
  { to: '/Harshida', text: 'Welcome To Harshida Shaily Page' },
  { to: '/Google', text: 'HS Google Dream' },
];

function Navs() {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navs;
