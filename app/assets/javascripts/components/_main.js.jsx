class Main extends React.Component {
    render() {
        return (
            <div className="ngc-body-container">
                <div className="ngc-header-container">
                    <NavBarHeader />
                </div>
                <div className="ngc-content-container">
                    <ListContainer />
                    <RSVPContainer />
                    <AboutUsContainer />
                    <FacebookContainer />
                </div>
            </div>
        );
    }
}