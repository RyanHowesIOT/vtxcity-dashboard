import axios from "axios";

export default async (req, res) => {
  const params = {
        curbs_unit_id: "CURBS3",
    };

    const config = {
        headers: {'x-api-key': 'dJNRoeSwrnaxnP1ob9v6n4CxCNi9z67z5vaUK8BQ'},
        params
    };

    try {
        let {data, status} = await axios.get(
            "https://1n6ralxm8l.execute-api.eu-west-2.amazonaws.com/staging/asset/meta",
            config
        );

        if (status === 200 && data) {
            res.status(status).send(data);
        } else {
            res.status(status).send(null);
        }
    } catch (e) {
        console.log("Error Receiving Sensors: " + e);
        res.status(404).send([]);
    }
};