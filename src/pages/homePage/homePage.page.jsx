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
    </Fragment>
  );
};
export default HomePage;
