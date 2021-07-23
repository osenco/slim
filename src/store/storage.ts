import { Storage } from '@capacitor/storage'

export default function () {
    async function getItem(key: string) {
        const { value } = await Storage.get({key: key})

        return value
    }

    async function setItem(key: string, value: any) {
        return await Storage.set({ key, value })
    }

    async function getObject(key: string) {
        const { value } = await Storage.get({ key: key })

        return value ? JSON.parse(value) : null;
    }

    function get(key: string) {
        let v;

        Storage.get({key: key}).then(({ value }) => v = value)

        return v ? JSON.parse(v) : null;
    }

    async function setObject(key: string, value: any) {
        return await Storage.set({ key: key, value: JSON.stringify(value) })
    }

    async function remove(key: string) {
        return await Storage.remove({key: key})
    }

    async function clear() {
        return await Storage.clear()
    }

    return { getItem, setItem, get, getObject, setObject, remove, clear }
}