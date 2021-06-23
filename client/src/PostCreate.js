import React, { useState } from 'react'
import axios from "axios"
const PostCreate = () => {
    const [title, setTitle] = useState("");

    const [postTitle, setPostTitle] = useState("");

    const submitPost = async(event) => {

        event.preventDefault();

        await axios.post("http://localhost:4000/posts", {

            title

        })

        setPostTitle(title)
        
        setTitle("");

    }
    return (
        <div>
            <form onSubmit = {submitPost}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange = {e => setTitle(e.target.value)} className="form-control" />
                </div>
                <button className = "btn btn-primary my-4">Submit</button>
            </form>
            {postTitle ? <p className="my-3">Weldone, you just created a post with the title: <h5>{postTitle}</h5> </p> : null}
            
        </div>
    )
}

export default PostCreate
