import DevisHeader from "./Devis-header";

function MailSender(props) {
     const mailOptions = {
      from: "abelgheddouche@gmail.com",
      to: "abelgheddouche@yahoo.fr",
      subject: "Subject of your email",
      html: "<p>Ci joint votre devis</p>",
      attachments:[{   // utf-8 string as an attachment
        filename: 'text1.pdf',
        content: 'Votre Devis Ici'
    }],
};
    function handleClick() {
        console.log('send');
       window.api.sendMsg(mailOptions);
    }
return (<button className='btn' onClick={() => handleClick()}>send Mail</button>)
}

export default MailSender;