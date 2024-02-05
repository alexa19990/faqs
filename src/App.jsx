import classes from "./modules/App.module.scss";
import minusIcon from "./assets/images/icon-minus.svg";
import plusIcon from "./assets/images/icon-plus.svg";
import starIcon from "./assets/images/icon-star.svg";
import background from "./assets/images/background-pattern-desktop.svg";
import { useState } from "react";

const App = () => {
  const [dataArr, setDataArr] = useState([
    {
      title: "What it is Frontend Mentor, and how will it help me ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur, quam quaerat suscipit, doloremque animi velit ipsa dolorum possimus sit impedit delectus voluptas dignissimos inobcaecati.",
      img: plusIcon,
      imgSecond: minusIcon,
      visibility: false,
    },
    {
      title: "Is Fronted Mentor free",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur, quam quaerat suscipit, doloremque animi velit ipsa dolorum possimus sit impedit delectus voluptas dignissimos inobcaecati.",
      img: plusIcon,
      imgSecond: minusIcon,
      visibility: false,
    },
    {
      title: "Can i use Frontend Mentor projects in my portfolio?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur, quam quaerat suscipit, doloremque animi velit ipsa dolorum possimus sit impedit delectus voluptas dignissimos inobcaecati.",
      img: plusIcon,
      imgSecond: minusIcon,
      visibility: false,
    },
    {
      title: "How can i get help if i'm stuck on a challange?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur, quam quaerat suscipit, doloremque animi velit ipsa dolorum possimus sit impedit delectus voluptas dignissimos inobcaecati.",
      img: plusIcon,
      imgSecond: minusIcon,
      visibility: false,
    },
  ]);

  const clickHandler = (index) => {
    setDataArr((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        title: newState[index].title,
        text: newState[index].text,
        img: newState[index].img,
        imgSecond: newState[index].imgSecond,
        visibility: !newState[index].visibility,
      };
      return newState;
    });
  };
  return (
    <div className={classes["container"]}>
      <img src={background} alt="" className={classes["background"]} />
      
      <div className={classes["center-box"]}>
        <div className={classes["title-box"]}>
          <img src={starIcon} alt="" />
          <h1>FAQs</h1>
        </div>
        {dataArr.map((item, index) => {
          return (
            <div key={index} className={classes["faqs-box"]}>
              <div>
                <h3>{item.title}</h3>
                <img
                  src={!item.visibility ? item.img : item.imgSecond}
                  alt=""
                  onClick={() => {
                    clickHandler(index);
                  }}
                />
              </div>
              {item.visibility && <p>{item.text}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
