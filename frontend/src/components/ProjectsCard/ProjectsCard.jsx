import React from 'react'
import { Button, Typography } from '@mui/material';
import "./ProjectsCard.css";
import { FaTrash } from 'react-icons/fa';
import { deleteProject, getUser } from '../../actions/user';
import { useDispatch } from 'react-redux';

const ProjectsCard = ({
   url = "https://github.com/Hakber134/Connect4",
   title = "Title Here",
   image,
   isAdmin = false,
   id,
}) => {
    const dispatch = useDispatch()

    const deleteHandler =async (id) => {
        await dispatch(deleteProject(id));
        dispatch(getUser());
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