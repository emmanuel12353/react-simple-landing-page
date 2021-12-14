import React from 'react';


const Header = () => {
	return (
  <div className="cont">
       <div className="jumbotron">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>

    <div className='container'>
        <div className='row'>
            <div className='col col-lg-3'>
                <div  className='card'>
                    <img src='url' alt='img-caption' />
                <div  className='card-body'>
                    <h4  className='card-title'> card</h4>
                    <p  className='card-text'> fill free to input any info you want</p>
                    <a className="btn btn-primary" href="#">GO TO DESTINATION</a>
                </div>
                </div>
            </div>
            <div className='col col-lg-3'>
                <div  className='card'>
                    <img src='url' alt='img-caption' />
                <div  className='card-body'>
                    <h4  className='card-title'> card</h4>
                    <p  className='card-text'> fill free to input any info you want</p>
                    <a className="btn btn-primary" href="#">GO TO DESTINATION</a>
                </div>
                </div>
            </div>
            <div className='col col-lg-3'>
                <div  className='card'>
                    <img src='url' alt='img-caption' />
                <div  className='card-body'>
                    <h4  className='card-title'> card</h4>
                    <p  className='card-text'> fill free to input any info you want</p>
                    <a className="btn btn-primary" href="#">GO TO DESTINATION</a>
                </div>
                </div>
            </div>
            <div className='col col-lg-3'>
                <div  className='card'>
                    <img src='url' alt='img-caption' />
                <div  className='card-body'>
                    <h4  className='card-title'> card</h4>
                    <p  className='card-text'> fill free to input any info you want</p>
                    <a className="btn btn-primary" href="#">GO TO DESTINATION</a>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
	}
export default Header;






