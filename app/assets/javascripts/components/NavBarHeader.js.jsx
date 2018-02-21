class NavBarHeader extends React.Component {

    render() {
        return (
            <div>               

                <div className="nav-side-menu">
                    <div className="brand">NeilgotCharmed!</div>
                    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                  
                        <div className="menu-list">
                  
                            <ul id="menu-content" className="menu-content collapse out">
                                
                                <li>
                                    <a href="#">
                                        <i className="fa fa-home fa-lg"></i> Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i className="fa fa-th-list fa-lg"></i> List
                                    </a>
                                </li>


                                <li>
                                    <a href="#">
                                        <i className="fa fa-list-alt fa-lg"></i> RSVP
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i className="fa fa-question-circle fa-lg"></i> About Us
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook fa-lg"></i> Facebook
                                    </a>
                                </li>


                            </ul>
                     </div>
                </div>


            </div>
        );
    }
}