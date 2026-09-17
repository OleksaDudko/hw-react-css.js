import FirstElem from "../FirstElem/FirstElem"
import SecondElem from "../../SecondItem/SecondElem"
import ThirdElem from "../../ThirdElem/ThirdElem"
import FourthElem from "../../FourthElem/FourthElem"
import { List } from './ReceptList.styled'

function ReceptList() {
    return (
        <List>
            <FirstElem/>
            <SecondElem/>
            <ThirdElem/>
            <FourthElem/>
        </List>
    )
}

export default ReceptList