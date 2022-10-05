interface Path{
    home:string 
    FashionGirl:string 
    FashionMale:string 
    FashionCart:string 
    Fashion:string
    Checkout:string 
    success:string
}
export const Path:Path={
    home:'/',
    FashionGirl:'/fashion-girl',
    FashionMale:'/fashion-male',
    FashionCart:'/cart',
    Fashion:'/fashion/:name',
    Checkout:'/checkout',
    success:'/success'
}