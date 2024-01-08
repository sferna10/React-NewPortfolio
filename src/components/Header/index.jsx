import coverImage from '../../assets/cover/Cover.jpg';

function Header(props) {

return (
<header className="flex-row space-between px-1">
<h1> Silvia Fernandex</h1>
<img src={coverImage} alt="blue/green waves"></img>
{props.children}
</header>
);
}

export default Header;