import { error } from '@sveltejs/kit';
 
const options = {method: 'GET'};

export async function load({ fetch }) {
    const facultyRes = await fetch('http://localhost:1337/api/faculties/?filters%5BfacultyTag%5D%5B%24eq%5D=common', options);
    const programmeRes = await fetch('http://localhost:1337/api/faculties?filters[facultyTag][$eq]=common&fields[0]=name&populate[1]=programmes&populate[2]=programmes.links&populate[3]=programmes.links.tags', options);
    const facultiesRes = await fetch('http://localhost:1337/api/faculties' , options)
    const faculty = await facultyRes.json();
    const programmes = await programmeRes.json();
    const faculties = await facultiesRes.json()
    if (facultyRes.ok && programmeRes.ok && facultiesRes.ok) {
        return {
            faculty: faculty.data[0],
            programmes: programmes.data[0].attributes.programmes.data,
            faculties: faculties.data
        }
    }

    return {
        status: facultyRes.status,
        error: new Error('Could not fetch the links')
    }
}