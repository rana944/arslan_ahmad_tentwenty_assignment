import { useNavigation, useRoute } from "@react-navigation/native";
import Icons from "assets/icons";
import CustomText from "components/CustomText";
import Row from "components/Row";
import MainContainer from "containers/MainContainer";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./BookTicketStyles";
import Spacer from "components/Spacer";
import { Rect, Svg } from "react-native-svg";
import Colors from "theme/Colors";
import CustomButton from "components/CustomButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BookTicket = () => {
    const { params } = useRoute();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const movieDetails = params?.movieDetails as IMovieDetail;

    function renderSeatStatus(title: string, color: string) {
        return (
            <Row style={{ flex: 1 }}>
                <Row>
                    <Svg width={30} height={40}>
                        <Rect
                            width={22}
                            height={20}
                            fill={color}
                            rx={5}
                            ry={5}
                            y={5}
                        />
                        <Rect
                            width={16}
                            height={5}
                            fill={color}
                            rx={2}
                            ry={2}
                            y={28}
                            x={3.5}
                        />
                    </Svg>
                    <CustomText fontVariant="medium" size="heading2" style={styles.seatStatus}>{title}</CustomText>
                </Row>
            </Row>
        )
    }

    return (
        <MainContainer hideViewOnLoading={false} isLoading={false} safeArea style={styles.container}>
            <Spacer height={insets.top ? 2 : 20} />
            <Row style={styles.header}>
                <Icons.BackDarkIcon onPress={navigation.goBack} />
                <View style={styles.headerInnerContainer}>
                    <CustomText fontVariant="medium" size="heading4">{movieDetails?.title || ""}</CustomText>
                    <CustomText fontVariant="regular" size="heading2" style={styles.movieTime}>March 5, 2021  I  12:30 hall 1</CustomText>
                </View>
            </Row>
            <Spacer height={15} />
            <ScrollView>
                <View style={styles.cinemaHallContainer}>
                    <Spacer />
                    <Icons.CinemaHall style={styles.hallImage} />
                    <Spacer height={100} />
                    <Row style={styles.stepper}>
                        <Icons.PlusIcon />
                        <Spacer width={10} />
                        <Icons.MinusIcon />
                    </Row>
                    <Spacer height={15} />
                    <View style={styles.divider} />
                    <Spacer />
                </View>
                <Spacer height={20} />
                <View>
                    <Row style={styles.seatStatusRow}>
                        {renderSeatStatus("Selected", Colors.selected)}
                        {renderSeatStatus("Not available", Colors.notAvailable)}
                    </Row>
                    <Row style={styles.seatStatusRow}>
                        {renderSeatStatus("VIP (150$)", Colors.vip)}
                        {renderSeatStatus("Regular (50 $)", Colors.buttonColor)}
                    </Row>
                </View>
                <Spacer />
                <Row style={styles.seatRowSelection}>
                    <CustomText fontVariant="medium" size="heading3">4 / </CustomText>
                    <CustomText fontVariant="regular" size="heading1">3 row</CustomText>
                    <Spacer />
                    <Icons.CloseIcon width={15} height={15} />
                </Row>
            </ScrollView>
            <Row style={[styles.footer, { bottom: insets.bottom + 70 }]}>
                <TouchableOpacity style={styles.totalPriceButton}>
                    <CustomText fontVariant="regular" size="heading2">Total Price</CustomText>
                    <CustomText fontVariant="semiBold" size="heading4">$ 50</CustomText>
                </TouchableOpacity>
                <CustomButton title="Proceed to pay" type="filled" onPress={() => { }} />
            </Row>
        </MainContainer>
    )
}

export default BookTicket;