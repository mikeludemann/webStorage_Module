var webStorage = (function () {

    function setItem_localStorage(name, value) {

        return localStorage.setItem(name, value);

    }

    function getItem_localStorage(name) {

        return localStorage.getItem(name);

    }

    function removeItem_localStorage(name) {

        return localStorage.removeItem(name);

    }

    function length_localStorage() {

        return localStorage.length;

    }

    function clear_localStorage() {

        return localStorage.clear();

    }

    function setItem_sessionStorage(name, value) {

        return sessionStorage.setItem(name, value);

    }

    function getItem_sessionStorage(name) {

        return sessionStorage.getItem(name);

    }

    function removeItem_sessionStorage(name) {

        return sessionStorage.removeItem(name);

    }

    function length_sessionStorage() {

        return sessionStorage.length;

    }

    function clear_sessionStorage() {

        return sessionStorage.clear();

    }

    return {

        setLocal: setItem_localStorage,
        getLocal: getItem_localStorage,
        removeLocal: removeItem_localStorage,
        lengthLocal: length_localStorage,
        clearLocal: clear_localStorage,
        setSession: setItem_sessionStorage,
        getSession: getItem_sessionStorage,
        removeSession: removeItem_sessionStorage,
        lengthSession: length_sessionStorage,
        clearSession: clear_sessionStorage

    }

})();