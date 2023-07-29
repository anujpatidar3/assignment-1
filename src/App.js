import './App.css';
import React, { useState } from 'react';
import Comment from './Comment/comment'

function App() {

  const [comments, setComments] = useState([
    {
      pic: 'https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg',
      name: 'Anuj Patidar',
      content: 'How dare he do that!! so rude',
      replies: [
        {
          pic: 'https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg',
          name: 'Anuj Patidar',
          content: 'How dare he do that!! so rude',
          replies: [
            {
              pic: 'https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg',
              name: 'Anuj Patidar',
              content: 'How dare he do that!! so rude',
              replies: []
            }
          ]
        }
      ]
    },
    {
      pic: 'https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg',
      name: 'Anuj Patidar 2',
      content: 'How dare he do that!! so rude 2',
      replies: []
    },
    {
      pic: 'https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg',
      name: 'Anuj Patidar 3',
      content: 'How dare he do that!! so rude 3',
      replies: []
    }
  ])

  return (
    <div className="App">
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default App;
