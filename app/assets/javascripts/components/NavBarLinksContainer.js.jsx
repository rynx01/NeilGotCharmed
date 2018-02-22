const NavBarLinksContainer  = ({ url, className, title }) => (
    <li onClick={() => window.location = url }>
        <a><i style={{ margin: `1rem` }} className={ className }></i>{ title }</a>
    </li>
)