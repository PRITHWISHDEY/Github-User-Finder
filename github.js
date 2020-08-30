class Githubprofile {
    constructor() {
        this.client_id = "78901d4ae52c50b83e6e";
        this.client_secret = "a1ad07ec587ad28c56988eed9115e26468eebbb9";
    }
    async getuser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return (
            profile
        )

    }

}
console.log("fuck you");


// class prithwish {
//     constructor() {

//     }

//     printfunction(x) {
//         console.log(x);
//     }
// }