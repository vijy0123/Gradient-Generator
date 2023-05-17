import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionDescription,
  GradientDirectionList,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    toColorInput: '#014f7b',
    fromColorInput: '#8ae323',
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onChangeFromColor = e => {
    this.setState({fromColorInput: e.target.value})
  }

  onChangeToColor = e => {
    this.setState({toColorInput: e.target.value})
  }

  onClickGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      gradientValue,
      toColorInput,
      fromColorInput,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionDescription>Choose Direction</DirectionDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </CustomInputAndColorContainer>

            <CustomInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColor}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
