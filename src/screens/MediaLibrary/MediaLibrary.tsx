import React from "react";
import CustomText from "components/CustomText";
import MainContainer from "containers/MainContainer";

const MediaLibrary = () => {
    return (
        <MainContainer safeArea isLoading={false} hideViewOnLoading={false}>
            <CustomText fontVariant={"bold"} size={"heading6"}>This is Media Library</CustomText>
        </MainContainer>
    );
}

export default MediaLibrary;