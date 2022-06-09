// fetch data
const fetchProductData = () => {
    fetch('/get-products', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({id: productId})
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

let productId = null;
if(location.pathname != '/products'){
    productId = decodeURI(location.pathname.split('/').pop());
    fetchProductData();
}