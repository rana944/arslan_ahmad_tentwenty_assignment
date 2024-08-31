import React from "react";
import CustomText from "components/CustomText";
import MainContainer from "containers/MainContainer";

const Dashboard = () => {
    return (
        <MainContainer safeArea isLoading={false} hideViewOnLoading={false}>
            <CustomText fontVariant={"bold"} size={"heading6"}>This is Dashboard</CustomText>
        </MainContainer>
    );
}

export default Dashboard;