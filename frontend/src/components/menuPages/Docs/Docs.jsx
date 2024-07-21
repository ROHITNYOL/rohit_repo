import React from 'react'
import styles from "./Docs.module.css";


function Docs() {
  return (
    <>
    <section className={styles.head}>
      <div className={styles.headContent}>
        <h2>Documentation</h2>
        <p>
          Welcome to the official Cal.com docs. To help get you started, we've
          put together a few resources to help you learn about how to use
          Cal.com. We have also provided advanced documentation covering how
          to build on top of Cal.com both in the codebase, by API and more.
          These guides will go into depth on how you can best integrate and
          extend Cal.com for your needs.{" "}
        </p>
      </div>
    </section>
  </>
  )
}

export default Docs