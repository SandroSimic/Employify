import { useState } from "react";
import { FaPaintBrush, FaChartLine, FaUserCheck } from "react-icons/fa";
import { FaVolumeHigh, FaComputer, FaSchool } from "react-icons/fa6";
import { MdAttachMoney, MdHealthAndSafety } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import Heading from "../Heading";

const Categories = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = [
    {
      icon: <FaPaintBrush style={{ color: "#2fa1ff" }} />,
      bgColor: "#E9F8FF",
      title: "Design & Development",
      desc: "150 jobs available",
    },
    {
      icon: <FaVolumeHigh style={{ color: "white" }} />,
      bgColor: "var(--primary-color)",
      title: "Marketing & Communication",
      desc: "150 jobs available",
    },
    {
      icon: <FaComputer style={{ color: "#FF8B3D" }} />,
      bgColor: "#FFF5EF",
      title: "Digital Marketing",
      desc: "150 jobs available",
    },
    {
      icon: <FaChartLine style={{ color: "#E05B43" }} />,
      bgColor: "#FCEFEE",
      title: "Business & Consulting",
      desc: "150 jobs available",
    },
    {
      icon: <MdAttachMoney style={{ color: "#D343E0" }} />,
      bgColor: "#FBEEFC",
      title: "Finance Management",
      desc: "150 jobs available",
    },
    {
      icon: <FaUserCheck style={{ color: "#5DDF9A" }} />,
      bgColor: "#EEFCF5",
      title: "Customer Service Care",
      desc: "150 jobs available",
    },
    {
      icon: <MdHealthAndSafety style={{ color: "#FF104A" }} />,
      bgColor: "#FF9F8F",
      title: "Healthcare",
      desc: "150 jobs available",
    },
    {
      icon: <IoIosFitness style={{ color: "#FF104A" }} />,
      bgColor: "#EEFCF5",
      title: "Fitness and Wellness",
      desc: "150 jobs available",
    },
    {
      icon: <FaSchool style={{ color: "#000E6F" }} />,
      bgColor: "#6BBDED",
      title: "Education",
      desc: "150 jobs available",
    },
  ];

  const initialCategories = categories.slice(0, 6);

  const handleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <section className="categories">
      <Heading
        handleClick={handleShowAllCategories}
        spanText={"Explore Jobs"}
        text={"by category"}
        btnText={"All Categories"}
        subText={"Find Jobs specific to your needs"}
      />
      <div className="categories__grid">
        {(showAllCategories ? categories : initialCategories).map(
          (category, index) => (
            <div className="categories__grid__info" key={index}>
              <div
                className="categories__grid__icon"
                style={{ backgroundColor: category.bgColor }}
              >
                {category.icon}
              </div>
              <div className="categories__grid__text">
                <h2>{category.title}</h2>
                <p>{category.desc}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Categories;
