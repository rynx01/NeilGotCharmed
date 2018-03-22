class Main extends React.Component {
    render() {

        return (
            <div id="carouselExampleIndicators" className="ngc-content-container carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" >
                    <li style={{ backgroundColor: `white` }} data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li style={{ backgroundColor: `white` }} data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li style={{ backgroundColor: `white` }} data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 ngc-images-slides-container image-1-container" src={ './assets/wed1.jpg' } alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 ngc-images-slides-container image-1-container" src={ './assets/wed2.jpg' } alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 ngc-images-slides-container image-1-container" src={ './assets/wed3.png' } alt="Third slide" />
                    </div>
              </div>
            </div>
        );
    }
}