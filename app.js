const github = new Githubprofile();
const Profile = new UI();
const search = document.getElementById("SearchUser");
search.addEventListener("keyup", (e) => {
    const valuecheck = e.target.value;
    if (valuecheck !== "") {

        github.getuser(valuecheck).then((data) => {
            if (data.profile.message === "Not Found") {
                Profile.showAlert("User not Found", "alert alert-warning");

            } else {
                Profile.showProfile(data.profile);
                Profile.showRepos(data.repos);

            }
        })
    } else {
        Profile.clearprofile();
    }
})


// const h = new prithwish();
// h.printfunction("Prithwish is a stud");