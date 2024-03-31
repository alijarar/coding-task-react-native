import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { SafeScreen } from '@/components/template';

import type { ApplicationScreenProps } from '@/types/navigation';

function Startup({ navigation }: ApplicationScreenProps) {
	const { t } = useTranslation(['startup']);

	const { isSuccess, isFetching, isError } = useQuery({
		queryKey: ['startup'],
		queryFn: () => {
			return Promise.resolve(true);
		},
	});

	useEffect(() => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Login' }],
		});
	}, [isSuccess]);

	return (
		<SafeScreen>
			<View
			>
				{isFetching && (
					<ActivityIndicator size="large"/>
				)}
				{isError && (
					<Text>
						{t('startup:error')}
					</Text>
				)}
			</View>
		</SafeScreen>
	);
}

export default Startup;
