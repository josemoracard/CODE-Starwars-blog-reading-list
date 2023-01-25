export const getVehicles = async () => {
    const response = await fetch("https://www.swapi.tech/api/vehicles/")
    const responseJSON = await response.json()
    return responseJSON.results
}