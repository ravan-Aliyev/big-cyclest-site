import classes from "./Links.module.scss";

function Links({ linkHeading, links }) {
  return (
    <div className={classes["links-container"]}>
      <h2 className="heading-widget-h2">{linkHeading}</h2>
      <ul className={classes.list}>
        {links.map((link, index) => {
          return (
            <li key={index} className={classes.item}>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Links;
