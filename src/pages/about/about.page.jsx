import { Fragment } from "react";

const AboutPage = () => {
  return (
    <Fragment>
      <h1 className="text-center">About Us</h1>
      <h2 className="text-center">
        Rondo Tires Ltd. specializes in all areas of tires and provides fast and
        professional services at fair prices.
      </h2>
      <h2 className="text-center">Owners</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Dudu Shabat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                incidunt rem nam ipsum quibusdam illum optio qui modi tenetur
                harum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Shlomo Shabat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                tenetur ea sint incidunt hic necessitatibus ipsam placeat modi
                vel laudantium?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutPage;
