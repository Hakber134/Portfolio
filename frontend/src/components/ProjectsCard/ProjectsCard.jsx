import React from 'react'
import { Button, Typography } from '@mui/material';
import "./ProjectsCard.css";
import { FaTrash } from 'react-icons/fa';
import { deleteProject } from '../../actions/user';
import { useDispatch } from 'react-redux';

const ProjectsCard = ({
   url = "https://github.com/Hakber134/Connect4",
   title = "Connect4 Board Game",
   image = "https://i.gyazo.com/979962f9b89163167a85402f7ad7457a.png",
   isAdmin = false,
}) => {
    const dispatch = useDispatch()

    const deleteHandler = (id) => {
        dispatch(deleteProject(id));
    }

    return (
        <div className="ProjectsCard">
            <a href={url} target="blank">
                <img src={image} alt = "Link to project" />
                <Typography>{title}</Typography>
            </a>
            {isAdmin && (
            <Button
                style = {{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40, 40, 40, 0.7)",
                }}

                onClick = {()=>deleteHandler(id)}
            >
                <FaTrash />
                </Button> )}
        </div>
    )
}

export default ProjectsCard