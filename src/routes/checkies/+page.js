export async function load({ fetch }) {
    const res = await fetch('https://raw.githubusercontent.com/Zakrok09/RoTUer/data-branch/checkies.json');
    const database = await res.json();
    const res2 = await fetch('https://raw.githubusercontent.com/Zakrok09/RoTUer/data-branch/links.json');
    const links = await res2.json();
    if (res.ok && res2.ok) {
        return {
            database,
            links
        }
    }

    return {
        status: res.status,
        error: new Error('Could not fetch the links')
    }
}
