import React,{useState,useEffect} from 'react';

const url="http://gateway.marvel.com/v1/public/characters?limit=100ts=1&apikey=07ebaf36d95728b8183def7844d73f65&hash=a3f3703281020deb2224463dda326ab2"; 

const CharacterList=()=>{
    const [state, setstate] = useState({characters:[]});
    useEffect(() => {
        fetch(url).then(res=>res.json()).then(ans=>console.log(ans)).catch(err=>console.log(err));
    }, []);

    return(
        <h2>Character List</h2>
    );
};

export default CharacterList;