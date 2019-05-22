const request = require('request-promise');

function getDecimal(price){
    const str = price + "";
    if( str.indexOf('.') === -1 ) return 0;
    const dec = str.split('.')[1];
    const result = dec.length > 1 ? dec : dec + "0" ;
    return +result;
}

function getAutor(){ // middleware
    const author = {
        name: 'Agustin',
        lastname: 'Miquelez'
    };
    return author;
}

async function requestUrl(uri){
    const response = await request.get({
        uri,
        transform: (body, res) => {
            res = JSON.parse(body);
            return res;
        }
    }).then(res => {
        return res;
    }).catch(err => { 
        console.error(err);
        return '';
    });
    return response;
}

async function getDescription(url){

    const response = await requestUrl(url)
    
    return response.plain_text;

}

async function getCategories(url){

    const response = await requestUrl(url);

    let categories = [];
    await response.path_from_root.map(cat => {
        categories.push(cat.name);
    });

    return categories;
}

async function getItemData(url){
    
    const response = await requestUrl(url);

    return response;

}

async function getItemsData(url){

    const response = await requestUrl(url);

    return response;

}

exports.getItems = async (req, res, next) => {

    const query = req.query.q;
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;

    const bodyResult = await getItemsData(url);

    const result = bodyResult.results;

    const author = getAutor();

    let categories = [];
    bodyResult.filters.map(filter => {
        if(filter.id === "category"){
            filter.values[0].path_from_root.map(cat => {
                categories.push(cat.name);
            })
        }
    });

    let items = [];
    result.map( item => {
        const {id, title, price, currency_id, thumbnail, condition, shipping, address} = item;
        const amount = Math.trunc(price);
        const decimals = getDecimal(price);
        const obj = {
            id,
            title,
            price: {
                currency: currency_id,
                amount,
                decimals
            },
            picture: thumbnail,
            condition,
            city: address.state_name,
            free_shipping: shipping.free_shipping
        }
        items.push(obj);
    });

    const jsonResult = {
        author,
        categories,
        items
    };
    
    res.status(res.statusCode).json(jsonResult);

};

exports.getItem = async (req, res, next) => {

    const itemId = req.params.id;

    const url = {
        items: `https://api.mercadolibre.com/items/${itemId}`,
        description: `https://api.mercadolibre.com/items/${itemId}/description`,
        category: 'https://api.mercadolibre.com/categories/'
    };

    const description = await getDescription(url.description);

    const itemData = await getItemData(url.items);

    const author = getAutor();

    const {id, title, currency_id, price, pictures, condition, shipping, sold_quantity, category_id} = itemData;

    const amount = Math.trunc(price);

    const decimals = getDecimal(price);

    const categories = await getCategories(url.category + category_id);

    const jsonResult = {
        author,
        id,
        title,
        price: {
            currency: currency_id,
            amount,
            decimals
        },
        picture: pictures[0].url,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description,
        categories
    }

    res.status(res.statusCode).json(jsonResult);

};