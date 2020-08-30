class Githubprofile {
    constructor() {
        this.client_id = "78901d4ae52c50b83e6e";
        this.client_secret = "a1ad07ec587ad28c56988eed9115e26468eebbb9";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getuser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }

    }

}