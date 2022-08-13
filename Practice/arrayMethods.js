// const names = ['anne', 'barry', 'chloe']
// const bigNames=names.map((name)=>name.toUpperCase())
// console.log(bigNames)

//Array.Filter() Array.Find()
// const newArray=Array.filter(callbackFn)
// const value=Array.find(callbackFn)

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

const myFavouriteThings=things.filter(thing=>thing.favorite)
console.log(myFavouriteThings)


const thingsWithOverFiftyPoints=things.filter(thing=>thing.favorite>50)
console.log(thingsWithOverFiftyPoints)



const selectThingsByID=(id)=>{
    return things.find((thing)=>thing.id===4)
}
const selectedThing=selectThingsByID(4)
console.log(selectedThing)