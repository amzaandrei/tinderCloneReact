import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../firebase"

function TinderCards() {

    ///the same as 
    ///const people = [];

    ///nono
    ///people = people.push("abc")
    ///but
    ///setState([...people, "abc","abc2"])
    ///setState e ca si un modifier pt people
    ///prin metoda asta dupa ce observa o change la people.count => rerender screen

    const [people, setPeople] = useState([
        {
            name: "steve jobs",
            url: "https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs-1440x960.jpg"
        },
        {
            name: "andrei amza",
            url: "https://www.gstatic.com/tv/thumb/persons/476283/476283_v9_ba.jpg"
        }
    ]);
    
    ///piece of code which runs based of a condition
    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot((snapshot) => (
            setPeople(snapshot.docs.map(docs => docs.data()))
        ))

        return () => {
            ///when it's done listening for people changing
            unsubscribe();
        }

    }, [people]);

    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard 
                className="swipe" 
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
