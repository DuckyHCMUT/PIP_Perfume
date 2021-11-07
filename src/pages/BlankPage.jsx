import { waitFor } from "@testing-library/dom";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const BlankPage = () => {
    return <Redirect to = "/" />
};

export default BlankPage;