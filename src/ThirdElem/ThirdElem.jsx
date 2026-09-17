import { Item, SubTitle, Text, Image, IngredientsList, IngredientsItem, DifficultyList, DifficultyItem, DifficultyOptions, RightText, DifficultyText } from "./ThirdElem.styled"
import { IoMdTime } from "react-icons/io";
import { PiCookingPotLight } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";


function ThirdElem() {
    return (
        <Item>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzX_l-sVZ2Fx6GvNwmUShDX7svuzrh9f3jAJPcV-yL6FMMYsuBUZW-MVr&s=10" alt="Spicy potato salad" />
            <SubTitle>Spicy potato salad</SubTitle>
            <IngredientsList>
                <IngredientsItem>
                    <Text><IoMdTime style={{fontSize: "18px"}}/>30 min</Text>
                    <Text><PiCookingPotLight style={{fontSize: "18px"}}/>2 servings</Text>
                    <Text><BsFillLightningChargeFill style={{fontSize: "18px"}}/>320 calories</Text>
                </IngredientsItem>
            </IngredientsList>
            <DifficultyList>
                <DifficultyItem>
                    <SubTitle>Difficulty</SubTitle> 
                    <DifficultyOptions>
                    <DifficultyText>Easy</DifficultyText>
                    <RightText>Medium</RightText>
                    <DifficultyText>Hard</DifficultyText>
                    </DifficultyOptions>
                </DifficultyItem>
            </DifficultyList>
        </Item>
    )
}

export default ThirdElem