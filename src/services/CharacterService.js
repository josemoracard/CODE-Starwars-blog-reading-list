export const getCharacters = async () => {
    const response = await fetch("https://www.swapi.tech/api/people?page=1&limit=20")
    const responseJSON = await response.json()
    return responseJSON.results
}