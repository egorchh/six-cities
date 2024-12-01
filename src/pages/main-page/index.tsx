import { useEffect } from 'react';
import { CityOffers, Spinner } from '../../components';
import { CitiesList } from '../../components';
import { useActions, useAppSelector } from '../../store/hooks.ts';
import { selectCityName, selectOffersReducerData } from '../../store/selectors.ts';
import { useSortedOffers } from '../../hooks/use-sorted-offers.ts';

const MainPage = () => {
	const { offers, loading } = useAppSelector(selectOffersReducerData);
	const { fetchOffers } = useActions();
	const cityName = useAppSelector(selectCityName);

	useEffect(() => {
		fetchOffers();
	}, [fetchOffers, cityName]);

	const sortedOffers = useSortedOffers(offers);

	return (
		<main className="page__main page__main--index">
			<h1 className="visually-hidden">Cities</h1>
			<CitiesList />
			{loading ? (
				<Spinner size='l' />
			) : (
				<CityOffers offers={sortedOffers} />
			)}
		</main>
	);
};

export default MainPage;
