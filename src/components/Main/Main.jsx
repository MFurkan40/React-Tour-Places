import "./Main.scss";

import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => {
        return <Card {...item} key={item.id} />;
      })}
    </div>
  );
};

export default Main;
