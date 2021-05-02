let carouselProjectsWrapper = document.querySelector(".splide__list");

const requestProjects = async () => {
    const APILocation = "http://localhost:3000/";
    //const APIlocation = "https://julianestrappazzon.herokuapp.com/";

    const response = await axios.get(`${APILocation}getProjects`);

    try {
        const datas = response.data;

        datas.forEach(data => {
            console.log(data);
            carouselProjectsWrapper.innerHTML += `
                    <li class="splide__slide">
                        <div id="${data.id}" class="carousel-projects">
                            <img src="${data.images.hidpi}" class="carousel-img">
                        </div>
                        
                    </li>`

            for (let i = 0; i < datas.length; i++){
                if (data.title !== datas[i].title){
                    carouselProjectsWrapper.innerHTML += `
                    <li class="splide__slide">
                        <div id="${data.id}" class="carousel-projects">
                            <img src="${data.images.hidpi}" class="carousel-img">
                        </div>
                        
                    </li>`
                }
            }

            console.log(data);
        })
    } catch (err) {
        console.log(err);
    }
}

requestProjects();