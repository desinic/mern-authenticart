import React from "react";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CallIcon from '@mui/icons-material/Call';
import CategoryIcon from '@mui/icons-material/Category';
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
        <Link to="/admin/dashboard">
            <p>
            <DashboardIcon /> Dashboard
            </p>
        </Link>
        <Link to="">
            <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ImportExportIcon />}
            >
            <TreeItem nodeId="1" label="Products">
                <Link to="/admin/products">
                <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                </Link>

                <Link to="/admin/product">
                <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                </Link>
            </TreeItem>
            </TreeView>
        </Link>
        <Link to="/admin/users">
            <p>
            <PeopleIcon /> Users
            </p>
        </Link>
        <Link to="">
            <TreeView
            defaultExpandIcon={<CategoryIcon />}
            defaultCollapseIcon={<ImportExportIcon /> }
            >
            <TreeItem nodeId="1" label="Services">
                <Link to="/admin/services">
                <TreeItem nodeId="5" label="Creative" icon={<AddIcon />} />
                </Link>

                <Link to="/admin/services2">
                <TreeItem nodeId="6" label="Submission" icon={<AddIcon />} />
                        </Link>
                        
                <Link to="/admin/services3">
                <TreeItem nodeId="7" label="Quality" icon={<AddIcon />} />
                </Link>
            </TreeItem>
            </TreeView>
        </Link>
        <Link to="/admin/aboutdesc">
            <p>
            <PersonAddIcon /> About Desc
            </p>
        </Link>
        <Link to="/admin/letstalk">
            <p>
            <CallIcon /> Get In Touch
            </p>
        </Link>
        </div>
    );
};

export default Sidebar;
