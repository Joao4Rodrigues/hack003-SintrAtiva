import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Field } from 'formik';
import React from 'react';
import Moment from 'react-moment';
import '../css/sports.css';
import * as FiIcons from "react-icons/fi";
import { RiHeartAddFill } from "@react-icons/all-files/ri/RiHeartAddFill";

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
           
          
        <h2>Feed de {sport.name}</h2> <button className='favIcon'><RiHeartAddFill size={25}/></button>
          <br />
            {/* <p>{sport.name} - tentei meter aqui um ícone relacionado com o desporto escolhido, mas não consegui</p>
            <h2>Comentários - e se em vez de comentários fosse publicações?</h2> */}
          <AddComment onAdd={async () => await fetchComments()} id={sport._id} />
          <br />
          <Comments comments={comments} id={sport._id} />
          
      </div>
    )

    
}


function Comments({ id, comments }) {
  return (
    <>
      {/* <h2>Comentários - e se em vez de comentários fosse publicações?</h2> - ideia: passar isto para a função de cima para ser renderizado antes do input de texto */}
      <div >
        {
          comments.map(comment => (
            <div
              className='commentsDiv'
              key={comment._id}
            >
              <p >{comment.comment} - <Moment date={comment.date} format="DD/MM/YYYY" /></p>
            </div>
          ))
        }
      </div>
      <br />
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
                  placeholder="Escreva aqui o seu comentário/publicação?"
                />

                <button className='submitButton' variant="primary" type="submit"><FiIcons.FiSend /> Submeter</button>
              </form>
            )
          }
        </Formik>
      </div>
    </>
  )
}





export default Sports;