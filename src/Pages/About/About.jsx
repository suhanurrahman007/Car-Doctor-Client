import person from "../../assets/images/about_us/person.jpg"
import part from "../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-6/12 mr-14 -ml-10 relative">
            <img src={person} className="rounded-lg shadow-2xl" />
            <img
              className="absolute w-1/2 -bottom-10 rounded-sm border-t-4 border-l-4 border-white shadow-2xl -right-10"
              src={part}
              alt=""
            />
          </div>
          <div className="w-5/12 space-y-5">
            <h2 className="text-[#FF3811] text-2xl font-bold">About Us</h2>
            <h1 className="text-4xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="text-gray-700 text-justify">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomize words which do not look even
              slightly believable.
            </p>
            <p className="text-gray-600 text-justify">
              the majority have suffered alteration in some form, by injected
              humour, or randomize words which do not look even slightly
              believable.
            </p>

            <button className="btn bg-[#FF3811] hover:bg-[#ff391165] hover:text-black text-white border-none w-36">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;