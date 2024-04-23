//will contain the code for each card with layout and style



function FAQcard({question, answer}) {
  return (
    <>
        <div className=''> </div>
            <div style={{ border: '2px solid #000', borderRadius: '10px', padding: '10px' }}>
           <h1>{question}</h1>
            <p>{answer}</p>
           </div>
    </>
  )
}

export default FAQcard




  