import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam illum quam optio autem suscipit incidunt dicta dolorum eum dolores recusandae laboriosam expedita quo facilis, numquam et.
            Delectus atque dolorum sapiente.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 7644960440</span>
          <span>Portfolio: sumitkr</span>
          <span>GitHub: sumitkr7255</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: Noida</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer