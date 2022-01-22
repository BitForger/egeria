import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ComponentProps } from "react";

export interface CardProps extends ComponentProps<any> {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  url: string;
}

const getRandomIndex = (arr: Array<any>) => {
  const maxIndex = arr.length - 1;
  const minIndex = 0;
  return Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
};

const colorCombos = [
  ["#EF476F", "#fff"],
  ["#FFD166", "#000"],
  ["#06D6A0", "#000"],
  ["#118AB2", "#fff"],
  ["#073B4C", "#fff"],
];

export default function Card(props: CardProps) {
  const combo = colorCombos[getRandomIndex(colorCombos)];
  const backgroundColor: string = props.backgroundColor ?? combo[0];
  const textColor: string = props.textColor ?? combo[1];
  return (
    <>
      {props.children ? (
        props.children
      ) : (
        <a
          href={props.url}
          rel={"noreferrer"}
          target={"_blank"}
          className={"card"}
          style={{ background: backgroundColor }}
        >
          <span className={"card-content__title"} style={{ color: textColor }}>
            {props.title}
          </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            color={textColor}
            className={"card-content__arrow"}
          />
        </a>
      )}
    </>
  );
}
