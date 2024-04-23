const API__URL = "https://dummyjson.com/users";

const loading = document.querySelector(".loading");
async function usersApi(url) {
  let data = await fetch(url, {
    method: "GET",
  });
  data
    .json()
    .then((res) => mapData(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}
usersApi(API__URL);

const users = document.querySelector(".users");
const users__btn = document.querySelector(".users__btn");

function mapData(user) {
  let usersData = "";
  user.users.forEach((el) => {
    usersData += `
          <div class="users__card"  data-aos="zoom-in">
            <div class="users__card__img">
              <img src="${el.image}" alt="" />
            </div>
            <div class="users__card__info">
              <h1 class="users__card__title">firstName: ${el.firstName}</h1>
              <p class="users__card__desc">lastName: ${el.lastName}</p>
              <p class="users__card__desc">maidenName: ${el.maidenName}</p>
              <p class="users__card__desc">age: ${el.age}</p>
              <p class="users__card__desc">gender: ${el.gender}</p>
              <p class="users__card__desc">email: ${el.email}</p>
              <p class="users__card__desc">phone: ${el.phone}</p>
              <p class="users__card__desc">username: ${el.username}</p>
              <p class="users__card__desc">password: ${el.password}</p>
              <p class="users__card__desc">birthDate: ${el.birthDate}</p>
              <p class="users__card__desc">height:${el.height}   weight: ${el.weight}</p>
              <p class="users__card__desc"></p>
              <p class="users__card__desc">eyeColor: ${el.eyeColor}</p>
              <p class="users__card__desc">address: ${el.address.city}</p>
              <p class="users__card__desc">university: ${el.university}</p>
          </div>
          </div>
    `;
  });
  users.innerHTML = usersData;
}

function loadCard(count) {
  let loadingCards = "";
  for (let i = 0; i < count; i++) {
    loadingCards += `
          <div class="loading__card">
            <div class="loading__card__img bg__animation"></div>
            <div class="loading__card__info bg__animation">
              <h1 class="loading__card__desc bg__animation"></h1>
              <p class="loading__card__desc bg__animation"></p>
              <p class="loading__card__desc bg__animation"></p>
              <p class="loading__card__desc bg__animation"></p>
              <p class="loading__card__desc bg__animation"></p>
            </div>
          </div>
    `;
  }
  loading.innerHTML = loadingCards;
}

loadCard(30);
