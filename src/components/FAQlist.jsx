//will contain all of the cards with font, 

import FAQcard from "./FAQcard";

function FAQ() {
  //create an array 
 let item = [
    {question: "Yes",
      answer: "No"
    }, {
        question: "Look again",
        answer: "maybe"
    }, {
      question: "ask again",
      answer: "Not really"
    },  
   ]; 

  return (
    <div>
      {item.map((ques) => {
      return <FAQcard question={ques.question} answer={ques.answer} />
    }) }
    </div>
  )
};

export default FAQ
