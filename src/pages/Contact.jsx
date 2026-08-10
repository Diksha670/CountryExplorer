export const Contact=()=>{
    const handleFormData=(formdata)=>{
             const data=Object.fromEntries(formdata);
             console.log(data);
    }
    return (
        <section className="section-contact">
           <h2 className="container-title">Contact Us</h2>

           <div className="contact-wrapper container">
           
            <form action={handleFormData}>

            <input type="text"
            className="form-control" 
            name="userName"
            placeholder="Enter your name"
            autoComplete="off"
            required/><br></br>
           
            <input type="email"
            className="form-control" 
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
            required/><br></br>

            <textarea 
            className="form-control" 
            rows='7'
            name="message"
            placeholder="Enter your message"
            autoComplete="off"
            required/><br></br>

            <button className="sendBtn">Send</button>
           </form>
           
           </div>
           
        </section>
    )
}