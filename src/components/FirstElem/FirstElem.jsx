import { Item, SubTitle, Text, Image, IngredientsList, IngredientsItem, DifficultyList, DifficultyItem, DifficultyOptions, RightText, DifficultyText } from "./FirstElem.styled"
import { IoMdTime } from "react-icons/io";
import { PiCookingPotLight } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";


function FirstElem() {
    return (
        <Item>
            <Image src="https://assets.bonappetit.com/photos/67d49b3b9714c8864137aace/1:1/w_640%2Cc_limit/undefined" alt="Smoked salmon burger" />
            <SubTitle>Smoked salmon burger</SubTitle>
            <IngredientsList>
                <IngredientsItem>
                    <Text><IoMdTime style={{fontSize: "18px"}}/>20 min</Text>
                    <Text><PiCookingPotLight style={{fontSize: "18px"}}/>6 servings</Text>
                    <Text><BsFillLightningChargeFill style={{fontSize: "18px"}}/>210 calories</Text>
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

export default FirstElem