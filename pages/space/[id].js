import Link from "next/link";
import { GenerateUrlSlug } from "../../utils/helper";
import styles from '../../styles/Home.module.css'
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ItemImage from "../../components/image";

const Details = ({ page }) => {
  const image = page.ships.length
    ? page.ships[0].image
    : "https://i.stack.imgur.com/y9DpT.jpg";

  return (
    <div className={styles.cardSecondPage}>
      <div className={styles.box}>
        <ItemImage
          image={image}
          slug={GenerateUrlSlug(`${page.id} ${page.launch_site.site_name_long}`)}
        />
      </div>
      <CardContent>
        <CardActions>
          <Typography variant="h5" align="center"
            style={{ width: "100%", alignItems: "center" }}>
            <b>{page.mission_name}</b>
          </Typography>
        </CardActions>
        <Typography component="div">
          <Box fontSize="fontSize" m={1}>
            Number : <b>{page.id}</b>
          </Box>
          <Box fontSize="fontSize" m={1}>
            Launch date local : <b>{page.launch_date_local}</b>
          </Box>
        </Typography>
      </CardContent>
      <Link href={"/"}>
        <Button size="large" variant="contained" color="primary">Back</Button>
      </Link>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await fetch("https://jsonkeeper.com/b/CRBB");
  const dataJSON = await data.json();

  const paths = dataJSON.data.launchesPast.map((item) => {
    return {
      params: {
        id: GenerateUrlSlug(`${item.id} ${item.launch_site.site_name_long}`),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetch("https://jsonkeeper.com/b/CRBB");
  const dataJSON = await data.json();
  const pageData = dataJSON.data.launchesPast.filter((item) => {
    if (
      GenerateUrlSlug(`${item.id} ${item.launch_site.site_name_long}`) === id
    ) {
      return item;
    }
    return false;
  });
  return {
    props: { page: pageData.length ? pageData[0] : false },
  };
};

export default Details;
