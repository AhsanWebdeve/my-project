export default function Lists() {
    const InvoiceData =[{description: "Invoice Template" , heading: true   }, {description: "Invoice 1"},{description: "Invoice 2"},{description: "Invoice 3"},{description: "Invoice 4"},{description: "Invoice 5"}]
    const emailData = [{description: "Elements", heading: true},{description: "Element page", icon: true},{description: "Email Template"},{description:"welcome"},{description:"Announcement"},{description:"Abandonment"},{description:" Offer"},{description:" Offer2"},{description:"Review"},{description:" Featured Product"}]
    const emailData2 =[{description:"Email Template" , heading: true},{description:"Black Friday"},{description:" Christmas"},{description:"Cyber-Monday"},{description:"Flash Sale"},{description:"Order Success"},{description:"Order Success2"}]
    const cookiebarData = [{description:"Cookie Bar" , heading: true},{description:"Bottom", icon: true},{description:"Bottom Left"},{description:"Bottom Right"},{description:" Search"},{description:"Ajax Search", icon: true}]
    const modelData = [{description:"Model", heading: true},{description:" Newsletter"},{description:"Exit", icon: true},{description:"Christmas"},{description:" Black Friday"},{description:"Cyber Monday"},{description:"New Year"}]
    const addtocartData = [{description:"Add To Cart" , heading: true},{description:"Cart Modal Popup"},{description:"Qty. Counter", icon: true},{description:"Cart Top"},{description:"Cart Bottom"},{description:"Cart Left"},{description:"Cart right"}]
    return (
<div className="feature-lists-container">
        <ul>{InvoiceData.map((item)=> <li className={item.heading ? "heading-li" : ""}>{item.description} {!item.heading ? <div className="li-line"></div> : null}</li>)}</ul>
        <ul>{emailData.map((item)=> <li className={item.heading ? "heading-li" : ""}>{item.description}{item.icon ? <i class="fa-solid fa-bolt"></i>: " "} {!item.heading ? <div className="li-line"></div> : null} </li>)}</ul>
        <ul>{emailData2.map((item)=> <li className={item.heading ? "heading-li" : ""}>{item.description} {!item.heading ? <div className="li-line"></div> : null}</li>)}</ul>
        <ul>{cookiebarData.map((item)=> <li className={item.heading ? "heading-li" : ""}>{item.description} {item.icon ? <i class="fa-solid fa-bolt"></i>: " "} {!item.heading ? <div className="li-line"></div> : null}</li>)}</ul>
        <ul>{modelData.map((item)=> <li className={item.heading ? "heading-li" : ""}>{item.description} {item.icon ? <i class="fa-solid fa-bolt"></i>: " "} {!item.heading ? <div className="li-line"></div> : null}</li>)}</ul>
        <ul>{addtocartData.map((item)=> <li className={item.heading ? "heading-li" : ""}>{item.description} {item.icon ? <i class="fa-solid fa-bolt"></i>: " "} {!item.heading ? <div className="li-line"></div> : null}</li>)}</ul>
    
</div>
)
}
