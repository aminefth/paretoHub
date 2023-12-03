"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";



const Comments = () => {


  return (
    <div className={styles.container}>
      comments
    </div>
  );
};

export default Comments;
