import React from 'react';

const ProfilePage = () => {
    const user = {
        name: "Sneha",
        email: "sneha@example.com",
        bio: "Frontend Developer passionate about creating beautiful and functional user interfaces.",
        avatar: "https://via.placeholder.com/150"
    };

    return (
        <div style={styles.container}>
            <img src={user.avatar} alt="Profile" style={styles.avatar} />
            <h1 style={styles.name}>{user.name}</h1>
            <p style={styles.email}>{user.email}</p>
            <p style={styles.bio}>{user.bio}</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    avatar: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginBottom: '20px',
    },
    name: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    email: {
        fontSize: '16px',
        color: 'gray',
        margin: '5px 0',
    },
    bio: {
        fontSize: '14px',
        color: '#555',
    },
};

export default ProfilePage;