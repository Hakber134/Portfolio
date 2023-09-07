import React from 'react'
import { Typography } from '@mui/material';
import "./ProjectsCard.css";

const ProjectsCard = ({
   url = "https://github.com/Hakber134/Connect4",
   title = "Connect4 Board Game",
   image = "https://i.gyazo.com/979962f9b89163167a85402f7ad7457a.png"
}) => {
    return (
        <div className="ProjectsCard">
            <a href={url} target="blank">
                <img src={image} alt = "Link to project" />
                <Typography>{title}</Typography>
            </a>
        </div>
    )
}

export default ProjectsCard