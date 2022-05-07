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
    const [ description1, setDescription1 ] = useState( "" );
    
    const servicesDesc1 = ( e ) => {
        setDescription1( e.target.value )
    }


    const createProductSubmitHandler1 = (e) => {
        e.preventDefault();
        axios.put(
            `/api/v1/services/6248a4d4f9d8d32a9c8c9107
            `, {services: description1}
        ).then( res => {
            setDescription1( res.data );
            alert.success("Updated Successfully");
            navigate("/admin/dashboard");
        } )
        if ( description1 === '' ) {
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
                    onSubmit={createProductSubmitHandler1}
                    >
                <h1 className="productsHeading">Update Description</h1>
                    <div>
                        <DescriptionIcon />
                        <textarea
                            placeholder="Edit Creative Description"
                            value={description1}
                            onChange={servicesDesc1}
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
