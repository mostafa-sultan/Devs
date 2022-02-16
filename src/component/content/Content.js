import React, { useState, useEffect } from 'react'
import './Content.css';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

// ![image info](https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg)
const Content = (props) => {
  const history = useNavigate();

  const [data, setData] = useState('# loading ...');
  const [content, setContent] = useState(window.location.hash.split("/")[2]);
  // console.log(useParams().content);

  useEffect(() => {
     setContent(window.location.hash.split("/")[2]);
    // console.log(window.location.hash.split("/")[2]);
    const contentLink = "https://raw.githubusercontent.com/mostafa-sultan/slums/main/data/images/md/" + content
    axios.get(contentLink)
      .then(function (response) {
        setData(String(response.data));
      })
      .catch(function (error) {
        console.log(error);
      }, [history]);

    console.log("data2")

  });
  return (
    <>

      <div>
        <ReactMarkdown>
          {data}
          {/* {data[0].cont} */}
          {/* {row} */}
        </ReactMarkdown>

      </div>


    </>
  );
}

export default Content;
