import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Success: undefined;
	Login: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
