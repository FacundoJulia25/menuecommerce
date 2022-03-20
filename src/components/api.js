// esto debe venir en el backend 
const products=[
    {
        id: 1,
        title: "Royal Toro",
        price: 30000,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_640006-MLA43461344339_092020-O.webp"
    },
    {
        id: 2,
        title: "Royal Pole",
        price: 27000,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_961307-MLA44868730975_022021-O.webp"
    }, 
    {
        id: 3,
        title: "Royal Toro White",
        price: 29800,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_762909-MLA43440454661_092020-O.webp"
    }, 
    {
        id: 4,
        title: "Royal Whip",
        price: 33000,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_701951-MLA49385733679_032022-O.webp"
    }    
];
const promesa = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(products)
    }, 2000 );
})
function getProducts(){
    return promesa
}
export {
    getProducts,
} 