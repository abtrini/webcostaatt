import React from "react";
import DepartStyles from "../../styles/DepartCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const DepartCard = ({ image, departname, intro, linkpage, shortname }) => {
  return (
    <>
      <div className={DepartStyles.container}>
        <Image
          className={DepartStyles.imgstyle}
          src={image}
          alt="Department Image"
          width={400}
          height={300}
        />

        <p className={DepartStyles.departname}> {departname}</p>
        <p className={DepartStyles.text}>{intro}  </p> 
        <Link className={DepartStyles.linkpage} href={linkpage}>
          More About  {shortname}...{" "}
        </Link>
      </div>
    </>
  );
};

export default DepartCard;
