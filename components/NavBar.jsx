import navBar from "../mocks/NavBar";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <picture className="logo">logo</picture>
      <nav className="navbar">
        {navBar.map((item) => {
          return (
            <a key={item.name} href="{item.href}">
              {item.name}
            </a>
          );
        })}
      </nav>
    </>
  );
}
