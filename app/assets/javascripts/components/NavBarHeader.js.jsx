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
                                    url="#"
                                    className="fa fa-home fa-lg"
                                    title=" Home"
                                />

                                <NavBarLinksContainer   
                                    url="#"
                                    className="fa fa-th-list fa-lg"
                                    title=" List"
                                />

                                <NavBarLinksContainer   
                                    url="#"
                                    className="fa fa-list-alt fa-lg"
                                    title=" RSVP"
                                />

                                <NavBarLinksContainer   
                                    url="#"
                                    className="fa fa-question-circle fa-lg"
                                    title=" AboutUs"
                                />

                                <NavBarLinksContainer   
                                    url="#"
                                    className="fa fa-facebook fa-lg"
                                    title=" Facebook"
                                />

                            </ul>
                     </div>
                </div>


            </div>
        );
    }
}

