import React,{useState,useEffect} from 'react';
import {Accordion, Card} from "react-bootstrap";
import CharacterDetail from './characterDetail';

const CharacterList=()=>{
    const url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=07ebaf36d95728b8183def7844d73f65&hash=a3f3703281020deb2224463dda326ab2"; 
    const [state, setstate] = useState({characters:[]});
    useEffect(() => {
        fetch(url).then(res=>res.json()).then(ans=>{
            if(!navigator.onLine)
            {
                let info=localStorage.getItem("characters");
                if(info !== null)
                {
                    setstate({characters:info});
                }
            }
            else
            {
                localStorage.setItem("characters",JSON.stringify(ans.data.results));
                setstate({characters:ans.data.results});
            }
        }).catch(err=>console.log(err));
    }, []);

    const render=()=>{
        if(state.characters.length===0)
        {
            return(<h2>Loading ... :P</h2>);
        }
        else
        {
            return(
                <Accordion>
                    {state.characters.map(c=>(
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey={c.id}>
                                    {c.name}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={c.id}>
                                <CharacterDetail info={c} key={c.id}/>
                            </Accordion.Collapse>
                        </Card>                    
                    ))}
                </Accordion>
            );
        }
    };

    return(
        <div>
            <h2>Character List</h2>
            {render()}           
        </div>        
    );
};

export default CharacterList;