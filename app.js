const App = props => {
    const [teams, setTeams] = React.useState([
        {
            id: 1,
            country: {
                name: "Norway",
                flag: "https://www.countryflags.io/NO/shiny/64.png"
            },
            members: [
                {
                    id: 1,
                    firstName: "Helge",
                    lastName: "Amundsen",
                    img: "https://randomuser.me/api/portraits/women/49.jpg"
                },
                {
                    id: 2,
                    firstName: "Floyd",
                    lastName: "Marshall",
                    img: "https://randomuser.me/api/portraits/men/12.jpg"
                },
                {
                    id: 3,
                    firstName: "Allie",
                    lastName: "Andrews",
                    img: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                {
                    id: 4,
                    firstName: "Cecilie",
                    lastName: "Jørgensen",
                    img: "https://randomuser.me/api/portraits/women/51.jpg"
                },
            ]
        },
        {
            id: 2,
            country: {
                name: "Spain",
                flag: "https://www.countryflags.io/ES/shiny/64.png"
            },
            members: [
                {
                    id: 5,
                    firstName: "Eugenio",
                    lastName: "Benitez",
                    img: "https://randomuser.me/api/portraits/men/49.jpg"
                },
                {
                    id: 6,
                    firstName: "Audrey",
                    lastName: "Armstrong",
                    img: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                {
                    id: 7,
                    firstName: "Georgia",
                    lastName: "Martin",
                    img: "https://randomuser.me/api/portraits/women/22.jpg"
                },
                {
                    id: 8,
                    firstName: "Isaac",
                    lastName: "Ramirez",
                    img: "https://randomuser.me/api/portraits/men/51.jpg"
                },
            ]
        },
        {
            id: 3,
            country: {
                name: "Canada",
                flag: "https://www.countryflags.io/CA/shiny/64.png"
            },
            members: [
                {
                    id: 9,
                    firstName: "Leanne",
                    lastName: "Ennis",
                    img: "https://randomuser.me/api/portraits/women/11.jpg"
                },
                {
                    id: 10,
                    firstName: "Desiree",
                    lastName: "Sand",
                    img: "https://randomuser.me/api/portraits/women/19.jpg"
                },
                {
                    id: 11,
                    firstName: "Marshall",
                    lastName: "Butler",
                    img: "https://randomuser.me/api/portraits/men/3.jpg"
                },
                {
                    id: 12,
                    firstName: "Carter",
                    lastName: "Mcdonald",
                    img: "https://randomuser.me/api/portraits/men/53.jpg"
                },
            ]
        },
    ])
    const [selectedTeamMember, setSelectedTeamMember] = React.useState(null);
    const allTeamMembers = teams.flatMap(team => [...team.members]);

    const selectTeamMember = (e) => {
        setSelectedTeamMember(+e.target.value);
    }
    const removeTeamMember = () => {
        if (selectedTeamMember) {
            const updatedTeams = teams
                .map(team => ({
                    id: team.id,
                    country: team.country,
                    members: team.members.filter(member => member.id !== selectedTeamMember)
                }));
            setTeams(updatedTeams);
            setSelectedTeamMember(null);
        }
    }
    return (
        <React.Fragment>
            <h3>Teams</h3>
            <div className="injured">
                <select id="member-list" defaultValue="" onChange={selectTeamMember}>
                    <option value="">Select a member...</option>
                    {
                        allTeamMembers.map(member => (
                            <option key={member.id} value={member.id}>{member.firstName} {member.lastName}</option>
                        ))
                    }
                </select>
                <button onClick={removeTeamMember}>Injured</button>
            </div>
            {
                // only show teams with more than one "active" member
                teams.map(team => team.members.length > 1 && <Team key={team.id} team={team} />
                )
            }
            <audio id="bronze" src="sounds/bronze.mp3"></audio>
            <audio id="silver" src="sounds/silver.mp3"></audio>
            <audio id="gold" src="sounds/gold.mp3"></audio>
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
