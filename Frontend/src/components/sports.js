import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Formik, Field } from 'formik';
import React from 'react';
// import Moment from 'react-moment';

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


//   const [comentarios, setComentarios] = useState([])

//   async function fetchComentarios() {
//     const res = await fetch(`/api/livros/${params.id}/comentarios`)
//     const resBody = await res.json();
//     setComentarios(resBody.comentarios)
//   }
//   useEffect(() => {
//     fetchComentarios()
//   }, [])

    return (
      <div >
        <div >
            <p>{sport.name}</p>

          {/* <button className={styles.favorito} onClick={
            livro.lido ?
              async () => {
                await removeChecklist(livro._id)
                await fetchLivro(params.id)
              }
              :
              async () => {
                await addChecklist(livro._id)
                await fetchLivro(params.id)
              }} >{livro.lido ? <BiListCheck size={25} /> : <BiListPlus size={25} />}
            {livro.lido ? 'Remover da Checklist' : 'Adicionar à Checklist'}

          </button> */}
          {/* <Comentarios comentarios={comentarios} id={sport._id} />
          <AddComentario onAdd={async () => await fetchComentarios()} id={livro._id} /> */}
        </div>
      </div>
    )

    
}
// async function addChecklist(id) {
//   return await fetch(`/api/livros/${id}/checklist`, {
//     method: "POST",
//     body: JSON.stringify(),
//     headers: { "Content-Type": "application/json" }
//   })
// }
// async function removeChecklist(id) {
//   return await fetch(`/api/livros/${id}/checklist`, {
//     method: "DELETE",
//     body: JSON.stringify(),
//     headers: { "Content-Type": "application/json" }
//   })
// }


// async function addWishlist(id) {
//   return await fetch(`/api/livros/${id}/wishlist`, {
//     method: "POST",
//     body: JSON.stringify(),
//     headers: { "Content-Type": "application/json" }
//   })
// }

// async function removeWishlist(id) {
//   return await fetch(`/api/livros/${id}/wishlist`, {
//     method: "DELETE",
//     body: JSON.stringify(),
//     headers: { "Content-Type": "application/json" }
//   })
// }


// function Comentarios({ id, comentarios }) {
//   return (
//     <>
//       <h2>Comentários</h2>
//       <div className={styles.comentarios}>
//         {
//           comentarios.map(comentario => (
//             <div
//               className={styles.comentario}
//               key={comentario._id}
//             >
//               <p className={styles.boxComentario}>{comentario.comentario} </p>
//               <p className={styles.boxData}><Moment date={comentario.date} format="DD/MM/YYYY" /></p>
//             </div>
//           ))
//         }
//       </div>
//     </>

//   )
// }


// function AddComentario({ id, onAdd }) {
//   const history = useHistory()

//   return (
//     <>
//       <div className={styles.commentsInput}>
//         <Formik
//           initialValues={{ comentario: '' }}


//           onSubmit={async (values, { resetForm }) => {
//             const res = await fetch(`/api/livros/${id}/comentarios`, {
//               method: "POST",
//               body: JSON.stringify(values),
//               headers: { "Content-Type": "application/json" }
//             })
//             if (res.status === 201) {
//               await onAdd()
//               resetForm()
//             }
//           }}
//         >
//           {
//             ({ handleSubmit, touched, errors }) => (
//               <form className={styles.placeholder} onSubmit={handleSubmit}>
//                 <Field className={styles.caixaComentario}
//                   label="Comentario"
//                   type="text"
//                   name="comentario"
//                   placeholder="Escreva aqui o seu comentário"
//                 /><br></br>

//                 <button variant="primary" type="submit">Submeter</button>
//               </form>
//             )
//           }
//         </Formik>
//       </div>
//     </>
//   )

// }



export default Sports;