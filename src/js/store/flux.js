const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [],
			planetList: [],
			vehicleList: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getCharacter: async () => {
				const response = await fetch("https://www.swapi.tech/api/people")
			  	const data = await response.json()
				 setStore({ characterList: data.results });
			  },

			getCharacterDetail: async (id) => {
				const response = await fetch(`https://swapi.tech/api/people/${id}`)
				const data = await response.json()
					return data.result;
			  }, 

			getPlanets: async () => {
				const response = await fetch("https://swapi.tech/api/planets")
				const data = await response.json()
					setStore({ planetList: data.results });
			  },
			
			getPlanetsDetails: async (id) => {
				const response = await fetch(`https://swapi.tech/api/planets/${id}`)
				const data = await response.json()
					return data.result;
			  },
		
			getVehicles: async () => {
				const response = await fetch("https://swapi.tech/api/vehicles")
				const data = await response.json()
					setStore({ vehicleList: data.results });
			  },
			
			getVehiclesDetail: async (id) => {
				const response = await fetch(`https://swapi.tech/api/vehicles/${id}`)
				const data = await response.json()
					return data.result;
			  },

			  addToFavorites: (name) => {
					setStore({ favorites: [...getStore().favorites, name] });
			  },

			  deleteFavorite: (name) => {
				const store = getStore();
				const newList = store.favorites.filter((item) => item.name !== name);
				setStore({ favorites: newList });
			}
		}
	};
};

export default getState;
