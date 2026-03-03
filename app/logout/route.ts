// Update redirect base to use request.url (no localhost hardcode)
export function logoutRedirect(request) {
    return { redirect: request.url };
}