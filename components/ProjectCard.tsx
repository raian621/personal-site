import { useEffect, useState } from "react"
import styles from "styles/ProjectCard.module.css"

export const ProjectCard = ({ title, description, sourceURL, thumbnail, technologies } : {
  title:        string,
  description:  string,
  sourceURL?:    string|null|undefined,
  thumbnail?:    File|null|undefined,
  technologies?: string[]|null|undefined
}) => {
  return (
    <div className={styles.projectCard}>
      {thumbnail && <img src={URL.createObjectURL(thumbnail)}/>}
      <div className={styles.projectInfo}>
        <h2>{title}</h2>
        {sourceURL &&<a href={sourceURL}>{sourceURL}</a>}
        <p>{description}</p>
      </div>
    </div>
  )
}