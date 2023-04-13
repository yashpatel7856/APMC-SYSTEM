import React from 'react'
import jsPDF from 'jspdf'

const BillComponent = (props) => {
    const {buyer,date,farmer,price,stock,vegname}=props
    const billGenerate = () => {
            var doc = new jsPDF('p', 'pt');
        
            doc.addFont('helvetica', 'normal')
        
            doc.text(20, 20, `Bill Id :${props.element.id} `)
            doc.text(20, 60, `Date : ${props.element.date}`)
            doc.text(20, 100, `Farmer : ${props.element.farmer}`)
            doc.text(20, 140, `Veg name :  ${props.element.vegname}`)
            doc.text(20, 180, `Veg weight(kg) :  ${props.element.stock}`)
            doc.text(20, 220, `Veg quote(/kg) : ${props.element.price}`)
            doc.text(20, 260, `Total :  ${props.element.price*props.element.stock}`)
        
            doc.save('Bill.pdf')
        
        }
        console.log("bill compo",props)
    return (
        <>
            <th id="billid" scope="row">{props.element.id}</th>
            <td id="date">{props.element.date}</td>
            <td id="brokerid">{props.element.farmer}</td>
            <td id="vegname">{props.element.vegname}</td>
            <td id="vegweight">{props.element.stock}</td>
            <td id="vegweight">{props.element.price}</td>
            <td id="vegweight">{props.element.stock*props.element.price}</td>
            <td id='status'>paid</td>
    <td id='btn'><button onClick={billGenerate}>Bill</button></td></> 
    )
}

export default BillComponent