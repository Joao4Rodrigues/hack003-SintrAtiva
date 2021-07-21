import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Field } from 'formik';
import React from 'react';
import Moment from 'react-moment';
import '../css/sports.css';

function Sports() {
  const params = useParams();

  const [sport, setSport] = useState(false)


  const fetchSport = async (id) => {
    if (!id) return
    try {
      const res = await fetch(`/api/sport/${id}`)
      if (res.status === 200) {
        const resObj = await res.json();
        setSport(resObj.sport)
      } 
    } catch (err) {
    }
  }
  useEffect(() => {
    fetchSport(params.id)
  }, [params])

  const [comments, setComments] = useState([])

  async function fetchComments() {
    const res = await fetch(`/api/sports/${params.id}/comments`)
    const resBody = await res.json();
    setComments(resBody.comments)
  }
  useEffect(() => {
    fetchComments()
  }, [])


    return (
        <div className={`${sport.name}-container`}>

        <h2>Feed de {sport.name}</h2>
            <p>{sport.name}</p>

          
          <Comments comments={comments} id={sport._id} />
          <AddComment onAdd={async () => await fetchComments()} id={sport._id} />
      </div>
    )

    
}


function Comments({ id, comments }) {
  return (
    <>
      <h2>Comentários</h2>
      <div >
        {
          comments.map(comment => (
            <div
              key={comment._id}
            >
              <p >{comment.comment} </p>
              <p ><Moment date={comment.date} format="DD/MM/YYYY" /></p>
            </div>
          ))
        }
      </div>
    </>

  )
}


function AddComment({ id, onAdd }) {
  const history = useHistory()

  return (
    <>
      <div >
        <Formik
          initialValues={{ comment: '' }}


          onSubmit={async (values, { resetForm }) => {
            const res = await fetch(`/api/sports/${id}/comments`, {
              method: "POST",
              body: JSON.stringify(values),
              headers: { "Content-Type": "application/json" }
            })
            if (res.status === 201) {
              await onAdd()
              resetForm()
            }
          }}
        >
          {
            ({ handleSubmit, touched, errors }) => (
              <form onSubmit={handleSubmit}>
                <Field 
                  label="Comment"
                  type="text"
                  name="comment"
                  placeholder="Escreva aqui o seu comentário"
                /><br></br>

                <button variant="primary" type="submit">Submeter</button>
              </form>
            )
          }
        </Formik>
      </div>
    </>
  )

}



export default Sports;