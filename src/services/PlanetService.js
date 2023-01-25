export const getPlanets = async () => {
    const response = await fetch("https://www.swapi.tech/api/planets?page=1&limit=19")
    const responseJSON = await response.json()
    return responseJSON.results
}