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
        <img width="500px" src="https://raw.githubusercontent.com/cncf/artwork/master/other/cncf/horizontal/white/cncf-white.svg" alt="CNCF logo" />
      </center>
    </div>
  </section>

export default CNCF;
