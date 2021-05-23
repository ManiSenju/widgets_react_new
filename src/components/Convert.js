import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Convert = ({language,text})=>{
    const [translated,setTranslated] = useState('');
    const [debounceText,setDebounceText] = useState(text);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebounceText(text);
        },500)

        return ()=>{
            clearTimeout(timerId);  
        }

    },[text])

    useEffect(()=>{

        const doTranslation = async ()=>{
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2",{},{
                params:{
                    q:debounceText,
                    target:language.value,
                    format:"text",
                    key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            })
            setTranslated(data.data.translations[0].translatedText);
        }
        debounceText && doTranslation();

    },[debounceText,language]);

    return <div><h1 className="ui header">{translated}</h1></div>
}


export default Convert;