import styled from "styled-components/native";


export const Input = styled.TextInput`
  height: 40px;
  border-bottom-width: 2px;
  border-color: lightgray;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`;

export const PasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PasswordInput = styled(Input)`
  flex: 1;
`;

export const ErrorMessage = styled.Text`
  color: #c63450;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 500;
`;