import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch('https://raw.githubusercontent.com/Zakrok09/RoTUer/data-branch/dashboard.json');
    const db = await res.json();
    if (res.ok) {
        return {
            faculty: db.faculties["tudelft"],
            dbTags: db.tags
        }
    }

    return {
        status: res.status,
        error: new Error('Could not fetch the links')
    }
}