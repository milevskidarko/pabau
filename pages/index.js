import styles from "../styles/Home.module.css";
import Cards from "../components/cards";

import React from "react";

const index = ({ launches }) => {
  return (
    <div className={styles.App}>
      <Cards data={launches} />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const data = await fetch("https://jsonkeeper.com/b/CRBB");
  const dataJSON = await data.json();

  return {
    props: {
      launches: dataJSON.data.launchesPast,
    },
  };
};

export default index;
