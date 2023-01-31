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
        <br />
        <p>The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage" target="_">Trademark Usage</a> page.</p>
      </center>
    </div>
  </section>

export default CNCF;
