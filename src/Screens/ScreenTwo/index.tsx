import { View } from "react-native";
import styles from "./styles";
import { ScreenTwoProps } from "./type";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { useEffect } from "react";

const ScreenTwo = ({ navigation }: ScreenTwoProps) => {
    const dispatch = useAppDispatch();
    const { name } = useAppSelector((state) => state.appSlice)

    useEffect(() => {
        console.log(name)
    }, [])

    return (
        <View style={styles.container}></View>
    )
}

export default ScreenTwo;