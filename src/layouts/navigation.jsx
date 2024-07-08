import SearchInput from "../components/SearchInput";

export const Heading = () => {
  return <p>Exclusive</p>;
};

export const Menu = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>
    </div>
  );
};

const Navigation = () => {
  return (
    <>
      <Heading />
      <Menu />
      <SearchInput />
    </>
  );
};

export default Navigation;
