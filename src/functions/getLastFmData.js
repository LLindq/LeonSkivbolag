const fetch = require('node-fetch');

async function getLastFmData() {

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=a9bd98edbf62437e2542a87294e156da&artist=kanye&album=graduation&format=json", requestOptions)
        .then(res => res.json())
        .catch(error => console.log('error', error));
}

module.exports = getLastFmData;


