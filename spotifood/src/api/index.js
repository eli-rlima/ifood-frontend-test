const request = require('request');
// const querystring = require('querystring');

const baseUrl = 'https://api.spotify.com/v1/browse/featured-playlists';
const client_id = '22cf0dca328b464fbdf9dcf64a184947';
const client_secret = '1820ff26fe8149838b312b73334f18f0';

const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) 
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true,
}

module.exports = {
    /**
     * get playlists with filters
     * @param {Array} filters 
     * @returns {Object} data
    */
    async getPlaylists(filters = []) {
        return await new Promise((resolve, reject) => {
            request.post(authOptions, function(error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve({ response, body });
                }
            });
        }).then(data => {
            const { response, body } = data;
            if (response.statusCode === 200) {
                // use the access token to access the Spotify Web API
                const token = body.access_token;
                const options = {
                    url: `${baseUrl}?country=BR&limit=10`,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
                return new Promise((resolve, reject) => {
                    request.get(options, function(error, response, body) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(body);
                        }
                    });
                });
            }
        }).catch(err => {
            alert(err);
        })
    }
};