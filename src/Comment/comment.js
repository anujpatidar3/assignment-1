import React, { useState } from "react";

const Comment = ({ comment }) => {
    const { pic, name, content, replies } = comment;
    const [showReplyForm, setShowReplyForm] = useState(false)
    const [replyContent, setReplyContent] = useState("")

    const handleReplyButton = () => {
        setShowReplyForm(!showReplyForm)
    }

    const handleReplyContentChange = (e) => {
        setReplyContent(e.target.value)
    }

    const handleReplySubmit = (e) => {
        setReplyContent('')
        setShowReplyForm(false)
    }

    return (
        <div className="comment">
            <div className="comment-attributes">
                <img src={pic} alt="Profile pic" className="profile-pic" width="20px" height="20px" />
                <div className='comment-text'>
                    <span className='name'>{name}</span>
                    <span className='reply'>{content}</span>
                </div>
            </div>
            <div className='buttons'>
                <button type='button' className='media-button'>Like</button>
                <button type='button' className='media-button' onClick={handleReplyButton}>Reply</button>
                {
                    showReplyForm && (
                        <form onSubmit={handleReplySubmit} className="reply-form">
                            <textarea placeholder="Reply Here" onChange={handleReplyContentChange} value={replyContent} />
                        </form>
                    )
                }
            </div>

            {replies && replies.length > 0 && (
                <div className="replies">
                    {replies.map((reply, index) => (
                        <Comment key={index} comment={reply} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Comment;