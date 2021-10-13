import React from "react";
import { Card } from "@material-ui/core";
import MemStyles from "./style/Memspagestyle";
import HourGrid from "./components/HourGrid";
import MemContent from "./components/MemContent";

const MemsPage = () => {
    const classes = MemStyles();

    return (
        <Card className={classes.root}>
            <HourGrid />
            <MemContent />
        </Card>)
}

export default MemsPage;