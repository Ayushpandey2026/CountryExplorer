export const Contact=()=>{

    const handleFormSubmit=(formData)=>{
        console.log(formData.entries());
        
        const data =Object.fromEntries(formData.entries());
        console.log(data);
        
    }

    return(
        <section className="section-contact">
            <h1 className="container-title">
                Contact Us
            </h1>
            <div className="contact-wrapper container">

                <form action={handleFormSubmit} >

            <input type="text"
            placeholder="Enter Your Name"
            autoComplete="off"
            name="username"
             />
             <input type="email" 
             name="email"
              id="email" 
              className="form-control"
              placeholder="Enter Your Email"
              />
              <input type="text"
              placeholder="Enter Your Message"
              rows="10"
              name="message"
              className="form-control"
               />
               <button type="submit" value="send">Send</button>
               </form>
               </div>
        </section>
    )
}