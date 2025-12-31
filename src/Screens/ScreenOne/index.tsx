import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { ScreenList } from "../../Navigation/RouteStack/ScreenList";
import { ScreenOneProps } from "./type";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { useEffect } from "react";
import { setName } from "../../Redux/Reducers/appSlice";

const ScreenOne = ({ navigation }: ScreenOneProps) => {
    const dispatch = useAppDispatch();
    const { name } = useAppSelector((state) => state.appSlice)

    useEffect(() => {
        console.log(name)
        dispatch(setName("rahul"))
    }, [])

    return (
        <TouchableOpacity onPress={() => navigation.navigate(ScreenList.ScreenTwo)}
            style={styles.container}></TouchableOpacity>
    )
}

export default ScreenOne;