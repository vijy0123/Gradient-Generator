// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-weight: 'Roboto';
  color: #ffffff;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectionDescription = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
  color: #ededed;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 450px;
  }
`
export const ColorsPickersDescription = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
  color: #ededed;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #1e293b;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 5px;
  padding: 12px 24px 12px 24px;
  margin: 25px 0px 10px 15px;
  border: none;
  outline: none;
  cursor: pointer;
`
