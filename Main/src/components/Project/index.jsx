import coverImage from '../../assets/cover/cover-image/jpg';

function Header(props) {

    return(
        <header className="flex-row space-between px-1">
            <h1> Silvia Fernandez</h1>
            <h3> Professional Portfolio</h3>
            <img src={coverImage} alt=""></img>
            {props.children}
             </header>
    );
}

export default Headeer;