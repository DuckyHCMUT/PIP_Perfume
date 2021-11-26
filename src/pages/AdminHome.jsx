import React, { useState } from "react";
import AdminLogin from "./AdminLogin";

const AdminHome = () => {
    const [token, setToken] = useState();

    if (!token) {
        return <AdminLogin setToken={setToken} />;
    }
    else{
        alert('Login success');
        return (
            <div>
                <h1>DASHBOARD</h1>
            </div>
        );
    }      
};

export default AdminHome;
