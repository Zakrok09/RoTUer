import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const res = await fetch('https://raw.githubusercontent.com/Zakrok09/RoTUer/data-branch/dashboard.json');
    const database = await res.json();
    if (res.ok) {
        return {
            faculty: db.faculties[params.slug],
            dbTags: db.tags,
            dbPrgmTags: db.programmesTags
        }
    }
 
    throw error(404, 'Not found');
}