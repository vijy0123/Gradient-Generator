// Write your code here
import {GradientListItem, GradientDirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, clickGradientDirectionItem, isActive} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickGradientDirection = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <GradientListItem>
      <GradientDirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirection}
      >
        {displayText}
      </GradientDirectionButton>
    </GradientListItem>
  )
}
export default GradientDirectionItem
