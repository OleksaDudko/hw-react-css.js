import { Item, SubTitle, Text, Image, IngredientsList, IngredientsItem, DifficultyList, DifficultyItem, DifficultyOptions, RightText, DifficultyText } from "./FourthElem.styled"
import { IoMdTime } from "react-icons/io";
import { PiCookingPotLight } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";

function FourthElem() {
    return (
        <Item>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeuDcM9HThmxDO_AUGu_GUkB8LmhL_QcX9-3T4wMTFL3SC7Asce5DNSg&s=10" alt="Chicken Biryani" />
            <SubTitle>Chicken Biryani</SubTitle>
            <IngredientsList>
                <IngredientsItem>
                    <Text><IoMdTime style={{fontSize: "18px"}}/>40 min</Text>
                    <Text><PiCookingPotLight style={{fontSize: "18px"}}/>4 servings</Text>
                    <Text><BsFillLightningChargeFill style={{fontSize: "18px"}}/>700 calories</Text>
                </IngredientsItem>
            </IngredientsList>
            <DifficultyList>
                <DifficultyItem>
                    <SubTitle>Difficulty</SubTitle> 
                    <DifficultyOptions>
                    <DifficultyText>Easy</DifficultyText>
                    <DifficultyText>Medium</DifficultyText>
                    <RightText>Hard</RightText>
                    </DifficultyOptions>
                </DifficultyItem>
            </DifficultyList>
        </Item>
    )
}

export default FourthElem