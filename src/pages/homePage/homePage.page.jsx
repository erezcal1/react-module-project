import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <h1 className="text-center">Rondo Tires</h1>
      <h2 className="text-center">
        Rondo Tires Ltd. specializes in all areas of tires and provides fast and
        professional services at fair prices.
      </h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Selling all types of tires - from the best manufacturers
        </li>
        <li className="list-group-item">
          Specializing in tires for buses and commercial vehicles
        </li>
        <li className="list-group-item">car accessories</li>
        <li className="list-group-item">Road services</li>
        <li className="list-group-item">Balancing wheels</li>
        <li className="list-group-item">Fixing cases</li>
      </ul>
      <div className="row mt-3">
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img
              class="card-img-top"
              src="https://www.tyrepress.com/wp-content/uploads/2018/10/TecAlliance-Tyres-Image.jpg"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title text-center">New Tires</h5>
              <p class="card-text text-center">
                Were specializing in changing new tires with top level quality
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img
              class="card-img-top"
              src="https://www.tireindustry.org/sites/default/files/tire%20repair_inspection.jpg"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title text-center">Fixing Tires</h5>
              <p class="card-text text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                aliquet sapien, vitae ultrices lorem. Cras interdum enim ex, a
                egestas quam feugiat quis.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img
              class="card-img-top"
              src="https://tiresvote.com/filer/canonical/1553108746/200/"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title text-center">Tires Brands</h5>
              <p class="card-text text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                aliquet sapien, vitae ultrices lorem. Cras interdum enim ex, a
                egestas quam feugiat quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HomePage;
