import styled from "styled-components/native";

export const ActionSheetButton = styled.View`
  background-color: #C8324C;
  padding: 10px;
  border-radius: 30px;
  margin-top: 10px;
`;

export const Container = styled.View`
  justify-content: center;
  padding-horizontal: 20px;
`;
export const TextWrapper = styled.View`
  justify-content: center;
  padding-horizontal: 10px;
`;

export const ScrollViewContainer = styled.ScrollView`
  flex-grow: 1;
  justify-content: center;
  background-color: white;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-bottom-width: 2px;
  border-color: lightgray;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`;

export const FocusedInput = styled(Input)`
  border-color: #3c7d47;
`;

export const ErrorMessage = styled.Text`
  color: #c63450;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 500;
`;

export const PasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PasswordInput = styled(Input)`
  flex: 1;
`;

export const EyeIcon = styled.View`
  position: absolute;
  right: 10px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #6ee095;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const LoginButtonText = styled.Text`
  color: black;
  font-weight: bold;
`;

export const DisabledButton = styled(LoginButton)`
  opacity: 0.2;
`;


export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
`;