import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <h1 className="text-center">Rondo Tires</h1>
      <h2 className="text-center">
        Rondo Tires Ltd. specializes in all areas of tires and provides fast and
        professional services at fair prices.
      </h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Selling all types of tires - from the best manufacturers
        </li>
        <li class="list-group-item">
          Specializing in tires for buses and commercial vehicles
        </li>
        <li class="list-group-item">car accessories</li>
        <li class="list-group-item">Road services</li>
        <li class="list-group-item">Balancing wheels</li>
        <li class="list-group-item">Fixing cases</li>
      </ul>
    </Fragment>
  );
};
export default HomePage;
