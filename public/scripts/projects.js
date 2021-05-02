const requestProjects = async () => {
    const APIlocation = "http://localhost:3000/";
    //const APIlocation = "https://julianestrappazzon.herokuapp.com/";

    const response = await axios.get(`${APIlocation}getProject`);

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