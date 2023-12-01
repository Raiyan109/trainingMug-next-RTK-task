export const fetchPhotos = async (): Promise<{ data: any }> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const result = await response.json()


    return result
}
