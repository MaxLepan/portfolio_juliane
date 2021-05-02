const requestProjects = async () => {
    const APILocation = "http://localhost:3000/";
    //const APIlocation = "https://julianestrappazzon.herokuapp.com/";

    const response = await axios.get(`${APILocation}getProjects`);

    try {
        const datas = response.data;

        datas.forEach(data => {
            console.log(data);
        })
    } catch (err) {
        console.log(err);
    }
}

requestProjects();