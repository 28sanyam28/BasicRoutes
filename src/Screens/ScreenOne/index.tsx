import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { ScreenList } from "../../Navigation/RouteStack/ScreenList";
import { ScreenOneProps } from "./type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { useEffect } from "react";
import { setName } from "../../Redux/Reducers/appSlice";

const ScreenOne = ({ navigation }: ScreenOneProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { name } = useSelector((state: RootState) => state?.appSlice)

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