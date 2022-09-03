import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const res = await fetch('https://raw.githubusercontent.com/Zakrok09/RoTUer/data-branch/dashboard.json');
    const db = await res.json();
    if (res.ok) {
        return {
            faculty: db.faculties[params.slug],
            dbTags: db.tags
        }
    }

    return {
        status: res.status,
        error: new Error('Could not fetch the links')
    }
}