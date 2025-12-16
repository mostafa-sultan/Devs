import React, { useState, useEffect } from 'react'
import './Content.css';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Content = () => {
  const { content } = useParams();
  const [data, setData] = useState('# Loading...');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!content) {
      setError('No content specified');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    const contentLink = `https://raw.githubusercontent.com/mostafa-sultan/slums/refs/heads/main/data/${content}`;
    
    axios.get(contentLink)
      .then(function (response) {
        setData(String(response.data));
        setLoading(false);
      })
      .catch(function (error) {
        console.error('Error loading content:', error);
        setError('Failed to load content. Please try again later.');
        setData('# Error loading content');
        setLoading(false);
      });
  }, [content]);

  if (loading) {
    return (
      <div className="content-loading">
        <h2>Loading content...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <ReactMarkdown className="markdown-content">
        {data}
      </ReactMarkdown>
    </div>
  );
}

export default Content;
