export default class UserManager {
    userDataKey = 'USER-DATA';

    get data() {
        const userData = api.getPrefs({
            key: this.userDataKey,
            sync: true
        })

        if (userData) {
            return JSON.parse(userData);
        }
        return null;
    }

    set data(value) {
        api.setPrefs({
            key: this.userDataKey,
            value
        })
    }

    logout() {
        api.removePrefs({
            key: this.userDataKey
        });
        return this._data;
    }

}