/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
    let imena = [];
    let i;
    for (i = 0; i < users.length; ++i) {
        imena.push(users[i].name);
    }
    return imena;
}
