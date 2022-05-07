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
    const [description2, setDescription2] = useState("");

    const servicesDesc2 = ( e ) => {
        setDescription2( e.target.value )
    }


    const createProductSubmitHandler2 = (e) => {
        e.preventDefault();
        axios.put(
            `/api/v1/services/6248a5eef9d8d32a9c8c9120
            `, {services: description2}
        ).then( res => {
            setDescription2( res.data );
            alert.success("Updated Successfully");
            navigate("/admin/dashboard");
        } )
        if ( description2 === '' ) {
            alert.error("Please input something")
            navigate("/admin/services")
        }
    };

    return (
        <Fragment>
        <MetaData title="Update Services Description" />
        <div className="dashboard">
            <SideBar />
            <div className="newProductContainer">
                        <form
                    className="createProductForm"
                    onSubmit={createProductSubmitHandler2}
                >
                <h1 className="productsHeading">Update Description</h1>
                    <div>
                        <DescriptionIcon />
                        <textarea
                            placeholder="Edit Submission Description"
                            value={description2}
                            onChange={servicesDesc2}
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
