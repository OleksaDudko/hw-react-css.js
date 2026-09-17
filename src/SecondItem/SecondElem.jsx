import { Item, SubTitle, Text, Image, IngredientsList, IngredientsItem, DifficultyList, DifficultyItem, DifficultyOptions, RightText, DifficultyText } from "./SecondElem.styled"
import { IoMdTime } from "react-icons/io";
import { PiCookingPotLight } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";

function SecondElem() {
    return (
        <Item>
            <Image src="https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2560%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg" alt="Tomatoes With Creamy Feta" />
            <SubTitle>Tomatoes With Creamy Feta</SubTitle>
            <IngredientsList>
                <IngredientsItem>
                    <Text><IoMdTime style={{fontSize: "18px"}}/>15 min</Text>
                    <Text><PiCookingPotLight style={{fontSize: "18px"}}/>3 servings</Text>
                    <Text><BsFillLightningChargeFill style={{fontSize: "18px"}}/>600 calories</Text>
                </IngredientsItem>
            </IngredientsList>
            <DifficultyList>
                <DifficultyItem>
                    <SubTitle>Difficulty</SubTitle> 
                    <DifficultyOptions>
                    <RightText>Easy</RightText>
                    <DifficultyText>Medium</DifficultyText>
                    <DifficultyText>Hard</DifficultyText>
                    </DifficultyOptions>
                </DifficultyItem>
            </DifficultyList>
        </Item>
    )
}


export default SecondElem