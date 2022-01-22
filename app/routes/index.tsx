import styles from "~/styles/index.css";
import { LinksFunction } from "remix";
import Card from "~/shared/components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: ".25fr .5fr .25fr",
        gridAutoRows: "minmax(100px, auto)",
        height: "calc(100vh - 30px)",
        padding: "15px",
      }}
    >
      <div className={"card-container"}>
        <div className={"flex-container"}>
          <Card title={"Card 1"} url={"https://duckduckgo.com"} />
          <Card title={"Card 2"} url={"https://duckduckgo.com"}>
            <span className={"card-content__title"} style={{ color: "#fff" }}>
              Text
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              color={"#fff"}
              className={"card-content__arrow"}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
