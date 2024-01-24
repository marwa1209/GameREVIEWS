import { Ui } from "./ui.module.js";

/** @format */
export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener('click',()=>{
           let homeSection = document.querySelector(".games");
           let detailsSection = document.querySelector(".details");
           homeSection.classList.remove("d-none");
           detailsSection.classList.add("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(id){
       const api = await fetch(
         `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
         {
           method: "GET",
           headers: {
             "X-RapidAPI-Key":
               "57c24b9862msh6511df8adaee3c3p15cd8djsn09ca0c4e9ace",
             "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
           },
         }
       );
       const response = await api.json();
       new Ui().displayDetails(response)
  }
}
