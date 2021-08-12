const Team = props => {
    const { country, members } = props.team;
    const [bronze, setBronze] = React.useState(0);
    const [silver, setSilver] = React.useState(0);
    const [gold, setGold] = React.useState(0);
    const [teamStyle, setTeamStyle] = React.useState({
        backgroundColor: 'lightblue'
    });

    const addBronze = () => {
        const updatedBronze = bronze + 1;
        setBronze(updatedBronze);

        // const audio = document.querySelector('audio#bronze');
        // audio.play();
        // if bronze is the largest number
        if (updatedBronze > silver && updatedBronze > gold) {
            // change background color to bronze
            setTeamStyle({
                backgroundColor: '#8c7853'
            });
        }
    }
    const addSilver = () => {
        const updatedSilver = silver + 1;
        setSilver(updatedSilver);

        // const audio = document.querySelector('audio#silver');
        // audio.play();
        // if silver is the largest number
        if (updatedSilver > bronze && updatedSilver > gold) {
            // change background color to silver
            setTeamStyle({
                backgroundColor: 'silver'
            });
        }
    }
    const addGold = () => {
        const updatedGold = gold + 1;
        setGold(updatedGold);

        // const audio = document.querySelector('audio#gold');
        // audio.play();
        // if gold is the largest number
        if (updatedGold > bronze && updatedGold > silver) {
            // change background color to gold
            setTeamStyle({
                backgroundColor: 'gold'
            });
        }
    }
    return (
        <div className="team" style={teamStyle}>
            <div className="country">
                <img src={country.flag} alt={`flag of ${country.name}`} />
                <p><strong>{country.name}</strong></p>
            </div>
            <div className="members">
                {
                    members.map(member => (
                        <TeamMember key={member.id} member={member} />
                    ))
                }
            </div>
            <div className="medals">
                <div>
                    <p>{bronze}</p>
                    <button id="bronze" type="button" onClick={addBronze}>Bronze++</button>
                </div>
                <div>
                    <p>{silver}</p>
                    <button id="silver" type="button" onClick={addSilver}>Silver++</button>
                </div>
                <div>
                    <p>{gold}</p>
                    <button id="gold" type="button" onClick={addGold}>Gold++</button>
                </div>
            </div>
        </div>
    );
}
