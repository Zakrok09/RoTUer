export async function load({ fetch }) {
    const res = await fetch('https://raw.githubusercontent.com/Zakrok09/RoTUer/data-branch/articles.json');
    const database = await res.json();
    if (res.ok) {
        return {
            database
        }
    }

    return {
        status: res.status,
        error: new Error('Could not fetch the links')
    }
}