import {createContext, useState} from 'react'

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: () => {},
    removeFavorite: () => {}
})
// Provider for wrapping around other component to allow access to context
function FavoritesContextProvider({children}){
    const [favoriteMealId, setFavoriteMealId] = useState([])

    const addFavorite = (id) => {
        setFavoriteMealId((currentFavId) => [...currentFavId, id] )
    }

    const removeFavorite = (id) => {
        setFavoriteMealId((currentFavId) => currentFavId.filter((mealId) => mealId !== id))
    }


    // enable other components to use functions or ids from provider
    const value = {
        ids: favoriteMealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider