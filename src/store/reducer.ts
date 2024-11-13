import { createReducer } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { getOffers, changeCity, getFavoritesOffers } from './action';
import { offersMock } from '../mocks/offers';
import { Cities } from '../types/cities';

type OffersState = {
	offers: Offer[];
	favoritesOffers: Offer[];
	city: Cities;
};

const initialState: OffersState = {
	offers: [],
	favoritesOffers: [],
	city: Cities.Paris
};

export const reducer = createReducer(
	initialState,
	(builder) => {
		builder
			.addCase(getOffers, (state, action: PayloadAction<Cities>) => {
				const filteredOffers = offersMock.filter((offer) => offer.city.name === action.payload);

				state.offers = filteredOffers;
			})
			.addCase(getFavoritesOffers, (state) => {
				state.favoritesOffers = offersMock;
			})
			.addCase(changeCity, (state, action: PayloadAction<Cities>) => {
				state.city = action.payload;
			});
	}
);

export default reducer;
