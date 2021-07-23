import axios from 'axios'
import storage  from '../store/storage'
import  users  from "./user"

let baseURL = import.meta.env.VITE_API_URL;
if (typeof baseURL == 'undefined' || typeof baseURL == 'boolean') {
	baseURL = 'https://osenapi.herokuapp.com/v1'
}

const http = axios.create({
	baseURL,
	withCredentials: true,
});

http.defaults.headers.common = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	"X-Requested-With": "XMLHttpRequest",
};

(async () => {
	storage().getItem('token').then(token => {
		if (token?.length) {
			http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		} else {
			if (!location.pathname.includes('/auth') && !location.pathname.includes('/pay') && location.pathname !== '/offline') {
				location.assign("/auth?token=none");
			}
		}
	})
})()

http.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: any) => {
		if (error.response?.status === 401) {
			users().logout().then(() => {
				if (!location.pathname.includes('/auth') && !location.pathname.includes('/pay')) {
					location.assign("/auth?token=expired");
				}
			});
		}

		return Promise.reject(error);
	}
);

export default http;