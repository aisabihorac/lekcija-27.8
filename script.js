let osobe=[
    {ime:"Aisa",
        id:1
    },
    {ime:"Haso",
        id:2
    },

];
let osoba1={
    ime:"Aisa",
    id:1
};
console.log(osobe[1].id);
//forEach kroz niz objekata
osobe.forEach(osoba=>{
  if(osoba.id===2){
    console.log("Pronasli ste  korisnika sa idijem 1.Ime je:"+osoba.ime);
}

});
let zivotinje=[
    {
        vrsta:"insekt",
        naziv:"Muha",
        boja:"zelena"
    },
    {
        vrsta:"sisar",
        naziv:"delfin",
        boja:"siva"
    }
];

zivotinje.forEach(x=>{
    console.log("Zivotinja je:");
    console.log(x.naziv);
    console.log("Vrsta zivotinje: ",x.vrsta);
    console.log("Opis izgleda: ",x.boja);

    if(x.naziv==="Muha"){
        console.log("Moze da leti");
    }
})
const delfin=zivotinje.find(zivotinja=>zivotinja.naziv==="lav");
console.log(delfin?.naziv);
if(delfin !==undefined){
    console.log(delfin.naziv);
}


let movies = [
    { id: 1, title: "Night country", poster_path: "assets/1.jpg" },
    { id: 2, title: "Lift", poster_path: "assets/1.jpg" },
    { id: 3, title: "Boy in the boat", poster_path: "assets/1.jpg" },
  ];
  movies.forEach(movie=>{
    console.log(movie.id)
    console.log(movie.title)
   // document.getElementById().innerHTML=movies.title;
  })