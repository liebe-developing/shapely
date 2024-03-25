/* eslint-disable react/prop-types */
const NavLinks = ({ setToggleDropdown }) => {
  const navLinks = [
    { title: "Home", to: "#" },
    { title: "Blog", to: "#" },
    { title: "Portfolio", to: "#" },
    { title: "about the tests", to: "#" },
    { title: "level1", to: "#" },
    { title: "shop", to: "#" },
  ];
  return (
    <ul className="gap-[32px] flex max-sm:flex-col w-full">
      {navLinks.map((link, idx) => (
        <li key={idx} onClick={() => setToggleDropdown(false)}>
          <a
            href={link.to}
            className="dropdown_link text-[13px] text-[#4c4c4c] uppercase font-[500] tracking-[-1px] transition ease-in duration-[0.3s] whitespace-normal max-w-full hover:text-[#5234f9]"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
