/** @format */

import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";


/** @format */
export class Games {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((item) => {
      item.addEventListener("click", () => {
        this.changeLikActive(item);
        const cat = item.getAttribute("data-category");
        this.getGames(cat);
        
      });
    });
    this.ui = new Ui();
    this.detailsSection = new Details();
    this.getGames("MMORPG");
  }

  changeLikActive(item) {
    document
      .querySelector(".navbar-nav .nav-item .active")
      .classList.remove("active");
    item.classList.add("active");
  }
  async getGames(categorey) {
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categorey}`,
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

    this.ui.displayGames(response);
    document.querySelectorAll('.card').forEach(card=>{
      card.addEventListener("click",()=>{
     let homeSection= document.querySelector(".games");
     let detailsSection = document.querySelector(".details");
    homeSection.classList.add("d-none");
detailsSection.classList.remove("d-none");
new Details(card.dataset.id)
      })
    })
  }
}
