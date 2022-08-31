export async function load({ fetch }) {
    const res = await fetch('https://raw.githubusercontent.com/Zakrok09/RoTUer/data-branch/links.json');
    const links = await res.json();
    if (res.ok) {
        return {
            links
        }
    }

    return {
        status: res.status,
        error: new Error('Could not fetch the links')
    }
}