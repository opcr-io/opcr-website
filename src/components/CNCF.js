import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useForm } from "react-hook-form";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// Styles
import styles from "./CNCF.module.css";

const CNCF = () =>
  <section className={styles.featuresCNCF}>
    <div className="container">
      <center>
        <h2>We are a Cloud Native Computing Foundation sandbox project.</h2>
        <img width="300px" src="https://www.cncf.io/wp-content/uploads/2022/07/cncf-color-bg.svg" alt="CNCF logo" />
      </center>
    </div>
  </section>

export default CNCF;
