<h1 align="center">Welcome to Hayashi 👋</h1>
<p>
  <a href="https://twitter.com/_HouseofGiants" target="_blank">
    <img alt="Twitter: _HouseofGiants" src="https://img.shields.io/twitter/follow/_HouseofGiants.svg?style=social" />
  </a>
</p>

> The Hayshi website.

## Install

### Backend

All the instructions below should be executed under the `backend` directory:

* Run `yarn`
* Copy `.env.example` to `.env`
* Run `yarn develop`
  * This command will fail, but will automatically add the variable `JWT_SECRET` to the `.env` file
* Edit the `.env` file and rename `JWT_SECRET` to `ADMIN_JWT_SECRET`
* Run `yarn develop` again and it should launch the admin app successfully

### Frontend

All the instructions below should be executed under the `frontend` directory:

* Run `yarn`
* Copy `.env.example` to `.env`
* Run `yarn dev` again and it should launch the website successfully in port `3000`

## Usage

```sh
cd backend && yarn develop
cd frontend && yarn dev
```

## Author

👤 **House of Giants**

* Website: houseofgiants.com
* Twitter: [@_HouseofGiants](https://twitter.com/_HouseofGiants)
* Github: [@house-of-giants](https://github.com/house-of-giants)
* LinkedIn: [@house-of-giants](https://linkedin.com/in/house-of-giants)

Edits by **ONA**

* Website: [onadev.ar](https://onadev.ar)

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_