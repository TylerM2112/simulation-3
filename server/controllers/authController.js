const axios = require('axios');
const massive = require('massive');

module.exports = {
    connect: (req, res) => {
        const authorizationCode = req.query.code;
        axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: authorizationCode,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }).then(accessTokenResponse => {
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`).then(userInfoResponse => {
                const userData = userInfoResponse.data;
                return req.app.get('db').lookup_user_by_auth0_sub(userData.sub).then(users => {
                    if (users.length) {
                        const user = {
                            name: userData.name,
                            email: userData.email,
                            picture: userData.picture,
                        };
                        req.session.user = userInfoResponse.data;
                        res.redirect('/account');
                    } else {
                        return req.app.get('db').create_user([userData.sub, userData.email, userData.name, userData.picture]).then(newUsers => {
                            const user = {
                                name: newUsers[0].name,
                                email: newUsers[0].email,
                                picture: newUsers[0].picture,
                            };
                            req.session.user = user;
                            res.redirect('/');
                        })
                    }
                })

            })
        }).catch(error => {
            console.log('server error!', error);
            res.status(500).send('server error!');
        });
    }
}