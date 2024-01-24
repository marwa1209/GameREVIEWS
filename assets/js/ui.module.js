/** @format */

"use strict";
export class Ui {
  constructor() {}
  displayGames(data) {
    let gameox = ``;
    for (let index = 0; index < data.length; index++) {
      gameox += `                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div data-id="${data[index].id}" class="card h-100 bg-transparent" role="button">
                            <div class="card-body text-white ">
                                <figure class="position-relative">
                                    <img class="card-img-top object-fit-cover h-100"
                                        src="${data[index].thumbnail}">

                                </figure>
                                <figcaption>

                                    <div class="hstack justify-content-between">
                                        <h3 class="h6 small">${data[index].title}</h3>
                                        <span class="badge text-bg-primary p-2">Free</span>
                                    </div>

                                    <p class="card-text small text-center opacity-50">
                                       ${data[index].short_description}
                                    </p>

                                </figcaption>
                            </div>
                            <footer class="card-footer small hstack justify-content-between">
                                <span class="badge badge-color">${data[index].genre}</span>
                                <span class="badge badge-color">${data[index].platform}</span>
                            
                            </footer>
                        </div>
                    </div>`;
    }
    document.getElementById("gameData").innerHTML = gameox;
  }

  displayDetails(data){
   const detailsBox = ` <div class="col-md-4">
                        <img src="${data.thumbnail}" class="w-100" alt="image details">
                    </div>
                    <div class="col-md-8">
                        <h3>Title: Diablo Immortal</h3>
                        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                        <p>Platform: <span class="badge text-bg-info">${data.platform} </span> </p>
                        <p>Status: <span class="badge text-bg-info">${data.status} </span> </p>
                        <p class="small">${data.description} 
                        </p>
                        <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url} ">Show
                          Game</a>
                    </div>`;
  document.getElementById("detailsContent").innerHTML = detailsBox;
  }
}
