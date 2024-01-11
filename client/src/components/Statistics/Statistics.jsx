import { FiBriefcase } from "react-icons/fi";
import { MdInsertChartOutlined } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";

const Statistics = () => {
  const info = [
    {
      icon: <FiBriefcase style={{ color: "#2FA1FF" }} />,
      title: "8k+",
      description: "current jobs",
    },
    {
      icon: <MdInsertChartOutlined style={{ color: "#FF8B3D" }} />,
      title: "400+",
      description: "startups",
    },
    {
      icon: <HiOutlineUsers style={{ color: "#D343E0" }} />,
      title: "100+",
      description: "Talents",
    },
  ];

  return (
    <div className="statistics">
      {info.map((item, index) => (
        <div className="statistics__info" key={index}>
          <div className="statistics__info__icon">{item.icon}</div>
          <div className="statistics__info__text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
