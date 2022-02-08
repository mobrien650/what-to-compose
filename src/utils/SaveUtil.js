export function save(name, item) {
    window.localStorage.setItem(name, JSON.stringify(item))
}

export function load(name) {
    try {
        return JSON.parse(window.localStorage.getItem(name))
    } catch {
        return {}
    }
}