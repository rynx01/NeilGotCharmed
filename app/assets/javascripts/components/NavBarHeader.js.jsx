class NavBarHeader extends React.Component {

    render() {
        return (
            <div>

                <div className="nav-side-menu">
                    <div className="brand">NeilgotCharmed!</div>
                    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                        <div className="menu-list">

                            <ul id="menu-content" className="menu-content collapse out">

                                <NavBarLinksContainer
                                    url="/"
                                    className="fa fa-home fa-lg"
                                    title=" Home"
                                />

                                <NavBarLinksContainer
                                    url="/rsvp"
                                    className="fa fa-list-alt fa-lg"
                                    title=" RSVP"
                                />

                                <NavBarLinksContainer
                                    url="/brides-squad"
                                    className="fa fa-glass fa-lg"
                                    title=" Bride's Squad"
                                />

                                <NavBarLinksContainer
                                    url="/grooms-squad"
                                    className="fa fa-suitcase fa-lg"
                                    title=" Groom's Squad"
                                />

                                <li>
                                    <a href="#venue" data-toggle="collapse" className=""><i style={{ margin: `1rem` }} className="fa fa-taxi fa-lg"></i>Venue</a>
                                    <div id="venue" className="collapse">
                                        <a href="/venue/church" data-toggle="collapse" className=""><i style={{ margin: `1rem` }} className="fa fa-question-circle fa-lg"></i>Venue</a>
                                        <a href="/venue/reception" data-toggle="collapse" className=""><i style={{ margin: `1rem` }} className="fa fa-question-circle fa-lg"></i>Venue</a>
                                    </div>
                                </li>

                                <NavBarLinksContainer
                                    url="/photos"
                                    className="fa fa-file-image-o fa-lg"
                                    title=" Photos"
                                />

                                <NavBarLinksContainer
                                    url="/registry"
                                    className="fa fa-list-alt fa-lg"
                                    title=" Registry"
                                />

                                <NavBarLinksContainer
                                    url="/the-games"
                                    className="fa fa-gamepad fa-lg"
                                    title=" The Games"
                                />

                                <NavBarLinksContainer
                                    url="/contact-us"
                                    className="fa fa-phone fa-lg"
                                    title=" Contact Us"
                                />

                            </ul>
                     </div>
                </div>

            </div>
        );
    }
}

