class Main extends React.Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="ngc-content-container carousel slide" data-interval={1000}>
                <ol className="carousel-indicators" style={{ backgroundColor: `red` }}>
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="..." alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="..." alt="Third slide" />
                    </div>
              </div>
            </div>
        );
    }
}