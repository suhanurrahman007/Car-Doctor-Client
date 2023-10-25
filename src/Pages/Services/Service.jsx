import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Service = ({ service }) => {
    const {img, title, price} = service

    console.log(service);
  return (
    <div className="card card-compact bg-base-100  rounded-md shadow-xl">
      <figure className="p-4">
        <img src={img} className="h-44 w-full rounded-lg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions  justify-between text-[#FF3811] font-bold">
          <p>Price : ${price}</p>
          <Link className="text-xl">
            <BsArrowRight></BsArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;