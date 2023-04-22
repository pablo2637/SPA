
export const dummyJson = async (data) => {

    let url;
    switch (data.type) {

        case 'category':
            url = `https://dummyjson.com/products/category/${data.category}`;
            break;

        case 'id':
            url = `https://dummyjson.com/products/${data.id}`;
            break;

        case 'search':
            url = `https://dummyjson.com/products/search?q=${data.search}`
            break;

        case 'categories':
            url = 'https://dummyjson.com/products/categories';
            break;

    };

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'force-cache'
    };

    try {
        const request = await fetch(url, options);

        if (request.ok) {
            const response = await request.json();

            return response

        } else {

            throw {
                ok: false,
                data: "error"
            };
        }

    } catch (e) {
        console.log('errorFetch', e)

    };

}
