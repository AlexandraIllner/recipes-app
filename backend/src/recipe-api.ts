const apiKey = process.env.SPOONACULAR_API_KEY;


export const searchRecipes = async (searchTerm: string, page: number) => {
    if (!apiKey) {
        throw new Error("SPOONACULAR_API_KEY is not defined");
    }

    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

    const queryParams = {
        apiKey,
        query: searchTerm,
        number: "10",
        offset: ((page - 1) * 10).toString()
    };
    url.search = new URLSearchParams(queryParams).toString();


    try {
        const searchResponse = await fetch(url);
        const resultsJson = await searchResponse.json();

        return resultsJson;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch recipes from Spoonacular API");
    }
};