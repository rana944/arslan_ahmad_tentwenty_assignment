import React from "react";
import CustomText from "components/CustomText";
import MainContainer from "containers/MainContainer";

const SettingScreen = () => {
    return (
        <MainContainer safeArea isLoading={false} hideViewOnLoading={false}>
            <CustomText fontVariant={"bold"} size={"heading6"}>This is Setting Screen</CustomText>
        </MainContainer>
    );
}

export default SettingScreen;