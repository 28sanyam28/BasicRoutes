import { View } from "react-native";
import styles from "./styles";
import { ScreenTwoProps } from "./type";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useEffect } from "react";

const ScreenTwo = ({ navigation }: ScreenTwoProps) => {
    const { name } = useSelector((state: RootState) => state?.appSlice)

    useEffect(() => {
        console.log(name)
    }, [])

    return (
        <View style={styles.container}></View>
    )
}

export default ScreenTwo;