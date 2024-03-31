import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from '@/screens';

import type { ApplicationStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
