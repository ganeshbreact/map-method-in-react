


// const arr = [{
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },
// {
//   "id": 2,
//   "name": "Ervin Howell",
//   "username": "Antonette",
//   "email": "Shanna@melissa.tv",
//   "address": {
//     "street": "Victor Plains",
//     "suite": "Suite 879",
//     "city": "Wisokyburgh",
//     "zipcode": "90566-7771",
//     "geo": {
//       "lat": "-43.9509",
//       "lng": "-34.4618"
//     }
//   },
//   "phone": "010-692-6593 x09125",
//   "website": "anastasia.net",
//   "company": {
//     "name": "Deckow-Crist",
//     "catchPhrase": "Proactive didactic contingency",
//     "bs": "synergize scalable supply-chains"
//   }
// },
// {
//   "id": 3,
//   "name": "Clementine Bauch",
//   "username": "Samantha",
//   "email": "Nathan@yesenia.net",
//   "address": {
//     "street": "Douglas Extension",
//     "suite": "Suite 847",
//     "city": "McKenziehaven",
//     "zipcode": "59590-4157",
//     "geo": {
//       "lat": "-68.6102",
//       "lng": "-47.0653"
//     }
//   },
//   "phone": "1-463-123-4447",
//   "website": "ramiro.info",
//   "company": {
//     "name": "Romaguera-Jacobson",
//     "catchPhrase": "Face to face bifurcated interface",
//     "bs": "e-enable strategic applications"
//   }
// },];


const arr =[ {
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
{
  "albumId": 1,
  "id": 2,
  "title": "reprehenderit est deserunt velit ipsam",
  "url": "https://via.placeholder.com/600/771796",
  "thumbnailUrl": "https://via.placeholder.com/150/771796"
},
{
  "albumId": 1,
  "id": 3,
  "title": "officia porro iure quia iusto qui ipsa ut modi",
  "url": "https://via.placeholder.com/600/24f355",
  "thumbnailUrl": "https://via.placeholder.com/150/24f355"
},
{
  "albumId": 1,
  "id": 4,
  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  "url": "https://via.placeholder.com/600/d32776",
  "thumbnailUrl": "https://via.placeholder.com/150/d32776"
},
{
  "albumId": 1,
  "id": 5,
  "title": "natus nisi omnis corporis facere molestiae rerum in",
  "url": "https://via.placeholder.com/600/f66b97",
  "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
},
{
  "albumId": 1,
  "id": 6,
  "title": "accusamus ea aliquid et amet sequi nemo",
  "url": "https://via.placeholder.com/600/56a8c2",
  "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
},
{
  "albumId": 1,
  "id": 7,
  "title": "officia delectus consequatur vero aut veniam explicabo molestias",
  "url": "https://via.placeholder.com/600/b0f7cc",
  "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
},
{
  "albumId": 1,
  "id": 8,
  "title": "aut porro officiis laborum odit ea laudantium corporis",
  "url": "https://via.placeholder.com/600/54176f",
  "thumbnailUrl": "https://via.placeholder.com/150/54176f"
},
{
  "albumId": 1,
  "id": 9,
  "title": "qui eius qui autem sed",
  "url": "https://via.placeholder.com/600/51aa97",
  "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
},
{
  "albumId": 1,
  "id": 10,
  "title": "beatae et provident et ut vel",
  "url": "https://via.placeholder.com/600/810b14",
  "thumbnailUrl": "https://via.placeholder.com/150/810b14"
},]




function App() {
  return (
     <div  style={{ display:"flex",
      flexWrap:"wrap",
      gap:"20px"}}>
      {arr.map((e)  => {
       return(
        <div  style={{
          width:"300px",
          border:"2px solid black",
        }}>
          {/* <h1>{e.email} </h1> */}

          {/* <h2>{e.company}</h2> */}

          {/* <AmazonCard/> */}


          <img style={{width:"300px", height:"300px"}} src={e.url}  alt="No Image found" />

          <h3>{e.title}</h3>
        </div>
        
       )
       })}
     </div>
  );
}

export default App;
