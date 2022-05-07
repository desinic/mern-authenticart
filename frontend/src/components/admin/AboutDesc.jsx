import React, { Fragment, useState } from "react";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import DescriptionIcon from "@material-ui/icons/Description";
import SideBar from "./Sidebar";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import "./newProduct.css";

const NewProduct = () => {
    const navigate = useNavigate()
    const alert = useAlert();
    const [description, setDescription] = useState("");
    const aboutDesc = ( e ) => {
        setDescription( e.target.value )
    }

    const createProductSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(
            `/api/v1/about/62434318eaed7832346d056b
            `, {aboutDesc: description}
        ).then( res => {
            setDescription( res.data );
            alert.success("Updated Successfully");
            navigate("/admin/dashboard");
        } )
        if ( description === '' ) {
            alert.error("Please input something")
            navigate("/admin/aboutdesc")
        }
    };

    return (
        <Fragment>
        <MetaData title="Update About Description" />
        <div className="dashboard">
            <SideBar />
            <div className="newProductContainer">
            <form
                className="createProductForm"
                onSubmit={createProductSubmitHandler}
            >
                <h1 className="productsHeading">Update About Description</h1>
                <div>
                    <DescriptionIcon />
                    <textarea
                        placeholder="About Description"
                        value={description}
                        onChange={aboutDesc}
                        cols="30"
                        rows="1"
                    ></textarea>
                </div>
                <Button
                    id="createProductBtn"
                    type="submit"
                    >
                Update
                </Button>
            </form>
            </div>
        </div>
        </Fragment>
    );
};

export default NewProduct;
