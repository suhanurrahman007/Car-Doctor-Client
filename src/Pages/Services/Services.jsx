import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() =>{
    fetch("/services.json")
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div className="space-y-10">
      <div className="text-center space-y-5">
        <h2 className="text-[#FF3811] text-2xl font-bold">Service</h2>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="text-gray-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomize <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
        {
            services.map(service => <Service key={service._id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
