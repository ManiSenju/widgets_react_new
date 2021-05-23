import axios from 'axios';
import React,{useState,useEffect} from 'react';


const Search =() =>{
    const[term,setTerm] = useState('sea');
    const[debounceTerm,setDebounceTerm] = useState(term);
    const[results , setResults] = useState([]);


    useEffect(()=>{

        const timerId = setTimeout(()=>{
            setDebounceTerm(term);
        },500)

        return ()=>{
            clearTimeout(timerId);  
        }

    },[term]);

    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
               params:{
                    action:"query",
                    list:"search",
                    origin:"*",
                    format:"json",
                    srsearch:debounceTerm
               }
           })
           setResults(data.query.search);
        }
        debounceTerm && search();

    },[debounceTerm])

    // useEffect(()=>{
    //     const search = async ()=>{
    //          const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
    //             params:{
    //                  action:"query",
    //                  list:"search",
    //                  origin:"*",
    //                  format:"json",
    //                  srsearch:term
    //             }
    //         })
    //         setResults(data.query.search);
    //     }
    //     const timeId = setTimeout(()=>{
    //         term && search();
    //     },500);

    //     return()=>{
    //         clearTimeout(timeId);
    //     }
        

    // },[term])

    const renderedItemsList = results.map((res)=>{
            return (
            <div className="item" key={res.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${res.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">{res.title}</div>
                    <span dangerouslySetInnerHTML={{__html:res.snippet}}></span>
                </div>
            </div>)
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={(e)=>setTerm(e.target.value)}type="text" className="input"/>

                </div>
            </div>
            <div className="ui celled list">{renderedItemsList}</div>
        </div>
    )
}
export default Search