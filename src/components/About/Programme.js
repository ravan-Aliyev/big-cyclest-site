import clasess from "./Programme.module.scss";
import ContentCenter from "../UI/Content";
import Button from "../UI/Button";
import { BsPlayCircle } from "react-icons/bs";

function Programme() {
  return (
    <section className={clasess.section}>
      <ContentCenter>
        <div className={clasess.container}>
          <h2
            className="heading-h2"
            style={{ textAlign: "center", marginBottom: "7rem" }}
          >
            Join #GoEcoBiking Programme
          </h2>

          <div className={clasess.imgcontainer}>
            <BsPlayCircle />
            <h4 className="heading-h4">Watch Full video</h4>
          </div>

          <div className={clasess.join}>
            <div className={clasess.info}>
              <h4 className="heading-h4">
                Duis aute irure dolor in reprehenderit velit.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <Button>Join the programme</Button>
          </div>
        </div>
      </ContentCenter>
    </section>
  );
}

export default Programme;
