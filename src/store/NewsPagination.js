import {makeAutoObservable} from "mobx";

export default class NewsPagination {
    constructor(posts) {
        this._posts = posts
        this._currentPage = 1
        this._perPage = 5
        makeAutoObservable(this)
    }

    setPosts(posts) {
        this._posts = posts
    }

    setCurrentPage(currentPage) {
        this._currentPage = currentPage
    }

    setPerPage(perPage) {
        this._perPage = perPage
    }

    get posts() {
        return this._posts
    }

    get currentPage() {
        return this._currentPage
    }

    get perPage() {
        return this._perPage
    }
}