import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  custom: {
    borderRadius: "8px 8px 0 0",
  }
});

const ItemImage = ({ image, slug }) => {
  const classes = useStyles();
  return (
    <Link href={"/space/" + slug}>
      <a>
        <Image src={image} width={500} height={200} className={classes.custom} alt="img" />
      </a>
    </Link>
  );
};

export default ItemImage;
