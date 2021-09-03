import React from "react";
import styles from "../styles/Home.module.css";
import ItemImage from "./image";
import { GenerateUrlSlug } from "../utils/helper";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


const Card = ({ data }) => {
  const image = data.ships.length
    ? data.ships[0].image
    : "https://i.stack.imgur.com/y9DpT.jpg";
  return (
    <div className={styles.card}>
      <ItemImage
        image={image}
        slug={GenerateUrlSlug(`${data.id} ${data.launch_site.site_name_long}`)}
      />
      <CardContent>
        <Typography variant="h5">
          <b>{data.mission_name}</b>
        </Typography>
        <CardActions align="center"
          style={{ width: "100%", alignItems: "center", justifyContent: 'center' }}>
          {data.links.article_link ? (
            <Button size="large" variant="contained" color="primary"><a href={data.links.article_link} target="_blank" rel="noreferrer" className={styles.tag}>
              Article link
            </a></Button>
          ) : null}
        </CardActions>
      </CardContent>
    </div>
  );
};
export default Card;
