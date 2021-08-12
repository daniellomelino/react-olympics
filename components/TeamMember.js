const TeamMember = props => {
    const { firstName, lastName, img } = props.member;
    return (
        <div className="member">
            <ul>
                <li>
                    <img src={img} />
                    <p>{firstName} {lastName}</p>
                </li>
            </ul>
        </div>
    );
}
